/**
 * Advanced Tree Data Structures Engine
 * Implementations of:
 * 1. Self-Balancing AVL Trees (Rotations: LL, RR, LR, RL)
 * 2. Binary Max-Heap & Priority Queue (Heapify operations)
 * 3. Trie / Prefix Tree (Prefix search & Autocomplete)
 */

// ============================================================================
// 1. AVL TREE (Adelson-Velsky and Landis)
// ============================================================================

export type AVLNode = {
  key: number;
  height: number;
  left: AVLNode | null;
  right: AVLNode | null;
  x?: number;
  y?: number;
};

export function getHeight(node: AVLNode | null): number {
  return node ? node.height : 0;
}

export function getBalanceFactor(node: AVLNode | null): number {
  return node ? getHeight(node.left) - getHeight(node.right) : 0;
}

export function updateHeight(node: AVLNode): void {
  node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

export function rotateRight(y: AVLNode): AVLNode {
  const x = y.left!;
  const T2 = x.right;

  x.right = y;
  y.left = T2;

  updateHeight(y);
  updateHeight(x);

  return x;
}

export function rotateLeft(x: AVLNode): AVLNode {
  const y = x.right!;
  const T2 = y.left;

  y.left = x;
  x.right = T2;

  updateHeight(x);
  updateHeight(y);

  return y;
}

export type AVLInsertResult = {
  root: AVLNode;
  rotationPerformed: "LL" | "RR" | "LR" | "RL" | "none";
};

export function insertAVL(
  node: AVLNode | null,
  key: number,
  resultTracker: { rotation: "LL" | "RR" | "LR" | "RL" | "none" } = { rotation: "none" }
): AVLNode {
  if (!node) {
    return { key, height: 1, left: null, right: null };
  }

  if (key < node.key) {
    node.left = insertAVL(node.left, key, resultTracker);
  } else if (key > node.key) {
    node.right = insertAVL(node.right, key, resultTracker);
  } else {
    return node; // Duplicate keys not allowed
  }

  updateHeight(node);
  const balance = getBalanceFactor(node);

  // Left-Left Case
  if (balance > 1 && key < node.left!.key) {
    resultTracker.rotation = "LL";
    return rotateRight(node);
  }

  // Right-Right Case
  if (balance < -1 && key > node.right!.key) {
    resultTracker.rotation = "RR";
    return rotateLeft(node);
  }

  // Left-Right Case
  if (balance > 1 && key > node.left!.key) {
    resultTracker.rotation = "LR";
    node.left = rotateLeft(node.left!);
    return rotateRight(node);
  }

  // Right-Left Case
  if (balance < -1 && key < node.right!.key) {
    resultTracker.rotation = "RL";
    node.right = rotateRight(node.right!);
    return rotateLeft(node);
  }

  return node;
}

export function searchAVL(node: AVLNode | null, key: number): boolean {
  if (!node) return false;
  if (node.key === key) return true;
  if (key < node.key) return searchAVL(node.left, key);
  return searchAVL(node.right, key);
}

// Tree visual layout calculation for SVG rendering
export function layoutTree(
  node: AVLNode | null,
  x = 350,
  y = 40,
  spread = 160
): AVLNode | null {
  if (!node) return null;
  const clone: AVLNode = {
    ...node,
    x,
    y,
    left: layoutTree(node.left, x - spread, y + 65, spread * 0.52),
    right: layoutTree(node.right, x + spread, y + 65, spread * 0.52),
  };
  return clone;
}

// ============================================================================
// 2. BINARY MAX-HEAP (Priority Queue)
// ============================================================================

export class BinaryMaxHeap {
  heap: number[];

  constructor(initial: number[] = []) {
    this.heap = [];
    for (const val of initial) {
      this.insert(val);
    }
  }

  parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  left(i: number): number {
    return 2 * i + 1;
  }

  right(i: number): number {
    return 2 * i + 2;
  }

  insert(val: number): void {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index: number): void {
    let curr = index;
    while (curr > 0 && this.heap[curr] > this.heap[this.parent(curr)]) {
      const p = this.parent(curr);
      [this.heap[curr], this.heap[p]] = [this.heap[p], this.heap[curr]];
      curr = p;
    }
  }

  extractMax(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(index: number): void {
    let largest = index;
    const l = this.left(index);
    const r = this.right(index);

    if (l < this.heap.length && this.heap[l] > this.heap[largest]) {
      largest = l;
    }
    if (r < this.heap.length && this.heap[r] > this.heap[largest]) {
      largest = r;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.heapifyDown(largest);
    }
  }

  peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

// ============================================================================
// 3. TRIE / PREFIX TREE
// ============================================================================

export class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.isEndOfWord = true;
  }

  search(word: string): boolean {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) return false;
      curr = curr.children.get(char)!;
    }
    return curr.isEndOfWord;
  }

  startsWith(prefix: string): string[] {
    let curr = this.root;
    for (const char of prefix) {
      if (!curr.children.has(char)) return [];
      curr = curr.children.get(char)!;
    }

    const results: string[] = [];
    const dfs = (node: TrieNode, path: string) => {
      if (node.isEndOfWord) results.push(prefix + path);
      for (const [ch, childNode] of node.children.entries()) {
        dfs(childNode, path + ch);
      }
    };

    dfs(curr, "");
    return results;
  }
}

