/**
 * Computational Geometry Engine
 * Implementations of:
 * 1. Convex Hull via Graham Scan Algorithm (O(n log n))
 * 2. Shoelace Polygon Area & Perimeter Calculation
 * 3. Closest Pair of 2D Points
 */

export type Point2D = {
  id: number;
  x: number;
  y: number;
};

/**
 * Orientation test of triplet (p, q, r):
 * Returns:
 *  0 -> Collinear
 *  1 -> Clockwise turn
 *  2 -> Counter-clockwise turn
 */
export function orientation(p: Point2D, q: Point2D, r: Point2D): 0 | 1 | 2 {
  const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  if (Math.abs(val) < 1e-9) return 0; // collinear
  return val > 0 ? 1 : 2; // 1 = clockwise, 2 = counter-clockwise
}

export function distSq(p1: Point2D, p2: Point2D): number {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
}

export type GrahamScanStep = {
  step: number;
  stackSnapshot: Point2D[];
  currentPoint: Point2D;
  action: "push" | "pop" | "inspect";
  reason: string;
};

export type ConvexHullResult = {
  hull: Point2D[];
  steps: GrahamScanStep[];
  perimeter: number;
  area: number;
};

/**
 * Graham Scan Convex Hull Algorithm with step trace
 */
export function convexHullGrahamScan(points: Point2D[]): ConvexHullResult {
  const n = points.length;
  if (n < 3) {
    return { hull: [...points], steps: [], perimeter: 0, area: 0 };
  }

  // 1. Find the bottom-most point (lowest y), break ties by leftmost (lowest x)
  let ymin = points[0].y;
  let minIdx = 0;
  for (let i = 1; i < n; i++) {
    const y = points[i].y;
    if (y < ymin || (y === ymin && points[i].x < points[minIdx].x)) {
      ymin = y;
      minIdx = i;
    }
  }

  // Place pivot at index 0
  const sorted = [...points];
  [sorted[0], sorted[minIdx]] = [sorted[minIdx], sorted[0]];
  const p0 = sorted[0];

  // 2. Sort remaining n-1 points by polar angle with p0
  sorted.sort((p1, p2) => {
    if (p1 === p0) return -1;
    if (p2 === p0) return 1;

    const o = orientation(p0, p1, p2);
    if (o === 0) {
      return distSq(p0, p2) >= distSq(p0, p1) ? -1 : 1;
    }
    return o === 2 ? -1 : 1; // 2 = counter-clockwise
  });

  const steps: GrahamScanStep[] = [];
  let stepNum = 1;

  // 3. Initialize stack with first 3 points
  const stack: Point2D[] = [sorted[0], sorted[1], sorted[2]];
  steps.push({
    step: stepNum++,
    stackSnapshot: [...stack],
    currentPoint: sorted[2],
    action: "push",
    reason: "Initial baseline triangle formed by pivot and first two polar points",
  });

  // 4. Process remaining points
  for (let i = 3; i < n; i++) {
    const pt = sorted[i];

    while (stack.length > 1 && orientation(stack[stack.length - 2], stack[stack.length - 1], pt) !== 2) {
      const popped = stack.pop()!;
      steps.push({
        step: stepNum++,
        stackSnapshot: [...stack],
        currentPoint: pt,
        action: "pop",
        reason: `Removed Point #${popped.id} because it creates a clockwise/collinear dent`,
      });
    }

    stack.push(pt);
    steps.push({
      step: stepNum++,
      stackSnapshot: [...stack],
      currentPoint: pt,
      action: "push",
      reason: `Added Point #${pt.id} forming valid counter-clockwise convex vertex`,
    });
  }

  // Calculate perimeter & area (Shoelace formula)
  let perimeter = 0;
  let areaSum = 0;
  for (let i = 0; i < stack.length; i++) {
    const j = (i + 1) % stack.length;
    perimeter += Math.sqrt(distSq(stack[i], stack[j]));
    areaSum += stack[i].x * stack[j].y - stack[j].x * stack[i].y;
  }
  const area = Math.abs(areaSum) / 2;

  return {
    hull: stack,
    steps,
    perimeter: Math.round(perimeter * 10) / 10,
    area: Math.round(area * 10) / 10,
  };
}

/**
 * Closest Pair of 2D Points
 */
export function findClosestPair(points: Point2D[]): {
  p1: Point2D;
  p2: Point2D;
  distance: number;
} | null {
  if (points.length < 2) return null;
  let minDist = Infinity;
  let pair: [Point2D, Point2D] = [points[0], points[1]];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const d = Math.sqrt(distSq(points[i], points[j]));
      if (d < minDist) {
        minDist = d;
        pair = [points[i], points[j]];
      }
    }
  }

  return {
    p1: pair[0],
    p2: pair[1],
    distance: Math.round(minDist * 100) / 100,
  };
}

