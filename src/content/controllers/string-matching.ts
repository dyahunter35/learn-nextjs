// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let algorithm = "naive";
let currentStepIndex = -1;
let simulationSteps = [];
let foundPositions = [];
let isFinished = false;
const BOX_W = 48;
const BOX_GAP = 4;
const BOX_STEP = BOX_W + BOX_GAP;
window.onload = function () {
  renderTextRowOnly();
  updateControls();
  document.getElementById("statusMessage").textContent = translateLegacyRuntime("legacy.3fee18c507645216");
  document.getElementById("resultDisplay").innerHTML = "";
};
function getStepCount() {
  return simulationSteps.length;
}
function generateNaiveSteps(text, pattern) {
  const steps = [];
  const n = text.length;
  const m = pattern.length;
  const found = [];
  steps.push({
    type: "init",
    pos: 0,
    compareIndex: 0,
    textIndex: -1,
    textChar: "",
    patternChar: "",
    match: false,
    foundPositions: [],
    message: translateLegacyRuntime("legacy.0a5747fe3fd7b1a6")
  });
  for (let i = 0; i <= n - m; i++) {
    let fullMatch = true;
    for (let j = 0; j < m; j++) {
      const ti = i + j;
      const tc = text[ti];
      const pc = pattern[j];
      const isMatch = tc === pc;
      steps.push({
        type: "comparison",
        pos: i,
        compareIndex: j,
        textIndex: ti,
        textChar: tc,
        patternChar: pc,
        match: isMatch,
        foundPositions: [...found],
        message: translateLegacyRuntime(`قارن النص[${ti}] = '${tc}' مع النمط[${j}] = '${pc}' — ${isMatch ? "✓ تطابق" : "✗ عدم تطابق"}`, "legacy.3d6029d0e56c6041", "\u0642\u0627\u0631\u0646 \u0627\u0644\u0646\u0635[${ti}] = '${tc}' \u0645\u0639 \u0627\u0644\u0646\u0645\u0637[${j}] = '${pc}' \u2014 ${isMatch ? \"\u2713 \u062A\u0637\u0627\u0628\u0642\" : \"\u2717 \u0639\u062F\u0645 \u062A\u0637\u0627\u0628\u0642\"}")
      });
      if (!isMatch) {
        fullMatch = false;
        break;
      }
    }
    if (fullMatch) {
      found.push(i);
      steps.push({
        type: "found",
        pos: i,
        compareIndex: -1,
        textIndex: -1,
        textChar: "",
        patternChar: "",
        match: true,
        foundPositions: [...found],
        message: translateLegacyRuntime(`🎉 تم العثور على النمط في الموضع ${i}!`, "legacy.8ce1acd632fe4f24", "\uD83C\uDF89 \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0646\u0645\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0636\u0639 ${i}!")
      });
    }
  }
  steps.push({
    type: "done",
    pos: -1,
    compareIndex: -1,
    textIndex: -1,
    textChar: "",
    patternChar: "",
    match: false,
    foundPositions: [...found],
    message: found.length > 0 ? translateLegacyRuntime(`✅ تم العثور على النمط في المواضع: ${found.join("، ")}`, "legacy.d43fe41c7b1e1985", "\u2705 \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0646\u0645\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0636\u0639: ${found.join(\"\u060C \")}") : translateLegacyRuntime("legacy.0aaa831cc4d7a970")
  });
  return {
    steps,
    foundPositions: found
  };
}
function computePrefixTable(pattern) {
  const m = pattern.length;
  const pi = new Array(m).fill(0);
  let k = 0;
  for (let q = 1; q < m; q++) {
    while (k > 0 && pattern[k] !== pattern[q]) {
      k = pi[k - 1];
    }
    if (pattern[k] === pattern[q]) {
      k++;
    }
    pi[q] = k;
  }
  return pi;
}
function generateKMPSteps(text, pattern) {
  const steps = [];
  const n = text.length;
  const m = pattern.length;
  const found = [];
  const pi = computePrefixTable(pattern);
  steps.push({
    type: "kmp-init",
    pos: 0,
    compareIndex: 0,
    textIndex: -1,
    textChar: "",
    patternChar: "",
    match: false,
    foundPositions: [],
    prefixTable: pi,
    patternPos: 0,
    skipAmount: 0,
    message: translateLegacyRuntime(`🔍 بدء خوارزمية KMP — جدول البادئات: [${pi.join("، ")}]`, "legacy.0b8d8dd2d4ace3c7", "\uD83D\uDD0D \u0628\u062F\u0621 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 KMP \u2014 \u062C\u062F\u0648\u0644 \u0627\u0644\u0628\u0627\u062F\u0626\u0627\u062A: [${pi.join(\"\u060C \")}]")
  });
  let i = 0;
  let j = 0;
  while (i < n) {
    if (pattern[j] === text[i]) {
      steps.push({
        type: "comparison",
        pos: i - j,
        compareIndex: j,
        textIndex: i,
        textChar: text[i],
        patternChar: pattern[j],
        match: true,
        foundPositions: [...found],
        prefixTable: pi,
        patternPos: j,
        skipAmount: 0,
        message: translateLegacyRuntime(`قارن النص[${i}] = '${text[i]}' مع النمط[${j}] = '${pattern[j]}' — ✓ تطابق`, "legacy.2876e1a84322f03b", "\u0642\u0627\u0631\u0646 \u0627\u0644\u0646\u0635[${i}] = '${text[i]}' \u0645\u0639 \u0627\u0644\u0646\u0645\u0637[${j}] = '${pattern[j]}' \u2014 \u2713 \u062A\u0637\u0627\u0628\u0642")
      });
      i++;
      j++;
      if (j === m) {
        found.push(i - j);
        steps.push({
          type: "found",
          pos: i - j,
          compareIndex: -1,
          textIndex: -1,
          textChar: "",
          patternChar: "",
          match: true,
          foundPositions: [...found],
          prefixTable: pi,
          patternPos: j,
          skipAmount: pi[j - 1],
          message: translateLegacyRuntime(`🎉 تم العثور على النمط في الموضع ${i - j}!`, "legacy.8e65ce07facb113e", "\uD83C\uDF89 \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0646\u0645\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0636\u0639 ${i - j}!")
        });
        j = pi[j - 1];
      }
    } else {
      const skip = j > 0 ? pi[j - 1] : 0;
      steps.push({
        type: "comparison",
        pos: i - j,
        compareIndex: j,
        textIndex: i,
        textChar: text[i],
        patternChar: pattern[j],
        match: false,
        foundPositions: [...found],
        prefixTable: pi,
        patternPos: j,
        skipAmount: skip,
        message: translateLegacyRuntime(`قارن النص[${i}] = '${text[i]}' مع النمط[${j}] = '${pattern[j]}' — ✗ عدم تطابق${skip > 0 ? `، ننقل j = π[${j - 1}] = ${skip}` : ", نزيد i بمقدار 1"}`, "legacy.b5bfd2b982b0d319", "\u0642\u0627\u0631\u0646 \u0627\u0644\u0646\u0635[${i}] = '${text[i]}' \u0645\u0639 \u0627\u0644\u0646\u0645\u0637[${j}] = '${pattern[j]}' \u2014 \u2717 \u0639\u062F\u0645 \u062A\u0637\u0627\u0628\u0642${skip > 0 ? `\u060C \u0646\u0646\u0642\u0644 j = \u03C0[${j - 1}] = ${skip}` : \", \u0646\u0632\u064A\u062F i \u0628\u0645\u0642\u062F\u0627\u0631 1\"}")
      });
      if (j > 0) {
        j = pi[j - 1];
      } else {
        i++;
      }
    }
  }
  steps.push({
    type: "done",
    pos: -1,
    compareIndex: -1,
    textIndex: -1,
    textChar: "",
    patternChar: "",
    match: false,
    foundPositions: [...found],
    prefixTable: pi,
    patternPos: 0,
    skipAmount: 0,
    message: found.length > 0 ? translateLegacyRuntime(`✅ تم العثور على النمط في المواضع: ${found.join("، ")}`, "legacy.d43fe41c7b1e1985", "\u2705 \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0646\u0645\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0636\u0639: ${found.join(\"\u060C \")}") : translateLegacyRuntime("legacy.0aaa831cc4d7a970")
  });
  return {
    steps,
    foundPositions: found
  };
}
function startSimulation() {
  text = document.getElementById("textInput").value;
  pattern = document.getElementById("patternInput").value;
  algorithm = document.getElementById("algorithmSelect").value;
  if (!text || !pattern) {
    document.getElementById("statusMessage").textContent = translateLegacyRuntime("legacy.012a70cffdf3de93");
    document.getElementById("statusMessage").className = "sm-status error";
    return;
  }
  if (pattern.length > text.length) {
    document.getElementById("statusMessage").textContent = translateLegacyRuntime("legacy.ca68d20e9855e343");
    document.getElementById("statusMessage").className = "sm-status error";
    return;
  }
  if (pattern.length === 0) {
    document.getElementById("statusMessage").textContent = translateLegacyRuntime("legacy.ffa3313b85c8ef17");
    document.getElementById("statusMessage").className = "sm-status error";
    return;
  }
  isFinished = false;
  currentStepIndex = -1;
  if (algorithm === "kmp") {
    const result = generateKMPSteps(text, pattern);
    simulationSteps = result.steps;
    foundPositions = result.foundPositions;
  } else {
    const result = generateNaiveSteps(text, pattern);
    simulationSteps = result.steps;
    foundPositions = result.foundPositions;
  }
  document.getElementById("stepCounter").textContent = translateLegacyRuntime(`عدد الخطوات: ${simulationSteps.length}`, "legacy.df60c5becac89d36", "\u0639\u062F\u062F \u0627\u0644\u062E\u0637\u0648\u0627\u062A: ${simulationSteps.length}");
  document.getElementById("prevButton").disabled = true;
  document.getElementById("nextButton").disabled = false;
  document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.5eaaff812af33515");
  currentStepIndex = 0;
  renderStep(currentStepIndex);
  updateControls();
}
function nextStep() {
  if (isFinished || currentStepIndex >= simulationSteps.length - 1) return;
  currentStepIndex++;
  renderStep(currentStepIndex);
  updateControls();
  const btn = document.getElementById("nextButton");
  btn.style.transform = "scale(0.95)";
  setTimeout(() => {
    btn.style.transform = "";
  }, 150);
}
function previousStep() {
  if (currentStepIndex <= 0) return;
  currentStepIndex--;
  renderStep(currentStepIndex);
  updateControls();
  const btn = document.getElementById("prevButton");
  btn.style.transform = "scale(0.95)";
  setTimeout(() => {
    btn.style.transform = "";
  }, 150);
}
function resetSimulation() {
  currentStepIndex = -1;
  simulationSteps = [];
  foundPositions = [];
  isFinished = false;
  text = document.getElementById("textInput").value;
  pattern = document.getElementById("patternInput").value;
  renderTextRowOnly();
  document.getElementById("statusMessage").textContent = translateLegacyRuntime("legacy.3fee18c507645216");
  document.getElementById("statusMessage").className = "sm-status";
  document.getElementById("resultDisplay").innerHTML = "";
  document.getElementById("stepLogBody").innerHTML = "";
  document.getElementById("stepCounter").textContent = "";
  document.getElementById("prefixTableDisplay").innerHTML = "";
  document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.cdcdb088305e072a");
  updateControls();
}
function renderStep(index) {
  const step = simulationSteps[index];
  if (!step) return;
  renderVisualization(step);
  renderStepLog(index);
  renderPrefixTable(step);
  updateStatus(step);
  const stepInfo = document.getElementById("stepInfo");
  if (stepInfo) {
    stepInfo.textContent = translateLegacyRuntime(`الخطوة ${index + 1} من ${simulationSteps.length}`, "legacy.f2e1973f66c98123", "\u0627\u0644\u062E\u0637\u0648\u0629 ${index + 1} \u0645\u0646 ${simulationSteps.length}");
  }
  if (step.type === "done") {
    isFinished = true;
    renderResults(step);
  } else if (step.type === "found") {
    renderResults(step);
  }
  updateControls();
}
function renderTextRowOnly() {
  const container = document.getElementById("visualizationArea");
  if (!container) return;
  container.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "display:flex;flex-direction:column;align-items:center;gap:0.75rem;min-height:120px;justify-content:center;";
  const textRow = createTextRow(text, -1);
  wrapper.appendChild(textRow);
  const msg = document.createElement("div");
  msg.className = "sm-match-highlight";
  msg.textContent = translateLegacyRuntime("legacy.0ff65dbf8b995bcc");
  wrapper.appendChild(msg);
  container.appendChild(wrapper);
}
function renderVisualization(step) {
  const container = document.getElementById("visualizationArea");
  if (!container) return;
  container.innerHTML = "";
  const n = text.length;
  const m = pattern.length;
  const pos = step.pos;
  const ci = step.compareIndex;
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem;position:relative;";
  const textRow = createTextRow(text, step.type === "found" ? pos : -1, step.type === "found" ? m : 0);
  const connectorArea = document.createElement("div");
  connectorArea.style.cssText = "position:relative;width:100%;height:4px;";
  const patternRowContainer = document.createElement("div");
  const offset = pos >= 0 ? pos * BOX_STEP : 0;
  patternRowContainer.style.cssText = `position:relative;padding-left:${offset}px;display:flex;align-items:center;direction:ltr;`;
  const patternRow = document.createElement("div");
  patternRow.style.cssText = "display:flex;align-items:center;gap:4px;direction:ltr;";
  const patternLabel = document.createElement("span");
  patternLabel.className = "sm-pattern-label";
  patternLabel.textContent = translateLegacyRuntime("legacy.015946274509f3a9");
  patternLabel.style.cssText = "font-weight:700;font-size:0.85rem;color:#6b7280;margin-right:0.5rem;direction:rtl;";
  patternRowContainer.appendChild(patternLabel);
  for (let j = 0; j < m; j++) {
    const box = document.createElement("div");
    box.className = "sm-pattern-box sm-char-default";
    box.textContent = pattern[j];
    const isComparing = pos >= 0 && ci >= 0 && j === ci && step.type === "comparison";
    const isMatched = pos >= 0 && ci >= 0 && j < ci && step.match && step.type === "comparison";
    const isMismatched = pos >= 0 && ci >= 0 && j === ci && step.type === "comparison" && !step.match;
    const isFoundRange = step.type === "found" && j >= 0 && j < m;
    const isDone = step.type === "done";
    if (isComparing && step.match) {
      box.className = "sm-pattern-box sm-char-comparing";
    } else if (isComparing && !step.match) {
      box.className = "sm-pattern-box sm-char-mismatched";
    } else if (isMatched) {
      box.className = "sm-pattern-box sm-char-matched";
    } else if (isFoundRange) {
      box.className = "sm-pattern-box sm-char-found";
    } else if (isDone) {
      box.className = "sm-pattern-box sm-char-default";
      box.style.opacity = "0.5";
    }
    patternRow.appendChild(box);
  }
  patternRowContainer.appendChild(patternRow);
  wrapper.appendChild(textRow);
  wrapper.appendChild(connectorArea);
  wrapper.appendChild(patternRowContainer);
  container.appendChild(wrapper);
}
function createTextRow(textStr, foundPos, foundLen) {
  const row = document.createElement("div");
  row.style.cssText = "display:flex;align-items:center;gap:4px;direction:ltr;";
  const label = document.createElement("span");
  label.className = "sm-text-label";
  label.textContent = translateLegacyRuntime("legacy.14c6ac7fe6aa4c9c");
  label.style.cssText = "font-weight:700;font-size:0.85rem;color:#6b7280;margin-right:0.5rem;direction:rtl;";
  row.appendChild(label);
  for (let i = 0; i < textStr.length; i++) {
    const box = document.createElement("div");
    box.className = "sm-text-box sm-char-default";
    box.textContent = textStr[i];
    if (foundPos >= 0 && i >= foundPos && i < foundPos + foundLen) {
      box.className = "sm-text-box sm-char-found";
    }
    const idxLabel = document.createElement("span");
    idxLabel.className = "sm-text-index";
    idxLabel.textContent = i;
    box.appendChild(idxLabel);
    row.appendChild(box);
  }
  return row;
}
function renderPrefixTable(step) {
  const container = document.getElementById("prefixTableDisplay");
  if (!container) return;
  if (algorithm !== "kmp" || step.type === "init" || step.type === "kmp-init") {
    if (algorithm === "kmp" && step.type === "kmp-init") {
      container.innerHTML = "";
      const pi = step.prefixTable;
      if (!pi) return;
      const title = document.createElement("div");
      title.textContent = translateLegacyRuntime("legacy.8cbcd312457ca062");
      title.style.cssText = "font-weight:700;font-size:0.85rem;color:#374151;margin-bottom:0.5rem;text-align:center;";
      const table = document.createElement("div");
      table.className = "sm-prefix-table";
      for (let k = 0; k < pi.length; k++) {
        const cell = document.createElement("div");
        cell.className = "sm-prefix-cell";
        cell.textContent = pi[k];
        table.appendChild(cell);
      }
      container.innerHTML = "";
      container.appendChild(title);
      container.appendChild(table);
    } else {
      container.innerHTML = "";
      if (algorithm === "kmp") {
        const msg = document.createElement("div");
        msg.style.cssText = "text-align:center;color:#9ca3af;font-size:0.85rem;padding:1rem;";
        msg.textContent = translateLegacyRuntime("legacy.5dda3ecceb261d14");
        container.appendChild(msg);
      }
    }
    return;
  }
  const pi = step.prefixTable;
  if (!pi) return;
  container.innerHTML = "";
  const title = document.createElement("div");
  title.textContent = translateLegacyRuntime("legacy.8cbcd312457ca062");
  title.style.cssText = "font-weight:700;font-size:0.85rem;color:#374151;margin-bottom:0.5rem;text-align:center;";
  const table = document.createElement("div");
  table.className = "sm-prefix-table";
  const cp = step.patternPos;
  for (let k = 0; k < pi.length; k++) {
    const cell = document.createElement("div");
    cell.className = "sm-prefix-cell";
    cell.textContent = pi[k];
    if (k === cp - 1 && step.type === "comparison" && !step.match) {
      cell.classList.add("sm-char-comparing");
    } else if (k < cp) {
      cell.classList.add("sm-char-matched");
    }
    table.appendChild(cell);
  }
  container.appendChild(title);
  container.appendChild(table);
}
function renderStepLog(currentIdx) {
  const tbody = document.getElementById("stepLogBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const start = Math.max(0, currentIdx - 50);
  for (let i = currentIdx; i >= start; i--) {
    const step = simulationSteps[i];
    if (!step) continue;
    const tr = document.createElement("tr");
    if (i === currentIdx) tr.className = "sm-current-step";
    const numCell = document.createElement("td");
    numCell.textContent = i + 1;
    numCell.style.fontWeight = "700";
    numCell.style.color = "#4f46e5";
    tr.appendChild(numCell);
    const posCell = document.createElement("td");
    posCell.className = "font-mono";
    posCell.textContent = step.pos >= 0 ? step.pos : "-";
    tr.appendChild(posCell);
    const compCell = document.createElement("td");
    if (step.type === "comparison" || step.type === "found") {
      compCell.textContent = `'${step.textChar}' ←→ '${step.patternChar}'`;
    } else if (step.type === "init" || step.type === "kmp-init") {
      compCell.textContent = "---";
    } else {
      compCell.textContent = "---";
    }
    compCell.className = "font-mono";
    tr.appendChild(compCell);
    const resultCell = document.createElement("td");
    if (step.type === "found") {
      resultCell.textContent = translateLegacyRuntime(`✓ وجد في ${step.pos}`, "legacy.0a5997b486bcc628", "\u2713 \u0648\u062C\u062F \u0641\u064A ${step.pos}");
      resultCell.className = "sm-found-cell";
    } else if (step.type === "comparison" && step.match) {
      resultCell.textContent = "✓";
      resultCell.className = "sm-found-cell";
    } else if (step.type === "comparison" && !step.match) {
      resultCell.textContent = "✗";
      resultCell.className = "sm-mismatch-cell";
    } else if (step.type === "done") {
      resultCell.textContent = step.foundPositions.length > 0 ? translateLegacyRuntime("legacy.3ef541b90a31dc25") : translateLegacyRuntime("legacy.24d0ac1201f9f472");
      resultCell.className = step.foundPositions.length > 0 ? "sm-found-cell" : "sm-mismatch-cell";
    } else {
      resultCell.textContent = translateLegacyRuntime("legacy.bca1544d642e51b5");
    }
    tr.appendChild(resultCell);
    tbody.appendChild(tr);
  }
}
function updateStatus(step) {
  const el = document.getElementById("statusMessage");
  if (!el) return;
  el.textContent = step.message;
  if (step.type === "found") {
    el.className = "sm-status success";
  } else if (step.type === "done") {
    el.className = step.foundPositions.length > 0 ? "sm-status success" : "sm-status error";
  } else if (step.type === "comparison" && !step.match) {
    el.className = "sm-status info";
  } else {
    el.className = "sm-status info";
  }
}
function renderResults(step) {
  const el = document.getElementById("resultDisplay");
  if (!el) return;
  const positions = step.foundPositions;
  if (positions.length > 0) {
    let html = '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;justify-content:center;">';
    html += translateLegacyRuntime("legacy.3f0fee08ed668f8b");
    positions.forEach(p => {
      html += translateLegacyRuntime(`<span class="sm-found-badge">الموضع ${p}</span>`, "legacy.72a44a8f5f3c27a4", "<span class=\"sm-found-badge\">\u0627\u0644\u0645\u0648\u0636\u0639 ${p}</span>");
    });
    html += '</div>';
    el.innerHTML = html;
  } else {
    el.innerHTML = translateLegacyRuntime("legacy.32eba757559e1197");
  }
}
function updateControls() {
  const prevBtn = document.getElementById("prevButton");
  const nextBtn = document.getElementById("nextButton");
  const startBtn = document.getElementById("startButton");
  if (isFinished) {
    startBtn.disabled = true;
    nextBtn.disabled = true;
    prevBtn.disabled = currentStepIndex <= 0;
    startBtn.textContent = translateLegacyRuntime("legacy.f40eb8eb3c49adc3");
  } else if (simulationSteps.length === 0) {
    startBtn.disabled = false;
    startBtn.textContent = translateLegacyRuntime("legacy.cdcdb088305e072a");
    nextBtn.disabled = true;
    prevBtn.disabled = true;
  } else {
    startBtn.disabled = true;
    startBtn.textContent = translateLegacyRuntime("legacy.5c6240a741c76790");
    nextBtn.disabled = currentStepIndex >= simulationSteps.length - 1;
    prevBtn.disabled = currentStepIndex <= 0;
  }
}
Object.assign(window, {
  getStepCount: getStepCount,
  generateNaiveSteps: generateNaiveSteps,
  computePrefixTable: computePrefixTable,
  generateKMPSteps: generateKMPSteps,
  startSimulation: startSimulation,
  nextStep: nextStep,
  previousStep: previousStep,
  resetSimulation: resetSimulation,
  renderStep: renderStep,
  renderTextRowOnly: renderTextRowOnly,
  renderVisualization: renderVisualization,
  createTextRow: createTextRow,
  renderPrefixTable: renderPrefixTable,
  renderStepLog: renderStepLog,
  updateStatus: updateStatus,
  renderResults: renderResults,
  updateControls: updateControls
});
export { getStepCount, generateNaiveSteps, computePrefixTable, generateKMPSteps, startSimulation, nextStep, previousStep, resetSimulation, renderStep, renderTextRowOnly, renderVisualization, createTextRow, renderPrefixTable, renderStepLog, updateStatus, renderResults, updateControls };
