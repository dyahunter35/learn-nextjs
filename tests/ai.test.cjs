const test = require("node:test");
const assert = require("node:assert/strict");

test("artificial intelligence algorithms engine verification", async (t) => {
  const {
    heuristic,
    aStarSearch,
    generateMaze,
    checkWinner,
    minimaxWithStats,
    findBestMove,
    Perceptron,
    kMeansStep,
    initializeCentroids,
  } = await import("../src/lib/ai-engine.ts");

  await t.test("1. A* Heuristics calculate correct distance weights", () => {
    // Manhattan: (|3 - 0| + |4 - 0|) * 10 = 70
    assert.equal(heuristic(0, 0, 3, 4, "manhattan"), 70);
    // Euclidean: sqrt(3^2 + 4^2) * 10 = 50
    assert.equal(heuristic(0, 0, 3, 4, "euclidean"), 50);
    // Chebyshev: max(3, 4) * 10 = 40
    assert.equal(heuristic(0, 0, 3, 4, "chebyshev"), 40);
  });

  await t.test("2. A* Pathfinding discovers optimal path around obstacles", () => {
    // 5x5 grid, start at [0, 0], end at [0, 4]
    // Obstacle vertical wall at col 2 from row 0 to 3
    const walls = new Set(["0,2", "1,2", "2,2", "3,2"]);
    const res = aStarSearch(5, 5, [0, 0], [0, 4], walls, "manhattan");

    assert.equal(res.success, true);
    assert.ok(res.path.length > 0);
    // Path must start at [0, 0] and end at [0, 4]
    assert.deepEqual(res.path[0], [0, 0]);
    assert.deepEqual(res.path[res.path.length - 1], [0, 4]);
    // Path must NOT cross any wall
    for (const [r, c] of res.path) {
      assert.equal(walls.has(`${r},${c}`), false);
    }
  });

  await t.test("3. A* detects impossible paths gracefully", () => {
    // Completely box in the start node
    const walls = new Set(["0,1", "1,0", "1,1"]);
    const res = aStarSearch(5, 5, [0, 0], [4, 4], walls, "manhattan");
    assert.equal(res.success, false);
    assert.equal(res.path.length, 0);
  });

  await t.test("4. Maze generator creates solvable spaces without blocking start/end", () => {
    const start = [1, 1];
    const end = [9, 9];
    const walls = generateMaze(11, 11, start, end);
    assert.equal(walls.has("1,1"), false);
    assert.equal(walls.has("9,9"), false);
    assert.ok(walls.size > 10, "Maze should contain internal wall barriers");
  });

  await t.test("5. Minimax correctly evaluates terminal win/loss/draw states", () => {
    const xWins = ["X", "X", "X", "O", "O", null, null, null, null];
    assert.equal(checkWinner(xWins).winner, "X");

    const oWins = ["X", null, null, "O", "O", "O", "X", null, null];
    assert.equal(checkWinner(oWins).winner, "O");

    const draw = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    assert.equal(checkWinner(draw).winner, null);
  });

  await t.test("6. Minimax with Alpha-Beta Pruning guarantees optimal move with reduced evaluations", () => {
    // Board where X has a double threat or O needs to block
    const boardWithoutPrune = ["X", "X", null, "O", null, null, null, null, null];
    const boardWithPrune = [...boardWithoutPrune];

    const statsNoPrune = { nodesEvaluated: 0, prunedBranches: 0, maxDepthReached: 0, treeSnapshot: [] };
    const statsPrune = { nodesEvaluated: 0, prunedBranches: 0, maxDepthReached: 0, treeSnapshot: [] };

    // Move to block X from winning at index 2
    const scoreNoPrune = minimaxWithStats(boardWithoutPrune, 0, false, -Infinity, Infinity, false, "O", statsNoPrune);
    const scorePrune = minimaxWithStats(boardWithPrune, 0, false, -Infinity, Infinity, true, "O", statsPrune);

    assert.equal(scoreNoPrune, scorePrune, "Minimax scores must match whether pruned or not");
    assert.ok(statsPrune.nodesEvaluated < statsNoPrune.nodesEvaluated, "Alpha-Beta must evaluate strictly fewer nodes");
    assert.ok(statsPrune.prunedBranches > 0, "Branches should be pruned");

    const best = findBestMove(["X", "X", null, null, "O", null, null, null, null], "O", true);
    assert.equal(best.bestMove, 2, "AI must choose index 2 to block instant win");
  });

  await t.test("7. Perceptron learns linearly separable logic (AND gate)", () => {
    const andData = [
      { x1: 0, x2: 0, label: 0 },
      { x1: 0, x2: 1, label: 0 },
      { x1: 1, x2: 0, label: 0 },
      { x1: 1, x2: 1, label: 1 },
    ];

    const p = new Perceptron(0.2, 0.2, -0.5, 0.2);
    const { finalAccuracy } = p.trainEpochs(andData, 30);

    assert.equal(finalAccuracy, 100, "Perceptron should achieve 100% accuracy on AND logic");
    assert.equal(p.predict(0, 0), 0);
    assert.equal(p.predict(0, 1), 0);
    assert.equal(p.predict(1, 0), 0);
    assert.equal(p.predict(1, 1), 1);
  });

  await t.test("8. Perceptron learns OR gate logic and produces valid decision boundary", () => {
    const orData = [
      { x1: 0, x2: 0, label: 0 },
      { x1: 0, x2: 1, label: 1 },
      { x1: 1, x2: 0, label: 1 },
      { x1: 1, x2: 1, label: 1 },
    ];

    const p = new Perceptron(0.1, 0.1, -0.05, 0.2);
    p.trainEpochs(orData, 30);

    assert.equal(p.predict(0, 0), 0);
    assert.equal(p.predict(1, 1), 1);

    const boundary = p.getBoundary(-1, 1);
    assert.ok(boundary !== null);
    assert.equal(typeof boundary.y1, "number");
    assert.equal(typeof boundary.y2, "number");
  });

  await t.test("9. K-Means clustering assigns points and reduces inertia", () => {
    const points = [
      { id: 1, x: 10, y: 10, cluster: -1 },
      { id: 2, x: 12, y: 11, cluster: -1 },
      { id: 3, x: 90, y: 90, cluster: -1 },
      { id: 4, x: 92, y: 91, cluster: -1 },
    ];

    // Seed two centroids near the two distinct groups
    const centroids = [
      { x: 5, y: 5, color: "#38bdf8" },
      { x: 80, y: 80, color: "#10b981" },
    ];

    const step1 = kMeansStep(points, centroids);
    assert.equal(step1.points[0].cluster, 0);
    assert.equal(step1.points[1].cluster, 0);
    assert.equal(step1.points[2].cluster, 1);
    assert.equal(step1.points[3].cluster, 1);

    // After assignment, step 2 should converge
    const step2 = kMeansStep(step1.points, step1.centroids);
    assert.equal(step2.hasConverged, true);
  });
});

