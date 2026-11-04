let hashTable = Array(10).fill(null).map(() => []);
let operationHistory = [];
let tableSize = 10;
let isAnimating = false;
let animationTimer = null;
let pendingOperation = null;

function hashMod(key) {
  return key % tableSize;
}

function getHashFunctionName() {
  return `mod ${tableSize}`;
}

function computeHashFormula(key) {
  return `hash(${key}) = ${key} % ${tableSize} = ${hashMod(key)}`;
}

function addStep(operation, key, hashResult, bucketIndex, action, details) {
  operationHistory.push({
    operation,
    key,
    hashResult,
    bucketIndex,
    action,
    details: details || '',
    timestamp: Date.now()
  });
  renderStepLog();
}

function resetTable() {
  if (!document.getElementById('hashTableContainer')) return;
  if (isAnimating) {
    cancelAnimation();
  }
  hashTable = Array(tableSize).fill(null).map(() => []);
  operationHistory = [];
  currentStep = -1;
  renderTable();
  renderStepLog();
  const statusDisp = document.getElementById('statusDisplay');
  if (statusDisp) statusDisp.innerHTML = '<span class="status-badge status-badge-waiting">⏳ في انتظار الإدخال</span>';
  const hashForm = document.getElementById('hashFormulaDisplay');
  if (hashForm) hashForm.textContent = '---';
  const currKey = document.getElementById('currentKeyDisplay');
  if (currKey) currKey.textContent = '?';
  const valInp = document.getElementById('valueInput');
  if (valInp) {
    valInp.value = '';
    valInp.focus();
  }
}

function changeHashFunc(val) {
  if (isAnimating) return;
  tableSize = parseInt(val);
  hashTable = Array(tableSize).fill(null).map(() => []);
  operationHistory = [];
  renderTable();
  renderStepLog();
  document.getElementById('hashFormulaDisplay').textContent = '---';
  document.getElementById('statusDisplay').innerHTML = '<span class="status-badge status-badge-info">ℹ️ تغيرت دالة التجزئة إلى ' + getHashFunctionName() + '</span>';
  const sizeDisp = document.getElementById('tableSizeDisplay');
  if (sizeDisp) sizeDisp.textContent = tableSize;
}

function renderTable(highlightIndex, state) {
  const container = document.getElementById('hashTableContainer');
  container.innerHTML = '';
  state = state || 'normal';

  for (let i = 0; i < tableSize; i++) {
    const bucket = document.createElement('div');
    bucket.className = 'hash-bucket';

    const indexLabel = document.createElement('div');
    indexLabel.className = 'hash-bucket-index';
    indexLabel.textContent = i;
    bucket.appendChild(indexLabel);

    const chain = document.createElement('div');
    chain.className = 'hash-bucket-chain';

    if (highlightIndex === i) {
      if (state === 'found') {
        chain.classList.add('bucket-found');
      } else if (state === 'highlight') {
        chain.classList.add('bucket-highlight');
      } else if (state === 'deleting') {
        chain.classList.add('bucket-deleting');
      }
    }

    const bucketKeys = hashTable[i];
    if (bucketKeys.length === 0) {
      const emptyNode = document.createElement('div');
      emptyNode.className = 'hash-node hash-node-empty';
      emptyNode.textContent = '—';
      chain.appendChild(emptyNode);
    } else {
      for (let j = 0; j < bucketKeys.length; j++) {
        if (j > 0) {
          const arrow = document.createElement('div');
          arrow.className = 'hash-arrow';
          arrow.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
          chain.appendChild(arrow);
        }

        const node = document.createElement('div');
        node.className = 'hash-node';
        node.textContent = bucketKeys[j];
        node.dataset.index = j;
        node.dataset.bucket = i;

        if (highlightIndex === i && typeof window._highlightNodeIndex === 'number' && window._highlightNodeIndex === j) {
          if (state === 'found') {
            node.className += ' hash-node-found';
          } else if (state === 'highlight') {
            node.className += ' hash-node-active';
          } else if (state === 'deleting' && window._deleteNodeIndex === j) {
            node.className += ' hash-node-deleting';
          } else {
            node.className += ' hash-node-occupied';
          }
        } else {
          node.className += ' hash-node-occupied';
        }

        chain.appendChild(node);
      }
    }

    bucket.appendChild(chain);
    container.appendChild(bucket);
  }
}

function renderStepLog() {
  const tbody = document.getElementById('stepLogBody');
  tbody.innerHTML = '';
  const ops = operationHistory.slice().reverse();
  const countEl = document.getElementById('stepCount');
  if (countEl) countEl.textContent = operationHistory.length;
  for (const step of ops) {
    const tr = document.createElement('tr');
    let opClass = 'step-insert';
    if (step.operation === 'بحث') opClass = 'step-search';
    else if (step.operation === 'حذف') opClass = 'step-delete';
    tr.className = opClass;

    tr.innerHTML = `
      <td class="font-bold">${step.operation}</td>
      <td dir="ltr">${step.key}</td>
      <td dir="ltr">${step.hashResult}</td>
      <td>${step.bucketIndex}</td>
      <td>${step.action}</td>
      <td class="text-xs text-gray-500">${step.details}</td>
    `;
    tbody.appendChild(tr);
  }
}

function updateStatus(html) {
  document.getElementById('statusDisplay').innerHTML = html;
}

function updateFormula(text) {
  document.getElementById('hashFormulaDisplay').textContent = text;
}

function updateKeyDisplay(key) {
  document.getElementById('currentKeyDisplay').textContent = key !== null && key !== undefined ? key : '?';
}

function getInputValue() {
  const val = document.getElementById('valueInput').value.trim();
  if (val === '') return null;
  const num = parseInt(val, 10);
  if (isNaN(num)) return null;
  return num;
}

function clearInput() {
  document.getElementById('valueInput').value = '';
  document.getElementById('valueInput').focus();
}

function setButtonsEnabled(enabled) {
  document.querySelectorAll('.btn-action, #resetBtn, #hashFuncSelect').forEach(el => {
    el.disabled = !enabled;
  });
}

function cancelAnimation() {
  if (animationTimer) {
    clearTimeout(animationTimer);
    animationTimer = null;
  }
  isAnimating = false;
  pendingOperation = null;
  setButtonsEnabled(true);
}

// ==================== INSERT ====================
function addKey() {
  if (isAnimating) return;
  const key = getInputValue();
  if (key === null) {
    updateStatus('<span class="status-badge status-badge-error">✗ الرجاء إدخال رقم صحيح</span>');
    return;
  }

  // Check if key already exists
  const existingBucket = hashMod(key);
  if (hashTable[existingBucket].includes(key)) {
    updateStatus('<span class="status-badge status-badge-error">✗ المفتاح ' + key + ' موجود مسبقاً في الجدول</span>');
    return;
  }

  isAnimating = true;
  setButtonsEnabled(false);
  updateKeyDisplay(key);

  const hashIndex = hashMod(key);
  const formula = computeHashFormula(key);

  // Step 1: Show formula
  updateFormula(formula);
  updateStatus('<span class="status-badge status-badge-info">ℹ️ جاري حساب دالة التجزئة...</span>');
  renderTable();

  let step = 0;

  function step1() {
    if (step !== 0) return;
    step = 1;
    window._highlightNodeIndex = -1;
    renderTable(hashIndex, 'highlight');
    updateStatus('<span class="status-badge status-badge-info">🔍 التجزئة = ' + hashIndex + '، نذهب إلى الخلية رقم ' + hashIndex + '</span>');

    animationTimer = setTimeout(step2, 600);
  }

  function step2() {
    if (step !== 1) return;
    step = 2;

    hashTable[hashIndex].push(key);
    window._highlightNodeIndex = hashTable[hashIndex].length - 1;

    addStep('إدراج', key, hashIndex, hashIndex, 'إضافة ' + key + ' إلى الخلية ' + hashIndex, 'نجاح');

    renderTable(hashIndex, 'highlight');
    updateStatus('<span class="status-badge status-badge-success">✓ تم إدراج ' + key + ' في الخلية رقم ' + hashIndex + '</span>');

    animationTimer = setTimeout(step3, 500);
  }

  function step3() {
    if (step !== 2) return;
    step = 3;
    window._highlightNodeIndex = -1;
    renderTable();
    updateStatus('<span class="status-badge status-badge-success">✓ تم إدراج ' + key + ' بنجاح</span>');
    clearInput();
    isAnimating = false;
    setButtonsEnabled(true);
  }

  animationTimer = setTimeout(step1, 400);
}

// ==================== SEARCH ====================
function searchKey() {
  if (isAnimating) return;
  const key = getInputValue();
  if (key === null) {
    updateStatus('<span class="status-badge status-badge-error">✗ الرجاء إدخال رقم صحيح</span>');
    return;
  }

  isAnimating = true;
  setButtonsEnabled(false);
  updateKeyDisplay(key);

  const hashIndex = hashMod(key);
  const formula = computeHashFormula(key);

  updateFormula(formula);
  updateStatus('<span class="status-badge status-badge-info">ℹ️ جاري حساب دالة التجزئة...</span>');
  renderTable();

  let step = 0;

  function step1() {
    if (step !== 0) return;
    step = 1;
    window._highlightNodeIndex = -1;
    renderTable(hashIndex, 'highlight');
    updateStatus('<span class="status-badge status-badge-info">🔍 التجزئة = ' + hashIndex + '، نبحث في الخلية رقم ' + hashIndex + '</span>');

    animationTimer = setTimeout(step2, 600);
  }

  function step2() {
    if (step !== 1) return;
    step = 2;

    const chain = hashTable[hashIndex];
    if (chain.length === 0) {
      addStep('بحث', key, hashIndex, hashIndex, 'الخلية ' + hashIndex + ' فارغة', 'غير موجود ✗');
      renderTable(hashIndex, 'highlight');
      updateStatus('<span class="status-badge status-badge-error">✗ لم يتم العثور على ' + key + ' (الخلية فارغة)</span>');
      animationTimer = setTimeout(finalize, 500);
      return;
    }

    // Traverse chain
    traverseChain(0);
  }

  function traverseChain(idx) {
    const chain = hashTable[hashIndex];
    if (idx >= chain.length) {
      addStep('بحث', key, hashIndex, hashIndex, 'تم فحص جميع العناصر في الخلية ' + hashIndex, 'غير موجود ✗');
      renderTable(hashIndex, 'highlight');
      updateStatus('<span class="status-badge status-badge-error">✗ لم يتم العثور على ' + key + ' في الخلية رقم ' + hashIndex + '</span>');
      animationTimer = setTimeout(finalize, 600);
      return;
    }

    window._highlightNodeIndex = idx;
    renderTable(hashIndex, 'highlight');
    updateStatus('<span class="status-badge status-badge-info">🔍 جاري فحص العنصر ' + chain[idx] + ' في الخلية ' + hashIndex + '</span>');

    animationTimer = setTimeout(() => {
      if (chain[idx] === key) {
        window._highlightNodeIndex = idx;
        addStep('بحث', key, hashIndex, hashIndex, 'العثور على ' + key + ' في الخلية ' + hashIndex + ' بالموقع ' + idx, 'موجود ✓');
        renderTable(hashIndex, 'found');
        updateStatus('<span class="status-badge status-badge-success">✓ تم العثور على ' + key + ' في الخلية رقم ' + hashIndex + '</span>');
        animationTimer = setTimeout(finalize, 800);
      } else {
        updateStatus('<span class="status-badge status-badge-info">🔍 العنصر ' + chain[idx] + ' ≠ ' + key + '، ننتقل للعنصر التالي</span>');
        animationTimer = setTimeout(() => traverseChain(idx + 1), 500);
      }
    }, 500);
  }

  function finalize() {
    window._highlightNodeIndex = -1;
    renderTable();
    clearInput();
    isAnimating = false;
    setButtonsEnabled(true);
  }

  animationTimer = setTimeout(step1, 400);
}

// ==================== DELETE ====================
function deleteKey() {
  if (isAnimating) return;
  const key = getInputValue();
  if (key === null) {
    updateStatus('<span class="status-badge status-badge-error">✗ الرجاء إدخال رقم صحيح</span>');
    return;
  }

  isAnimating = true;
  setButtonsEnabled(false);
  updateKeyDisplay(key);

  const hashIndex = hashMod(key);
  const formula = computeHashFormula(key);

  updateFormula(formula);
  updateStatus('<span class="status-badge status-badge-info">ℹ️ جاري حساب دالة التجزئة...</span>');
  renderTable();

  let step = 0;

  function step1() {
    if (step !== 0) return;
    step = 1;
    window._highlightNodeIndex = -1;
    renderTable(hashIndex, 'highlight');
    updateStatus('<span class="status-badge status-badge-info">🔍 التجزئة = ' + hashIndex + '، نذهب إلى الخلية رقم ' + hashIndex + '</span>');

    animationTimer = setTimeout(step2, 600);
  }

  function step2() {
    if (step !== 1) return;
    step = 2;

    const chain = hashTable[hashIndex];
    if (chain.length === 0) {
      addStep('حذف', key, hashIndex, hashIndex, 'الخلية ' + hashIndex + ' فارغة', 'غير موجود ✗');
      renderTable(hashIndex, 'highlight');
      updateStatus('<span class="status-badge status-badge-error">✗ المفتاح ' + key + ' غير موجود (الخلية فارغة)</span>');
      animationTimer = setTimeout(finalize, 500);
      return;
    }

    traverseChain(0);
  }

  function traverseChain(idx) {
    const chain = hashTable[hashIndex];
    if (idx >= chain.length) {
      addStep('حذف', key, hashIndex, hashIndex, 'تم فحص جميع العناصر', 'غير موجود ✗');
      renderTable(hashIndex, 'highlight');
      updateStatus('<span class="status-badge status-badge-error">✗ المفتاح ' + key + ' غير موجود في الخلية ' + hashIndex + '</span>');
      animationTimer = setTimeout(finalize, 600);
      return;
    }

    window._highlightNodeIndex = idx;
    renderTable(hashIndex, 'highlight');
    updateStatus('<span class="status-badge status-badge-info">🔍 جاري فحص العنصر ' + chain[idx] + '</span>');

    animationTimer = setTimeout(() => {
      if (chain[idx] === key) {
        window._deleteNodeIndex = idx;
        renderTable(hashIndex, 'deleting');
        updateStatus('<span class="status-badge status-badge-info">🗑️ جاري حذف ' + key + ' من الخلية ' + hashIndex + '</span>');

        animationTimer = setTimeout(() => {
          chain.splice(idx, 1);
          addStep('حذف', key, hashIndex, hashIndex, 'حذف ' + key + ' من الخلية ' + hashIndex, 'تم الحذف ✓');
          window._highlightNodeIndex = -1;
          window._deleteNodeIndex = -1;
          renderTable();
          updateStatus('<span class="status-badge status-badge-success">✓ تم حذف ' + key + ' بنجاح</span>');
          animationTimer = setTimeout(finalize, 500);
        }, 500);
      } else {
        updateStatus('<span class="status-badge status-badge-info">🔍 العنصر ' + chain[idx] + ' ≠ ' + key + '، ننتقل للعنصر التالي</span>');
        animationTimer = setTimeout(() => traverseChain(idx + 1), 500);
      }
    }, 500);
  }

  function finalize() {
    window._highlightNodeIndex = -1;
    window._deleteNodeIndex = -1;
    renderTable();
    clearInput();
    isAnimating = false;
    setButtonsEnabled(true);
  }

  animationTimer = setTimeout(step1, 400);
}

// ==================== Keyboard support ====================
document.addEventListener('DOMContentLoaded', function() {
  const valueInput = document.getElementById('valueInput');
  if (valueInput) {
    valueInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        addKey();
      }
    });
  }

  // Set default table size display
  const hashFuncSelect = document.getElementById('hashFuncSelect');
  if (hashFuncSelect) {
    hashFuncSelect.value = '10';
    resetTable();
  }
});
