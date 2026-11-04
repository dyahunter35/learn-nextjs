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
  foundIndex = -1,
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
      const markerColors = { Low: "bg-red-500", High: "bg-blue-500", Mid: "bg-indigo-700", "← Current": "bg-amber-700" };
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
    showMessage("يرجى إدخال أرقام مفصولة بفارزة.", "error");
    return;
  }
  const nums = raw.split(/[,\s]+/).map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  if (nums.length < 2) {
    showMessage("يرجى إدخال رقمين على الأقل مفصولين بفارزة.", "error");
    return;
  }
  if (nums.some(n => n > 999 || n < -999)) {
    showMessage("يرجى إدخال أرقام بين -999 و 999.", "error");
    return;
  }
  array = nums;
  nodeCountBadge.textContent = `${array.length} عقدة`;
  document.getElementById("targetInput").max = Math.max(...array);
  document.getElementById("targetInput").min = Math.min(...array);
  resetSearch(true);
  showMessage(`✅ تم تحديث المصفوفة بنجاح: ${array.length} عنصر`, "success");
}

function showMessage(message, type = "info") {
  statusMessage.textContent = message;
  statusMessage.className = "status-message " + type;
}

function updateControlButtons() {
  document.getElementById("nextButton").disabled =
    isSearchFinished || currentStepIndex === simulationHistory.length - 1;
  document.getElementById("prevButton").disabled = currentStepIndex <= 0;
  document.getElementById("startButton").disabled = isSearchFinished;

  if (currentStepIndex === -1 && !isSearchFinished) {
    document.getElementById("startButton").textContent =
      "ابدأ / ابحث عن الخطوة الأولى";
  } else if (isSearchFinished) {
    document.getElementById("startButton").textContent = "انتهى البحث ✓";
    document.getElementById("nextButton").disabled = true;
  } else {
    document.getElementById("startButton").textContent = "▶ تم البدء";
  }
}

function renderBinaryTable(steps) {
  let tableHTML = `
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
  `;

  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const decisionClass = step.decision.includes("نجاح")
      ? "text-green-600 font-bold"
      : step.decision.includes("فشل")
      ? "text-red-600 font-bold"
      : "text-gray-700";
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
  let tableHTML = `
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
  `;

  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const decisionClass = step.decision.includes("نجاح")
      ? "text-green-600 font-bold"
      : step.decision.includes("فشل")
      ? "text-red-600 font-bold"
      : "text-gray-700";
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
    showMessage("يرجى إدخال قيمة مستهدفة رقمية صحيحة.", "error");
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

  showMessage(
    `بدء المحاكاة التفاعلية لخوارزمية ${
      algorithm === "binary" ? "البحث الثنائي" : "البحث المتتالي"
    }...`,
    "info"
  );
  isSearchFinished = false;
  simulationHistory = [];
  currentStepIndex = -1;

  if (algorithm === "sequential") {
    sequentialSearchSimulator(targetValue);
  } else if (algorithm === "binary") {
    const isSorted = array.every(
      (val, i, arr) => i === 0 || val >= arr[i - 1]
    );
    if (!isSorted) {
      const sorted = [...array].sort((a, b) => a - b);
      array = sorted;
      arrayInput.value = sorted.join(",");
      nodeCountBadge.textContent = `${array.length} عقدة`;
      showMessage(
        `⚠️ المصفوفة غير مرتبة! تم ترتيبها تلقائياً: ${sorted.join(", ")}`,
        "info"
      );
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
    setTimeout(() => { nextBtn.style.transform = ""; }, 150);
  }
}

function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();

    const prevBtn = document.getElementById("prevButton");
    prevBtn.style.transform = "scale(0.95)";
    setTimeout(() => { prevBtn.style.transform = ""; }, 150);
  }
}

function resetSearch(shouldClearMessage = true) {
  currentStepIndex = -1;
  simulationHistory = [];
  isSearchFinished = false;
  stepsLog.innerHTML = "";
  nodeCountBadge.textContent = `${array.length} عقدة`;

  renderArray({
    highlightIndex: -1,
    excludedIndices: new Set(),
    algorithm: document.getElementById("algorithmSelect").value,
  });

  if (shouldClearMessage) {
    statusMessage.textContent =
      'اضغط على "ابدأ / ابحث عن الخطوة الأولى" للبدء.';
    statusMessage.className = "status-message";
  }

  updateControlButtons();
}

function updateVisualization() {
  if (
    currentStepIndex >= 0 &&
    currentStepIndex < simulationHistory.length
  ) {
    const step = simulationHistory[currentStepIndex];

    renderArray(step.arrayState);

    const algorithm = document.getElementById("algorithmSelect").value;
    if (algorithm === "binary") {
      renderBinaryTable(simulationHistory.map((s) => s.logEntry));
    } else {
      renderSequentialTable(simulationHistory.map((s) => s.logEntry));
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

arrayInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); updateArray(); }
});

function sequentialSearchSimulator(target) {
  let foundIndex = -1;

  simulationHistory.push({
    arrayState: {
      highlightIndex: -1,
      algorithm: "sequential",
    },
    logEntry: {
      currentIndex: "N/A",
      currentValue: "N/A",
      target: target,
      decision: "بدء البحث المتتالي",
    },
    message: `🔍 بدء البحث المتتالي عن القيمة ${target}.`,
  });

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    let decisionText;

    if (currentValue === target) {
      decisionText = `✓ نجاح: ${currentValue} = ${target}. تم العثور عليها!`;
      foundIndex = i;
    } else {
      decisionText = `✗ ${currentValue} ≠ ${target}. ننتقل للعنصر التالي.`;
    }

    const excludedSet = new Set();
    for (let j = 0; j < i; j++) {
      excludedSet.add(j);
    }

    simulationHistory.push({
      arrayState: {
        highlightIndex: i,
        algorithm: "sequential",
        excludedIndices: excludedSet,
      },
      logEntry: {
        currentIndex: i,
        currentValue: currentValue,
        target: target,
        decision: decisionText,
      },
      message: `الخطوة ${i + 1}: مقارنة ${target} مع العنصر عند [${i}] = ${currentValue}.`,
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
          })(),
        },
        logEntry: {
          currentIndex: i,
          currentValue: currentValue,
          target: target,
          decision: decisionText,
        },
        message: `🎉 انتهى البحث: تم العثور على القيمة ${target} عند الفهرس [${i}]!`,
        isSuccess: true,
      });
      break;
    }
  }

  if (foundIndex === -1) {
    simulationHistory.push({
      arrayState: {
        highlightIndex: -1,
        algorithm: "sequential",
        excludedIndices: new Set(
          Array.from({ length: array.length }, (_, i) => i)
        ),
      },
      logEntry: {
        currentIndex: "N/A",
        currentValue: "N/A",
        target: target,
        decision: "✗ فشل: تم فحص جميع العناصر بدون نتيجة.",
      },
      message: `😔 انتهى البحث: لم يتم العثور على القيمة ${target} في المصفوفة.`,
      isError: true,
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
      algorithm: "binary",
    },
    logEntry: {
      low: low,
      high: high,
      mid: "N/A",
      midValue: "N/A",
      decision: "تحديد النطاق الأولي للبحث",
    },
    message: `🔍 بدء البحث الثنائي عن ${target}. النطاق: [${low}, ${high}].`,
  });

  while (low <= high) {
    stepCount++;
    mid = Math.floor((low + high) / 2);
    const midElement = array[mid];
    let decisionText;
    let isFound = false;

    if (midElement === target) {
      decisionText = `✓ نجاح: ${midElement} = ${target}. تم العثور على القيمة!`;
      isFound = true;
    } else if (midElement < target) {
      decisionText = `${midElement} < ${target} ← نبحث في اليمين`;
    } else {
      decisionText = `${midElement} > ${target} ← نبحث في اليسار`;
    }

    simulationHistory.push({
      arrayState: {
        midIndex: mid,
        lowIndex: low,
        highIndex: high,
        excludedIndices: new Set(excludedIndices),
        algorithm: "binary",
      },
      logEntry: {
        low: low,
        high: high,
        mid: mid,
        midValue: midElement,
        decision: decisionText,
      },
      message: `الخطوة ${stepCount}: Mid = [${mid}] = ${midElement}. ${decisionText}`,
    });

    if (isFound) {
      simulationHistory.push({
        arrayState: {
          midIndex: mid,
          lowIndex: low,
          highIndex: high,
          foundIndex: mid,
          excludedIndices: new Set(excludedIndices),
          algorithm: "binary",
        },
        logEntry: {
          low: low,
          high: high,
          mid: mid,
          midValue: midElement,
          decision: decisionText,
        },
        message: `🎉 انتهى البحث: تم العثور على القيمة ${target} عند الفهرس [${mid}]!`,
        isSuccess: true,
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
          algorithm: "binary",
        },
        logEntry: {
          low: low,
          high: high,
          mid: mid,
          midValue: midElement,
          decision: `تضييق النطاق إلى [${low}, ${high}]`,
        },
        message: `⬅️ تضييق النطاق: النطاق الجديد [${low}, ${high}].`,
      });
    }
  }

  simulationHistory.push({
    arrayState: {
      lowIndex: -1,
      highIndex: -1,
      excludedIndices: new Set(
        Array.from({ length: array.length }, (_, i) => i)
      ),
      algorithm: "binary",
    },
    logEntry: {
      low: low,
      high: high,
      mid: "N/A",
      midValue: "N/A",
      decision: `✗ فشل: تجاوز Low (${low}) لـ High (${high})`,
    },
    message: `😔 انتهى البحث: لم يتم العثور على القيمة ${target} في المصفوفة.`,
    isError: true,
  });
}
