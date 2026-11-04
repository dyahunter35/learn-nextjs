// @ts-nocheck
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'E', 'F'],
  D: ['B', 'E'],
  E: ['B', 'C', 'D', 'F'],
  F: ['C', 'E']
};

const NODES = ['A', 'B', 'C', 'D', 'E', 'F'];
const EDGES = [
  ['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'],
  ['C', 'E'], ['C', 'F'], ['D', 'E'], ['E', 'F']
];
const INF = 999999;

const nodePositions = {};
const centerX = 280, centerY = 180, radius = 140;
NODES.forEach((n, i) => {
  const angle = (i / NODES.length) * 2 * Math.PI - Math.PI / 2;
  nodePositions[n] = {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
});

let simulationHistory = [];
let currentStep = -1;
let isFinished = false;
let autoPlayTimer = null;
let autoSpeed = 800;

const graphSvg = document.getElementById('graphSvg');
const statusMsg = document.getElementById('statusMessage');
const frontierContainer = document.getElementById('frontierContainer');
const visitedOrderContainer = document.getElementById('visitedOrderContainer');
const stepsLog = document.getElementById('stepsLog');
const algorithmSelect = document.getElementById('algorithmSelect');
const startNodeSelect = document.getElementById('startNodeSelect');

function generateHistory(algo, start) {
  const visited = new Set();
  const discovered = new Set([start]);
  const frontier = [start];
  const history = [];
  const discoveredEdges = [];

  history.push({
    current: null,
    frontier: [...frontier],
    visited: new Set(),
    discovered: new Set(discovered),
    activeEdges: [],
    visitedOrder: [],
    type: 'init',
    msg: `بدء ${algo === 'bfs' ? 'BFS - البحث بالعرض' : 'DFS - البحث بالعمق'} من العقدة ${start}`
  });

  while (frontier.length > 0) {
    let current;
    if (algo === 'bfs') {
      current = frontier.shift();
    } else {
      current = frontier.pop();
    }

    visited.add(current);
    const visitedOrder = [];
    for (const v of visited) visitedOrder.push(v);

    history.push({
      current: current,
      frontier: [...frontier],
      visited: new Set(visited),
      discovered: new Set(discovered),
      activeEdges: [],
      visitedOrder: visitedOrder,
      type: 'visit',
      msg: `زيارة العقدة ${current}`
    });

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor) && !discovered.has(neighbor)) {
        discovered.add(neighbor);
        frontier.push(neighbor);
        discoveredEdges.push([current, neighbor]);

        const vo = [];
        for (const v of visited) vo.push(v);

        history.push({
          current: current,
          frontier: [...frontier],
          visited: new Set(visited),
          discovered: new Set(discovered),
          activeEdges: [[current, neighbor]],
          visitedOrder: vo,
          type: 'discover',
          msg: `اكتشاف العقدة ${neighbor} من ${current}`
        });
      }
    }
  }

  const finalOrder = [];
  for (const v of visited) finalOrder.push(v);

  history.push({
    current: null,
    frontier: [],
    visited: new Set(visited),
    discovered: new Set(discovered),
    activeEdges: [],
    visitedOrder: finalOrder,
    type: 'done',
    msg: `اكتملت ${algo === 'bfs' ? 'خوارزمية BFS' : 'خوارزمية DFS'} — تمت زيارة ${visited.size} عقد`
  });

  return history;
}

function getNodeState(node, step) {
  if (step.current === node) return 'current';
  if (step.visited.has(node)) return 'visited';
  if (step.discovered.has(node)) return 'discovered';
  return 'unvisited';
}

function edgeHasNodes(edge, a, b) {
  return (edge[0] === a && edge[1] === b) || (edge[0] === b && edge[1] === a);
}

function getEdgeActive(edge, step) {
  if (!step.activeEdges || step.activeEdges.length === 0) return false;
  for (const ae of step.activeEdges) {
    if (edgeHasNodes(edge, ae[0], ae[1])) return true;
  }
  return false;
}

function getEdgeVisited(edge, step) {
  if (step.current === null) return false;
  const aVisited = step.visited.has(edge[0]);
  const bVisited = step.visited.has(edge[1]);
  return aVisited && bVisited;
}

function renderGraph(step) {
  let width = 560, height = 360;
  const container = graphSvg.parentElement;
  const rect = container.getBoundingClientRect();
  if (rect.width > 0 && rect.width < 600) {
    width = Math.max(rect.width - 16, 300);
    height = Math.round(width * 360 / 560);
  }

  const scaleX = width / 560;
  const scaleY = height / 360;

  let html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="graph-svg" style="max-width:${width}px">`;

  html += `<defs>
    <filter id="glowCurrent"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="shadowNode"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.2"/></filter>
  </defs>`;

  for (const edge of EDGES) {
    const p1 = nodePositions[edge[0]];
    const p2 = nodePositions[edge[1]];
    const x1 = p1.x * scaleX, y1 = p1.y * scaleY;
    const x2 = p2.x * scaleX, y2 = p2.y * scaleY;

    let cls = 'graph-edge';
    if (getEdgeActive(edge, step)) {
      cls = 'graph-edge-active';
    } else if (getEdgeVisited(edge, step)) {
      cls = 'graph-edge-visited';
    }

    html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" />`;
  }

  for (const node of NODES) {
    const pos = nodePositions[node];
    const cx = pos.x * scaleX, cy = pos.y * scaleY;
    const state = getNodeState(node, step);
    const r = 22 * Math.min(scaleX, scaleY);

    let cls = 'graph-node';
    let subCls = state === 'current' ? 'graph-node-current' :
                 state === 'visited' ? 'graph-node-visited' :
                 state === 'discovered' ? 'graph-node-discovered' : 'graph-node-unvisited';

    let filter = '';
    if (state === 'current') filter = ' filter="url(#glowCurrent)"';
    if (state !== 'unvisited') filter += ' filter="url(#shadowNode)"';

    html += `<g class="${cls} ${subCls}"${filter}>`;
    html += `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, 16)}" />`;

    let textColor = '#1f2937';
    if (state === 'visited' || state === 'current' || state === 'discovered') textColor = '#ffffff';
    const fontSize = Math.max(14 * Math.min(scaleX, scaleY), 11);
    html += `<text x="${cx}" y="${cy + fontSize * 0.35}" text-anchor="middle" fill="${textColor}" font-weight="800" font-size="${fontSize}">${node}</text>`;
    html += `</g>`;
  }

  html += '</svg>';
  graphSvg.innerHTML = html;
}

function renderFrontier(frontier, algo) {
  frontierContainer.innerHTML = '';
  const label = document.createElement('span');
  label.className = 'text-xs font-bold text-gray-500 ml-2';
  label.textContent = algo === 'bfs' ? 'الطابور (Queue):' : 'الكومة (Stack):';
  frontierContainer.appendChild(label);

  if (frontier.length === 0) {
    const empty = document.createElement('span');
    empty.className = 'queue-empty';
    empty.textContent = 'فارغة';
    frontierContainer.appendChild(empty);
    return;
  }

  for (const node of frontier) {
    const item = document.createElement('span');
    item.className = 'queue-item';
    item.textContent = node;
    frontierContainer.appendChild(item);
  }
}

function renderVisitedOrder(order) {
  visitedOrderContainer.innerHTML = '';
  const label = document.createElement('span');
  label.className = 'text-xs font-bold text-gray-500 ml-2';
  label.textContent = 'ترتيب الزيارة:';
  visitedOrderContainer.appendChild(label);

  if (order.length === 0) {
    const empty = document.createElement('span');
    empty.className = 'queue-empty';
    empty.textContent = 'لا يوجد';
    visitedOrderContainer.appendChild(empty);
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'visited-order';

  for (let i = 0; i < order.length; i++) {
    const tag = document.createElement('span');
    tag.className = 'visited-tag';
    tag.textContent = order[i];
    tag.title = `الخطوة ${i + 1}`;
    wrapper.appendChild(tag);
    if (i < order.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'text-gray-400 text-xs mx-0.5';
      arrow.textContent = '←';
      wrapper.appendChild(arrow);
    }
  }

  visitedOrderContainer.appendChild(wrapper);
}

function updateStepLog() {
  stepsLog.innerHTML = '';
  if (simulationHistory.length === 0) return;

  const algo = algorithmSelect.value;

  let tableHtml = `
    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <table class="steps-table">
        <thead><tr>
          <th>#</th>
          <th>العقدة الحالية</th>
          <th>${algo === 'bfs' ? 'الطابور' : 'الكومة'}</th>
          <th>المكتشفة</th>
          <th>الحدث</th>
        </tr></thead><tbody>`;

  for (let i = simulationHistory.length - 1; i >= 0; i--) {
    const s = simulationHistory[i];
    const rowCls = i === currentStep ? 'current-step' : '';
    const currentLabel = s.current || '—';
    const frontierStr = s.frontier.length > 0 ? s.frontier.join(', ') : '∅';
    const discStr = s.discovered.size > 0 ? [...s.discovered].join(', ') : '∅';

    tableHtml += `<tr class="${rowCls}">
      <td class="font-bold text-indigo-600">${i}</td>
      <td class="font-mono font-bold">${currentLabel}</td>
      <td class="font-mono text-amber-700 font-semibold" style="font-size:0.75rem">${frontierStr}</td>
      <td class="font-mono text-indigo-600" style="font-size:0.7rem">${discStr}</td>
      <td style="font-size:0.7rem">${s.msg}</td>
    </tr>`;
  }

  tableHtml += '</tbody></table></div>';
  stepsLog.innerHTML = tableHtml;
}

function showMessage(msg, type = 'info') {
  statusMsg.textContent = msg;
  statusMsg.className = 'status-message ' + type;
}

function updateUI() {
  if (currentStep >= 0 && currentStep < simulationHistory.length) {
    const step = simulationHistory[currentStep];
    renderGraph(step);
    renderFrontier(step.frontier, algorithmSelect.value);
    renderVisitedOrder(step.visitedOrder);

    if (step.type === 'done') {
      showMessage(step.msg, 'success');
      isFinished = true;
    } else {
      showMessage(step.msg, 'info');
      isFinished = false;
    }
  } else {
    renderGraph({ current: null, visited: new Set(), discovered: new Set(), activeEdges: [], visitedOrder: [] });
    renderFrontier([], algorithmSelect.value);
    renderVisitedOrder([]);
    showMessage('اختر الخوارزمية وعقدة البداية، ثم اضغط "ابدأ".', 'info');
    isFinished = false;
  }

  updateButtons();
  updateStepLog();

  document.getElementById('nodeCountBadge').textContent = `${NODES.length} عقد`;
}

function updateButtons() {
  const startBtn = document.getElementById('startButton');
  const nextBtn = document.getElementById('nextButton');
  const prevBtn = document.getElementById('prevButton');
  const resetBtn = document.getElementById('resetButton');

  nextBtn.disabled = isFinished || currentStep >= simulationHistory.length - 1;
  prevBtn.disabled = currentStep <= 0;

  if (currentStep === -1 && !isFinished) {
    startBtn.textContent = '▶ ابدأ / الخطوة الأولى';
    startBtn.disabled = false;
  } else if (isFinished) {
    startBtn.textContent = '✓ اكتمل';
    startBtn.disabled = true;
  } else {
    startBtn.textContent = '▶ تم البدء';
    startBtn.disabled = false;
  }

  if (currentStep >= simulationHistory.length - 1 && simulationHistory.length > 0) {
    isFinished = true;
    nextBtn.disabled = true;
    startBtn.textContent = '✓ اكتمل';
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

  const algo = algorithmSelect.value;
  const start = startNodeSelect.value;

  simulationHistory = generateHistory(algo, start);
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
    setTimeout(() => { btn.style.transform = ''; }, 150);
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    isFinished = false;
    updateUI();
    const btn = document.getElementById('prevButton');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  }
}

function resetSimulation() {
  stopAutoPlay();
  simulationHistory = [];
  currentStep = -1;
  isFinished = false;
  updateUI();
  statusMsg.textContent = 'اختر الخوارزمية وعقدة البداية، ثم اضغط "ابدأ".';
  statusMsg.className = 'status-message';
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
  document.getElementById('autoPlayBtn').textContent = '▶ تشغيل تلقائي';
}

function toggleAutoPlay() {
  if (autoPlayTimer) {
    stopAutoPlay();
    return;
  }

  if (isFinished || currentStep >= simulationHistory.length - 1) {
    if (simulationHistory.length === 0) {
      startSimulation();
    }
    if (isFinished) return;
  }

  autoPlayTimer = setInterval(() => {
    if (currentStep < simulationHistory.length - 1) {
      nextStep();
    } else {
      stopAutoPlay();
    }
  }, autoSpeed);

  document.getElementById('autoPlayBtn').textContent = '⏸ إيقاف';
}

function updateSpeed(val) {
  autoSpeed = parseInt(val);
  document.getElementById('speedValue').textContent = autoSpeed + 'ms';
  if (autoPlayTimer) {
    stopAutoPlay();
    toggleAutoPlay();
  }
}

window.addEventListener('load', function() {
  resetSimulation();
});

Object.assign(window, {generateHistory: generateHistory, getNodeState: getNodeState, edgeHasNodes: edgeHasNodes, getEdgeActive: getEdgeActive, getEdgeVisited: getEdgeVisited, renderGraph: renderGraph, renderFrontier: renderFrontier, renderVisitedOrder: renderVisitedOrder, updateStepLog: updateStepLog, showMessage: showMessage, updateUI: updateUI, updateButtons: updateButtons, startSimulation: startSimulation, nextStep: nextStep, previousStep: previousStep, resetSimulation: resetSimulation, stopAutoPlay: stopAutoPlay, toggleAutoPlay: toggleAutoPlay, updateSpeed: updateSpeed});
export {generateHistory, getNodeState, edgeHasNodes, getEdgeActive, getEdgeVisited, renderGraph, renderFrontier, renderVisitedOrder, updateStepLog, showMessage, updateUI, updateButtons, startSimulation, nextStep, previousStep, resetSimulation, stopAutoPlay, toggleAutoPlay, updateSpeed};
