// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let arrayContainer, stepsLog, statusMessage, arrayInput, nodeCountBadge;
let targetValue;
let currentStepIndex = -1;
let simulationHistory = [];
let isSearchFinished = false;
window.onload = function () {
  arrayContainer = document.getElementById("arrayContainer");
  stepsLog = document.getElementById("stepsLog");
  statusMessage = document.getElementById("statusMessage");
  arrayInput = document.getElementById("arrayInput");
  nodeCountBadge = document.getElementById("nodeCountBadge");
  resetSearch(false);
};
function renderArray({
  highlightIndex = -1,
  lowIndex = -1,
  highIndex = -1,
  midIndex = -1,
  excludedIndices = new Set(),
  algorithm = "binary",
  foundIndex = -1
} = {}) {
  arrayContainer.innerHTML = "";
  array.forEach((value, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("element-wrapper");
    const element = document.createElement("div");
    element.classList.add("array-element");
    let bgColorClass = "default-bg";
    if (foundIndex === index) {
      bgColorClass = "found-bg";
    } else if (excludedIndices.has(index)) {
      bgColorClass = "excluded-bg";
    } else if (midIndex === index) {
      bgColorClass = "mid-bg";
    } else if ((lowIndex === index || highIndex === index) && index !== midIndex) {
      bgColorClass = "low-high-bg";
    } else if (highlightIndex === index) {
      bgColorClass = "comparing-bg";
    }
    element.classList.add(bgColorClass);
    const valueWrapper = document.createElement("div");
    valueWrapper.classList.add("node-value-wrapper");
    const valueSpan = document.createElement("span");
    valueSpan.textContent = value;
    valueWrapper.appendChild(valueSpan);
    const indexLabel = document.createElement("div");
    indexLabel.textContent = `[${index}]`;
    indexLabel.classList.add("index-label");
    valueWrapper.appendChild(indexLabel);
    element.appendChild(valueWrapper);
    const markerLabels = [];
    if (algorithm === "binary") {
      if (index === lowIndex) markerLabels.push("Low");
      if (index === highIndex) markerLabels.push("High");
      if (index === midIndex) markerLabels.push("Mid");
    } else if (algorithm === "sequential" && index === highlightIndex) {
      markerLabels.push("← Current");
    }
    if (markerLabels.length > 0) {
      const markerColors = {
        Low: "bg-red-500",
        High: "bg-blue-500",
        Mid: "bg-indigo-700",
        "← Current": "bg-amber-700"
      };
      const markersWrapper = document.createElement("div");
      markersWrapper.style.cssText = "display:flex;flex-direction:column;align-items:center;position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);gap:2px;";
      markerLabels.forEach(label => {
        const span = document.createElement("span");
        span.textContent = label;
        span.className = "marker-label " + (markerColors[label] || "bg-gray-600");
        markersWrapper.appendChild(span);
      });
      element.appendChild(markersWrapper);
      element.style.marginBottom = "36px";
    }
    wrapper.appendChild(element);
    if (index < array.length - 1) {
      const connector = document.createElement("div");
      connector.classList.add("node-connector");
      const line = document.createElement("div");
      line.classList.add("connector-line");
      if (excludedIndices.has(index) && excludedIndices.has(index + 1)) {
        line.classList.add("excluded");
      }
      connector.appendChild(line);
      wrapper.appendChild(connector);
    }
    arrayContainer.appendChild(wrapper);
  });
}
function updateArray() {
  const raw = arrayInput.value.trim();
  if (!raw) {
    showMessage(translateLegacyRuntime("legacy.982dc44770ea7934"), "error");
    return;
  }
  const nums = raw.split(/[,\s]+/).map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  if (nums.length < 2) {
    showMessage(translateLegacyRuntime("legacy.97ff423ce48883b9"), "error");
    return;
  }
  if (nums.some(n => n > 999 || n < -999)) {
    showMessage(translateLegacyRuntime("legacy.3bf3f40c03324f58"), "error");
    return;
  }
  array = nums;
  nodeCountBadge.textContent = translateLegacyRuntime(`${array.length} عقدة`, "legacy.f3329f48af6426b2", "${array.length} \u0639\u0642\u062F\u0629");
  document.getElementById("targetInput").max = Math.max(...array);
  document.getElementById("targetInput").min = Math.min(...array);
  resetSearch(true);
  showMessage(translateLegacyRuntime(`✅ تم تحديث المصفوفة بنجاح: ${array.length} عنصر`, "legacy.469884fe0ba7071c", "\u2705 \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0628\u0646\u062C\u0627\u062D: ${array.length} \u0639\u0646\u0635\u0631"), "success");
}
function showMessage(message, type = "info") {
  statusMessage.textContent = message;
  statusMessage.className = "status-message " + type;
}
function updateControlButtons() {
  document.getElementById("nextButton").disabled = isSearchFinished || currentStepIndex === simulationHistory.length - 1;
  document.getElementById("prevButton").disabled = currentStepIndex <= 0;
  document.getElementById("startButton").disabled = isSearchFinished;
  if (currentStepIndex === -1 && !isSearchFinished) {
    document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.1fee8fc5adebd723");
  } else if (isSearchFinished) {
    document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.cb13da8d5d407000");
    document.getElementById("nextButton").disabled = true;
  } else {
    document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.5eaaff812af33515");
  }
}
function renderBinaryTable(steps) {
  let tableHTML = translateLegacyRuntime(`
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead>
          <tr>
            <th>الخطوة</th>
            <th>Low</th>
            <th>High</th>
            <th>Mid</th>
            <th>قيمة Mid</th>
            <th>القرار</th>
          </tr>
        </thead>
        <tbody>
  `, "legacy.72e48a30704a4b03", "\n    <div class=\"overflow-x-auto rounded-xl border border-gray-200\">\n      <table class=\"steps-table\">\n        <thead>\n          <tr>\n            <th>\u0627\u0644\u062E\u0637\u0648\u0629</th>\n            <th>Low</th>\n            <th>High</th>\n            <th>Mid</th>\n            <th>\u0642\u064A\u0645\u0629 Mid</th>\n            <th>\u0627\u0644\u0642\u0631\u0627\u0631</th>\n          </tr>\n        </thead>\n        <tbody>\n  ");
  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const decisionClass = step.decision.includes(translateLegacyRuntime("legacy.8db78d3d5a16fbc1")) ? "text-green-600 font-bold" : step.decision.includes(translateLegacyRuntime("legacy.2519fef457aaccd7")) ? "text-red-600 font-bold" : "text-gray-700";
    const rowClass = i === currentStepIndex ? "current-step" : "";
    tableHTML += `
      <tr class="${rowClass}">
        <td class="font-bold text-indigo-600">${i + 1}</td>
        <td class="font-mono">${step.low}</td>
        <td class="font-mono">${step.high}</td>
        <td class="font-mono">${step.mid}</td>
        <td class="font-mono font-bold">${step.midValue}</td>
        <td class="${decisionClass}">${step.decision}</td>
      </tr>
    `;
  }
  tableHTML += "</tbody></table></div>";
  stepsLog.innerHTML = tableHTML;
}
function renderSequentialTable(steps) {
  let tableHTML = translateLegacyRuntime(`
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead>
          <tr>
            <th>الخطوة</th>
            <th>الفهرس</th>
            <th>القيمة</th>
            <th>الهدف</th>
            <th>القرار</th>
          </tr>
        </thead>
        <tbody>
  `, "legacy.6109fc4f6193ccff", "\n    <div class=\"overflow-x-auto rounded-xl border border-gray-200\">\n      <table class=\"steps-table\">\n        <thead>\n          <tr>\n            <th>\u0627\u0644\u062E\u0637\u0648\u0629</th>\n            <th>\u0627\u0644\u0641\u0647\u0631\u0633</th>\n            <th>\u0627\u0644\u0642\u064A\u0645\u0629</th>\n            <th>\u0627\u0644\u0647\u062F\u0641</th>\n            <th>\u0627\u0644\u0642\u0631\u0627\u0631</th>\n          </tr>\n        </thead>\n        <tbody>\n  ");
  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const decisionClass = step.decision.includes(translateLegacyRuntime("legacy.8db78d3d5a16fbc1")) ? "text-green-600 font-bold" : step.decision.includes(translateLegacyRuntime("legacy.2519fef457aaccd7")) ? "text-red-600 font-bold" : "text-gray-700";
    const rowClass = i === currentStepIndex ? "current-step" : "";
    tableHTML += `
      <tr class="${rowClass}">
        <td class="font-bold text-indigo-600">${i + 1}</td>
        <td class="font-mono">${step.currentIndex}</td>
        <td class="font-mono font-bold">${step.currentValue}</td>
        <td class="font-mono">${step.target}</td>
        <td class="${decisionClass}">${step.decision}</td>
      </tr>
    `;
  }
  tableHTML += "</tbody></table></div>";
  stepsLog.innerHTML = tableHTML;
}
function startSearch() {
  const algorithm = document.getElementById("algorithmSelect").value;
  targetValue = parseInt(document.getElementById("targetInput").value);
  if (isNaN(targetValue)) {
    showMessage(translateLegacyRuntime("legacy.0dfacfbd5ef7f7ef"), "error");
    const input = document.getElementById("targetInput");
    input.style.animation = "none";
    input.offsetHeight;
    input.style.animation = "shake 0.4s ease";
    return;
  }
  if (isSearchFinished) {
    resetSearch(true);
    return;
  }
  if (simulationHistory.length > 0) {
    nextStep();
    return;
  }
  showMessage(translateLegacyRuntime(`بدء المحاكاة التفاعلية لخوارزمية ${algorithm === "binary" ? "البحث الثنائي" : "البحث المتتالي"}...`, "legacy.fff54b7b091acddd", "\u0628\u062F\u0621 \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 ${algorithm === \"binary\" ? \"\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u062B\u0646\u0627\u0626\u064A\" : \"\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u062A\u0627\u0644\u064A\"}..."), "info");
  isSearchFinished = false;
  simulationHistory = [];
  currentStepIndex = -1;
  if (algorithm === "sequential") {
    sequentialSearchSimulator(targetValue);
  } else if (algorithm === "binary") {
    const isSorted = array.every((val, i, arr) => i === 0 || val >= arr[i - 1]);
    if (!isSorted) {
      const sorted = [...array].sort((a, b) => a - b);
      array = sorted;
      arrayInput.value = sorted.join(",");
      nodeCountBadge.textContent = translateLegacyRuntime(`${array.length} عقدة`, "legacy.f3329f48af6426b2", "${array.length} \u0639\u0642\u062F\u0629");
      showMessage(translateLegacyRuntime(`⚠️ المصفوفة غير مرتبة! تم ترتيبها تلقائياً: ${sorted.join(", ")}`, "legacy.2ed1629c0e3d3c07", "\u26A0\uFE0F \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u063A\u064A\u0631 \u0645\u0631\u062A\u0628\u0629! \u062A\u0645 \u062A\u0631\u062A\u064A\u0628\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B: ${sorted.join(\", \")}"), "info");
    }
    binarySearchSimulator(targetValue);
  }
  nextStep();
}
function nextStep() {
  if (currentStepIndex < simulationHistory.length - 1) {
    currentStepIndex++;
    updateVisualization();
    const nextBtn = document.getElementById("nextButton");
    nextBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
      nextBtn.style.transform = "";
    }, 150);
  }
}
function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();
    const prevBtn = document.getElementById("prevButton");
    prevBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
      prevBtn.style.transform = "";
    }, 150);
  }
}
function resetSearch(shouldClearMessage = true) {
  currentStepIndex = -1;
  simulationHistory = [];
  isSearchFinished = false;
  stepsLog.innerHTML = "";
  nodeCountBadge.textContent = translateLegacyRuntime(`${array.length} عقدة`, "legacy.f3329f48af6426b2", "${array.length} \u0639\u0642\u062F\u0629");
  renderArray({
    highlightIndex: -1,
    excludedIndices: new Set(),
    algorithm: document.getElementById("algorithmSelect").value
  });
  if (shouldClearMessage) {
    statusMessage.textContent = translateLegacyRuntime("legacy.3827c2f852a0ffbc");
    statusMessage.className = "status-message";
  }
  updateControlButtons();
}
function updateVisualization() {
  if (currentStepIndex >= 0 && currentStepIndex < simulationHistory.length) {
    const step = simulationHistory[currentStepIndex];
    renderArray(step.arrayState);
    const algorithm = document.getElementById("algorithmSelect").value;
    if (algorithm === "binary") {
      renderBinaryTable(simulationHistory.map(s => s.logEntry));
    } else {
      renderSequentialTable(simulationHistory.map(s => s.logEntry));
    }
    showMessage(step.message, step.isError ? "error" : step.isSuccess ? "success" : "info");
    if (currentStepIndex === simulationHistory.length - 1) {
      isSearchFinished = true;
    } else {
      isSearchFinished = false;
    }
  } else if (currentStepIndex === simulationHistory.length) {
    isSearchFinished = true;
  }
  updateControlButtons();
}
arrayInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    updateArray();
  }
});
function sequentialSearchSimulator(target) {
  let foundIndex = -1;
  simulationHistory.push({
    arrayState: {
      highlightIndex: -1,
      algorithm: "sequential"
    },
    logEntry: {
      currentIndex: "N/A",
      currentValue: "N/A",
      target: target,
      decision: translateLegacyRuntime("legacy.9ee6a7d24098d66e")
    },
    message: translateLegacyRuntime(`🔍 بدء البحث المتتالي عن القيمة ${target}.`, "legacy.65abb3058c00b753", "\uD83D\uDD0D \u0628\u062F\u0621 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u062A\u0627\u0644\u064A \u0639\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 ${target}.")
  });
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    let decisionText;
    if (currentValue === target) {
      decisionText = translateLegacyRuntime(`✓ نجاح: ${currentValue} = ${target}. تم العثور عليها!`, "legacy.15baf8d822d2d6e3", "\u2713 \u0646\u062C\u0627\u062D: ${currentValue} = ${target}. \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u064A\u0647\u0627!");
      foundIndex = i;
    } else {
      decisionText = translateLegacyRuntime(`✗ ${currentValue} ≠ ${target}. ننتقل للعنصر التالي.`, "legacy.1859259f181307a2", "\u2717 ${currentValue} \u2260 ${target}. \u0646\u0646\u062A\u0642\u0644 \u0644\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u062A\u0627\u0644\u064A.");
    }
    const excludedSet = new Set();
    for (let j = 0; j < i; j++) {
      excludedSet.add(j);
    }
    simulationHistory.push({
      arrayState: {
        highlightIndex: i,
        algorithm: "sequential",
        excludedIndices: excludedSet
      },
      logEntry: {
        currentIndex: i,
        currentValue: currentValue,
        target: target,
        decision: decisionText
      },
      message: translateLegacyRuntime(`الخطوة ${i + 1}: مقارنة ${target} مع العنصر عند [${i}] = ${currentValue}.`, "legacy.af1027c8dbf32fbd", "\u0627\u0644\u062E\u0637\u0648\u0629 ${i + 1}: \u0645\u0642\u0627\u0631\u0646\u0629 ${target} \u0645\u0639 \u0627\u0644\u0639\u0646\u0635\u0631 \u0639\u0646\u062F [${i}] = ${currentValue}.")
    });
    if (foundIndex !== -1) {
      simulationHistory.push({
        arrayState: {
          highlightIndex: i,
          algorithm: "sequential",
          foundIndex: i,
          excludedIndices: (() => {
            const s = new Set();
            for (let j = 0; j < i; j++) s.add(j);
            return s;
          })()
        },
        logEntry: {
          currentIndex: i,
          currentValue: currentValue,
          target: target,
          decision: decisionText
        },
        message: translateLegacyRuntime(`🎉 انتهى البحث: تم العثور على القيمة ${target} عند الفهرس [${i}]!`, "legacy.b4ba477b8c8e367d", "\uD83C\uDF89 \u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0628\u062D\u062B: \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0645\u0629 ${target} \u0639\u0646\u062F \u0627\u0644\u0641\u0647\u0631\u0633 [${i}]!"),
        isSuccess: true
      });
      break;
    }
  }
  if (foundIndex === -1) {
    simulationHistory.push({
      arrayState: {
        highlightIndex: -1,
        algorithm: "sequential",
        excludedIndices: new Set(Array.from({
          length: array.length
        }, (_, i) => i))
      },
      logEntry: {
        currentIndex: "N/A",
        currentValue: "N/A",
        target: target,
        decision: translateLegacyRuntime("legacy.95338dc63252eee2")
      },
      message: translateLegacyRuntime(`😔 انتهى البحث: لم يتم العثور على القيمة ${target} في المصفوفة.`, "legacy.19f8c0e9bc5b5a73", "\uD83D\uDE14 \u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0628\u062D\u062B: \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0645\u0629 ${target} \u0641\u064A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629."),
      isError: true
    });
  }
}
function binarySearchSimulator(target) {
  let low = 0;
  let high = array.length - 1;
  let mid = -1;
  let stepCount = 0;
  let excludedIndices = new Set();
  simulationHistory.push({
    arrayState: {
      lowIndex: low,
      highIndex: high,
      excludedIndices: new Set(),
      algorithm: "binary"
    },
    logEntry: {
      low: low,
      high: high,
      mid: "N/A",
      midValue: "N/A",
      decision: translateLegacyRuntime("legacy.c950bdf888310e35")
    },
    message: translateLegacyRuntime(`🔍 بدء البحث الثنائي عن ${target}. النطاق: [${low}, ${high}].`, "legacy.c0026cd0ab2b552b", "\uD83D\uDD0D \u0628\u062F\u0621 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0639\u0646 ${target}. \u0627\u0644\u0646\u0637\u0627\u0642: [${low}, ${high}].")
  });
  while (low <= high) {
    stepCount++;
    mid = Math.floor((low + high) / 2);
    const midElement = array[mid];
    let decisionText;
    let isFound = false;
    if (midElement === target) {
      decisionText = translateLegacyRuntime(`✓ نجاح: ${midElement} = ${target}. تم العثور على القيمة!`, "legacy.81bf3e3c0ee82067", "\u2713 \u0646\u062C\u0627\u062D: ${midElement} = ${target}. \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0645\u0629!");
      isFound = true;
    } else if (midElement < target) {
      decisionText = translateLegacyRuntime(`${midElement} < ${target} ← نبحث في اليمين`, "legacy.e8d9c327869159a3", "${midElement} < ${target} \u2190 \u0646\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u064A\u0645\u064A\u0646");
    } else {
      decisionText = translateLegacyRuntime(`${midElement} > ${target} ← نبحث في اليسار`, "legacy.ef0aacb53c0efaca", "${midElement} > ${target} \u2190 \u0646\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u064A\u0633\u0627\u0631");
    }
    simulationHistory.push({
      arrayState: {
        midIndex: mid,
        lowIndex: low,
        highIndex: high,
        excludedIndices: new Set(excludedIndices),
        algorithm: "binary"
      },
      logEntry: {
        low: low,
        high: high,
        mid: mid,
        midValue: midElement,
        decision: decisionText
      },
      message: translateLegacyRuntime(`الخطوة ${stepCount}: Mid = [${mid}] = ${midElement}. ${decisionText}`, "legacy.ea9e2fa41ddfe788", "\u0627\u0644\u062E\u0637\u0648\u0629 ${stepCount}: Mid = [${mid}] = ${midElement}. ${decisionText}")
    });
    if (isFound) {
      simulationHistory.push({
        arrayState: {
          midIndex: mid,
          lowIndex: low,
          highIndex: high,
          foundIndex: mid,
          excludedIndices: new Set(excludedIndices),
          algorithm: "binary"
        },
        logEntry: {
          low: low,
          high: high,
          mid: mid,
          midValue: midElement,
          decision: decisionText
        },
        message: translateLegacyRuntime(`🎉 انتهى البحث: تم العثور على القيمة ${target} عند الفهرس [${mid}]!`, "legacy.0c1f60fad00eabf0", "\uD83C\uDF89 \u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0628\u062D\u062B: \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0645\u0629 ${target} \u0639\u0646\u062F \u0627\u0644\u0641\u0647\u0631\u0633 [${mid}]!"),
        isSuccess: true
      });
      return;
    }
    const prevLow = low;
    const prevHigh = high;
    if (midElement < target) {
      for (let i = prevLow; i <= mid; i++) {
        excludedIndices.add(i);
      }
      low = mid + 1;
    } else {
      for (let i = mid; i <= prevHigh; i++) {
        excludedIndices.add(i);
      }
      high = mid - 1;
    }
    if (low <= high) {
      simulationHistory.push({
        arrayState: {
          midIndex: -1,
          lowIndex: low,
          highIndex: high,
          excludedIndices: new Set(excludedIndices),
          algorithm: "binary"
        },
        logEntry: {
          low: low,
          high: high,
          mid: mid,
          midValue: midElement,
          decision: translateLegacyRuntime(`تضييق النطاق إلى [${low}, ${high}]`, "legacy.b4252f7ef8155fea", "\u062A\u0636\u064A\u064A\u0642 \u0627\u0644\u0646\u0637\u0627\u0642 \u0625\u0644\u0649 [${low}, ${high}]")
        },
        message: translateLegacyRuntime(`⬅️ تضييق النطاق: النطاق الجديد [${low}, ${high}].`, "legacy.a5b69d8aafa5213e", "\u2B05\uFE0F \u062A\u0636\u064A\u064A\u0642 \u0627\u0644\u0646\u0637\u0627\u0642: \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u062C\u062F\u064A\u062F [${low}, ${high}].")
      });
    }
  }
  simulationHistory.push({
    arrayState: {
      lowIndex: -1,
      highIndex: -1,
      excludedIndices: new Set(Array.from({
        length: array.length
      }, (_, i) => i)),
      algorithm: "binary"
    },
    logEntry: {
      low: low,
      high: high,
      mid: "N/A",
      midValue: "N/A",
      decision: translateLegacyRuntime(`✗ فشل: تجاوز Low (${low}) لـ High (${high})`, "legacy.2007f6cc9d1b6f92", "\u2717 \u0641\u0634\u0644: \u062A\u062C\u0627\u0648\u0632 Low (${low}) \u0644\u0640 High (${high})")
    },
    message: translateLegacyRuntime(`😔 انتهى البحث: لم يتم العثور على القيمة ${target} في المصفوفة.`, "legacy.19f8c0e9bc5b5a73", "\uD83D\uDE14 \u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0628\u062D\u062B: \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0645\u0629 ${target} \u0641\u064A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629."),
    isError: true
  });
}
Object.assign(window, {
  renderArray: renderArray,
  updateArray: updateArray,
  showMessage: showMessage,
  updateControlButtons: updateControlButtons,
  renderBinaryTable: renderBinaryTable,
  renderSequentialTable: renderSequentialTable,
  startSearch: startSearch,
  nextStep: nextStep,
  previousStep: previousStep,
  resetSearch: resetSearch,
  updateVisualization: updateVisualization,
  sequentialSearchSimulator: sequentialSearchSimulator,
  binarySearchSimulator: binarySearchSimulator
});
export { renderArray, updateArray, showMessage, updateControlButtons, renderBinaryTable, renderSequentialTable, startSearch, nextStep, previousStep, resetSearch, updateVisualization, sequentialSearchSimulator, binarySearchSimulator };
