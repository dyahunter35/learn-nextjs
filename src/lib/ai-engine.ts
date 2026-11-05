/**
 * Artificial Intelligence Core Engine
 * Provides pure mathematical and algorithmic implementations of:
 * 1. A* Pathfinding (Search & Heuristics)
 * 2. Maze Generation (Recursive Backtracker)
 * 3. Minimax Game Tree & Alpha-Beta Pruning (Decision Theory & Adversarial Search)
 * 4. Perceptron & Single Layer Neural Classifier (Machine Learning & Optimization)
 * 5. K-Means Clustering (Unsupervised Learning)
 */

export type GridNode = {
  r: number;
  c: number;
  g: number;
  h: number;
  f: number;
  isWall: boolean;
  parent?: { r: number; c: number } | null;
};

export type HeuristicType = "manhattan" | "euclidean" | "chebyshev";

export function heuristic(
  r1: number,
  c1: number,
  r2: number,
  c2: number,
  type: HeuristicType = "manhattan"
): number {
  const dr = Math.abs(r1 - r2);
  const dc = Math.abs(c1 - c2);
  switch (type) {
    case "manhattan":
      return (dr + dc) * 10;
    case "euclidean":
      return Math.round(Math.sqrt(dr * dr + dc * dc) * 10);
    case "chebyshev":
      return Math.max(dr, dc) * 10;
  }
}

export type AStarStep = {
  type: "open" | "close" | "path";
  r: number;
  c: number;
  g: number;
  h: number;
  f: number;
};

export type AStarResult = {
  path: [number, number][];
  visitedOrder: [number, number][];
  steps: AStarStep[];
  success: boolean;
  cost: number;
};

/**
 * A* Pathfinding Search
 */
export function aStarSearch(
  rows: number,
  cols: number,
  start: [number, number],
  end: [number, number],
  walls: Set<string>,
  heuristicType: HeuristicType = "manhattan"
): AStarResult {
  const key = (r: number, c: number) => `${r},${c}`;
  const startKey = key(start[0], start[1]);
  const endKey = key(end[0], end[1]);

  if (walls.has(startKey) || walls.has(endKey)) {
    return { path: [], visitedOrder: [], steps: [], success: false, cost: 0 };
  }

  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();
  const parent = new Map<string, [number, number]>();
  const openSet = new Set<string>();
  const closedSet = new Set<string>();
  const visitedOrder: [number, number][] = [];
  const steps: AStarStep[] = [];

  gScore.set(startKey, 0);
  const initialH = heuristic(start[0], start[1], end[0], end[1], heuristicType);
  fScore.set(startKey, initialH);
  openSet.add(startKey);

  steps.push({
    type: "open",
    r: start[0],
    c: start[1],
    g: 0,
    h: initialH,
    f: initialH,
  });

  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1],  // Right
  ];

  while (openSet.size > 0) {
    // Find node in openSet with lowest fScore
    let currentKey = "";
    let minF = Infinity;
    for (const k of openSet) {
      const f = fScore.get(k) ?? Infinity;
      if (f < minF) {
        minF = f;
        currentKey = k;
      }
    }

    if (!currentKey) break;

    const [currR, currC] = currentKey.split(",").map(Number);

    if (currentKey === endKey) {
      // Reconstruct path
      const path: [number, number][] = [];
      let temp: [number, number] | undefined = [currR, currC];
      while (temp) {
        path.unshift(temp);
        temp = parent.get(key(temp[0], temp[1]));
      }
      return {
        path,
        visitedOrder,
        steps,
        success: true,
        cost: gScore.get(endKey) ?? 0,
      };
    }

    openSet.delete(currentKey);
    closedSet.add(currentKey);
    visitedOrder.push([currR, currC]);
    steps.push({
      type: "close",
      r: currR,
      c: currC,
      g: gScore.get(currentKey) ?? 0,
      h: heuristic(currR, currC, end[0], end[1], heuristicType),
      f: minF,
    });

    const currentG = gScore.get(currentKey) ?? 0;

    for (const [dr, dc] of directions) {
      const nr = currR + dr;
      const nc = currC + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

      const neighborKey = key(nr, nc);
      if (walls.has(neighborKey) || closedSet.has(neighborKey)) continue;

      const tentativeG = currentG + 10;
      const prevG = gScore.get(neighborKey) ?? Infinity;

      if (tentativeG < prevG) {
        parent.set(neighborKey, [currR, currC]);
        gScore.set(neighborKey, tentativeG);
        const h = heuristic(nr, nc, end[0], end[1], heuristicType);
        const f = tentativeG + h;
        fScore.set(neighborKey, f);

        if (!openSet.has(neighborKey)) {
          openSet.add(neighborKey);
          steps.push({
            type: "open",
            r: nr,
            c: nc,
            g: tentativeG,
            h,
            f,
          });
        }
      }
    }
  }

  return { path: [], visitedOrder, steps, success: false, cost: 0 };
}

/**
 * Generate a randomized perfect maze using Recursive Backtracker
 */
export function generateMaze(
  rows: number,
  cols: number,
  start: [number, number],
  end: [number, number]
): Set<string> {
  const walls = new Set<string>();

  // Fill entire grid with walls first
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      walls.add(`${r},${c}`);
    }
  }

  const visited = new Set<string>();
  const stack: [number, number][] = [];

  const startR = start[0] % 2 === 1 ? start[0] : Math.max(1, start[0] - 1);
  const startC = start[1] % 2 === 1 ? start[1] : Math.max(1, start[1] - 1);

  walls.delete(`${start[0]},${start[1]}`);
  walls.delete(`${end[0]},${end[1]}`);
  walls.delete(`${startR},${startC}`);
  visited.add(`${startR},${startC}`);
  stack.push([startR, startC]);

  const directions = [
    [-2, 0],
    [2, 0],
    [0, -2],
    [0, 2],
  ];

  while (stack.length > 0) {
    const [cr, cc] = stack[stack.length - 1];
    const neighbors: [number, number, number, number][] = [];

    for (const [dr, dc] of directions) {
      const nr = cr + dr;
      const nc = cc + dc;
      if (nr > 0 && nr < rows - 1 && nc > 0 && nc < cols - 1 && !visited.has(`${nr},${nc}`)) {
        neighbors.push([nr, nc, cr + dr / 2, cc + dc / 2]);
      }
    }

    if (neighbors.length > 0) {
      // Pick random unvisited neighbor
      const [nextR, nextC, wallR, wallC] =
        neighbors[Math.floor(Math.random() * neighbors.length)];
      walls.delete(`${wallR},${wallC}`);
      walls.delete(`${nextR},${nextC}`);
      visited.add(`${nextR},${nextC}`);
      stack.push([nextR, nextC]);
    } else {
      stack.pop();
    }
  }

  // Ensure start and end and neighbors are clear
  walls.delete(`${start[0]},${start[1]}`);
  walls.delete(`${end[0]},${end[1]}`);

  return walls;
}

// ============================================================================
// MINIMAX WITH ALPHA-BETA PRUNING (Adversarial Search)
// ============================================================================

export type Player = "X" | "O" | null;
export type Board = Player[];

export const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: Board): { winner: Player; line: number[] | null } {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: combo };
    }
  }
  if (board.every((cell) => cell !== null)) {
    return { winner: null, line: null }; // Draw
  }
  return { winner: null, line: null }; // In progress
}

export type MinimaxStats = {
  nodesEvaluated: number;
  prunedBranches: number;
  maxDepthReached: number;
  treeSnapshot: {
    move: number;
    score: number;
    depth: number;
  }[];
};

/**
 * Minimax recursive decision algorithm with optional Alpha-Beta pruning
 */
export function minimaxWithStats(
  board: Board,
  depth: number,
  isMaximizing: boolean,
  alpha: number,
  beta: number,
  usePruning: boolean,
  aiPlayer: "X" | "O",
  stats: MinimaxStats
): number {
  stats.nodesEvaluated++;
  if (depth > stats.maxDepthReached) stats.maxDepthReached = depth;

  const humanPlayer = aiPlayer === "O" ? "X" : "O";
  const { winner } = checkWinner(board);

  if (winner === aiPlayer) return 10 - depth;
  if (winner === humanPlayer) return depth - 10;
  if (board.every((c) => c !== null)) return 0; // Draw

  const availableMoves: number[] = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) availableMoves.push(i);
  }

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (const move of availableMoves) {
      board[move] = aiPlayer;
      const evaluation = minimaxWithStats(
        board,
        depth + 1,
        false,
        alpha,
        beta,
        usePruning,
        aiPlayer,
        stats
      );
      board[move] = null;
      maxEval = Math.max(maxEval, evaluation);

      if (usePruning) {
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) {
          stats.prunedBranches += availableMoves.length - 1 - availableMoves.indexOf(move);
          break; // Alpha-Beta cut-off
        }
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of availableMoves) {
      board[move] = humanPlayer;
      const evaluation = minimaxWithStats(
        board,
        depth + 1,
        true,
        alpha,
        beta,
        usePruning,
        aiPlayer,
        stats
      );
      board[move] = null;
      minEval = Math.min(minEval, evaluation);

      if (usePruning) {
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) {
          stats.prunedBranches += availableMoves.length - 1 - availableMoves.indexOf(move);
          break; // Alpha-Beta cut-off
        }
      }
    }
    return minEval;
  }
}

export function findBestMove(
  board: Board,
  aiPlayer: "X" | "O" = "O",
  usePruning = true,
  depthLimit = 9
): { bestMove: number; stats: MinimaxStats } {
  const stats: MinimaxStats = {
    nodesEvaluated: 0,
    prunedBranches: 0,
    maxDepthReached: 0,
    treeSnapshot: [],
  };

  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = aiPlayer;
      const score = minimaxWithStats(
        board,
        0,
        false,
        -Infinity,
        Infinity,
        usePruning,
        aiPlayer,
        stats
      );
      board[i] = null;

      stats.treeSnapshot.push({ move: i, score, depth: 0 });

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return { bestMove, stats };
}

// ============================================================================
// PERCEPTRON & NEURAL NETWORK (Machine Learning Classifier)
// ============================================================================

export type DataPoint = {
  x1: number;
  x2: number;
  label: 0 | 1;
};

export class Perceptron {
  w1: number;
  w2: number;
  bias: number;
  learningRate: number;

  constructor(w1 = 0.5, w2 = -0.5, bias = 0.1, lr = 0.1) {
    this.w1 = w1;
    this.w2 = w2;
    this.bias = bias;
    this.learningRate = lr;
  }

  predictRaw(x1: number, x2: number): number {
    return this.w1 * x1 + this.w2 * x2 + this.bias;
  }

  predict(x1: number, x2: number): 0 | 1 {
    return this.predictRaw(x1, x2) >= 0 ? 1 : 0;
  }

  sigmoid(z: number): number {
    return 1 / (1 + Math.exp(-Math.max(-20, Math.min(20, z))));
  }

  predictProb(x1: number, x2: number): number {
    return this.sigmoid(this.predictRaw(x1, x2));
  }

  trainStep(data: DataPoint[]): { updatedCount: number; loss: number } {
    let updatedCount = 0;
    let totalLoss = 0;

    for (const pt of data) {
      const pred = this.predict(pt.x1, pt.x2);
      const error = pt.label - pred;
      if (error !== 0) {
        this.w1 += this.learningRate * error * pt.x1;
        this.w2 += this.learningRate * error * pt.x2;
        this.bias += this.learningRate * error;
        updatedCount++;
      }
      const raw = this.predictRaw(pt.x1, pt.x2);
      const prob = this.sigmoid(raw);
      totalLoss += Math.pow(pt.label - prob, 2);
    }

    return { updatedCount, loss: totalLoss / (data.length || 1) };
  }

  trainEpochs(data: DataPoint[], epochs = 50): { losses: number[]; finalAccuracy: number } {
    const losses: number[] = [];
    for (let e = 0; e < epochs; e++) {
      const { loss } = this.trainStep(data);
      losses.push(loss);
    }
    let correct = 0;
    for (const pt of data) {
      if (this.predict(pt.x1, pt.x2) === pt.label) correct++;
    }
    return {
      losses,
      finalAccuracy: data.length ? Math.round((correct / data.length) * 100) : 0,
    };
  }

  getBoundary(minX = -1, maxX = 1): { x1: number; y1: number; x2: number; y2: number } | null {
    if (Math.abs(this.w2) < 1e-6) {
      // Near-vertical boundary line
      const x = -this.bias / (this.w1 || 1e-6);
      return { x1: x, y1: -1, x2: x, y2: 1 };
    }
    // w1*x + w2*y + b = 0 => y = (-w1*x - b) / w2
    const y1 = (-this.w1 * minX - this.bias) / this.w2;
    const y2 = (-this.w1 * maxX - this.bias) / this.w2;
    return { x1: minX, y1, x2: maxX, y2 };
  }
}

// ============================================================================
// K-MEANS CLUSTERING (Unsupervised Learning)
// ============================================================================

export type ClusterPoint = {
  id: number;
  x: number;
  y: number;
  cluster: number;
};

export type Centroid = {
  x: number;
  y: number;
  color: string;
};

export const CLUSTER_COLORS = ["#38bdf8", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

export function initializeCentroids(k: number, points: ClusterPoint[]): Centroid[] {
  if (points.length === 0) return [];
  const centroids: Centroid[] = [];
  const chosenIndices = new Set<number>();

  while (centroids.length < k && centroids.length < points.length) {
    const idx = Math.floor(Math.random() * points.length);
    if (!chosenIndices.has(idx)) {
      chosenIndices.add(idx);
      centroids.push({
        x: points[idx].x,
        y: points[idx].y,
        color: CLUSTER_COLORS[centroids.length % CLUSTER_COLORS.length],
      });
    }
  }

  return centroids;
}

export function kMeansStep(
  points: ClusterPoint[],
  centroids: Centroid[]
): {
  points: ClusterPoint[];
  centroids: Centroid[];
  hasConverged: boolean;
  inertia: number;
} {
  if (centroids.length === 0 || points.length === 0) {
    return { points, centroids, hasConverged: true, inertia: 0 };
  }

  let changed = false;
  let inertia = 0;

  // 1. Assignment step: assign each point to closest centroid
  const updatedPoints = points.map((p) => {
    let minDist = Infinity;
    let closestCluster = 0;

    for (let c = 0; c < centroids.length; c++) {
      const dx = p.x - centroids[c].x;
      const dy = p.y - centroids[c].y;
      const distSq = dx * dx + dy * dy;
      if (distSq < minDist) {
        minDist = distSq;
        closestCluster = c;
      }
    }

    inertia += minDist;
    if (p.cluster !== closestCluster) {
      changed = true;
    }

    return { ...p, cluster: closestCluster };
  });

  // 2. Update step: recalculate centroid coordinates as the mean of its cluster
  const updatedCentroids = centroids.map((c, cIdx) => {
    const clusterPts = updatedPoints.filter((p) => p.cluster === cIdx);
    if (clusterPts.length === 0) return c; // keep position if no points
    const sumX = clusterPts.reduce((acc, p) => acc + p.x, 0);
    const sumY = clusterPts.reduce((acc, p) => acc + p.y, 0);
    return {
      ...c,
      x: sumX / clusterPts.length,
      y: sumY / clusterPts.length,
    };
  });

  return {
    points: updatedPoints,
    centroids: updatedCentroids,
    hasConverged: !changed,
    inertia,
  };
}

