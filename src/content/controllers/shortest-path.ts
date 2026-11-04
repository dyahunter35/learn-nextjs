// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const dijkstraGraph = {
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
const INF = 999999;
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
let latestPrevious = null;
let highlightDestination = null;
const graphSvg = document.getElementById('graphSvg');
const statusMsg = document.getElementById('statusMessage');
const stepsLog = document.getElementById('stepsLog');
const startNodeSelect = document.getElementById('startNodeSelect');
const distanceTableBody = document.getElementById('distanceTableBody');
const finalPathsContainer = document.getElementById('finalPathsContainer');
const finalPathsSection = document.getElementById('finalPathsSection');
function generateDijkstraSteps(graph, start) {
  const distances = {};
  const previous = {};
  const visited = new Set();
  const steps = [];
  for (const n of NODES) distances[n] = n === start ? 0 : INF;
  for (const n of NODES) previous[n] = null;
  const pq = [{
    node: start,
    dist: 0
  }];
  steps.push({
    currentNode: null,
    distances: {
      ...distances
    },
    visited: new Set(),
    frontier: [start],
    relaxedEdges: [],
    previous: {
      ...previous
    },
    message: translateLegacyRuntime(`بدء خوارزمية ديكسترا من العقدة ${start}`, "legacy.316ff22542cb08c0", "\u0628\u062F\u0621 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u062F\u064A\u0643\u0633\u062A\u0631\u0627 \u0645\u0646 \u0627\u0644\u0639\u0642\u062F\u0629 ${start}")
  });
  while (pq.length > 0) {
    pq.sort((a, b) => a.dist - b.dist);
    const {
      node: current
    } = pq.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    steps.push({
      currentNode: current,
      distances: {
        ...distances
      },
      visited: new Set(visited),
      frontier: [...new Set(pq.map(n => n.node).filter(n => !visited.has(n)))],
      relaxedEdges: [],
      previous: {
        ...previous
      },
      message: translateLegacyRuntime(`زيارة العقدة ${current} — المسافة: ${distances[current]}`, "legacy.e59aff1e64407096", "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0639\u0642\u062F\u0629 ${current} \u2014 \u0627\u0644\u0645\u0633\u0627\u0641\u0629: ${distances[current]}")
    });
    const relaxed = [];
    for (const edge of graph[current]) {
      if (visited.has(edge.to)) continue;
      const nd = distances[current] + edge.w;
      if (nd < distances[edge.to]) {
        distances[edge.to] = nd;
        previous[edge.to] = current;
        pq.push({
          node: edge.to,
          dist: nd
        });
        relaxed.push({
          from: current,
          to: edge.to,
          weight: edge.w
        });
      }
    }
    if (relaxed.length > 0) {
      steps.push({
        currentNode: current,
        distances: {
          ...distances
        },
        visited: new Set(visited),
        frontier: [...new Set(pq.map(n => n.node).filter(n => !visited.has(n)))],
        relaxedEdges: relaxed,
        previous: {
          ...previous
        },
        message: translateLegacyRuntime(`تحديث: ${relaxed.map(e => `${e.to}=${distances[e.to]}`).join('، ')}`, "legacy.09458d72ceed2f8e", "\u062A\u062D\u062F\u064A\u062B: ${relaxed.map(e => `${e.to}=${distances[e.to]}`).join('\u060C ')}")
      });
    }
  }
  steps.push({
    currentNode: null,
    distances: {
      ...distances
    },
    visited: new Set(NODES),
    frontier: [],
    relaxedEdges: [],
    previous: {
      ...previous
    },
    message: translateLegacyRuntime(`اكتملت خوارزمية ديكسترا — تم إيجاد أقصر المسارات من ${start} إلى جميع العقد`, "legacy.736bc9558441eb0e", "\u0627\u0643\u062A\u0645\u0644\u062A \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u062F\u064A\u0643\u0633\u062A\u0631\u0627 \u2014 \u062A\u0645 \u0625\u064A\u062C\u0627\u062F \u0623\u0642\u0635\u0631 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0645\u0646 ${start} \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u0639\u0642\u062F")
  });
  return steps;
}
function reconstructPath(previous, target) {
  if (previous[target] === null && target !== NODES.find(n => previous[n] === null)) return [];
  const path = [];
  let cur = target;
  while (cur !== null) {
    path.unshift(cur);
    cur = previous[cur];
  }
  return path;
}
function getPathEdges(path) {
  const edges = [];
  for (let i = 0; i < path.length - 1; i++) {
    edges.push([path[i], path[i + 1]]);
  }
  return edges;
}
function edgeHasNodes(edge, a, b) {
  return edge[0] === a && edge[1] === b || edge[0] === b && edge[1] === a;
}
function getNodeState(node, step) {
  if (step.currentNode === node) return 'current';
  if (step.visited.has(node)) return 'visited';
  if (step.frontier.includes(node)) return 'frontier';
  return 'unvisited';
}
function isEdgeRelaxed(edge, step) {
  if (!step.relaxedEdges) return false;
  return step.relaxedEdges.some(e => edgeHasNodes(edge, e.from, e.to));
}
function isEdgeOnPath(edge, pathEdges) {
  return pathEdges.some(pe => edgeHasNodes(edge, pe[0], pe[1]));
}
function renderGraph(step, pathEdges) {
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
  let html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="sp-svg" style="max-width:${width}px">`;
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
    let cls = 'sp-edge';
    if (isEdgeOnPath(edge, pathEdges)) {
      cls = 'sp-edge-path';
    } else if (isEdgeRelaxed(edge, step)) {
      cls = 'sp-edge-relaxed';
    }
    html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" />`;
    html += `<circle cx="${mx}" cy="${my}" r="10" class="sp-edge-label-bg" />`;
    html += `<text x="${mx}" y="${my + 0.5}" class="sp-edge-label">${edge[2]}</text>`;
  }
  for (const node of NODES) {
    const pos = nodePositions[node];
    const cx = pos.x * scaleX,
      cy = pos.y * scaleY;
    const state = getNodeState(node, step);
    const r = 22 * Math.min(scaleX, scaleY);
    let cls = 'sp-node';
    let subCls = state === 'current' ? 'sp-node-current' : state === 'visited' ? 'sp-node-visited' : state === 'frontier' ? 'sp-node-frontier' : 'sp-node-unvisited';
    let filter = '';
    if (state !== 'unvisited') filter += ' filter="url(#shadowNode)"';
    html += `<g class="${cls} ${subCls}"${filter}>`;
    html += `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, 16)}" />`;
    const isLight = state !== 'unvisited';
    const labelCls = isLight ? 'sp-node-label-light' : 'sp-node-label';
    const fontSize = Math.max(14 * Math.min(scaleX, scaleY), 11);
    html += `<text x="${cx}" y="${cy + fontSize * 0.35}" class="${labelCls}" font-size="${fontSize}">${node}</text>`;
    html += `</g>`;
    const dist = step.distances[node];
    const distText = dist >= INF ? '∞' : dist;
    const distCls = dist >= INF ? 'sp-dist-label-inf' : 'sp-dist-label';
    const distY = cy + Math.max(r, 16) + 16;
    html += `<text x="${cx}" y="${distY}" class="${distCls}">${distText}</text>`;
  }
  html += '</svg>';
  graphSvg.innerHTML = html;
}
function renderDistances(step, previousData) {
  distanceTableBody.innerHTML = '';
  const start = startNodeSelect.value;
  for (const node of NODES) {
    const dist = step.distances[node];
    const isSource = node === start;
    const row = document.createElement('tr');
    if (isSource) row.className = 'current-source';
    let pathHtml = '—';
    if (dist < INF && previousData && step.visited.has(node)) {
      const p = reconstructPath(previousData, node);
      if (p.length > 0) pathHtml = p.join(' ← ');
    }
    row.innerHTML = `
      <td class="font-mono font-bold text-indigo-700">${node}</td>
      <td class="font-mono font-bold ${dist >= INF ? 'text-gray-300' : dist === 0 ? 'text-green-600' : 'text-gray-800'}">${dist >= INF ? '∞' : dist}</td>
      <td class="text-xs text-gray-600">${pathHtml}</td>
    `;
    distanceTableBody.appendChild(row);
  }
}
function renderStepLog() {
  stepsLog.innerHTML = '';
  if (simulationHistory.length === 0) return;
  let tableHtml = translateLegacyRuntime(`
    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <table class="steps-table">
        <thead><tr>
          <th>#</th>
          <th>العقدة</th>
          <th>الحدود</th>
          <th>الحواف المرخاة</th>
          <th>الرسالة</th>
        </tr></thead><tbody>`, "legacy.498eb386c6ced380", "\n    <div class=\"overflow-x-auto rounded-lg border border-gray-200\">\n      <table class=\"steps-table\">\n        <thead><tr>\n          <th>#</th>\n          <th>\u0627\u0644\u0639\u0642\u062F\u0629</th>\n          <th>\u0627\u0644\u062D\u062F\u0648\u062F</th>\n          <th>\u0627\u0644\u062D\u0648\u0627\u0641 \u0627\u0644\u0645\u0631\u062E\u0627\u0629</th>\n          <th>\u0627\u0644\u0631\u0633\u0627\u0644\u0629</th>\n        </tr></thead><tbody>");
  for (let i = simulationHistory.length - 1; i >= 0; i--) {
    const s = simulationHistory[i];
    const rowCls = i === currentStep ? 'current-step' : '';
    const currentLabel = s.currentNode || '—';
    const frontierStr = s.frontier.length > 0 ? s.frontier.join(', ') : '∅';
    const relaxedStr = s.relaxedEdges.length > 0 ? s.relaxedEdges.map(e => `${e.from}→${e.to}`).join(', ') : '—';
    tableHtml += `<tr class="${rowCls}">
      <td class="font-bold text-indigo-600">${i}</td>
      <td class="font-mono font-bold">${currentLabel}</td>
      <td class="font-mono text-amber-700 font-semibold" style="font-size:0.7rem">${frontierStr}</td>
      <td class="font-mono text-amber-600 font-semibold" style="font-size:0.7rem">${relaxedStr}</td>
      <td style="font-size:0.7rem">${s.message}</td>
    </tr>`;
  }
  tableHtml += '</tbody></table></div>';
  stepsLog.innerHTML = tableHtml;
}
function renderFinalPaths(previousData) {
  finalPathsContainer.innerHTML = '';
  const start = startNodeSelect.value;
  for (const node of NODES) {
    const dist = previousData ? previousData[node] : null;
    const path = reconstructPath(previousData, node);
    if (path.length === 0) continue;
    const div = document.createElement('div');
    div.className = 'final-path-item';
    div.dataset.target = node;
    if (node === highlightDestination) div.classList.add('active');
    const pathStr = path.join(' ← ');
    const isSource = node === start;
    div.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="font-bold text-indigo-700 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-sm">${node}</span>
        <span class="text-xs text-gray-600 font-mono">${pathStr}</span>
      </div>
      <span class="font-bold text-green-700">${dist}</span>
    `;
    div.addEventListener('click', () => {
      if (isSource) return;
      highlightDestination = node;
      renderFinalPaths(previousData);
      const step = simulationHistory[currentStep];
      const path = reconstructPath(previousData, node);
      const pathEdges = getPathEdges(path);
      renderGraph(step, pathEdges);
    });
    finalPathsContainer.appendChild(div);
  }
}
function showMessage(msg, type) {
  if (!statusMsg) return;
  statusMsg.textContent = msg;
  statusMsg.className = 'status-message ' + type;
}
function updateUI() {
  if (currentStep >= 0 && currentStep < simulationHistory.length) {
    const step = simulationHistory[currentStep];
    latestPrevious = step.previous;
    highlightDestination = null;
    renderGraph(step, []);
    if (step.currentNode === null && step.visited.size === 0) {
      renderDistances(simulationHistory[0], null);
    } else {
      renderDistances(step, step.previous);
    }
    if (step.type === 'done' || step.visited.size === NODES.length) {
      showMessage(step.message, 'success');
      isFinished = true;
      finalPathsSection.classList.remove('hidden');
      renderFinalPaths(step.previous);
    } else {
      showMessage(step.message, 'info');
      isFinished = false;
      finalPathsSection.classList.add('hidden');
    }
  } else {
    const emptyStep = {
      currentNode: null,
      distances: NODES.reduce((o, n) => (o[n] = INF, o), {}),
      visited: new Set(),
      frontier: [],
      relaxedEdges: [],
      previous: NODES.reduce((o, n) => (o[n] = null, o), {})
    };
    emptyStep.distances[startNodeSelect.value] = 0;
    renderGraph(emptyStep, []);
    renderDistances(emptyStep, null);
    showMessage(translateLegacyRuntime("legacy.d5da8f55cca6bb8d"), 'info');
    isFinished = false;
    finalPathsSection.classList.add('hidden');
  }
  updateButtons();
  renderStepLog();
}
function updateButtons() {
  const startBtn = document.getElementById('startButton');
  const nextBtn = document.getElementById('nextButton');
  const prevBtn = document.getElementById('prevButton');
  const resetBtn = document.getElementById('resetButton');
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
function startSimulation() {
  if (isFinished) {
    resetSimulation();
    return;
  }
  if (simulationHistory.length > 0) {
    nextStep();
    return;
  }
  const start = startNodeSelect.value;
  simulationHistory = generateDijkstraSteps(dijkstraGraph, start);
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
  if (!document.getElementById('graphSvg')) return;
  simulationHistory = [];
  currentStep = -1;
  isFinished = false;
  latestPrevious = null;
  highlightDestination = null;
  updateUI();
  if (statusMsg) {
    statusMsg.textContent = translateLegacyRuntime("legacy.d5da8f55cca6bb8d");
    statusMsg.className = 'status-message';
  }
}
window.addEventListener('load', function () {
  resetSimulation();
});
Object.assign(window, {
  generateDijkstraSteps: generateDijkstraSteps,
  reconstructPath: reconstructPath,
  getPathEdges: getPathEdges,
  edgeHasNodes: edgeHasNodes,
  getNodeState: getNodeState,
  isEdgeRelaxed: isEdgeRelaxed,
  isEdgeOnPath: isEdgeOnPath,
  renderGraph: renderGraph,
  renderDistances: renderDistances,
  renderStepLog: renderStepLog,
  renderFinalPaths: renderFinalPaths,
  showMessage: showMessage,
  updateUI: updateUI,
  updateButtons: updateButtons,
  startSimulation: startSimulation,
  nextStep: nextStep,
  previousStep: previousStep,
  resetSimulation: resetSimulation
});
export { generateDijkstraSteps, reconstructPath, getPathEdges, edgeHasNodes, getNodeState, isEdgeRelaxed, isEdgeOnPath, renderGraph, renderDistances, renderStepLog, renderFinalPaths, showMessage, updateUI, updateButtons, startSimulation, nextStep, previousStep, resetSimulation };
