const test = require("node:test");
const assert = require("node:assert/strict");

test("advanced tree data structures verification", async (t) => {
  const {
    insertAVL,
    searchAVL,
    getBalanceFactor,
    getHeight,
    BinaryMaxHeap,
    Trie,
  } = await import("../src/lib/tree-engine.ts");

  await t.test("1. AVL Tree maintains balance and performs rotations", () => {
    let root = null;
    // Insert 10, 20, 30 (should trigger Left-Left / Right-Right rotation)
    const tracker1 = { rotation: "none" };
    root = insertAVL(root, 10, tracker1);
    root = insertAVL(root, 20, tracker1);
    root = insertAVL(root, 30, tracker1);

    // Root should be balanced with key 20
    assert.equal(root.key, 20);
    assert.equal(root.left.key, 10);
    assert.equal(root.right.key, 30);
    assert.equal(Math.abs(getBalanceFactor(root)) <= 1, true);

    // Test Search
    assert.equal(searchAVL(root, 20), true);
    assert.equal(searchAVL(root, 10), true);
    assert.equal(searchAVL(root, 99), false);
  });

  await t.test("2. Binary Max-Heap maintains heap property and extracts maxima", () => {
    const heap = new BinaryMaxHeap([10, 30, 20, 5, 50, 40]);
    assert.equal(heap.peek(), 50);

    const sortedDesc = [];
    while (heap.peek() !== null) {
      sortedDesc.push(heap.extractMax());
    }
    assert.deepEqual(sortedDesc, [50, 40, 30, 20, 10, 5]);
  });

  await t.test("3. Trie inserts, searches, and autocompletes prefixes", () => {
    const trie = new Trie();
    trie.insert("algorithm");
    trie.insert("algebra");
    trie.insert("alien");
    trie.insert("apple");

    assert.equal(trie.search("algorithm"), true);
    assert.equal(trie.search("algebra"), true);
    assert.equal(trie.search("alg"), false); // Prefix only

    const algWords = trie.startsWith("alg");
    assert.equal(algWords.includes("algorithm"), true);
    assert.equal(algWords.includes("algebra"), true);
    assert.equal(algWords.includes("apple"), false);
  });
});

test("data compression engine verification", async (t) => {
  const {
    lzwCompress,
    lzwDecompress,
    rleCompress,
    rleDecompress,
    calculateCompressionRatio,
  } = await import("../src/lib/compression-engine.ts");

  await t.test("1. LZW compresses and perfectly decompresses repeating text", () => {
    const text = "TOBEORNOTTOBEORTOBEORNOT";
    const { codes, history } = lzwCompress(text);

    assert.ok(codes.length < text.length, "Compressed codes count should be smaller than raw text");
    assert.ok(history.length > 0);

    const decompressed = lzwDecompress(codes);
    assert.equal(decompressed, text, "Decompressed text must match original exactly");
  });

  await t.test("2. RLE encodes consecutive runs and restores original string", () => {
    const original = "WWWWWWAAAAABBBCCDDDDD";
    const { encoded } = rleCompress(original);
    assert.equal(encoded, "6W5A3B2C5D");
    assert.equal(rleDecompress(encoded), original);
  });

  await t.test("3. Compression ratio calculation handles edge cases", () => {
    const stats = calculateCompressionRatio(100, 40);
    assert.equal(stats.ratioPercent, 40);
    assert.equal(stats.spaceSavingsPercent, 60);
  });
});

test("computational geometry engine verification", async (t) => {
  const {
    orientation,
    convexHullGrahamScan,
    findClosestPair,
  } = await import("../src/lib/geometry-engine.ts");

  await t.test("1. Orientation test distinguishes turns", () => {
    const p1 = { id: 1, x: 0, y: 0 };
    const p2 = { id: 2, x: 4, y: 4 };
    const p3 = { id: 3, x: 0, y: 4 }; // left of line -> CCW
    const p4 = { id: 4, x: 4, y: 0 }; // right of line -> CW

    assert.equal(orientation(p1, p2, p3), 2); // Counter-clockwise
    assert.equal(orientation(p1, p2, p4), 1); // Clockwise
  });

  await t.test("2. Graham Scan identifies correct convex polygon vertices", () => {
    // Square with points inside
    const points = [
      { id: 1, x: 0, y: 0 },
      { id: 2, x: 10, y: 0 },
      { id: 3, x: 10, y: 10 },
      { id: 4, x: 0, y: 10 },
      { id: 5, x: 5, y: 5 }, // Internal point
      { id: 6, x: 2, y: 2 }, // Internal point
    ];

    const result = convexHullGrahamScan(points);
    assert.equal(result.hull.length, 4, "Hull should have exactly the 4 outer corner points");
    const ids = result.hull.map((p) => p.id).sort();
    assert.deepEqual(ids, [1, 2, 3, 4]);
    assert.equal(result.area, 100);
    assert.equal(result.perimeter, 40);
  });

  await t.test("3. Closest Pair finds minimum Euclidean distance", () => {
    const points = [
      { id: 1, x: 0, y: 0 },
      { id: 2, x: 50, y: 50 },
      { id: 3, x: 1, y: 1 },
      { id: 4, x: 100, y: 100 },
    ];
    const pair = findClosestPair(points);
    assert.ok(pair !== null);
    assert.equal(pair.p1.id, 1);
    assert.equal(pair.p2.id, 3);
    assert.equal(pair.distance, 1.41);
  });
});

test("advanced cryptographic hashing engine verification", async (t) => {
  const {
    sha256,
    compareAvalanche,
    hmacSha256,
  } = await import("../src/lib/hash-engine.ts");

  await t.test("1. SHA-256 standard test vectors match NIST specifications", () => {
    // Empty string
    assert.equal(
      sha256("").hex,
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    );

    // "abc"
    assert.equal(
      sha256("abc").hex,
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    );
  });

  await t.test("2. Avalanche effect causes ~50% bit flip on single character change", () => {
    const res = compareAvalanche("Security2026", "Security2027");
    assert.ok(res.diffBitsCount > 90, "At least 90+ bits should flip out of 256");
    assert.ok(res.avalanchePercent >= 35 && res.avalanchePercent <= 65, "Avalanche should be near 50%");
    assert.equal(res.bitDifferences.length, 256);
  });

  await t.test("3. HMAC-SHA256 generates authentic signatures", () => {
    const sig = hmacSha256("secret_key", "important_payload");
    assert.equal(typeof sig, "string");
    assert.equal(sig.length, 64);
  });
});

