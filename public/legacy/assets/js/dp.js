const state = {
  currentStep: -1,
  simulationHistory: [],
  steps: [],
  example: 'fibonacci',
  n: 6,
  coins: [1, 3, 4],
  amount: 6,
  started: false,
  finished: false,
};

function buildFibonacciSteps(n) {
  const steps = [];
  const dp = [];

  steps.push({
    step: 0,
    index: 0,
    dpCopy: null,
    explanation: 'نبدأ بتهيئة مصفوفة DP: dp[0] = 0, dp[1] = 1',
    isComplete: false,
    isComputing: false,
    dpBefore: null,
  });

  dp[0] = 0;

  steps.push({
    step: 1,
    index: 0,
    dpCopy: { 0: 0 },
    explanation: 'نخزن القيمة الأساسية: dp[0] = 0',
    isComplete: false,
    isComputing: true,
    dpBefore: null,
  });

  dp[1] = 1;

  steps.push({
    step: 2,
    index: 1,
    dpCopy: { 0: 0, 1: 1 },
    explanation: 'نخزن القيمة الأساسية: dp[1] = 1',
    isComplete: false,
    isComputing: true,
    dpBefore: { 0: 0 },
  });

  for (let i = 2; i <= n; i++) {
    const before = {};
    for (let j = 0; j < i; j++) {
      before[j] = dp[j];
    }

    steps.push({
      step: steps.length,
      index: i,
      dpCopy: { ...before },
      explanation: `نحسب dp[${i}] = dp[${i - 1}] + dp[${i - 2}]`,
      isComplete: false,
      isComputing: true,
      dpBefore: { ...before },
    });

    dp[i] = dp[i - 1] + dp[i - 2];

    steps.push({
      step: steps.length,
      index: i,
      dpCopy: { ...dp },
      explanation: `dp[${i}] = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}`,
      isComplete: false,
      isComputing: false,
      dpBefore: { ...before },
    });
  }

  steps.push({
    step: steps.length,
    index: n,
    dpCopy: { ...dp },
    explanation: `تم الانتهاء! نتيجة fib(${n}) = ${dp[n]}`,
    isComplete: true,
    isComputing: false,
    dpBefore: { ...dp },
  });

  return steps;
}

function buildNaiveFibonacciSteps(n) {
  const steps = [];
  let nodeId = 0;

  function traverse(arg, depth) {
    const id = ++nodeId;
    steps.push({
      id,
      arg,
      depth,
      returnValue: null,
      type: 'call',
      parentId: null,
    });

    if (arg <= 1) {
      const retId = ++nodeId;
      steps.push({
        id: retId,
        arg,
        depth,
        returnValue: arg,
        type: 'return',
        parentId: id,
        baseCase: true,
      });
      return arg;
    }

    const left = traverse(arg - 1, depth + 1);
    const right = traverse(arg - 2, depth + 1);
    const result = left + right;

    const retId = ++nodeId;
    steps.push({
      id: retId,
      arg,
      depth,
      returnValue: result,
      type: 'return',
      parentId: id,
      operation: `${left} + ${right}`,
    });
    return result;
  }

  traverse(n, 0);

  const finalStep = steps[steps.length - 1];
  return { fibSteps: steps, result: finalStep.returnValue };
}

function buildCoinChangeSteps(coins, amount) {
  const steps = [];
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  steps.push({
    step: 0,
    index: 0,
    dpCopy: null,
    explanation: `نبدأ بتهيئة جدول DP: dp[0] = 0, باقي الخلايا = ∞`,
    isComplete: false,
    isComputing: false,
    coinIndex: -1,
    amountIndex: 0,
  });

  for (let cIdx = 0; cIdx < coins.length; cIdx++) {
    const coin = coins[cIdx];

    steps.push({
      step: steps.length,
      index: -1,
      dpCopy: [...dp],
      explanation: `نبدأ معالجة العملة رقم ${cIdx + 1}: ${coin}`,
      isComplete: false,
      isComputing: false,
      coinIndex: cIdx,
      amountIndex: -1,
    });

    for (let a = coin; a <= amount; a++) {
      const before = [...dp];

      steps.push({
        step: steps.length,
        index: a,
        dpCopy: [...dp],
        explanation: `نحسب dp[${a}] باستخدام عملة ${coin}: min(dp[${a}], dp[${a - coin}] + 1)`,
        isComplete: false,
        isComputing: true,
        coinIndex: cIdx,
        amountIndex: a,
        dpBefore: before,
      });

      if (dp[a - coin] + 1 < dp[a]) {
        dp[a] = dp[a - coin] + 1;
        steps.push({
          step: steps.length,
          index: a,
          dpCopy: [...dp],
          explanation: `تم التحديث: dp[${a}] = dp[${a - coin}] + 1 = ${dp[a - coin]} + 1 = ${dp[a]}`,
          isComplete: false,
          isComputing: false,
          coinIndex: cIdx,
          amountIndex: a,
          dpBefore: before,
          updated: true,
        });
      } else {
        steps.push({
          step: steps.length,
          index: a,
          dpCopy: [...dp],
          explanation: `لا حاجة للتحديث: dp[${a}] = ${dp[a]} (أفضل من ${dp[a - coin] + 1})`,
          isComplete: false,
          isComputing: false,
          coinIndex: cIdx,
          amountIndex: a,
          dpBefore: before,
          updated: false,
        });
      }
    }
  }

  const finalAns = dp[amount] === Infinity ? -1 : dp[amount];
  steps.push({
    step: steps.length,
    index: amount,
    dpCopy: [...dp],
    explanation: finalAns === -1
      ? `لا يمكن تكوين المبلغ ${amount} بالعملات المتاحة`
      : `تم الانتهاء! أقل عدد عملات لتكوين ${amount} = ${finalAns}`,
    isComplete: true,
    isComputing: false,
    coinIndex: coins.length - 1,
    amountIndex: amount,
    finalValue: finalAns,
  });

  return steps;
}

function startSimulation() {
  const example = state.example;
  const inputEl = document.getElementById('nInput');
  state.n = parseInt(inputEl.value);
  if (isNaN(state.n) || state.n < 0) state.n = 0;

  if (example === 'fibonacci') {
    if (state.n < 0 || state.n > 20 || !Number.isInteger(state.n)) {
      showMessage('الرجاء إدخال عدد صحيح بين 0 و 20', 'error');
      return;
    }
    state.steps = buildFibonacciSteps(state.n);
  } else {
    const coinInputs = document.querySelectorAll('.coin-value-input');
    const coins = [];
    coinInputs.forEach(inp => {
      const v = parseInt(inp.value);
      if (!isNaN(v) && v > 0) coins.push(v);
    });
    state.coins = coins.length > 0 ? coins.sort((a, b) => a - b) : [1, 3, 4];
    const amountEl = document.getElementById('amountInput');
    state.amount = parseInt(amountEl.value);
    if (isNaN(state.amount) || state.amount < 1) state.amount = 1;
    if (state.amount > 50) state.amount = 50;

    state.steps = buildCoinChangeSteps(state.coins, state.amount);
  }

  state.currentStep = -1;
  state.simulationHistory = [];
  state.finished = false;
  state.started = true;

  document.getElementById('startButton').disabled = true;
  document.getElementById('exampleSelect').disabled = true;

  showMessage(`بدء المحاكاة...`, 'info');
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

  document.getElementById('exampleSelect').disabled = false;
  document.getElementById('startButton').disabled = false;

  document.getElementById('dpVisualization').innerHTML = `
    <div class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <p class="text-lg font-medium text-gray-500">لم تبدأ المحاكاة بعد</p>
      <p class="text-sm text-gray-400 mt-1">اختر مثالاً وأدخل القيمة ثم اضغط "ابدأ المحاكاة"</p>
    </div>
  `;
  document.getElementById('naiveComparison').innerHTML = '';
  document.getElementById('stepsLog').innerHTML = '';
  document.getElementById('resultDisplay').innerHTML = '';
  document.getElementById('legendContainer').style.display = 'none';
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
  const fibSection = document.getElementById('fibonacciConfig');
  const coinSection = document.getElementById('coinChangeConfig');
  if (choice === 'fibonacci') {
    fibSection.style.display = 'block';
    coinSection.style.display = 'none';
    document.getElementById('nInput').max = 20;
    document.getElementById('nInput').placeholder = '0 - 20';
    if (parseInt(document.getElementById('nInput').value) > 20) {
      document.getElementById('nInput').value = 20;
    }
  } else {
    fibSection.style.display = 'none';
    coinSection.style.display = 'block';
  }
  if (state.started) resetSimulation();
}

function addCoin() {
  const input = document.getElementById('newCoinInput');
  const val = parseInt(input.value);
  if (isNaN(val) || val <= 0) return;
  const container = document.getElementById('coinsList');
  const tag = document.createElement('span');
  tag.className = 'coin-tag';
  tag.style.animation = 'coinEnter 0.2s ease';
  tag.textContent = val;
  const removeBtn = document.createElement('span');
  removeBtn.className = 'remove-coin';
  removeBtn.textContent = '×';
  removeBtn.onclick = function () {
    tag.remove();
  };
  tag.appendChild(removeBtn);
  container.appendChild(tag);
  input.value = '';
}

function renderVisualization() {
  const history = state.simulationHistory;
  if (history.length === 0) return;

  if (state.example === 'fibonacci') {
    renderFibonacciVisualization(history);
  } else {
    renderCoinChangeVisualization(history);
  }
  renderStepsTable(history);

  const lastStep = history[history.length - 1];
  if (lastStep.explanation) {
    showMessage(lastStep.explanation, lastStep.isComplete ? 'success' : 'info');
  }
  document.getElementById('legendContainer').style.display = 'flex';
}

function renderFibonacciVisualization(history) {
  const container = document.getElementById('dpVisualization');
  const activeStep = state.currentStep;
  const currentStep = history[activeStep];
  const n = state.n;

  if (!currentStep || !currentStep.dpCopy) {
    container.innerHTML =
      '<div class="text-center text-gray-400 py-4">جاري تهيئة المصفوفة...</div>';
    return;
  }

  const dpData = currentStep.dpCopy;
  const computingIndex = currentStep.isComputing && !currentStep.isComplete
    ? currentStep.index
    : -1;
  const isComplete = currentStep.isComplete;
  const doneIndices = [];
  for (let i = 0; i <= n; i++) {
    if (dpData[i] !== undefined) doneIndices.push(i);
  }

  let html = '<div class="dp-table">';

  for (let i = 0; i <= n; i++) {
    const hasValue = dpData[i] !== undefined;
    const isComputing = i === computingIndex && !isComplete;
    const isDone = hasValue && !isComputing;
    const isFinal = isComplete && i === currentStep.index;

    let cellClass = 'dp-cell';
    if (isFinal) cellClass += ' dp-cell-final';
    else if (isComputing) cellClass += ' dp-cell-computing';
    else if (isDone) cellClass += ' dp-cell-done';
    else cellClass += ' dp-cell-empty';

    let value = '';
    let formula = '';
    if (hasValue) {
      value = dpData[i];
      if (isComputing && i >= 2) {
        const p1 = dpData[i - 1] !== undefined ? dpData[i - 1] : '?';
        const p2 = dpData[i - 2] !== undefined ? dpData[i - 2] : '?';
        formula = `dp[${i}] = ${p1} + ${p2}`;
      } else if (isFinal) {
        formula = `✓ fib(${n}) = ${dpData[n]}`;
      }
    } else {
      value = i;
    }

    html += `<div style="display:flex;flex-direction:column;align-items:center;animation:cellIn 0.3s ease;">`;
    if (formula) {
      html += `<div class="formula-label">${formula}</div>`;
    }
    html += `<div class="${cellClass}">${isFinal || isDone || isComputing ? value : ''}</div>`;
    html += `<div class="dp-index-label">${i}</div>`;
    html += `</div>`;

    if (i < n) {
      html += `<div class="dp-arrow-connector">←</div>`;
    }
  }

  html += '</div>';
  container.innerHTML = html;

  renderNaiveComparison(n, activeStep);
}

function renderNaiveComparison(n) {
  const container = document.getElementById('naiveComparison');
  const naive = buildNaiveFibonacciSteps(n);
  const fibSteps = naive.fibSteps;

  const callNodes = fibSteps.filter(s => s.type === 'call');
  if (callNodes.length === 0) {
    container.innerHTML = '';
    return;
  }

  const nodeW = 70;
  const nodeH = 44;
  const levelGapY = 80;
  const paddingX = 40;
  const paddingY = 30;

  const levelMap = {};
  callNodes.forEach(n => {
    if (!levelMap[n.depth]) levelMap[n.depth] = [];
    levelMap[n.depth].push(n);
  });

  const depths = Object.keys(levelMap).map(Number).sort((a, b) => a - b);
  let maxLeafCount = 1;
  depths.forEach(d => {
    if (levelMap[d].length > maxLeafCount) maxLeafCount = levelMap[d].length;
  });

  const treeWidth = Math.max(
    paddingX * 2 + nodeW,
    paddingX * 2 + maxLeafCount * (nodeW + 20)
  );
  const treeHeight = depths.length * levelGapY + paddingY * 2;

  const totalCalls = callNodes.length;
  const naiveResult = naive.result;

  const defs = `<defs>
    <marker id="arrowheadNaive" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#9ca3af"></polygon>
    </marker>
  </defs>`;

  let svgHtml = `<div class="text-center mb-3">
    <span class="text-sm font-bold text-red-500">استدعاءات العودية الساذجة: ${totalCalls}</span>
    <span class="mx-2 text-gray-300">|</span>
    <span class="text-sm font-bold text-emerald-600">DP يحسب n+1 = ${n + 1} مرة فقط</span>
  </div>`;

  svgHtml += `<svg viewBox="0 0 ${treeWidth} ${treeHeight}" width="100%" style="min-height:${treeHeight}px" class="rec-tree-svg">${defs}`;

  const positions = {};
  depths.forEach((depth, di) => {
    const nodes = levelMap[depth];
    const totalWidth = nodes.length * nodeW + (nodes.length - 1) * 16;
    const startX = (treeWidth - totalWidth) / 2;
    nodes.forEach((n, ni) => {
      const x = startX + ni * (nodeW + 16);
      const y = paddingY + di * levelGapY;
      positions[n.id] = { x, y };
    });
  });

  callNodes.forEach(step => {
    if (!step.parentId || !positions[step.id] || !positions[step.parentId]) return;
    const parent = positions[step.parentId];
    const child = positions[step.id];
    svgHtml += `<line x1="${parent.x + nodeW / 2}" y1="${parent.y + nodeH / 2}" x2="${child.x + nodeW / 2}" y2="${child.y + nodeH / 2}" class="rec-connector" marker-end="url(#arrowheadNaive)" />`;
  });

  callNodes.forEach(n => {
    const pos = positions[n.id];
    if (!pos) return;
    let nodeClass = 'rec-node rec-node-call';
    svgHtml += `<foreignObject x="${pos.x}" y="${pos.y}" width="${nodeW}" height="${nodeH}" style="overflow:visible;">
      <div class="${nodeClass}" style="width:100%;height:100%;position:relative;box-sizing:border-box;padding:2px 6px;min-width:${nodeW}px;min-height:${nodeH}px;">
        <span class="rec-node-func" style="font-size:0.65rem;">fib(${n.arg})</span>
      </div>
    </foreignObject>`;
  });

  svgHtml += '</svg>';

  svgHtml += `<div class="text-center mt-2 text-sm font-bold text-gray-600">
    fib(${n}) = <span class="text-red-500">${naiveResult}</span>
    &nbsp;(بدون DP — ${totalCalls} استدعاء)
  </div>`;

  container.innerHTML = svgHtml;
}

function renderCoinChangeVisualization(history) {
  const container = document.getElementById('dpVisualization');
  const activeStep = state.currentStep;
  const currentStep = history[activeStep];

  if (!currentStep) return;

  const coins = state.coins;
  const amount = state.amount;
  const dpData = currentStep.dpCopy || [];

  const coinIdx = currentStep.coinIndex;
  const amtIdx = currentStep.amountIndex;
  const isComputing = currentStep.isComputing && !currentStep.isComplete;
  const isComplete = currentStep.isComplete;

  let html = '<div class="dp-grid-container">';

  html += '<div class="dp-header-row">';
  html += `<div class="dp-header-cell dp-header-corner">المبلغ</div>`;
  for (let a = 0; a <= amount; a++) {
    html += `<div class="dp-header-cell">${a}</div>`;
  }
  html += '</div>';

  for (let c = 0; c < coins.length; c++) {
    html += '<div class="dp-grid-row">';
    html += `<div class="dp-row-label">${coins[c]}</div>`;
    for (let a = 0; a <= amount; a++) {
      const hasValue = dpData[a] !== undefined && dpData[a] !== Infinity && dpData[a] !== null;
      const isCurCell = c === coinIdx && a === amtIdx;
      const isDone = hasValue && !(isCurCell && isComputing) && !(isComplete && c === coins.length - 1);
      const isFinal = isComplete && c === coins.length - 1 && a === amount;
      const isEmpty = !hasValue && !isCurCell;

      let cellClass = 'dp-cell dp-cell-2d';
      if (isFinal) cellClass += ' dp-cell-final';
      else if (isCurCell && isComputing) cellClass += ' dp-cell-computing';
      else if (hasValue && a === 0) cellClass += ' dp-cell-done';
      else if (hasValue) cellClass += ' dp-cell-done';
      else cellClass += ' dp-cell-empty';

      let value = '';
      if (hasValue) value = dpData[a];
      else if (isEmpty && a === 0) value = '0';
      else value = '∞';

      let formula = '';
      if (isCurCell && isComputing && a >= coins[c]) {
        const prev = dpData[a - coins[c]] !== undefined && dpData[a - coins[c]] !== Infinity
          ? dpData[a - coins[c]] : '∞';
        formula = `min(dp[${a}], ${prev}+1)`;
      }

      html += `<div style="position:relative;animation:cellIn 0.25s ease;">
        ${formula ? `<div class="formula-label coin-formula">${formula}</div>` : ''}
        <div class="${cellClass}">${value}</div>
      </div>`;
    }
    html += '</div>';
  }

  html += '</div>';

  if (isComplete && currentStep.finalValue !== undefined) {
    const finalVal = currentStep.finalValue;
    html += `<div class="mt-4 text-center font-bold text-lg">
      ${finalVal === -1
        ? `<span class="text-red-600">✗ لا يمكن تكوين المبلغ ${amount} بالعملات المتاحة</span>`
        : `<span class="text-emerald-600">✓ أقل عدد عملات = ${finalVal}</span>`
      }
    </div>`;
  }

  container.innerHTML = html;
}

function renderStepsTable(history) {
  const container = document.getElementById('stepsLog');
  const activeStep = state.currentStep;

  let tableHTML = `
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead><tr>
          <th>#</th>
          <th>الخطوة</th>
          <th>الشرح</th>
        </tr></thead><tbody>
  `;

  for (let i = Math.max(0, history.length - 20); i < history.length; i++) {
    const step = history[i];
    const rowClass = i === activeStep ? 'current-step' : '';
    const stepLabel = state.example === 'fibonacci'
      ? `dp[${step.index}]`
      : (step.coinIndex >= 0 && step.amountIndex >= 0
        ? `عملة ${state.coins[step.coinIndex] || ''} → مبلغ ${step.amountIndex}`
        : step.coinIndex >= 0
          ? `عملة ${state.coins[step.coinIndex] || ''}`
          : 'تهيئة'
      );

    tableHTML += `<tr class="${rowClass}">
      <td class="font-bold text-gray-600">${i + 1}</td>
      <td class="font-bold text-indigo-600">${stepLabel}</td>
      <td class="text-gray-700 text-sm">${step.explanation || ''}</td>
    </tr>`;
  }

  tableHTML += '</tbody></table></div>';
  container.innerHTML = tableHTML;
}

function showFinalResult() {
  const history = state.simulationHistory;
  const lastStep = history[history.length - 1];
  if (!lastStep) return;

  const container = document.getElementById('resultDisplay');
  container.innerHTML = '';

  const resultDiv = document.createElement('div');
  resultDiv.className = 'result-display';

  if (state.example === 'fibonacci') {
    const labelSpan = document.createElement('span');
    labelSpan.textContent = `fib(${state.n}) = `;
    const valueSpan = document.createElement('span');
    valueSpan.className = 'result-value';
    valueSpan.textContent = lastStep.dpCopy ? lastStep.dpCopy[state.n] : '';
    resultDiv.appendChild(labelSpan);
    resultDiv.appendChild(valueSpan);
  } else {
    const labelSpan = document.createElement('span');
    const finalAns = lastStep.finalValue;
    if (finalAns === -1) {
      labelSpan.textContent = `لا يمكن تكوين المبلغ ${state.amount} بالعملات المتاحة`;
    } else {
      labelSpan.textContent = `أقل عدد عملات لتكوين ${state.amount} = `;
      const valueSpan = document.createElement('span');
      valueSpan.className = 'result-answer';
      valueSpan.textContent = finalAns;
      resultDiv.appendChild(labelSpan);
      resultDiv.appendChild(valueSpan);
    }
  }

  container.appendChild(resultDiv);

  showMessage('🎉 تم الانتهاء!', 'success');
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
      this.value = 0;
      return;
    }
    if (val > 20) this.value = 20;
    state.n = parseInt(this.value);
    if (state.started) resetSimulation();
  });

  document.getElementById('nInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!state.started) startSimulation();
    }
  });

  document.getElementById('amountInput').addEventListener('change', function () {
    const val = parseInt(this.value);
    if (isNaN(val) || val < 1) this.value = 1;
    if (val > 50) this.value = 50;
    state.amount = parseInt(this.value);
    if (state.started) resetSimulation();
  });
});
