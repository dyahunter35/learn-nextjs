// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const bt = {
  steps: [],
  currentIndex: -1,
  size: 4,
  running: false,
  autoTimer: null,
  autoSpeed: 500,
  totalSolutions: 0
};
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('board-container')) return;
  initBoard(bt.size);
  setupEventListeners();
});
function $(id) {
  return document.getElementById(id);
}
function setupEventListeners() {
  const sizeEl = $('board-size');
  if (sizeEl) {
    sizeEl.addEventListener('change', e => {
      bt.size = parseInt(e.target.value);
      resetSimulation();
      initBoard(bt.size);
    });
  }
  $('btn-start')?.addEventListener('click', startSimulation);
  $('btn-next')?.addEventListener('click', nextStep);
  $('btn-prev')?.addEventListener('click', prevStep);
  $('btn-reset')?.addEventListener('click', resetSimulation);
  $('auto-solve')?.addEventListener('change', toggleAutoSolve);
  $('speed-control')?.addEventListener('change', e => {
    bt.autoSpeed = parseInt(e.target.value);
  });
}
function initBoard(n) {
  const container = $('board-container');
  if (!container) return;
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.innerHTML = '';
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const cell = document.createElement('div');
      cell.className = `bt-cell ${(r + c) % 2 === 0 ? 'bt-cell-white' : 'bt-cell-black'}`;
      cell.dataset.row = r;
      cell.dataset.col = c;
      container.appendChild(cell);
    }
  }
}

/* ======= Step Generation ======= */

function generateNQueensSteps(n) {
  const steps = [];
  const queens = [];
  let found = 0;
  function isSafe(row, col) {
    return queens.every(([qr, qc]) => qc !== col && qr - qc !== row - col && qr + qc !== row + col);
  }
  function buildBoard() {
    const b = Array.from({
      length: n
    }, () => Array(n).fill(0));
    const set = new Set();
    for (const [qr, qc] of queens) {
      for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (r === qr || c === qc || r - c === qr - qc || r + c === qr + qc) set.add(r * n + c);
    }
    for (const [qr, qc] of queens) b[qr][qc] = 1;
    for (const key of set) {
      const r = Math.floor(key / n),
        c = key % n;
      if (b[r][c] === 0) b[r][c] = -1;
    }
    return b;
  }
  function attackedList() {
    const result = [];
    const set = new Set();
    for (const [qr, qc] of queens) {
      for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (r === qr || c === qc || r - c === qr - qc || r + c === qr + qc) set.add(r * n + c);
    }
    for (const key of set) {
      result.push([Math.floor(key / n), key % n]);
    }
    return result;
  }
  function rec(type, row, col, msg) {
    steps.push({
      type,
      row,
      col,
      attackedCells: attackedList(),
      board: buildBoard(),
      message: msg,
      solutionCount: found
    });
  }
  function backtrack(row) {
    if (row === n) {
      found++;
      rec('solution', -1, -1, translateLegacyRuntime(`تم إيجاد حل كامل! (الحل رقم ${found})`, "legacy.58de00c3fcb1308a", "\u062A\u0645 \u0625\u064A\u062C\u0627\u062F \u062D\u0644 \u0643\u0627\u0645\u0644! (\u0627\u0644\u062D\u0644 \u0631\u0642\u0645 ${found})"));
      return;
    }
    for (let col = 0; col < n; col++) {
      rec('try', row, col, translateLegacyRuntime(`محاولة وضع الملكة في الصف ${row + 1}، العمود ${col + 1}`, "legacy.294cdab6ba8e0841", "\u0645\u062D\u0627\u0648\u0644\u0629 \u0648\u0636\u0639 \u0627\u0644\u0645\u0644\u0643\u0629 \u0641\u064A \u0627\u0644\u0635\u0641 ${row + 1}\u060C \u0627\u0644\u0639\u0645\u0648\u062F ${col + 1}"));
      if (isSafe(row, col)) {
        queens.push([row, col]);
        rec('place', row, col, translateLegacyRuntime(`تم وضع الملكة في (${row + 1}, ${col + 1})`, "legacy.43c91c00cad60e7a", "\u062A\u0645 \u0648\u0636\u0639 \u0627\u0644\u0645\u0644\u0643\u0629 \u0641\u064A (${row + 1}, ${col + 1})"));
        backtrack(row + 1);
        queens.pop();
        rec('backtrack', row, col, translateLegacyRuntime(`الرجوع: إزالة الملكة من (${row + 1}, ${col + 1})`, "legacy.9db7cebf71a3b684", "\u0627\u0644\u0631\u062C\u0648\u0639: \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0643\u0629 \u0645\u0646 (${row + 1}, ${col + 1})"));
      } else {
        let reason = translateLegacyRuntime("legacy.1c02307241f79da1");
        if (queens.some(([qr, qc]) => qc === col)) reason = translateLegacyRuntime("legacy.fedb6d149f113c0f");else if (queens.some(([qr, qc]) => qr - qc === row - col || qr + qc === row + col)) reason = translateLegacyRuntime("legacy.ae5e3aa8b601d02f");
        rec('conflict', row, col, translateLegacyRuntime(`${reason} في (${row + 1}, ${col + 1})`, "legacy.fadbe0a7f5ba8b70", "${reason} \u0641\u064A (${row + 1}, ${col + 1})"));
      }
    }
  }
  backtrack(0);
  rec('done', -1, -1, translateLegacyRuntime(`اكتملت المحاكاة. تم العثور على ${found} حل${found !== 2 ? '' : 'ين'}${found > 2 ? 'ول' : ''}.`, "legacy.141bf08757c58fc1", "\u0627\u0643\u062A\u0645\u0644\u062A \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629. \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ${found} \u062D\u0644${found !== 2 ? '' : '\u064A\u0646'}${found > 2 ? '\u0648\u0644' : ''}."));
  const total = found;
  for (const s of steps) {
    if (s.type === 'solution') s.totalSolutions = total;
  }
  steps[steps.length - 1].totalSolutions = total;
  return {
    steps,
    totalSolutions: total
  };
}

/* ======= Navigation ======= */

function startSimulation() {
  if (bt.running) return;
  const n = bt.size;
  const statusEl = $('status');
  if (statusEl) statusEl.innerHTML = translateLegacyRuntime("legacy.e8c42d95233365c5");
  setTimeout(() => {
    const result = generateNQueensSteps(n);
    bt.steps = result.steps;
    bt.totalSolutions = result.totalSolutions;
    if (!bt.steps.length) {
      if (statusEl) statusEl.innerHTML = translateLegacyRuntime("legacy.d9c3aee5c1348d6f");
      return;
    }
    bt.running = true;
    bt.currentIndex = -1;
    $('btn-next').disabled = false;
    $('btn-prev').disabled = true;
    $('btn-start').disabled = true;
    if ($('board-size')) $('board-size').disabled = true;
    nextStep();
  }, 30);
}
function nextStep() {
  if (!bt.running || bt.currentIndex >= bt.steps.length - 1) {
    if (bt.currentIndex >= bt.steps.length - 1) stopAutoSolve();
    return;
  }
  bt.currentIndex++;
  goToStep(bt.currentIndex);
  $('btn-prev').disabled = bt.currentIndex <= 0;
  if (bt.currentIndex >= bt.steps.length - 1) {
    $('btn-next').disabled = true;
    stopAutoSolve();
  }
}
function prevStep() {
  if (!bt.running || bt.currentIndex <= 0) return;
  bt.currentIndex--;
  goToStep(bt.currentIndex);
  $('btn-next').disabled = false;
  $('btn-prev').disabled = bt.currentIndex <= 0;
}
function goToStep(index) {
  const step = bt.steps[index];
  if (!step) return;
  renderBoard(step);
  updateInfoPanel(step, index);
  updateStepLog(index);
  const info = $('step-info');
  if (info) info.textContent = translateLegacyRuntime(`الخطوة: ${index + 1} / ${bt.steps.length}`, "legacy.bc55ce7f21048aee", "\u0627\u0644\u062E\u0637\u0648\u0629: ${index + 1} / ${bt.steps.length}");
}
function resetSimulation() {
  stopAutoSolve();
  bt.steps = [];
  bt.currentIndex = -1;
  bt.running = false;
  bt.totalSolutions = 0;
  const auto = $('auto-solve');
  if (auto) auto.checked = false;
  const startBtn = $('btn-start');
  if (startBtn) startBtn.disabled = false;
  const nextBtn = $('btn-next');
  if (nextBtn) nextBtn.disabled = true;
  const prevBtn = $('btn-prev');
  if (prevBtn) prevBtn.disabled = true;
  const sizeEl = $('board-size');
  if (sizeEl) sizeEl.disabled = false;
  const statusEl = $('status');
  if (statusEl) statusEl.innerHTML = translateLegacyRuntime("legacy.a77433908e59cb21");
  const solEl = $('solution-count');
  if (solEl) solEl.textContent = '0';
  const infoEl = $('step-info');
  if (infoEl) infoEl.textContent = translateLegacyRuntime("legacy.859d16aa5611a633");
  const logEl = $('step-log');
  if (logEl) logEl.innerHTML = translateLegacyRuntime("legacy.d4d6d41f75453408");
  initBoard(bt.size);
}

/* ======= Rendering ======= */

function renderBoard(step) {
  const container = $('board-container');
  if (!container) return;
  const n = step.board.length;
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.innerHTML = '';
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const cell = document.createElement('div');
      cell.className = `bt-cell ${(r + c) % 2 === 0 ? 'bt-cell-white' : 'bt-cell-black'}`;
      const v = step.board[r][c];
      if (v === 1) {
        cell.classList.add('bt-cell-queen');
        cell.innerHTML = '<span class="queen-symbol">♛</span>';
      } else if (v === -1) {
        cell.classList.add('bt-cell-attacked');
      }
      if (step.type === 'try' && step.row === r && step.col === c) {
        cell.classList.add('bt-cell-trying');
      } else if (step.type === 'conflict' && step.row === r && step.col === c) {
        cell.classList.add('bt-cell-conflict');
      } else if (step.type === 'backtrack' && step.row === r && step.col === c) {
        cell.classList.add('bt-cell-backtracking');
      } else if (step.type === 'solution' && v === 1) {
        cell.classList.add('bt-cell-solution');
      }
      cell.dataset.row = r;
      cell.dataset.col = c;
      container.appendChild(cell);
    }
  }
}
function updateInfoPanel(step, index) {
  const statusEl = $('status');
  const solEl = $('solution-count');
  if (!statusEl) return;
  const names = {
    try: translateLegacyRuntime("legacy.697e0f301fc63be4"),
    place: translateLegacyRuntime("legacy.140aef0032b39efb"),
    conflict: translateLegacyRuntime("legacy.0fde00d87fa3e294"),
    backtrack: translateLegacyRuntime("legacy.87d08240f68703b6"),
    solution: translateLegacyRuntime("legacy.d78d5689aa1c4dbc"),
    done: translateLegacyRuntime("legacy.c9e98c3fb20acb0a")
  };
  let html = `<p class="font-bold text-lg mb-1">${names[step.type] || ''}</p>`;
  html += `<p>${step.message}</p>`;
  if (step.row >= 0) {
    html += translateLegacyRuntime(`<p class="text-sm text-gray-500 mt-1">الصف ${step.row + 1}، العمود ${step.col + 1}</p>`, "legacy.bddfe74b89ac16dc", "<p class=\"text-sm text-gray-500 mt-1\">\u0627\u0644\u0635\u0641 ${step.row + 1}\u060C \u0627\u0644\u0639\u0645\u0648\u062F ${step.col + 1}</p>");
  }
  statusEl.innerHTML = html;
  if (solEl) {
    const cur = step.solutionCount || 0;
    const total = bt.totalSolutions || 0;
    solEl.textContent = `${cur} / ${total}`;
  }
}
function updateStepLog(currentIndex) {
  const logEl = $('step-log');
  if (!logEl) return;
  logEl.innerHTML = '';
  const icons = {
    try: '🔍',
    place: '✅',
    conflict: '❌',
    backtrack: '↩️',
    solution: '🎉',
    done: '🏁'
  };
  const labels = {
    try: translateLegacyRuntime("legacy.f1e064fc5a1b013e"),
    place: translateLegacyRuntime("legacy.8db78d3d5a16fbc1"),
    conflict: translateLegacyRuntime("legacy.2519fef457aaccd7"),
    backtrack: translateLegacyRuntime("legacy.eec0e6368fef759a"),
    solution: translateLegacyRuntime("legacy.5cd1bc0ed9dc3ded"),
    done: translateLegacyRuntime("legacy.7852ae966c040a33")
  };
  const total = bt.steps.length;
  const radius = 200;
  const start = Math.max(0, currentIndex - radius);
  const end = Math.min(total, currentIndex + radius + 1);
  for (let i = start; i < end; i++) {
    const s = bt.steps[i];
    const entry = document.createElement('div');
    entry.className = `log-entry ${i === currentIndex ? 'log-entry-active' : ''}`;
    const icon = icons[s.type] || '';
    const label = labels[s.type] || '';
    let coords = '';
    if (s.row >= 0) coords = `(${s.row + 1}, ${s.col + 1})`;
    entry.innerHTML = `<span class="log-step-num">#${i + 1}</span>` + `<span class="log-icon">${icon}</span>` + `<span class="log-label log-label-${s.type}">${label}</span>` + (coords ? `<span class="log-coords">${coords}</span>` : '') + `<span class="log-msg">${s.message}</span>`;
    logEl.appendChild(entry);
  }
  const active = logEl.querySelector('.log-entry-active');
  if (active) active.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
}

/* ======= Auto Solve ======= */

function toggleAutoSolve() {
  const cb = $('auto-solve');
  if (!cb) return;
  cb.checked ? startAutoSolve() : stopAutoSolve();
}
function startAutoSolve() {
  if (!bt.running || bt.currentIndex >= bt.steps.length - 1) {
    const cb = $('auto-solve');
    if (cb) cb.checked = false;
    return;
  }
  bt.autoTimer = setInterval(() => {
    if (bt.currentIndex >= bt.steps.length - 1) {
      stopAutoSolve();
      return;
    }
    nextStep();
  }, bt.autoSpeed);
}
function stopAutoSolve() {
  if (bt.autoTimer) {
    clearInterval(bt.autoTimer);
    bt.autoTimer = null;
  }
  const cb = $('auto-solve');
  if (cb) cb.checked = false;
}
Object.assign(window, {
  $: $,
  setupEventListeners: setupEventListeners,
  initBoard: initBoard,
  generateNQueensSteps: generateNQueensSteps,
  startSimulation: startSimulation,
  nextStep: nextStep,
  prevStep: prevStep,
  goToStep: goToStep,
  resetSimulation: resetSimulation,
  renderBoard: renderBoard,
  updateInfoPanel: updateInfoPanel,
  updateStepLog: updateStepLog,
  toggleAutoSolve: toggleAutoSolve,
  startAutoSolve: startAutoSolve,
  stopAutoSolve: stopAutoSolve
});
export { $, setupEventListeners, initBoard, generateNQueensSteps, startSimulation, nextStep, prevStep, goToStep, resetSimulation, renderBoard, updateInfoPanel, updateStepLog, toggleAutoSolve, startAutoSolve, stopAutoSolve };
