// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const mstGraph = {
  A: [{
    to: 'B',
    w: 4
  }, {
    to: 'C',
    w: 2
  }],
  B: [{
    to: 'A',
    w: 4
  }, {
    to: 'C',
    w: 1
  }, {
    to: 'D',
    w: 5
  }],
  C: [{
    to: 'A',
    w: 2
  }, {
    to: 'B',
    w: 1
  }, {
    to: 'D',
    w: 8
  }, {
    to: 'E',
    w: 10
  }],
  D: [{
    to: 'B',
    w: 5
  }, {
    to: 'C',
    w: 8
  }, {
    to: 'E',
    w: 2
  }, {
    to: 'F',
    w: 6
  }],
  E: [{
    to: 'C',
    w: 10
  }, {
    to: 'D',
    w: 2
  }, {
    to: 'F',
    w: 3
  }],
  F: [{
    to: 'D',
    w: 6
  }, {
    to: 'E',
    w: 3
  }]
};
const NODES = ['A', 'B', 'C', 'D', 'E', 'F'];
const WEIGHTED_EDGES = [['A', 'B', 4], ['A', 'C', 2], ['B', 'C', 1], ['B', 'D', 5], ['C', 'D', 8], ['C', 'E', 10], ['D', 'E', 2], ['D', 'F', 6], ['E', 'F', 3]];
const nodePositions = {};
const centerX = 280,
  centerY = 180,
  radius = 140;
NODES.forEach((n, i) => {
  const angle = i / NODES.length * 2 * Math.PI - Math.PI / 2;
  nodePositions[n] = {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
});
let simulationHistory = [];
let currentStep = -1;
let isFinished = false;
let currentAlgorithm = 'kruskal';
const graphSvg = document.getElementById('graphSvg');
const statusMsg = document.getElementById('statusMessage');
const stepsLog = document.getElementById('stepsLog');
const algorithmSelect = document.getElementById('algorithmSelect');
const algorithmInfoPanel = document.getElementById('algorithmInfoPanel');
const celebrationSection = document.getElementById('celebrationSection');
const resultEdges = document.getElementById('resultEdges');
const resultWeight = document.getElementById('resultWeight');
const resultCount = document.getElementById('resultCount');
function edgeEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] || a[0] === b[1] && a[1] === b[0];
}
function generateKruskalSteps() {
  const edges = WEIGHTED_EDGES.slice().sort((a, b) => a[2] - b[2]);
  const steps = [];
  const mstEdges = [];
  const parent = {};
  const rank = {};
  for (const n of NODES) {
    parent[n] = n;
    rank[n] = 0;
  }
  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  function union(x, y) {
    const rx = find(x),
      ry = find(y);
    if (rx === ry) return false;
    if (rank[rx] < rank[ry]) parent[rx] = ry;else if (rank[rx] > rank[ry]) parent[ry] = rx;else {
      parent[ry] = rx;
      rank[rx]++;
    }
    return true;
  }
  steps.push({
    type: 'init',
    algorithm: 'kruskal',
    edge: null,
    mstEdges: [],
    totalWeight: 0,
    sortedEdges: edges,
    currentEdgeIndex: -1,
    currentNode: null,
    message: translateLegacyRuntime("legacy.a74e6d9b27a99732")
  });
  for (let i = 0; i < edges.length; i++) {
    const [from, to, weight] = edges[i];
    steps.push({
      type: 'consider',
      algorithm: 'kruskal',
      edge: {
        from,
        to,
        weight
      },
      mstEdges: [...mstEdges],
      totalWeight: mstEdges.reduce((s, e) => s + e.weight, 0),
      sortedEdges: edges,
      currentEdgeIndex: i,
      currentNode: null,
      message: translateLegacyRuntime(`نفحص الحافة ${from}-${to} (الوزن: ${weight}) ← هل تشكل حلقة؟`, "legacy.050a70745686f400", "\u0646\u0641\u062D\u0635 \u0627\u0644\u062D\u0627\u0641\u0629 ${from}-${to} (\u0627\u0644\u0648\u0632\u0646: ${weight}) \u2190 \u0647\u0644 \u062A\u0634\u0643\u0644 \u062D\u0644\u0642\u0629\u061F")
    });
    if (union(from, to)) {
      const tw = mstEdges.reduce((s, e) => s + e.weight, 0) + weight;
      mstEdges.push({
        from,
        to,
        weight
      });
      steps.push({
        type: 'add',
        algorithm: 'kruskal',
        edge: {
          from,
          to,
          weight
        },
        mstEdges: [...mstEdges],
        totalWeight: tw,
        sortedEdges: edges,
        currentEdgeIndex: i,
        currentNode: null,
        message: translateLegacyRuntime(`لا → نضيف ${from}-${to} إلى MST (الوزن التراكمي: ${tw})`, "legacy.28dcb06b2a6a671a", "\u0644\u0627 \u2192 \u0646\u0636\u064A\u0641 ${from}-${to} \u0625\u0644\u0649 MST (\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A: ${tw})")
      });
    } else {
      steps.push({
        type: 'skip',
        algorithm: 'kruskal',
        edge: {
          from,
          to,
          weight
        },
        mstEdges: [...mstEdges],
        totalWeight: mstEdges.reduce((s, e) => s + e.weight, 0),
        sortedEdges: edges,
        currentEdgeIndex: i,
        currentNode: null,
        message: translateLegacyRuntime(`نعم → نتخطى ${from}-${to} (تشكل حلقة)`, "legacy.a08771a1cd7f41c9", "\u0646\u0639\u0645 \u2192 \u0646\u062A\u062E\u0637\u0649 ${from}-${to} (\u062A\u0634\u0643\u0644 \u062D\u0644\u0642\u0629)")
      });
    }
  }
  const fw = mstEdges.reduce((s, e) => s + e.weight, 0);
  steps.push({
    type: 'done',
    algorithm: 'kruskal',
    edge: null,
    mstEdges: [...mstEdges],
    totalWeight: fw,
    sortedEdges: edges,
    currentEdgeIndex: edges.length,
    currentNode: null,
    message: translateLegacyRuntime(`اكتملت خوارزمية كروسكال! وزن MST الإجمالي: ${fw}`, "legacy.20850e3ea1c7990d", "\u0627\u0643\u062A\u0645\u0644\u062A \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0643\u0631\u0648\u0633\u0643\u0627\u0644! \u0648\u0632\u0646 MST \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A: ${fw}")
  });
  return steps;
}
function generatePrimSteps(start) {
  const steps = [];
  const mstEdges = [];
  const inTree = new Set();
  inTree.add(start);
  const initialFrontier = mstGraph[start].map(e => ({
    from: start,
    to: e.to,
    weight: e.w
  }));
  steps.push({
    type: 'init',
    algorithm: 'prim',
    edge: null,
    mstEdges: [],
    totalWeight: 0,
    inTree: new Set(inTree),
    frontier: initialFrontier,
    currentNode: start,
    message: translateLegacyRuntime(`بدء خوارزمية بريم من العقدة ${start} — ${start} في MST الآن`, "legacy.28b970a8cfae12db", "\u0628\u062F\u0621 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0628\u0631\u064A\u0645 \u0645\u0646 \u0627\u0644\u0639\u0642\u062F\u0629 ${start} \u2014 ${start} \u0641\u064A MST \u0627\u0644\u0622\u0646")
  });
  while (inTree.size < NODES.length) {
    const candidates = [];
    for (const node of inTree) {
      for (const edge of mstGraph[node]) {
        if (!inTree.has(edge.to)) {
          candidates.push({
            from: node,
            to: edge.to,
            weight: edge.w
          });
        }
      }
    }
    if (candidates.length === 0) break;
    candidates.sort((a, b) => a.weight - b.weight);
    const best = candidates[0];
    const cw = mstEdges.reduce((s, e) => s + e.weight, 0);
    steps.push({
      type: 'consider',
      algorithm: 'prim',
      edge: best,
      mstEdges: [...mstEdges],
      totalWeight: cw,
      inTree: new Set(inTree),
      frontier: candidates,
      currentNode: best.from,
      message: translateLegacyRuntime(`نفحص الحافة ${best.from}-${best.to} (الوزن: ${best.weight}) ← أصغر حافة في الحدود`, "legacy.3794ad9e756a1dde", "\u0646\u0641\u062D\u0635 \u0627\u0644\u062D\u0627\u0641\u0629 ${best.from}-${best.to} (\u0627\u0644\u0648\u0632\u0646: ${best.weight}) \u2190 \u0623\u0635\u063A\u0631 \u062D\u0627\u0641\u0629 \u0641\u064A \u0627\u0644\u062D\u062F\u0648\u062F")
    });
    mstEdges.push(best);
    inTree.add(best.to);
    const newFrontier = [];
    for (const node of inTree) {
      for (const edge of mstGraph[node]) {
        if (!inTree.has(edge.to)) {
          newFrontier.push({
            from: node,
            to: edge.to,
            weight: edge.w
          });
        }
      }
    }
    const nw = mstEdges.reduce((s, e) => s + e.weight, 0);
    steps.push({
      type: 'add',
      algorithm: 'prim',
      edge: best,
      mstEdges: [...mstEdges],
      totalWeight: nw,
      inTree: new Set(inTree),
      frontier: newFrontier,
      currentNode: best.to,
      message: translateLegacyRuntime(`نضيف ${best.from}-${best.to} إلى MST — ${best.to} تنضم للشجرة (الوزن التراكمي: ${nw})`, "legacy.e3a745a29a77d725", "\u0646\u0636\u064A\u0641 ${best.from}-${best.to} \u0625\u0644\u0649 MST \u2014 ${best.to} \u062A\u0646\u0636\u0645 \u0644\u0644\u0634\u062C\u0631\u0629 (\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A: ${nw})")
    });
  }
  const fw = mstEdges.reduce((s, e) => s + e.weight, 0);
  steps.push({
    type: 'done',
    algorithm: 'prim',
    edge: null,
    mstEdges: [...mstEdges],
    totalWeight: fw,
    inTree: new Set(NODES),
    frontier: [],
    currentNode: null,
    message: translateLegacyRuntime(`اكتملت خوارزمية بريم! وزن MST الإجمالي: ${fw}`, "legacy.c946460c842ea52b", "\u0627\u0643\u062A\u0645\u0644\u062A \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0628\u0631\u064A\u0645! \u0648\u0632\u0646 MST \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A: ${fw}")
  });
  return steps;
}
function getNodeState(node, step) {
  if (!step) return 'default';
  if (step.algorithm === 'prim') {
    if (step.inTree && step.inTree.has(node)) return 'in-tree';
    if (step.currentNode === node) return 'current';
    return 'default';
  }
  if (step.type === 'init') return 'default';
  if (step.type === 'done') return 'in-tree';
  const inMst = step.mstEdges.some(e => e.from === node || e.to === node);
  return inMst ? 'in-tree' : 'default';
}
function getEdgeState(edge, step) {
  if (!step) return 'default';
  const [from, to] = edge;
  if (step.algorithm === 'kruskal') {
    const inMst = step.mstEdges.some(e => e.from === from && e.to === to || e.from === to && e.to === from);
    if (inMst) return 'added';
    const isCurrent = step.edge && (step.edge.from === from && step.edge.to === to || step.edge.from === to && step.edge.to === from);
    if (isCurrent) {
      return step.type === 'skip' ? 'skipped' : 'considering';
    }
    const idx = step.sortedEdges.findIndex(e => edgeEquals(e, edge));
    if (idx < step.currentEdgeIndex) return 'skipped';
    return 'default';
  }
  const inMst = step.mstEdges.some(e => e.from === from && e.to === to || e.from === to && e.to === from);
  if (inMst) return 'added';
  const isCurrent = step.edge && (step.edge.from === from && step.edge.to === to || step.edge.from === to && step.edge.to === from);
  if (isCurrent) return 'considering';
  if (step.inTree) {
    const inA = step.inTree.has(from);
    const inB = step.inTree.has(to);
    if (inA && !inB || !inA && inB) return 'frontier';
  }
  return 'default';
}
function renderGraph(step) {
  let width = 560,
    height = 360;
  const container = graphSvg.parentElement;
  const rect = container.getBoundingClientRect();
  if (rect.width > 0 && rect.width < 600) {
    width = Math.max(rect.width - 16, 300);
    height = Math.round(width * 360 / 560);
  }
  const scaleX = width / 560;
  const scaleY = height / 360;
  let html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="mst-svg" style="max-width:${width}px">`;
  html += `<defs>
    <filter id="glowCurrent"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="shadowNode"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.2"/></filter>
  </defs>`;
  for (const edge of WEIGHTED_EDGES) {
    const p1 = nodePositions[edge[0]];
    const p2 = nodePositions[edge[1]];
    const x1 = p1.x * scaleX,
      y1 = p1.y * scaleY;
    const x2 = p2.x * scaleX,
      y2 = p2.y * scaleY;
    const mx = (x1 + x2) / 2,
      my = (y1 + y2) / 2;
    const state = getEdgeState(edge, step);
    let cls = 'mst-edge';
    if (state === 'considering') cls += ' mst-edge-considering';else if (state === 'added') cls += ' mst-edge-added';else if (state === 'skipped') cls += ' mst-edge-skipped';else if (state === 'frontier') cls += ' mst-edge-frontier';
    html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" />`;
    html += `<circle cx="${mx}" cy="${my}" r="10" class="mst-edge-label-bg" />`;
    html += `<text x="${mx}" y="${my + 0.5}" class="mst-edge-label">${edge[2]}</text>`;
  }
  for (const node of NODES) {
    const pos = nodePositions[node];
    const cx = pos.x * scaleX,
      cy = pos.y * scaleY;
    const state = getNodeState(node, step);
    const r = 22 * Math.min(scaleX, scaleY);
    let cls = 'mst-node';
    let subCls = state === 'in-tree' ? 'mst-node-in-tree' : state === 'current' ? 'mst-node-current' : 'mst-node-default';
    let filter = '';
    if (state !== 'default') filter += ' filter="url(#shadowNode)"';
    html += `<g class="${cls} ${subCls}"${filter}>`;
    html += `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, 16)}" />`;
    const isLight = state !== 'default';
    const labelCls = isLight ? 'mst-node-label-light' : 'mst-node-label';
    const fontSize = Math.max(14 * Math.min(scaleX, scaleY), 11);
    html += `<text x="${cx}" y="${cy + fontSize * 0.35}" class="${labelCls}" font-size="${fontSize}">${node}</text>`;
    html += `</g>`;
  }
  html += '</svg>';
  graphSvg.innerHTML = html;
}
function renderKruskalEdgeList(step) {
  let html = '<div class="edge-list">';
  html += translateLegacyRuntime(`<div class="flex items-center justify-between px-3 py-2 bg-indigo-50 border-b border-indigo-100">
    <span class="text-xs font-bold text-indigo-700">الحافة</span>
    <span class="text-xs font-bold text-indigo-700">الوزن</span>
    <span class="text-xs font-bold text-indigo-700">الحالة</span>
  </div>`, "legacy.51463662634d075e", "<div class=\"flex items-center justify-between px-3 py-2 bg-indigo-50 border-b border-indigo-100\">\n    <span class=\"text-xs font-bold text-indigo-700\">\u0627\u0644\u062D\u0627\u0641\u0629</span>\n    <span class=\"text-xs font-bold text-indigo-700\">\u0627\u0644\u0648\u0632\u0646</span>\n    <span class=\"text-xs font-bold text-indigo-700\">\u0627\u0644\u062D\u0627\u0644\u0629</span>\n  </div>");
  for (let i = 0; i < step.sortedEdges.length; i++) {
    const e = step.sortedEdges[i];
    const label = `${e[0]}-${e[1]}`;
    const inMst = step.mstEdges.some(me => me.from === e[0] && me.to === e[1] || me.from === e[1] && me.to === e[0]);
    let itemClass = 'edge-list-item default';
    let statusText = translateLegacyRuntime("legacy.62853165f4d5a55a");
    let badgeClass = 'bg-gray-200 text-gray-600';
    if (inMst) {
      itemClass = 'edge-list-item added';
      statusText = translateLegacyRuntime("legacy.e4ce86081348dd00");
      badgeClass = 'bg-green-500 text-white';
    } else if (i < step.currentEdgeIndex) {
      itemClass = 'edge-list-item skipped';
      statusText = translateLegacyRuntime("legacy.063469380089dd0c");
      badgeClass = 'bg-red-400 text-white';
    } else if (i === step.currentEdgeIndex && (step.type === 'consider' || step.type === 'add')) {
      itemClass = 'edge-list-item considering';
      statusText = translateLegacyRuntime("legacy.f10408f2252ea73c");
      badgeClass = 'bg-amber-500 text-white';
    } else if (i === step.currentEdgeIndex && step.type === 'skip') {
      itemClass = 'edge-list-item skipped';
      statusText = translateLegacyRuntime("legacy.063469380089dd0c");
      badgeClass = 'bg-red-400 text-white';
    }
    html += `<div class="${itemClass}">
      <span class="font-mono font-bold text-xs">${label}</span>
      <span class="font-mono text-xs font-bold">${e[2]}</span>
      <span class="edge-badge ${badgeClass}">${e[2]}</span>
    </div>`;
  }
  html += '</div>';
  return html;
}
function renderPrimFrontier(step) {
  let html = '<div class="edge-list">';
  html += translateLegacyRuntime(`<div class="flex items-center justify-between px-3 py-2 bg-amber-50 border-b border-amber-100">
    <span class="text-xs font-bold text-amber-700">الحافة</span>
    <span class="text-xs font-bold text-amber-700">الوزن</span>
    <span class="text-xs font-bold text-amber-700">الحالة</span>
  </div>`, "legacy.769626efbf7300d9", "<div class=\"flex items-center justify-between px-3 py-2 bg-amber-50 border-b border-amber-100\">\n    <span class=\"text-xs font-bold text-amber-700\">\u0627\u0644\u062D\u0627\u0641\u0629</span>\n    <span class=\"text-xs font-bold text-amber-700\">\u0627\u0644\u0648\u0632\u0646</span>\n    <span class=\"text-xs font-bold text-amber-700\">\u0627\u0644\u062D\u0627\u0644\u0629</span>\n  </div>");
  if (step.frontier && step.frontier.length > 0) {
    const sorted = [...step.frontier].sort((a, b) => a.weight - b.weight);
    const seen = new Set();
    for (const f of sorted) {
      const key = `${f.from}-${f.to}`;
      const rkey = `${f.to}-${f.from}`;
      if (seen.has(key) || seen.has(rkey)) continue;
      seen.add(key);
      const label = `${f.from}→${f.to}`;
      const isCurrent = step.edge && (step.edge.from === f.from && step.edge.to === f.to || step.edge.from === f.to && step.edge.to === f.from);
      const inMst = step.mstEdges.some(e => e.from === f.from && e.to === f.to || e.from === f.to && e.to === f.from);
      let itemClass = 'edge-list-item default';
      let statusText = translateLegacyRuntime("legacy.1f5830f563aba718");
      let badgeClass = 'bg-gray-200 text-gray-600';
      if (inMst) {
        itemClass = 'edge-list-item added';
        statusText = translateLegacyRuntime("legacy.e4ce86081348dd00");
        badgeClass = 'bg-green-500 text-white';
      } else if (isCurrent) {
        itemClass = 'edge-list-item considering';
        statusText = translateLegacyRuntime("legacy.58d0e21f45f82a9a");
        badgeClass = 'bg-amber-500 text-white';
      }
      html += `<div class="${itemClass}">
        <span class="font-mono font-bold text-xs">${label}</span>
        <span class="font-mono text-xs font-bold">${f.weight}</span>
        <span class="edge-badge ${badgeClass}">${f.weight}</span>
      </div>`;
    }
  } else {
    html += translateLegacyRuntime(`<div class="px-3 py-3 text-xs text-gray-400 text-center">لا توجد حواف في الحدود</div>`, "legacy.d2d845694357a110", "<div class=\"px-3 py-3 text-xs text-gray-400 text-center\">\u0644\u0627 \u062A\u0648\u062C\u062F \u062D\u0648\u0627\u0641 \u0641\u064A \u0627\u0644\u062D\u062F\u0648\u062F</div>");
  }
  html += '</div>';
  return html;
}
function renderAlgorithmPanel(step) {
  if (!step || !step.type || step.type === 'init') {
    algorithmInfoPanel.innerHTML = translateLegacyRuntime(`<div class="text-gray-400 text-xs text-center py-8">اضغط "ابدأ" لبدء المحاكاة</div>`, "legacy.21fc51c2153c7d6c", "<div class=\"text-gray-400 text-xs text-center py-8\">\u0627\u0636\u063A\u0637 \"\u0627\u0628\u062F\u0623\" \u0644\u0628\u062F\u0621 \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629</div>");
    return;
  }
  if (step.algorithm === 'kruskal') {
    algorithmInfoPanel.innerHTML = translateLegacyRuntime(`
      <h3 class="text-sm font-bold text-gray-700 mb-2">الحواف المرتبة (كروسكال)</h3>
      <div class="max-h-[280px] overflow-y-auto rounded-lg">${renderKruskalEdgeList(step)}</div>`, "legacy.fbffd7c8a5ef1b50", "\n      <h3 class=\"text-sm font-bold text-gray-700 mb-2\">\u0627\u0644\u062D\u0648\u0627\u0641 \u0627\u0644\u0645\u0631\u062A\u0628\u0629 (\u0643\u0631\u0648\u0633\u0643\u0627\u0644)</h3>\n      <div class=\"max-h-[280px] overflow-y-auto rounded-lg\">${renderKruskalEdgeList(step)}</div>");
  } else {
    const inTreeStr = step.inTree ? [...step.inTree].join(translateLegacyRuntime("legacy.bc4d631526af621b")) : '—';
    algorithmInfoPanel.innerHTML = translateLegacyRuntime(`
      <h3 class="text-sm font-bold text-gray-700 mb-2">حدود بريم (Frontier)</h3>
      <div class="mb-2 text-xs text-gray-600 bg-indigo-50 p-2 rounded-lg">
        <span class="font-bold text-indigo-700">العقد في MST:</span> ${inTreeStr}
      </div>
      <div class="max-h-[240px] overflow-y-auto rounded-lg">${renderPrimFrontier(step)}</div>`, "legacy.dcc1e3127b8d173c", "\n      <h3 class=\"text-sm font-bold text-gray-700 mb-2\">\u062D\u062F\u0648\u062F \u0628\u0631\u064A\u0645 (Frontier)</h3>\n      <div class=\"mb-2 text-xs text-gray-600 bg-indigo-50 p-2 rounded-lg\">\n        <span class=\"font-bold text-indigo-700\">\u0627\u0644\u0639\u0642\u062F \u0641\u064A MST:</span> ${inTreeStr}\n      </div>\n      <div class=\"max-h-[240px] overflow-y-auto rounded-lg\">${renderPrimFrontier(step)}</div>");
  }
}
function renderStepLog() {
  stepsLog.innerHTML = '';
  if (simulationHistory.length === 0) return;
  const algLabel = alg => alg === 'kruskal' ? translateLegacyRuntime("legacy.eb63e6c7e980e59c") : translateLegacyRuntime("legacy.2b68028b19dcbb8f");
  const decisionLabel = type => {
    if (type === 'init') return translateLegacyRuntime("legacy.bca1544d642e51b5");
    if (type === 'consider') return translateLegacyRuntime("legacy.f10408f2252ea73c");
    if (type === 'add') return translateLegacyRuntime("legacy.e4ce86081348dd00");
    if (type === 'skip') return translateLegacyRuntime("legacy.063469380089dd0c");
    if (type === 'done') return translateLegacyRuntime("legacy.6bccb227512e57f7");
    return '—';
  };
  let tableHtml = translateLegacyRuntime(`
    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <table class="steps-table">
        <thead><tr>
          <th>#</th>
          <th>الخوارزمية</th>
          <th>الحافة</th>
          <th>القرار</th>
          <th>حواف MST</th>
          <th>الوزن</th>
        </tr></thead><tbody>`, "legacy.9411fa0570fb7c81", "\n    <div class=\"overflow-x-auto rounded-lg border border-gray-200\">\n      <table class=\"steps-table\">\n        <thead><tr>\n          <th>#</th>\n          <th>\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629</th>\n          <th>\u0627\u0644\u062D\u0627\u0641\u0629</th>\n          <th>\u0627\u0644\u0642\u0631\u0627\u0631</th>\n          <th>\u062D\u0648\u0627\u0641 MST</th>\n          <th>\u0627\u0644\u0648\u0632\u0646</th>\n        </tr></thead><tbody>");
  for (let i = 0; i < simulationHistory.length; i++) {
    const s = simulationHistory[i];
    const rowCls = i === currentStep ? 'current-step' : '';
    const edgeLabel = s.edge ? `${s.edge.from}-${s.edge.to}(${s.edge.weight})` : '—';
    const decision = decisionLabel(s.type);
    const mstStr = s.mstEdges.length > 0 ? s.mstEdges.map(e => `${e.from}-${e.to}`).join(translateLegacyRuntime("legacy.bc4d631526af621b")) : '∅';
    tableHtml += `<tr class="${rowCls}">
      <td class="font-bold text-indigo-600">${i}</td>
      <td class="font-mono font-bold">${algLabel(s.algorithm)}</td>
      <td class="font-mono font-semibold" style="font-size:0.7rem">${edgeLabel}</td>
      <td class="font-mono font-semibold" style="font-size:0.7rem">${decision}</td>
      <td class="font-mono" style="font-size:0.65rem">${mstStr}</td>
      <td class="font-bold">${s.totalWeight}</td>
    </tr>`;
  }
  tableHtml += '</tbody></table></div>';
  stepsLog.innerHTML = tableHtml;
  const logContainer = stepsLog.querySelector('.overflow-x-auto');
  if (logContainer) {
    const currentRow = logContainer.querySelector('.current-step');
    if (currentRow) currentRow.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }
}
function showMessage(msg, type) {
  statusMsg.textContent = msg;
  statusMsg.className = 'status-message ' + type;
}
function updateButtons() {
  const startBtn = document.getElementById('startButton');
  const nextBtn = document.getElementById('nextButton');
  const prevBtn = document.getElementById('prevButton');
  nextBtn.disabled = isFinished || currentStep >= simulationHistory.length - 1;
  prevBtn.disabled = currentStep <= 0;
  if (currentStep === -1 && !isFinished) {
    startBtn.textContent = translateLegacyRuntime("legacy.cdcdb088305e072a");
    startBtn.disabled = false;
  } else if (isFinished) {
    startBtn.textContent = translateLegacyRuntime("legacy.37d92d5b69376358");
    startBtn.disabled = true;
  } else {
    startBtn.textContent = translateLegacyRuntime("legacy.5eaaff812af33515");
    startBtn.disabled = false;
  }
  if (currentStep >= simulationHistory.length - 1 && simulationHistory.length > 0) {
    isFinished = true;
    nextBtn.disabled = true;
    startBtn.textContent = translateLegacyRuntime("legacy.37d92d5b69376358");
    startBtn.disabled = true;
  }
}
function updateUI() {
  if (currentStep >= 0 && currentStep < simulationHistory.length) {
    const step = simulationHistory[currentStep];
    renderGraph(step);
    renderAlgorithmPanel(step);
    if (step.type === 'done') {
      const edgesStr = step.mstEdges.map(e => `${e.from}-${e.to}(${e.weight})`).join(translateLegacyRuntime("legacy.bc4d631526af621b"));
      resultEdges.textContent = edgesStr;
      resultWeight.textContent = step.totalWeight;
      resultCount.textContent = step.mstEdges.length;
      celebrationSection.classList.remove('hidden');
      showMessage(step.message, 'success');
      isFinished = true;
    } else if (step.type === 'skip') {
      showMessage(step.message, 'skipped');
      celebrationSection.classList.add('hidden');
    } else if (step.type === 'consider') {
      showMessage(step.message, 'considering');
      celebrationSection.classList.add('hidden');
    } else {
      showMessage(step.message, 'info');
      celebrationSection.classList.add('hidden');
    }
  } else {
    const sortedEdges = WEIGHTED_EDGES.slice().sort((a, b) => a[2] - b[2]);
    const emptyStep = {
      type: null,
      algorithm: currentAlgorithm,
      edge: null,
      mstEdges: [],
      totalWeight: 0,
      sortedEdges: sortedEdges,
      currentEdgeIndex: -1,
      inTree: undefined,
      frontier: [],
      currentNode: null
    };
    renderGraph(emptyStep);
    algorithmInfoPanel.innerHTML = translateLegacyRuntime(`<div class="text-gray-400 text-xs text-center py-8">اضغط "ابدأ" لبدء المحاكاة</div>`, "legacy.21fc51c2153c7d6c", "<div class=\"text-gray-400 text-xs text-center py-8\">\u0627\u0636\u063A\u0637 \"\u0627\u0628\u062F\u0623\" \u0644\u0628\u062F\u0621 \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629</div>");
    showMessage(translateLegacyRuntime("legacy.bb4e47e6adbc1c2d"), 'info');
    isFinished = false;
    celebrationSection.classList.add('hidden');
  }
  updateButtons();
  renderStepLog();
}
function startSimulation() {
  if (isFinished) {
    resetSimulation();
    return;
  }
  if (simulationHistory.length > 0) {
    nextStep();
    return;
  }
  currentAlgorithm = algorithmSelect.value;
  if (currentAlgorithm === 'kruskal') {
    simulationHistory = generateKruskalSteps();
  } else {
    simulationHistory = generatePrimSteps('A');
  }
  currentStep = -1;
  isFinished = false;
  nextStep();
}
function nextStep() {
  if (currentStep < simulationHistory.length - 1) {
    currentStep++;
    updateUI();
    const btn = document.getElementById('nextButton');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
  }
}
function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    isFinished = false;
    updateUI();
    const btn = document.getElementById('prevButton');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
  }
}
function resetSimulation() {
  simulationHistory = [];
  currentStep = -1;
  isFinished = false;
  updateUI();
  statusMsg.textContent = translateLegacyRuntime("legacy.bb4e47e6adbc1c2d");
  statusMsg.className = 'status-message';
  celebrationSection.classList.add('hidden');
}
algorithmSelect.addEventListener('change', function () {
  currentAlgorithm = algorithmSelect.value;
  resetSimulation();
});
window.addEventListener('load', resetSimulation);
Object.assign(window, {
  edgeEquals: edgeEquals,
  generateKruskalSteps: generateKruskalSteps,
  generatePrimSteps: generatePrimSteps,
  getNodeState: getNodeState,
  getEdgeState: getEdgeState,
  renderGraph: renderGraph,
  renderKruskalEdgeList: renderKruskalEdgeList,
  renderPrimFrontier: renderPrimFrontier,
  renderAlgorithmPanel: renderAlgorithmPanel,
  renderStepLog: renderStepLog,
  showMessage: showMessage,
  updateButtons: updateButtons,
  updateUI: updateUI,
  startSimulation: startSimulation,
  nextStep: nextStep,
  previousStep: previousStep,
  resetSimulation: resetSimulation
});
export { edgeEquals, generateKruskalSteps, generatePrimSteps, getNodeState, getEdgeState, renderGraph, renderKruskalEdgeList, renderPrimFrontier, renderAlgorithmPanel, renderStepLog, showMessage, updateButtons, updateUI, startSimulation, nextStep, previousStep, resetSimulation };
