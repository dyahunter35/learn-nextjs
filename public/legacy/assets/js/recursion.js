const state = {
  currentStep: -1,
  simulationHistory: [],
  steps: [],
  example: 'factorial',
  n: 5,
  started: false,
  finished: false,
  nodeIdCounter: 0,
};

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function buildRecursionTree(name, n, type) {
  const steps = [];
  let nodeIdCounter = 0;

  function traverse(funcName, arg, depth, parentId) {
    const nodeId = ++nodeIdCounter;
    steps.push({
      type: 'call',
      name: funcName,
      args: arg,
      depth,
      id: nodeId,
      parentId,
      returnValue: null,
    });

    if (type === 'factorial') {
      if (arg <= 1) {
        steps.push({
          type: 'return',
          name: funcName,
          args: arg,
          depth,
          id: ++nodeIdCounter,
          parentId: nodeId,
          returnValue: 1,
          baseCase: true,
        });
        return 1;
      }
      const childResult = traverse(funcName, arg - 1, depth + 1, nodeId);
      const result = arg * childResult;
      steps.push({
        type: 'return',
        name: funcName,
        args: arg,
        depth,
        id: ++nodeIdCounter,
        parentId: nodeId,
        returnValue: result,
        childResult,
        operation: `${arg} × ${childResult}`,
      });
      return result;
    } else {
      if (arg <= 1) {
        steps.push({
          type: 'return',
          name: funcName,
          args: arg,
          depth,
          id: ++nodeIdCounter,
          parentId: nodeId,
          returnValue: arg,
          baseCase: true,
        });
        return arg;
      }
      const leftResult = traverse(funcName, arg - 1, depth + 1, nodeId);
      const rightResult = traverse(funcName, arg - 2, depth + 1, nodeId);
      const result = leftResult + rightResult;
      steps.push({
        type: 'return',
        name: funcName,
        args: arg,
        depth,
        id: ++nodeIdCounter,
        parentId: nodeId,
        returnValue: result,
        childResult: `${leftResult} + ${rightResult}`,
        operation: `${leftResult} + ${rightResult}`,
      });
      return result;
    }
  }

  traverse(name, n, 0, null);
  return steps;
}

function startSimulation() {
  const example = state.example;
  const inputEl = document.getElementById('nInput');
  state.n = parseInt(inputEl.value);
  if (isNaN(state.n) || state.n < 0) state.n = 0;
  const n = state.n;

  if (example === 'factorial' && (n < 0 || n > 10 || !Number.isInteger(n))) {
    showMessage('الرجاء إدخال عدد صحيح بين 0 و 10', 'error');
    return;
  }
  if (example === 'fibonacci' && (n < 0 || n > 15 || !Number.isInteger(n))) {
    showMessage('الرجاء إدخال عدد صحيح بين 0 و 15', 'error');
    return;
  }

  const funcName = example === 'factorial' ? 'fact' : 'fib';
  state.steps = buildRecursionTree(funcName, n, example);
  state.currentStep = -1;
  state.simulationHistory = [];
  state.finished = false;
  state.started = true;

  document.getElementById('startButton').disabled = true;

  showMessage(`بدء المحاكاة لـ ${funcName}(${n}) ...`, 'info');
  nextStep();
}

function nextStep() {
  if (state.started && state.currentStep >= state.steps.length - 1) {
    if (!state.finished) {
      state.finished = true;
      showFinalResult();
    }
    updateControls();
    return;
  }

  state.currentStep++;
  state.simulationHistory.push(state.steps[state.currentStep]);
  renderVisualization();
  updateControls();
}

function previousStep() {
  if (state.currentStep <= 0) return;
  state.simulationHistory.pop();
  state.currentStep--;
  state.finished = false;
  renderVisualization();
  updateControls();
}

function resetSimulation() {
  state.currentStep = -1;
  state.simulationHistory = [];
  state.steps = [];
  state.started = false;
  state.finished = false;

  document.getElementById('treeContainer').innerHTML = `
    <div class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <p class="text-lg font-medium text-gray-500">لم تبدأ المحاكاة بعد</p>
      <p class="text-sm text-gray-400 mt-1">اختر مثالاً وأدخل القيمة ثم اضغط "ابدأ المحاكاة"</p>
    </div>
  `;
  document.getElementById('callStackContainer').innerHTML = '';
  document.getElementById('stepsLog').innerHTML = '';
  document.getElementById('resultDisplay').innerHTML = '';
  document.getElementById('nodeCountBadge').textContent = '0 عقدة';
  document.getElementById('startButton').disabled = false;
  showMessage('المحاكاة جاهزة. اختر مثالاً وأدخل القيمة.', 'info');
  updateControls();
}

function updateControls() {
  const totalSteps = state.steps.length;
  document.getElementById('startButton').disabled = state.started && !state.finished;
  document.getElementById('nextButton').disabled = !state.started || state.finished || state.currentStep >= totalSteps - 1;
  document.getElementById('prevButton').disabled = !state.started || state.currentStep <= 0;
}

function updateExample(choice) {
  state.example = choice;
  const input = document.getElementById('nInput');
  if (choice === 'factorial') {
    input.max = 10;
    input.placeholder = '0 - 10';
    if (parseInt(input.value) > 10) input.value = 10;
  } else {
    input.max = 15;
    input.placeholder = '0 - 15';
    if (parseInt(input.value) > 15) input.value = 15;
  }
  resetSimulation();
}

function renderVisualization() {
  const history = state.simulationHistory;
  if (history.length === 0) return;

  renderTree(history);
  renderCallStack(history);
  renderStepsTable(history);
  updateNodeCount(history);

  const lastStep = history[history.length - 1];
  if (lastStep.type === 'call') {
    showMessage(`🔵 استدعاء: ${lastStep.name}(${lastStep.args}) - العمق ${lastStep.depth}`, 'info');
  } else if (lastStep.type === 'return') {
    const msg = lastStep.baseCase
      ? `🟢 حالة أساسية: ${lastStep.name}(${lastStep.args}) = ${lastStep.returnValue}`
      : `🟢 عودة: ${lastStep.name}(${lastStep.args}) = ${lastStep.operation} = ${lastStep.returnValue}`;
    showMessage(msg, 'success');
  }
}

function renderTree(history) {
  const container = document.getElementById('treeContainer');
  container.innerHTML = '';

  const callNodes = history.filter(s => s.type === 'call');
  const returnNodes = history.filter(s => s.type === 'return');

  if (callNodes.length === 0) return;

  const nodeW = 90;
  const nodeH = 60;
  const levelGapY = 100;
  const paddingX = 60;
  const paddingY = 40;

  const levelMap = {};
  callNodes.forEach(n => {
    if (!levelMap[n.depth]) levelMap[n.depth] = [];
    levelMap[n.depth].push(n);
  });

  const depths = Object.keys(levelMap).map(Number).sort((a, b) => a - b);

  let maxLeafCount = 1;
  depths.forEach(d => {
    const count = levelMap[d].length;
    if (count > maxLeafCount) maxLeafCount = count;
  });
  const treeWidth = Math.max(paddingX * 2 + nodeW, paddingX * 2 + maxLeafCount * (nodeW + 30));
  const treeHeight = depths.length * levelGapY + paddingY * 2;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${treeWidth} ${treeHeight}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('style', 'min-height: ' + treeHeight + 'px');
  svg.classList.add('rec-tree-svg');

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
  marker.setAttribute('id', 'arrowhead');
  marker.setAttribute('markerWidth', '10');
  marker.setAttribute('markerHeight', '7');
  marker.setAttribute('refX', '10');
  marker.setAttribute('refY', '3.5');
  marker.setAttribute('orient', 'auto');
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
  polygon.setAttribute('fill', '#9ca3af');
  marker.appendChild(polygon);
  defs.appendChild(marker);

  const markerActive = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
  markerActive.setAttribute('id', 'arrowhead-active');
  markerActive.setAttribute('markerWidth', '10');
  markerActive.setAttribute('markerHeight', '7');
  markerActive.setAttribute('refX', '10');
  markerActive.setAttribute('refY', '3.5');
  markerActive.setAttribute('orient', 'auto');
  const polygon2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon2.setAttribute('points', '0 0, 10 3.5, 0 7');
  polygon2.setAttribute('fill', '#f59e0b');
  markerActive.appendChild(polygon2);
  defs.appendChild(markerActive);

  const markerReturn = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
  markerReturn.setAttribute('id', 'arrowhead-return');
  markerReturn.setAttribute('markerWidth', '10');
  markerReturn.setAttribute('markerHeight', '7');
  markerReturn.setAttribute('refX', '10');
  markerReturn.setAttribute('refY', '3.5');
  markerReturn.setAttribute('orient', 'auto');
  const polygon3 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon3.setAttribute('points', '0 0, 10 3.5, 0 7');
  polygon3.setAttribute('fill', '#10b981');
  markerReturn.appendChild(polygon3);
  defs.appendChild(markerReturn);

  svg.appendChild(defs);

  const positions = {};

  depths.forEach((depth, di) => {
    const nodes = levelMap[depth];
    const totalWidth = nodes.length * nodeW + (nodes.length - 1) * 30;
    const startX = (treeWidth - totalWidth) / 2;

    nodes.forEach((n, ni) => {
      const x = startX + ni * (nodeW + 30);
      const y = paddingY + di * levelGapY;
      positions[n.id] = { x, y, depth: di };
    });
  });

  const completedCallIds = new Set();
  callNodes.forEach(s => {
    const hasReturn = returnNodes.some(r => r.parentId === s.id);
    if (hasReturn) completedCallIds.add(s.id);
  });

  const lastStepType = history.length > 0 ? history[history.length - 1].type : null;

  // Build a map from call id to its return step (if present)
  const returnByParent = {};
  returnNodes.forEach(r => {
    returnByParent[r.parentId] = r;
  });

  // Draw connectors (edges) first — behind nodes
  callNodes.forEach(step => {
    if (!step.parentId || !positions[step.id] || !positions[step.parentId]) return;
    const parent = positions[step.parentId];
    const child = positions[step.id];
    const isCompleted = completedCallIds.has(step.id);
    const returnStep = returnByParent[step.id];

    let connectorClass = 'rec-connector';
    let arrowId = 'url(#arrowhead)';
    let labelColor = '#6b7280';
    let labelText = '';

    if (isCompleted && returnStep) {
      connectorClass = 'rec-connector-return';
      arrowId = 'url(#arrowhead-return)';
      labelColor = '#10b981';
      labelText = `= ${returnStep.returnValue}`;
    } else if (lastStepType === 'call') {
      connectorClass = 'rec-connector-active';
      arrowId = 'url(#arrowhead-active)';
      labelColor = '#f59e0b';
      labelText = `${step.name}(${step.args})`;
    }

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', parent.x + nodeW / 2);
    line.setAttribute('y1', parent.y + nodeH / 2);
    line.setAttribute('x2', child.x + nodeW / 2);
    line.setAttribute('y2', child.y + nodeH / 2);
    line.setAttribute('class', connectorClass);
    line.setAttribute('marker-end', arrowId);
    svg.appendChild(line);

    if (labelText) {
      const midX = (parent.x + child.x) / 2 + nodeW / 2;
      const midY = (parent.y + child.y) / 2 + nodeH / 2;
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', midX);
      label.setAttribute('y', midY - 8);
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('class', 'rec-edge-label');
      label.setAttribute('fill', labelColor);
      label.textContent = labelText;
      svg.appendChild(label);
    }
  });

  // Draw nodes (call nodes only — return states update the call node visually)
  callNodes.forEach(n => {
    const pos = positions[n.id];
    if (!pos) return;

    const isCompleted = completedCallIds.has(n.id);
    const isActive = !isCompleted;

    let nodeClass = 'rec-node';
    if (isActive && lastStepType === 'call') {
      nodeClass += ' rec-node-active';
    } else if (isCompleted) {
      nodeClass += ' rec-node-return';
    } else {
      nodeClass += ' rec-node-call';
    }

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    group.setAttribute('x', pos.x);
    group.setAttribute('y', pos.y);
    group.setAttribute('width', nodeW);
    group.setAttribute('height', nodeH);
    group.setAttribute('style', 'overflow: visible;');

    const div = document.createElement('div');
    div.className = nodeClass;
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = 'relative';
    div.style.boxSizing = 'border-box';

    const funcSpan = document.createElement('span');
    funcSpan.className = 'rec-node-func';
    funcSpan.textContent = `${n.name}(${n.args})`;

    const depthSpan = document.createElement('span');
    depthSpan.className = 'rec-depth-indicator';
    depthSpan.textContent = `عمق ${n.depth}`;

    div.appendChild(funcSpan);
    div.appendChild(depthSpan);

    if (isCompleted && returnByParent[n.id]) {
      const returnSpan = document.createElement('span');
      returnSpan.className = 'rec-node-return-val';
      returnSpan.textContent = `← ${returnByParent[n.id].returnValue}`;
      div.appendChild(returnSpan);
    }

    group.appendChild(div);
    svg.appendChild(group);
  });

  container.appendChild(svg);
}

function renderCallStack(history) {
  const container = document.getElementById('callStackContainer');
  container.innerHTML = '';

  const activeCalls = history.filter(s => s.type === 'call');
  const returnedIds = new Set(
    history.filter(s => s.type === 'return').map(s => s.parentId)
  );

  const stack = activeCalls.filter(s => !returnedIds.has(s.id));

  if (stack.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:0.5rem"><p class="text-sm text-gray-400">مكدس الاستدعاء فارغ</p></div>';
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:6px;width:100%';

  const label = document.createElement('div');
  label.className = 'callstack-label';
  label.innerHTML = '🧩 <strong>مكدس الاستدعاء (Call Stack)</strong> — التنفيذ الحالي';
  wrapper.appendChild(label);

  const row = document.createElement('div');
  row.className = 'callstack-row';
  row.style.position = 'relative';

  stack.forEach((s, i) => {
    const nodeWrapper = document.createElement('div');
    nodeWrapper.className = 'callstack-node-wrapper';

    const node = document.createElement('div');
    node.className = 'callstack-node rec-node-callstack';
    node.style.animation = `nodeIn 0.3s ease ${i * 0.1}s both`;

    const funcSpan = document.createElement('span');
    funcSpan.className = 'cs-func';
    funcSpan.textContent = `${s.name}(${s.args})`;

    const depthSpan = document.createElement('span');
    depthSpan.className = 'cs-depth';
    depthSpan.textContent = `عمق ${s.depth}`;

    node.appendChild(funcSpan);
    node.appendChild(depthSpan);

    if (i === 0) {
      node.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
      node.style.color = '#78350f';
      const topLabel = document.createElement('div');
      topLabel.className = 'callstack-top-arrow';
      topLabel.textContent = '▲ التنفيذ الحالي';
      node.style.position = 'relative';
      node.appendChild(topLabel);
    }

    nodeWrapper.appendChild(node);

    if (i < stack.length - 1) {
      const arrowDiv = document.createElement('div');
      arrowDiv.style.cssText = 'display:flex;align-items:center;padding:0 4px;';
      const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      arrowSvg.setAttribute('width', '16');
      arrowSvg.setAttribute('height', '16');
      arrowSvg.setAttribute('viewBox', '0 0 16 16');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M8 3v10m0 0l4-4m-4 4l-4-4');
      path.setAttribute('stroke', '#94a3b8');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      arrowSvg.appendChild(path);
      arrowDiv.appendChild(arrowSvg);
      nodeWrapper.appendChild(arrowDiv);
    }

    row.appendChild(nodeWrapper);
  });

  wrapper.appendChild(row);
  container.appendChild(wrapper);
}

function renderStepsTable(history) {
  const container = document.getElementById('stepsLog');
  const activeStep = state.currentStep;

  let tableHTML = `
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead><tr>
          <th>#</th>
          <th>النوع</th>
          <th>الاستدعاء</th>
          <th>القيمة المُعادة</th>
        </tr></thead><tbody>
  `;

  for (let i = history.length - 1; i >= 0; i--) {
    const step = history[i];
    const rowClass = i === activeStep ? 'current-step' : '';
    const typeColor = step.type === 'call' ? 'text-indigo-600' : 'text-emerald-600';
    const typeText = step.type === 'call' ? '🔵 استدعاء' : '🟢 عودة';
    const returnVal = step.type === 'return' ? (step.returnValue !== null ? step.returnValue : '-') : '-';
    const callText = `${step.name}(${step.args})`;

    tableHTML += `<tr class="${rowClass}">
      <td class="font-bold text-gray-600">${i + 1}</td>
      <td class="${typeColor} font-bold">${typeText}</td>
      <td class="font-mono font-bold">${callText}</td>
      <td class="font-mono font-bold ${step.type === 'return' ? 'text-emerald-600' : 'text-gray-400'}">${returnVal}</td>
    </tr>`;
  }

  tableHTML += '</tbody></table></div>';
  container.innerHTML = tableHTML;
}

function updateNodeCount(history) {
  const callNodes = history.filter(s => s.type === 'call').length;
  const badge = document.getElementById('nodeCountBadge');
  badge.textContent = `${callNodes} عقدة | ${history.length} خطوة`;
}

function showFinalResult() {
  const lastStep = state.simulationHistory[state.simulationHistory.length - 1];
  if (!lastStep) return;

  const container = document.getElementById('resultDisplay');
  container.innerHTML = '';

  const resultDiv = document.createElement('div');
  resultDiv.className = 'result-display';

  const labelSpan = document.createElement('span');
  labelSpan.textContent = `${lastStep.name}(${lastStep.args}) = `;

  const valueSpan = document.createElement('span');
  valueSpan.className = 'result-value';
  valueSpan.textContent = lastStep.returnValue;

  resultDiv.appendChild(labelSpan);
  resultDiv.appendChild(valueSpan);
  container.appendChild(resultDiv);

  showMessage(`🎉 تم الانتهاء! النتيجة: ${lastStep.name}(${lastStep.args}) = ${lastStep.returnValue}`, 'success');
  document.getElementById('startButton').disabled = true;
}

function showMessage(message, type = 'info') {
  const el = document.getElementById('statusMessage');
  el.textContent = message;
  el.className = 'status-message ' + type;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('nInput').addEventListener('change', function () {
    const val = parseInt(this.value);
    if (isNaN(val) || val < 0) {
      this.value = state.example === 'factorial' ? 0 : 0;
      return;
    }
    const max = state.example === 'factorial' ? 10 : 15;
    if (val > max) this.value = max;
    state.n = parseInt(this.value);
    if (state.started) resetSimulation();
  });

  document.getElementById('nInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!state.started) startSimulation();
    }
  });
});
