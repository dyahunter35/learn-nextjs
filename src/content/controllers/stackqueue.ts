// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const state = {
  mode: 'stack',
  items: [],
  maxSize: 7
};

/* ===== DOM refs ===== */
const visualEl = document.getElementById('visual-container');
const logEl = document.getElementById('log-list');
const valueInput = document.getElementById('value-input');
const sizeInfo = document.getElementById('size-info');
const emptyState = document.getElementById('empty-state');

/* ===== Tabs ===== */
function setMode(mode) {
  state.mode = mode;
  state.items = [];
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const m = btn.dataset.mode;
    btn.className = 'tab-btn ' + (m === mode ? mode === 'stack' ? 'active-stack' : 'active-queue' : 'inactive');
  });
  document.getElementById('action-primary').className = `action-btn ${mode === 'stack' ? 'btn-push' : 'btn-enqueue'}`;
  document.getElementById('action-primary-text').textContent = mode === 'stack' ? translateLegacyRuntime("legacy.915f6a701946fc32") : translateLegacyRuntime("legacy.300944552cf7e564");
  document.getElementById('action-secondary').className = `action-btn ${mode === 'stack' ? 'btn-pop' : 'btn-dequeue'}`;
  document.getElementById('action-secondary-text').textContent = mode === 'stack' ? translateLegacyRuntime("legacy.45d5a24411c7a6ea") : translateLegacyRuntime("legacy.796546a926200a1e");
  document.getElementById('action-primary-icon').innerHTML = mode === 'stack' ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>';
  render();
  addLog(translateLegacyRuntime(`تم التبديل إلى ${mode === 'stack' ? 'المكدس' : 'الطابور'}`, "legacy.1ed20d94b8318ba3", "\u062A\u0645 \u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 ${mode === 'stack' ? '\u0627\u0644\u0645\u0643\u062F\u0633' : '\u0627\u0644\u0637\u0627\u0628\u0648\u0631'}"), 'info');
  valueInput.focus();
}

/* ===== Core operations ===== */
function push() {
  const val = valueInput.value.trim();
  if (!val) {
    shake(valueInput);
    return;
  }
  if (state.items.length >= state.maxSize) {
    addLog(translateLegacyRuntime("legacy.702c8c8fa72e3286"), 'info');
    return;
  }
  state.items.push(val);
  valueInput.value = '';
  render();
  addLog(`Push: ${val}`, 'push');
  valueInput.focus();
}
function pop() {
  if (state.items.length === 0) {
    addLog(translateLegacyRuntime("legacy.08f01b53984490fc"), 'info');
    return;
  }
  const val = state.items.pop();
  render();
  addLog(`Pop: ${val}`, 'pop');
}
function enqueue() {
  const val = valueInput.value.trim();
  if (!val) {
    shake(valueInput);
    return;
  }
  if (state.items.length >= state.maxSize) {
    addLog(translateLegacyRuntime("legacy.cda9baa139e5883d"), 'info');
    return;
  }
  state.items.push(val);
  valueInput.value = '';
  render();
  addLog(`Enqueue: ${val}`, 'enqueue');
  valueInput.focus();
}
function dequeue() {
  if (state.items.length === 0) {
    addLog(translateLegacyRuntime("legacy.1f6588104c9c3cfd"), 'info');
    return;
  }
  const val = state.items.shift();
  render();
  addLog(`Dequeue: ${val}`, 'dequeue');
}
function clearAll() {
  if (state.items.length === 0) return;
  state.items = [];
  render();
  addLog(translateLegacyRuntime("legacy.f93da5471b141fe0"), 'info');
  valueInput.focus();
}

/* ===== Render ===== */
function render() {
  sizeInfo.textContent = `${state.items.length} / ${state.maxSize}`;
  if (state.items.length === 0) {
    emptyState.classList.remove('hidden');
    visualEl.innerHTML = '';
    visualEl.appendChild(emptyState);
    return;
  }
  emptyState.classList.add('hidden');
  if (state.mode === 'stack') {
    visualEl.innerHTML = '<div class="stack-vertical" id="stack-render"></div>';
    const container = document.getElementById('stack-render');
    state.items.forEach(val => {
      const div = document.createElement('div');
      div.className = 'stack-item';
      div.textContent = val;
      container.appendChild(div);
    });
  } else {
    visualEl.innerHTML = '<div class="queue-horizontal" id="queue-render"></div>';
    const container = document.getElementById('queue-render');
    state.items.forEach((val, i) => {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      const div = document.createElement('div');
      div.className = 'queue-item';
      div.textContent = val;
      wrapper.appendChild(div);
      if (i === 0) {
        const label = document.createElement('span');
        label.className = 'label-front';
        label.textContent = 'Front';
        wrapper.appendChild(label);
      }
      if (i === state.items.length - 1 && state.items.length > 1) {
        const label = document.createElement('span');
        label.className = 'label-rear';
        label.textContent = 'Rear';
        wrapper.appendChild(label);
      }
      container.appendChild(wrapper);
    });
    if (state.items.length === 1) {
      const firstWrapper = container.querySelector('[style*="position: relative"]');
      if (firstWrapper) {
        const label = document.createElement('span');
        label.className = 'label-rear';
        label.textContent = 'Rear';
        firstWrapper.appendChild(label);
      }
    }
  }
}

/* ===== Log ===== */
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

/* ===== Shake animation ===== */
function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'shake 0.4s ease';
  setTimeout(() => el.focus(), 400);
}

/* Add shake keyframes */
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

/* ===== Keyboard support ===== */
valueInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (state.mode === 'stack') push();else enqueue();
  }
});

/* ===== Init ===== */
setMode('stack');
Object.assign(window, {
  setMode: setMode,
  push: push,
  pop: pop,
  enqueue: enqueue,
  dequeue: dequeue,
  clearAll: clearAll,
  render: render,
  addLog: addLog,
  shake: shake
});
export { setMode, push, pop, enqueue, dequeue, clearAll, render, addLog, shake };
