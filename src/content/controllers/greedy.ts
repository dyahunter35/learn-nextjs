// @ts-nocheck
const coinSystems = {
  sudanese: [50, 20, 10, 5, 1],
  us: [25, 10, 5, 1],
  custom: []
};

const state = {
  system: 'sudanese',
  amount: 77,
  steps: [],
  currentStep: -1,
  selectedCoins: [],
  isRunning: false,
  isFinished: false,
  coins: [],
  optimalResult: null
};

function generateGreedySteps(coins, amount) {
  const sorted = [...coins].sort((a, b) => b - a);
  const steps = [];
  let remaining = amount;
  let selected = [];
  let stepNum = 0;

  for (let i = 0; i < sorted.length; i++) {
    const coin = sorted[i];
    while (remaining >= coin) {
      stepNum++;
      remaining -= coin;
      selected.push(coin);
      steps.push({
        step: stepNum,
        coin: coin,
        action: 'take',
        coinIndex: i,
        remaining: remaining,
        remainingBefore: remaining + coin,
        selectedCount: selected.length,
        selectedCoins: [...selected],
        message: `المبلغ المتبقي: ${remaining + coin} → نأخذ عملة ${coin} → المبلغ المتبقي: ${remaining}`
      });
    }
    if (remaining > 0) {
      stepNum++;
      steps.push({
        step: stepNum,
        coin: coin,
        action: 'skip',
        coinIndex: i,
        remaining: remaining,
        remainingBefore: remaining,
        selectedCount: selected.length,
        selectedCoins: [...selected],
        message: `العملة ${coin} أكبر من المبلغ المتبقي (${remaining})، نتجاوزها`
      });
    }
  }

  steps.push({
    step: stepNum + 1,
    coin: null,
    action: 'done',
    coinIndex: -1,
    remaining: 0,
    remainingBefore: remaining,
    selectedCount: selected.length,
    selectedCoins: [...selected],
    message: `✅ تم استخدام ${selected.length} قطعة نقدية: [${selected.join(', ')}]`
  });

  return steps;
}

function calculateOptimal(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  const coinUsed = new Array(amount + 1).fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
        coinUsed[i] = coin;
      }
    }
  }

  if (dp[amount] === Infinity) return null;

  const result = [];
  let remaining = amount;
  while (remaining > 0) {
    result.push(coinUsed[remaining]);
    remaining -= coinUsed[remaining];
  }

  return { count: dp[amount], coins: result };
}

function startSimulation() {
  const systemSelect = document.getElementById('coinSystem');
  const amountInput = document.getElementById('amountInput');

  state.system = systemSelect.value;
  state.amount = parseInt(amountInput.value);

  if (isNaN(state.amount) || state.amount < 1 || state.amount > 200) {
    alert('الرجاء إدخال مبلغ بين 1 و 200');
    return;
  }

  let coins;
  if (state.system === 'custom') {
    const customStr = document.getElementById('customCoins').value.trim();
    if (!customStr) {
      alert('الرجاء إدخال قيم العملات المخصصة مفصولة بفواصل');
      return;
    }
    coins = customStr.split(/[,\s]+/).map(Number).filter(n => !isNaN(n) && n > 0);
    if (coins.length === 0) {
      alert('الرجاء إدخال قيم عملات صحيحة');
      return;
    }
    if (!coins.includes(1)) {
      coins.push(1);
    }
  } else {
    coins = [...coinSystems[state.system]];
  }

  state.coins = [...coins].sort((a, b) => b - a);
  state.steps = generateGreedySteps(state.coins, state.amount);
  state.currentStep = -1;
  state.selectedCoins = [];
  state.isRunning = true;
  state.isFinished = false;
  state.optimalResult = calculateOptimal(state.coins, state.amount);

  document.getElementById('finalResult').innerHTML = '';
  renderCoinDisplay();
  updateTargetDisplay(state.amount);
  updateSelectedArea([]);
  updateStatusMessage('اضغط "الخطوة التالية" لبدء المحاكاة');
  updateStepLog([]);
  updateButtons();

  document.getElementById('visualization').scrollIntoView({ behavior: 'smooth' });
}

function renderCoinDisplay() {
  const container = document.getElementById('coinDisplay');
  container.innerHTML = '';
  state.coins.forEach((coin, i) => {
    const div = document.createElement('div');
    div.className = 'coin-box coin-available';
    div.id = `coin-${i}`;
    div.textContent = coin;
    container.appendChild(div);
  });
}

function updateTargetDisplay(amount) {
  const el = document.getElementById('targetDisplay');
  el.textContent = amount;
  el.classList.remove('amount-update');
  void el.offsetWidth;
  el.classList.add('amount-update');
}

function updateSelectedArea(coins) {
  const container = document.getElementById('selectedArea');
  if (coins.length === 0) {
    container.innerHTML = '<span class="text-gray-400 font-medium">لم يتم اختيار أي عملات بعد</span>';
    return;
  }
  container.innerHTML = '';
  coins.forEach((coin, i) => {
    const div = document.createElement('div');
    div.className = 'coin-box coin-selected';
    div.textContent = coin;
    div.style.animationDelay = `${i * 0.05}s`;
    container.appendChild(div);
  });
}

function updateStatusMessage(msg) {
  document.getElementById('statusMessage').textContent = msg;
}

function updateStepLog(data) {
  const tbody = document.getElementById('stepLogBody');
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-gray-400 py-4">لم تبدأ المحاكاة بعد</td></tr>';
    return;
  }
  tbody.innerHTML = '';
  data.forEach((step, idx) => {
    const tr = document.createElement('tr');
    if (idx === state.currentStep) tr.className = 'current-step';
    const coinText = step.coin || '-';
    const actionText = step.action === 'take' ? '✅ أخذ' : step.action === 'skip' ? '⏭ تجاوز' : '🏁 انتهى';
    tr.innerHTML = `
      <td>${step.step}</td>
      <td>${coinText}</td>
      <td>${actionText}</td>
      <td>${step.remaining}</td>
      <td class="text-xs">${step.selectedCoins.join(', ') || '-'}</td>
    `;
    tbody.appendChild(tr);
  });

  const logContainer = document.querySelector('.step-log');
  if (logContainer) {
    const currentRow = logContainer.querySelector('.current-step');
    if (currentRow) currentRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function updateButtons() {
  document.getElementById('startBtn').disabled = state.isRunning && !state.isFinished;
  document.getElementById('nextBtn').disabled = !state.isRunning || state.isFinished || state.currentStep >= state.steps.length - 1;
  document.getElementById('prevBtn').disabled = !state.isRunning || state.currentStep <= 0;
}

function nextStep() {
  if (!state.isRunning || state.isFinished || state.currentStep >= state.steps.length - 1) return;

  state.currentStep++;
  const step = state.steps[state.currentStep];

  document.querySelectorAll('.coin-box').forEach(el => el.className = 'coin-box coin-available');

  if (step.coinIndex >= 0) {
    const coinEl = document.getElementById(`coin-${step.coinIndex}`);
    if (step.action === 'take') {
      coinEl.className = 'coin-box coin-selected';
      coinEl.style.animation = 'none';
      void coinEl.offsetWidth;
      coinEl.style.animation = 'coinSelect 0.5s ease-out';
    } else if (step.action === 'skip') {
      coinEl.className = 'coin-box coin-too-large';
    }
  }

  updateTargetDisplay(step.remaining);
  updateSelectedArea(step.selectedCoins);
  updateStatusMessage(step.message);
  updateStepLog(state.steps.slice(0, state.currentStep + 1));

  if (step.action === 'done') {
    state.isFinished = true;
    showFinalResult();
  }

  updateButtons();
}

function previousStep() {
  if (!state.isRunning || state.currentStep <= 0) return;

  state.currentStep--;
  renderStep(state.currentStep);
  updateButtons();
}

function renderStep(index) {
  if (index < 0) {
    renderCoinDisplay();
    updateTargetDisplay(state.amount);
    updateSelectedArea([]);
    updateStatusMessage('اضغط "الخطوة التالية" لبدء المحاكاة');
    updateStepLog([]);
    return;
  }

  const step = state.steps[index];

  document.querySelectorAll('.coin-box').forEach(el => el.className = 'coin-box coin-available');

  for (let i = 0; i <= index; i++) {
    const s = state.steps[i];
    if (s.coinIndex >= 0) {
      const coinEl = document.getElementById(`coin-${s.coinIndex}`);
      if (s.action === 'take') {
        coinEl.className = 'coin-box coin-selected';
      } else if (s.action === 'skip') {
        coinEl.className = 'coin-box coin-too-large';
      }
    }
  }

  if (step.coinIndex >= 0 && step.action === 'take') {
    const coinEl = document.getElementById(`coin-${step.coinIndex}`);
    coinEl.style.animation = 'none';
    void coinEl.offsetWidth;
    coinEl.style.animation = 'coinSelect 0.5s ease-out';
  }

  updateTargetDisplay(step.remaining);
  updateSelectedArea(step.selectedCoins);
  updateStatusMessage(step.message);
  updateStepLog(state.steps.slice(0, index + 1));
  state.isFinished = false;
  document.getElementById('finalResult').innerHTML = '';
}

function showFinalResult() {
  const resultDiv = document.getElementById('finalResult');
  const lastStep = state.steps[state.steps.length - 1];
  const coins = lastStep.selectedCoins;
  const count = coins.length;

  let html = `
    <div class="bg-green-50 border-2 border-green-400 rounded-xl p-6 text-center">
      <h3 class="text-2xl font-bold text-green-800 mb-2">✅ اكتملت المحاكاة!</h3>
      <p class="text-lg text-green-700 mb-3">تم استخدام <strong>${count}</strong> قطعة نقدية</p>
      <div class="flex flex-wrap gap-2 justify-center mb-3">
        ${coins.map(c => `<span class="inline-block bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">${c}</span>`).join('')}
      </div>
  `;

  if (state.optimalResult) {
    const greedyCount = count;
    const optimalCount = state.optimalResult.count;
    if (greedyCount > optimalCount) {
      html += `
        <div class="mt-4 p-4 bg-amber-50 border-2 border-amber-400 rounded-lg">
          <p class="font-bold text-amber-800 mb-2">⚠️ الخوارزمية الجشعة ليست مثالية لهذه العملات!</p>
          <p class="text-amber-700">الخوارزمية الجشعة استخدمت ${greedyCount} قطعة، بينما الحل الأمثل يستخدم ${optimalCount} قطعة.</p>
          <p class="text-amber-700">الحل الأمثل: [${state.optimalResult.coins.join(', ')}]</p>
          <p class="text-amber-600 text-sm mt-2">هذا مثال يوضح فشل الخوارزمية الجشعة في إيجاد الحل الأمثل لبعض أنظمة العملات.</p>
        </div>
      `;
    } else {
      html += `
        <div class="mt-4 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
          <p class="text-green-700">✅ الحل الجشع هو الحل الأمثل في هذه الحالة (${greedyCount} قطعة).</p>
        </div>
      `;
    }
  }

  html += '</div>';
  resultDiv.innerHTML = html;
}

function resetSimulation() {
  state.steps = [];
  state.currentStep = -1;
  state.selectedCoins = [];
  state.isRunning = false;
  state.isFinished = false;

  renderCoinDisplay();
  updateTargetDisplay(state.amount || 77);
  updateSelectedArea([]);
  updateStatusMessage('اضغط "ابدأ" لبدء محاكاة جديدة');
  updateStepLog([]);
  document.getElementById('finalResult').innerHTML = '';
  updateButtons();
}

function selectCoinSystem() {
  const select = document.getElementById('coinSystem');
  const customGroup = document.getElementById('customCoinsGroup');
  customGroup.style.display = select.value === 'custom' ? 'block' : 'none';
}

Object.assign(window, {generateGreedySteps: generateGreedySteps, calculateOptimal: calculateOptimal, startSimulation: startSimulation, renderCoinDisplay: renderCoinDisplay, updateTargetDisplay: updateTargetDisplay, updateSelectedArea: updateSelectedArea, updateStatusMessage: updateStatusMessage, updateStepLog: updateStepLog, updateButtons: updateButtons, nextStep: nextStep, previousStep: previousStep, renderStep: renderStep, showFinalResult: showFinalResult, resetSimulation: resetSimulation, selectCoinSystem: selectCoinSystem});
export {generateGreedySteps, calculateOptimal, startSimulation, renderCoinDisplay, updateTargetDisplay, updateSelectedArea, updateStatusMessage, updateStepLog, updateButtons, nextStep, previousStep, renderStep, showFinalResult, resetSimulation, selectCoinSystem};
