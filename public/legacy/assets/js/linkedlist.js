const state = {
  mode: 'head',
  nodes: [],
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
    btn.className = 'tab-btn ' + (m === mode
      ? (mode === 'head' ? 'active-head' : 'active-tail')
      : 'inactive');
  });
  document.getElementById('insert-btn-text').textContent =
    mode === 'head' ? 'إدراج في المقدمة' : 'إدراج في النهاية';
  document.getElementById('remove-btn-text').textContent =
    mode === 'head' ? 'حذف من المقدمة' : 'حذف من النهاية';

  const insertBtn = document.getElementById('insert-btn');
  insertBtn.className = 'action-btn ' + (mode === 'head' ? 'btn-insert-head' : 'btn-insert-tail');
  const removeBtn = document.getElementById('remove-btn');
  removeBtn.className = 'action-btn ' + (mode === 'head' ? 'btn-remove-head' : 'btn-remove-tail');
  render();
  addLog(`التبديل إلى ${mode === 'head' ? 'المقدمة (Head)' : 'النهاية (Tail)'}`, 'info');
  valueInput.focus();
}

function insertNode() {
  const val = valueInput.value.trim();
  if (!val) { shake(valueInput); return; }
  const node = { id: Date.now(), value: val };
  if (state.mode === 'head') {
    state.nodes.unshift(node);
    addLog(`إدراج ${val} في المقدمة`, 'insert');
  } else {
    state.nodes.push(node);
    addLog(`إدراج ${val} في النهاية`, 'insert');
  }
  valueInput.value = '';
  render();
  valueInput.focus();
}

function removeNode() {
  if (state.nodes.length === 0) {
    addLog('القائمة فارغة!', 'info');
    return;
  }
  let val;
  if (state.mode === 'head') {
    val = state.nodes.shift().value;
    addLog(`حذف ${val} من المقدمة`, 'remove');
  } else {
    val = state.nodes.pop().value;
    addLog(`حذف ${val} من النهاية`, 'remove');
  }
  render();
}

function removeByValue() {
  const val = searchInput.value.trim();
  if (!val) { shake(searchInput); return; }
  const idx = state.nodes.findIndex(n => n.value === val);
  if (idx === -1) {
    addLog(`القيمة "${val}" غير موجودة`, 'search-notfound');
    shake(searchInput);
    return;
  }
  state.nodes.splice(idx, 1);
  addLog(`حذف "${val}" من القائمة`, 'remove');
  searchInput.value = '';
  render();
}

function searchNode() {
  const val = searchInput.value.trim();
  if (!val) { shake(searchInput); return; }
  const idx = state.nodes.findIndex(n => n.value === val);
  if (idx === -1) {
    addLog(`البحث عن "${val}": غير موجود`, 'search-notfound');
  } else {
    addLog(`البحث عن "${val}": موجود في العقدة #${idx + 1}`, 'search-found');
    highlightNode(idx);
  }
  searchInput.value = '';
}

function highlightNode(idx) {
  const wrappers = visualEl.querySelectorAll('.ll-node');
  if (wrappers[idx]) {
    wrappers[idx].classList.add('highlight');
    wrappers[idx].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    setTimeout(() => wrappers[idx].classList.remove('highlight'), 1200);
  }
}

function clearAll() {
  if (state.nodes.length === 0) return;
  state.nodes = [];
  render();
  addLog('تم مسح جميع العقد', 'info');
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
  const time = new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
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

valueInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); insertNode(); }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); searchNode(); }
});

setMode('head');
