// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
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
  if (statusDisp) statusDisp.innerHTML = translateLegacyRuntime("legacy.abe9815a2273dc0b");
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
  document.getElementById('statusDisplay').innerHTML = translateLegacyRuntime("legacy.08658f948dfbf1c9") + getHashFunctionName() + '</span>';
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
    if (step.operation === translateLegacyRuntime("legacy.d0f6edcf6d6579c3")) opClass = 'step-search';else if (step.operation === translateLegacyRuntime("legacy.59ca629220a63ede")) opClass = 'step-delete';
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
    updateStatus(translateLegacyRuntime("legacy.214359eff3c0814d"));
    return;
  }

  // Check if key already exists
  const existingBucket = hashMod(key);
  if (hashTable[existingBucket].includes(key)) {
    updateStatus(translateLegacyRuntime("legacy.9daa0ba5f736d449") + key + translateLegacyRuntime("legacy.5385721715db8231"));
    return;
  }
  isAnimating = true;
  setButtonsEnabled(false);
  updateKeyDisplay(key);
  const hashIndex = hashMod(key);
  const formula = computeHashFormula(key);

  // Step 1: Show formula
  updateFormula(formula);
  updateStatus(translateLegacyRuntime("legacy.8ce96df726c2e420"));
  renderTable();
  let step = 0;
  function step1() {
    if (step !== 0) return;
    step = 1;
    window._highlightNodeIndex = -1;
    renderTable(hashIndex, 'highlight');
    updateStatus(translateLegacyRuntime("legacy.efeda351be90d1a4") + hashIndex + translateLegacyRuntime("legacy.7eb2b4a843836461") + hashIndex + '</span>');
    animationTimer = setTimeout(step2, 600);
  }
  function step2() {
    if (step !== 1) return;
    step = 2;
    hashTable[hashIndex].push(key);
    window._highlightNodeIndex = hashTable[hashIndex].length - 1;
    addStep(translateLegacyRuntime("legacy.518f41e7a044c0f2"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.d52453ac627d03a6") + key + translateLegacyRuntime("legacy.1e8abbe0f11d66f0") + hashIndex, translateLegacyRuntime("legacy.8db78d3d5a16fbc1"));
    renderTable(hashIndex, 'highlight');
    updateStatus(translateLegacyRuntime("legacy.b1b89e61ad84a3df") + key + translateLegacyRuntime("legacy.b610659551f123e7") + hashIndex + '</span>');
    animationTimer = setTimeout(step3, 500);
  }
  function step3() {
    if (step !== 2) return;
    step = 3;
    window._highlightNodeIndex = -1;
    renderTable();
    updateStatus(translateLegacyRuntime("legacy.b1b89e61ad84a3df") + key + translateLegacyRuntime("legacy.cc8bae8c38f141f4"));
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
    updateStatus(translateLegacyRuntime("legacy.214359eff3c0814d"));
    return;
  }
  isAnimating = true;
  setButtonsEnabled(false);
  updateKeyDisplay(key);
  const hashIndex = hashMod(key);
  const formula = computeHashFormula(key);
  updateFormula(formula);
  updateStatus(translateLegacyRuntime("legacy.8ce96df726c2e420"));
  renderTable();
  let step = 0;
  function step1() {
    if (step !== 0) return;
    step = 1;
    window._highlightNodeIndex = -1;
    renderTable(hashIndex, 'highlight');
    updateStatus(translateLegacyRuntime("legacy.efeda351be90d1a4") + hashIndex + translateLegacyRuntime("legacy.ecb51db5d8ebd1f9") + hashIndex + '</span>');
    animationTimer = setTimeout(step2, 600);
  }
  function step2() {
    if (step !== 1) return;
    step = 2;
    const chain = hashTable[hashIndex];
    if (chain.length === 0) {
      addStep(translateLegacyRuntime("legacy.d0f6edcf6d6579c3"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.951ffc19d59ae07d") + hashIndex + translateLegacyRuntime("legacy.cc020a6022f2bda9"), translateLegacyRuntime("legacy.29047b74fe2be08d"));
      renderTable(hashIndex, 'highlight');
      updateStatus(translateLegacyRuntime("legacy.4538a3664580f3eb") + key + translateLegacyRuntime("legacy.0e2f518d8a4b5642"));
      animationTimer = setTimeout(finalize, 500);
      return;
    }

    // Traverse chain
    traverseChain(0);
  }
  function traverseChain(idx) {
    const chain = hashTable[hashIndex];
    if (idx >= chain.length) {
      addStep(translateLegacyRuntime("legacy.d0f6edcf6d6579c3"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.5954b71eaa74cd7c") + hashIndex, translateLegacyRuntime("legacy.29047b74fe2be08d"));
      renderTable(hashIndex, 'highlight');
      updateStatus(translateLegacyRuntime("legacy.4538a3664580f3eb") + key + translateLegacyRuntime("legacy.b610659551f123e7") + hashIndex + '</span>');
      animationTimer = setTimeout(finalize, 600);
      return;
    }
    window._highlightNodeIndex = idx;
    renderTable(hashIndex, 'highlight');
    updateStatus(translateLegacyRuntime("legacy.4e1e39c07ffe664a") + chain[idx] + translateLegacyRuntime("legacy.0ab1ca4ef618a94a") + hashIndex + '</span>');
    animationTimer = setTimeout(() => {
      if (chain[idx] === key) {
        window._highlightNodeIndex = idx;
        addStep(translateLegacyRuntime("legacy.d0f6edcf6d6579c3"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.abb2b20b83523bf9") + key + translateLegacyRuntime("legacy.0ab1ca4ef618a94a") + hashIndex + translateLegacyRuntime("legacy.74e85dab6ee00f56") + idx, translateLegacyRuntime("legacy.f357428bfc2d0a33"));
        renderTable(hashIndex, 'found');
        updateStatus(translateLegacyRuntime("legacy.9fc3d2551a01522e") + key + translateLegacyRuntime("legacy.b610659551f123e7") + hashIndex + '</span>');
        animationTimer = setTimeout(finalize, 800);
      } else {
        updateStatus(translateLegacyRuntime("legacy.9b05276089ffab29") + chain[idx] + ' ≠ ' + key + translateLegacyRuntime("legacy.790bb00b1b80d333"));
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
    updateStatus(translateLegacyRuntime("legacy.214359eff3c0814d"));
    return;
  }
  isAnimating = true;
  setButtonsEnabled(false);
  updateKeyDisplay(key);
  const hashIndex = hashMod(key);
  const formula = computeHashFormula(key);
  updateFormula(formula);
  updateStatus(translateLegacyRuntime("legacy.8ce96df726c2e420"));
  renderTable();
  let step = 0;
  function step1() {
    if (step !== 0) return;
    step = 1;
    window._highlightNodeIndex = -1;
    renderTable(hashIndex, 'highlight');
    updateStatus(translateLegacyRuntime("legacy.efeda351be90d1a4") + hashIndex + translateLegacyRuntime("legacy.7eb2b4a843836461") + hashIndex + '</span>');
    animationTimer = setTimeout(step2, 600);
  }
  function step2() {
    if (step !== 1) return;
    step = 2;
    const chain = hashTable[hashIndex];
    if (chain.length === 0) {
      addStep(translateLegacyRuntime("legacy.59ca629220a63ede"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.951ffc19d59ae07d") + hashIndex + translateLegacyRuntime("legacy.cc020a6022f2bda9"), translateLegacyRuntime("legacy.29047b74fe2be08d"));
      renderTable(hashIndex, 'highlight');
      updateStatus(translateLegacyRuntime("legacy.9daa0ba5f736d449") + key + translateLegacyRuntime("legacy.5e2514920f444214"));
      animationTimer = setTimeout(finalize, 500);
      return;
    }
    traverseChain(0);
  }
  function traverseChain(idx) {
    const chain = hashTable[hashIndex];
    if (idx >= chain.length) {
      addStep(translateLegacyRuntime("legacy.59ca629220a63ede"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.bf535803d90fb698"), translateLegacyRuntime("legacy.29047b74fe2be08d"));
      renderTable(hashIndex, 'highlight');
      updateStatus(translateLegacyRuntime("legacy.9daa0ba5f736d449") + key + translateLegacyRuntime("legacy.290475c204ff6101") + hashIndex + '</span>');
      animationTimer = setTimeout(finalize, 600);
      return;
    }
    window._highlightNodeIndex = idx;
    renderTable(hashIndex, 'highlight');
    updateStatus(translateLegacyRuntime("legacy.4e1e39c07ffe664a") + chain[idx] + '</span>');
    animationTimer = setTimeout(() => {
      if (chain[idx] === key) {
        window._deleteNodeIndex = idx;
        renderTable(hashIndex, 'deleting');
        updateStatus(translateLegacyRuntime("legacy.4dba5649bea4d180") + key + translateLegacyRuntime("legacy.dd477ef261fdbbc6") + hashIndex + '</span>');
        animationTimer = setTimeout(() => {
          chain.splice(idx, 1);
          addStep(translateLegacyRuntime("legacy.59ca629220a63ede"), key, hashIndex, hashIndex, translateLegacyRuntime("legacy.59ca629220a63ede") + key + translateLegacyRuntime("legacy.dd477ef261fdbbc6") + hashIndex, translateLegacyRuntime("legacy.14088971bb1f5745"));
          window._highlightNodeIndex = -1;
          window._deleteNodeIndex = -1;
          renderTable();
          updateStatus(translateLegacyRuntime("legacy.66ff4a8c8351a7ac") + key + translateLegacyRuntime("legacy.cc8bae8c38f141f4"));
          animationTimer = setTimeout(finalize, 500);
        }, 500);
      } else {
        updateStatus(translateLegacyRuntime("legacy.9b05276089ffab29") + chain[idx] + ' ≠ ' + key + translateLegacyRuntime("legacy.790bb00b1b80d333"));
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
document.addEventListener('DOMContentLoaded', function () {
  const valueInput = document.getElementById('valueInput');
  if (valueInput) {
    valueInput.addEventListener('keydown', function (e) {
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
Object.assign(window, {
  hashMod: hashMod,
  getHashFunctionName: getHashFunctionName,
  computeHashFormula: computeHashFormula,
  addStep: addStep,
  resetTable: resetTable,
  changeHashFunc: changeHashFunc,
  renderTable: renderTable,
  renderStepLog: renderStepLog,
  updateStatus: updateStatus,
  updateFormula: updateFormula,
  updateKeyDisplay: updateKeyDisplay,
  getInputValue: getInputValue,
  clearInput: clearInput,
  setButtonsEnabled: setButtonsEnabled,
  cancelAnimation: cancelAnimation,
  addKey: addKey,
  searchKey: searchKey,
  deleteKey: deleteKey
});
export { hashMod, getHashFunctionName, computeHashFormula, addStep, resetTable, changeHashFunc, renderTable, renderStepLog, updateStatus, updateFormula, updateKeyDisplay, getInputValue, clearInput, setButtonsEnabled, cancelAnimation, addKey, searchKey, deleteKey };
