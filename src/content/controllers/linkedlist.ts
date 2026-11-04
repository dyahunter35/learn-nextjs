// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const state = {
  mode: 'head',
  nodes: []
};
const visualEl = document.getElementById('visual-container');
const logEl = document.getElementById('log-list');
const valueInput = document.getElementById('value-input');
const sizeInfo = document.getElementById('size-info');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const m = btn.dataset.mode;
    btn.className = 'tab-btn ' + (m === mode ? mode === 'head' ? 'active-head' : 'active-tail' : 'inactive');
  });
  document.getElementById('insert-btn-text').textContent = mode === 'head' ? translateLegacyRuntime("legacy.d0a2a4e7b18436df") : translateLegacyRuntime("legacy.7325027051beafa6");
  document.getElementById('remove-btn-text').textContent = mode === 'head' ? translateLegacyRuntime("legacy.89d4e380d63434f7") : translateLegacyRuntime("legacy.907f3bdb7113780f");
  const insertBtn = document.getElementById('insert-btn');
  insertBtn.className = 'action-btn ' + (mode === 'head' ? 'btn-insert-head' : 'btn-insert-tail');
  const removeBtn = document.getElementById('remove-btn');
  removeBtn.className = 'action-btn ' + (mode === 'head' ? 'btn-remove-head' : 'btn-remove-tail');
  render();
  addLog(translateLegacyRuntime(`التبديل إلى ${mode === 'head' ? 'المقدمة (Head)' : 'النهاية (Tail)'}`, "legacy.5f7d6cd467fd567a", "\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 ${mode === 'head' ? '\u0627\u0644\u0645\u0642\u062F\u0645\u0629 (Head)' : '\u0627\u0644\u0646\u0647\u0627\u064A\u0629 (Tail)'}"), 'info');
  valueInput.focus();
}
function insertNode() {
  const val = valueInput.value.trim();
  if (!val) {
    shake(valueInput);
    return;
  }
  const node = {
    id: Date.now(),
    value: val
  };
  if (state.mode === 'head') {
    state.nodes.unshift(node);
    addLog(translateLegacyRuntime(`إدراج ${val} في المقدمة`, "legacy.9e0b7ac4263e6749", "\u0625\u062F\u0631\u0627\u062C ${val} \u0641\u064A \u0627\u0644\u0645\u0642\u062F\u0645\u0629"), 'insert');
  } else {
    state.nodes.push(node);
    addLog(translateLegacyRuntime(`إدراج ${val} في النهاية`, "legacy.ee52579fa457d80b", "\u0625\u062F\u0631\u0627\u062C ${val} \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629"), 'insert');
  }
  valueInput.value = '';
  render();
  valueInput.focus();
}
function removeNode() {
  if (state.nodes.length === 0) {
    addLog(translateLegacyRuntime("legacy.47c39495741e24aa"), 'info');
    return;
  }
  let val;
  if (state.mode === 'head') {
    val = state.nodes.shift().value;
    addLog(translateLegacyRuntime(`حذف ${val} من المقدمة`, "legacy.f69f452142313bcc", "\u062D\u0630\u0641 ${val} \u0645\u0646 \u0627\u0644\u0645\u0642\u062F\u0645\u0629"), 'remove');
  } else {
    val = state.nodes.pop().value;
    addLog(translateLegacyRuntime(`حذف ${val} من النهاية`, "legacy.6803b7d6110702af", "\u062D\u0630\u0641 ${val} \u0645\u0646 \u0627\u0644\u0646\u0647\u0627\u064A\u0629"), 'remove');
  }
  render();
}
function removeByValue() {
  const val = searchInput.value.trim();
  if (!val) {
    shake(searchInput);
    return;
  }
  const idx = state.nodes.findIndex(n => n.value === val);
  if (idx === -1) {
    addLog(translateLegacyRuntime(`القيمة "${val}" غير موجودة`, "legacy.d50b959f06c8d41d", "\u0627\u0644\u0642\u064A\u0645\u0629 \"${val}\" \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"), 'search-notfound');
    shake(searchInput);
    return;
  }
  state.nodes.splice(idx, 1);
  addLog(translateLegacyRuntime(`حذف "${val}" من القائمة`, "legacy.5f53ad174ba08af5", "\u062D\u0630\u0641 \"${val}\" \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"), 'remove');
  searchInput.value = '';
  render();
}
function searchNode() {
  const val = searchInput.value.trim();
  if (!val) {
    shake(searchInput);
    return;
  }
  const idx = state.nodes.findIndex(n => n.value === val);
  if (idx === -1) {
    addLog(translateLegacyRuntime(`البحث عن "${val}": غير موجود`, "legacy.072c251f5008d2e8", "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \"${val}\": \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F"), 'search-notfound');
  } else {
    addLog(translateLegacyRuntime(`البحث عن "${val}": موجود في العقدة #${idx + 1}`, "legacy.b29a022ee5d3d43f", "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \"${val}\": \u0645\u0648\u062C\u0648\u062F \u0641\u064A \u0627\u0644\u0639\u0642\u062F\u0629 #${idx + 1}"), 'search-found');
    highlightNode(idx);
  }
  searchInput.value = '';
}
function highlightNode(idx) {
  const wrappers = visualEl.querySelectorAll('.ll-node');
  if (wrappers[idx]) {
    wrappers[idx].classList.add('highlight');
    wrappers[idx].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
    setTimeout(() => wrappers[idx].classList.remove('highlight'), 1200);
  }
}
function clearAll() {
  if (state.nodes.length === 0) return;
  state.nodes = [];
  render();
  addLog(translateLegacyRuntime("legacy.32a36553e6a7ac69"), 'info');
  valueInput.focus();
}
function render() {
  sizeInfo.textContent = `${state.nodes.length}`;
  if (state.nodes.length === 0) {
    emptyState.classList.remove('hidden');
    visualEl.innerHTML = '';
    visualEl.appendChild(emptyState);
    return;
  }
  emptyState.classList.add('hidden');
  visualEl.innerHTML = '<div class="ll-container" id="ll-render"></div>';
  const container = document.getElementById('ll-render');
  state.nodes.forEach((node, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'll-node-wrapper';
    const nodeEl = document.createElement('div');
    nodeEl.className = 'll-node' + (i === state.nodes.length - 1 ? ' tail-node' : '');
    nodeEl.textContent = node.value;
    const idxLabel = document.createElement('div');
    idxLabel.className = 'node-idx';
    idxLabel.textContent = `#${i + 1}`;
    nodeEl.appendChild(idxLabel);
    if (i === 0) {
      const headLabel = document.createElement('div');
      headLabel.className = 'll-label-head';
      headLabel.textContent = 'Head';
      nodeEl.appendChild(headLabel);
    }
    if (i === state.nodes.length - 1 && state.nodes.length > 1) {
      const tailLabel = document.createElement('div');
      tailLabel.className = 'll-label-tail';
      tailLabel.textContent = 'Tail';
      nodeEl.appendChild(tailLabel);
    }
    wrapper.appendChild(nodeEl);
    if (i < state.nodes.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'll-arrow';
      const arrowLine = document.createElement('div');
      arrowLine.className = 'll-arrow-line';
      const arrowLabel = document.createElement('span');
      arrowLabel.className = 'arrow-label';
      arrowLabel.textContent = 'next';
      arrowLine.appendChild(arrowLabel);
      arrow.appendChild(arrowLine);
      wrapper.appendChild(arrow);
    } else {
      const nullEl = document.createElement('div');
      nullEl.className = 'll-null';
      nullEl.textContent = 'NULL';
      wrapper.appendChild(nullEl);
    }
    container.appendChild(wrapper);
  });
  if (state.nodes.length === 1) {
    const nodeEl = container.querySelector('.ll-node');
    if (nodeEl && !nodeEl.querySelector('.ll-label-tail')) {
      const tailLabel = document.createElement('div');
      tailLabel.className = 'll-label-tail';
      tailLabel.textContent = 'Tail';
      nodeEl.appendChild(tailLabel);
    }
  }
}
function addLog(msg, type) {
  const entry = document.createElement('div');
  entry.className = `log-entry ${type}`;
  const time = new Date().toLocaleTimeString('ar-SA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  entry.textContent = `[${time}] ${msg}`;
  logEl.appendChild(entry);
  logEl.scrollTop = logEl.scrollHeight;
}
function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'shake 0.4s ease';
  setTimeout(() => el.focus(), 400);
}
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);
valueInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    insertNode();
  }
});
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchNode();
  }
});
setMode('head');
Object.assign(window, {
  setMode: setMode,
  insertNode: insertNode,
  removeNode: removeNode,
  removeByValue: removeByValue,
  searchNode: searchNode,
  highlightNode: highlightNode,
  clearAll: clearAll,
  render: render,
  addLog: addLog,
  shake: shake
});
export { setMode, insertNode, removeNode, removeByValue, searchNode, highlightNode, clearAll, render, addLog, shake };
