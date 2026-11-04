// @ts-nocheck
let currentArray = [];
let arrayContainer, stepsLog, statusMessage, nodeCountBadge;
let currentStepIndex = -1;
let simulationHistory = [];
let isSortFinished = false;

window.onload = function () {
  arrayContainer = document.getElementById("arrayContainer");
  stepsLog = document.getElementById("stepsLog");
  statusMessage = document.getElementById("statusMessage");
  nodeCountBadge = document.getElementById("nodeCountBadge");
  resetSort(false);
};

function renderArray({
  array,
  highlightIndex = -1,
  highlightIndex2 = -1,
  minIndex = -1,
  swapping = false,
  sortedIndices = new Set(),
  algorithm = "bubble",
} = {}) {
  arrayContainer.innerHTML = "";

  const maxValue = Math.max(...array, 1);
  const maxHeight = 160;

  array.forEach((value, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("element-wrapper");

    const element = document.createElement("div");
    element.classList.add("array-element");
    element.style.height = `${Math.max((value / maxValue) * maxHeight, 30)}px`;
    element.style.minWidth = `${Math.max(44 - (array.length > 8 ? (array.length - 8) * 2 : 0), 28)}px`;

    let bgColorClass = "default-bg";

    if (sortedIndices.has(index)) {
      bgColorClass = "sorted-bg";
      element.style.animation = "sortedGlow 1.5s ease-in-out infinite";
    } else if (swapping && (index === highlightIndex || index === highlightIndex2)) {
      bgColorClass = "swapping-bg";
    } else if (index === highlightIndex || index === highlightIndex2) {
      bgColorClass = "comparing-bg";
    } else if (index === minIndex) {
      bgColorClass = "min-bg";
    }

    element.classList.add(bgColorClass);

    const valSpan = document.createElement("span");
    valSpan.textContent = value;
    valSpan.classList.add("value-display");
    element.appendChild(valSpan);

    wrapper.appendChild(element);

    const indexLabel = document.createElement("div");
    indexLabel.textContent = `[${index}]`;
    indexLabel.classList.add("index-label");
    wrapper.appendChild(indexLabel);

    const markerLabels = [];
    if (algorithm === "bubble") {
      if (index === highlightIndex) {
        markerLabels.push({ text: "j", color: "bg-red-500" });
      } else if (index === highlightIndex2) {
        markerLabels.push({ text: "j+1", color: "bg-red-700" });
      }
    } else if (algorithm === "selection") {
      if (index === highlightIndex) {
        markerLabels.push({ text: "i", color: "bg-orange-500" });
      } else if (index === highlightIndex2) {
        markerLabels.push({ text: "j", color: "bg-amber-500" });
      } else if (index === minIndex) {
        markerLabels.push({ text: "min", color: "bg-purple-700" });
      }
    }

    if (markerLabels.length > 0) {
      markerLabels.forEach(m => {
        const span = document.createElement("span");
        span.textContent = m.text;
        span.className = "marker-label " + m.color;
        span.style.top = "-18px";
        element.appendChild(span);
      });
    }

    arrayContainer.appendChild(wrapper);
  });

  // Add base line with connectors between bars
  const wrappers = arrayContainer.querySelectorAll(".element-wrapper");
  wrappers.forEach((wrapper, i) => {
    if (i < wrappers.length - 1) {
      const connectorDiv = document.createElement("div");
      connectorDiv.className = "base-connector";
      const line = document.createElement("div");
      line.className = "connector-line";
      connectorDiv.appendChild(line);
      wrapper.appendChild(connectorDiv);
    }
  });
}

function showMessage(message, type = "info") {
  statusMessage.textContent = message;
  statusMessage.className = "status-message " + type;
}

function updateControlButtons() {
  document.getElementById("nextButton").disabled =
    isSortFinished || currentStepIndex === simulationHistory.length - 1;
  document.getElementById("prevButton").disabled = currentStepIndex <= 0;
  document.getElementById("startButton").disabled = isSortFinished;

  if (currentStepIndex === -1 && !isSortFinished) {
    document.getElementById("startButton").textContent =
      "▶ ابدأ / الخطوة الأولى";
  } else if (isSortFinished) {
    document.getElementById("startButton").textContent = "✓ انتهى الترتيب";
    document.getElementById("nextButton").disabled = true;
  } else {
    document.getElementById("startButton").textContent = "▶ تم البدء";
  }
}

function renderSortTable(steps, algorithm) {
  let headers = [];
  if (algorithm === "bubble") {
    headers = ["الدورة", "j", "arr[j]", "arr[j+1]", "القرار"];
  } else if (algorithm === "selection") {
    headers = ["الدورة", "j", "أقل قيمة", "arr[j]", "القرار"];
  }

  let tableHTML = `
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead><tr>`;
  headers.forEach((h) => (tableHTML += `<th>${h}</th>`));
  tableHTML += `</tr></thead><tbody>`;

  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const rowClass = i === currentStepIndex ? "current-step" : "";
    const decisionClass = step.decision.includes("تبديل")
      ? "text-red-600"
      : step.decision.includes("مرتب") || step.decision.includes("كامل")
      ? "text-green-600"
      : "text-gray-700";

    tableHTML += `<tr class="${rowClass}">`;
    if (algorithm === "bubble") {
      tableHTML += `
        <td class="font-bold text-indigo-600">${step.i}</td>
        <td class="font-mono">${step.j}</td>
        <td class="font-mono font-bold">${step.currentJValue}</td>
        <td class="font-mono font-bold">${step.nextJValue}</td>`;
    } else if (algorithm === "selection") {
      tableHTML += `
        <td class="font-bold text-indigo-600">${step.i}</td>
        <td class="font-mono">${step.j}</td>
        <td class="font-mono font-bold text-purple-700">${step.minVal} [${step.minIdx}]</td>
        <td class="font-mono font-bold">${step.currentJVal}</td>`;
    }
    tableHTML += `<td class="${decisionClass}">${step.decision}</td></tr>`;
  }

  tableHTML += "</tbody></table></div>";
  stepsLog.innerHTML = tableHTML;
}

function startSort() {
  const algorithm = document.getElementById("algorithmSelect").value;

  if (isSortFinished) {
    resetSort(true);
    return;
  }

  if (simulationHistory.length > 0) {
    nextStep();
    return;
  }

  const input = document.getElementById("arrayInput").value;
  try {
    currentArray = input.split(",").map((n) => {
      const num = parseInt(n.trim());
      if (isNaN(num)) throw new Error("Contains non-numeric values.");
      return num;
    });
  } catch (e) {
    showMessage("يرجى إدخال أرقام صحيحة مفصولة بفاصلة فقط.", "error");
    return;
  }

  if (currentArray.length < 2) {
    showMessage("يجب أن تحتوي المصفوفة على عنصرين على الأقل.", "error");
    return;
  }

  showMessage(
    `🔍 بدء المحاكاة التفاعلية لخوارزمية ${
      algorithm === "bubble" ? "ترتيب الفقاعة" : "ترتيب الاختيار"
    }...`,
    "info"
  );
  isSortFinished = false;
  simulationHistory = [];
  currentStepIndex = -1;

  if (algorithm === "bubble") {
    bubbleSortSimulator(currentArray.slice());
  } else if (algorithm === "selection") {
    selectionSortSimulator(currentArray.slice());
  }

  nextStep();
}

function nextStep() {
  if (currentStepIndex < simulationHistory.length - 1) {
    currentStepIndex++;
    updateVisualization();
    const btn = document.getElementById("nextButton");
    btn.style.transform = "scale(0.95)";
    setTimeout(() => { btn.style.transform = ""; }, 150);
  }
}

function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();
    const btn = document.getElementById("prevButton");
    btn.style.transform = "scale(0.95)";
    setTimeout(() => { btn.style.transform = ""; }, 150);
  }
}

function resetSort(shouldClearMessage = true) {
  currentStepIndex = -1;
  simulationHistory = [];
  isSortFinished = false;
  stepsLog.innerHTML = "";

  const input = document.getElementById("arrayInput").value;
  try {
    currentArray = input.split(",").map((n) => {
      const num = parseInt(n.trim());
      if (isNaN(num)) throw new Error("Contains non-numeric values.");
      return num;
    });
  } catch (e) {
    currentArray = [50, 20, 80, 10, 60];
  }

  nodeCountBadge.textContent = `${currentArray.length} عناصر`;

  renderArray({
    array: currentArray,
    sortedIndices: new Set(),
    algorithm: document.getElementById("algorithmSelect").value,
  });

  if (shouldClearMessage) {
    statusMessage.textContent = 'أدخل الأرقام واضغط على "ابدأ".';
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
    renderSortTable(
      simulationHistory
        .map((s) => s.logEntry)
        .filter((l) => l.i !== undefined),
      algorithm
    );

    showMessage(step.message, step.isError ? "error" : step.isSuccess ? "success" : "info");

    if (currentStepIndex === simulationHistory.length - 1) {
      isSortFinished = true;
    } else {
      isSortFinished = false;
    }
  }

  updateControlButtons();
}

function bubbleSortSimulator(arr) {
  const n = arr.length;
  let arraySnapshot = arr.slice();
  let sortedIndices = new Set();

  simulationHistory.push({
    arrayState: {
      array: arraySnapshot.slice(),
      sortedIndices: new Set(),
      algorithm: "bubble",
    },
    logEntry: { decision: "بدء ترتيب الفقاعة" },
    message: `🔄 بدء خوارزمية ترتيب الفقاعة. نقارن كل عنصرين متجاورين.`,
  });

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          highlightIndex: j,
          highlightIndex2: j + 1,
          sortedIndices: new Set(sortedIndices),
          algorithm: "bubble",
        },
        logEntry: {
          i: i + 1,
          j: j,
          currentJValue: arraySnapshot[j],
          nextJValue: arraySnapshot[j + 1],
          decision: `مقارنة: ${arraySnapshot[j]} > ${arraySnapshot[j + 1]}?`,
        },
        message: `الدورة ${i + 1} - المقارنة ${j + 1}: هل ${arraySnapshot[j]} > ${arraySnapshot[j + 1]}؟`,
      });

      if (arraySnapshot[j] > arraySnapshot[j + 1]) {
        [arraySnapshot[j], arraySnapshot[j + 1]] = [
          arraySnapshot[j + 1],
          arraySnapshot[j],
        ];
        swapped = true;

        simulationHistory.push({
          arrayState: {
            array: arraySnapshot.slice(),
            highlightIndex: j,
            highlightIndex2: j + 1,
            swapping: true,
            sortedIndices: new Set(sortedIndices),
            algorithm: "bubble",
          },
          logEntry: {
            i: i + 1,
            j: j,
            currentJValue: arraySnapshot[j],
            nextJValue: arraySnapshot[j + 1],
            decision: `🔀 تبديل! ${arraySnapshot[j + 1]} ↔ ${arraySnapshot[j]}`,
          },
          message: `🔄 تم التبديل: ${arraySnapshot[j + 1]} ↔ ${arraySnapshot[j]}.`,
        });
      } else {
        simulationHistory.push({
          arrayState: {
            array: arraySnapshot.slice(),
            highlightIndex: j,
            highlightIndex2: j + 1,
            sortedIndices: new Set(sortedIndices),
            algorithm: "bubble",
          },
          logEntry: {
            i: i + 1,
            j: j,
            currentJValue: arraySnapshot[j],
            nextJValue: arraySnapshot[j + 1],
            decision: "✓ لا تبديل. صحيح",
          },
          message: `✓ ${arraySnapshot[j]} < ${arraySnapshot[j + 1]} — لا تبديل.`,
        });
      }
    }

    sortedIndices.add(n - 1 - i);

    simulationHistory.push({
      arrayState: {
        array: arraySnapshot.slice(),
        sortedIndices: new Set(sortedIndices),
        algorithm: "bubble",
      },
      logEntry: {
        i: i + 1,
        j: "—",
        currentJValue: "—",
        nextJValue: "—",
        decision: `✅ انتهت الدورة ${i + 1}.`,
      },
      message: `✅ الدورة ${i + 1}: العنصر ${arraySnapshot[n - 1 - i]} استقر في مكانه [${n - 1 - i}].`,
    });

    if (!swapped) {
      for (let k = 0; k < n - 1 - i; k++) {
        sortedIndices.add(k);
      }
      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          sortedIndices: new Set(sortedIndices),
          algorithm: "bubble",
        },
        logEntry: { decision: "⏹ لا تبادلات — المصفوفة مرتبة!" },
        message: `⏹ لم تحدث أي تبادلات في الدورة — المصفوفة أصبحت مرتبة.`,
        isSuccess: true,
      });
      break;
    }
  }

  simulationHistory.push({
    arrayState: {
      array: arraySnapshot.slice(),
      sortedIndices: new Set(Array.from({ length: n }, (_, k) => k)),
      algorithm: "bubble",
    },
    logEntry: { decision: `🎉 تم الترتيب!` },
    message: `🎉 تم ترتيب المصفوفة: ${arraySnapshot.join(", ")}`,
    isSuccess: true,
  });
}

function selectionSortSimulator(arr) {
  const n = arr.length;
  let arraySnapshot = arr.slice();
  let sortedIndices = new Set();

  simulationHistory.push({
    arrayState: {
      array: arraySnapshot.slice(),
      sortedIndices: new Set(),
      algorithm: "selection",
    },
    logEntry: { decision: "بدء ترتيب الاختيار" },
    message: `🔄 بدء خوارزمية ترتيب الاختيار. نبحث عن أصغر عنصر في كل دورة.`,
  });

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;

    simulationHistory.push({
      arrayState: {
        array: arraySnapshot.slice(),
        highlightIndex: i,
        minIndex: min_idx,
        sortedIndices: new Set(sortedIndices),
        algorithm: "selection",
      },
      logEntry: {
        i: i + 1,
        j: i + 1,
        minIdx: min_idx,
        minVal: arraySnapshot[min_idx],
        currentJVal: arraySnapshot[i],
        decision: `نفترض أن ${arraySnapshot[i]} هو الأصغر`,
      },
      message: `الدورة ${i + 1}: نبدأ من [${i}] = ${arraySnapshot[i]} كأقل قيمة.`,
    });

    for (let j = i + 1; j < n; j++) {
      let decisionText;
      let newMin = false;

      if (arraySnapshot[j] < arraySnapshot[min_idx]) {
        min_idx = j;
        decisionText = `✦ أصغر جديد: ${arraySnapshot[min_idx]} في [${min_idx}]`;
        newMin = true;
      } else {
        decisionText = `✗ ${arraySnapshot[j]} ≥ ${arraySnapshot[min_idx]}`;
      }

      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          highlightIndex: i,
          highlightIndex2: j,
          minIndex: min_idx,
          sortedIndices: new Set(sortedIndices),
          algorithm: "selection",
        },
        logEntry: {
          i: i + 1,
          j: j,
          minIdx: min_idx,
          minVal: arraySnapshot[min_idx],
          currentJVal: arraySnapshot[j],
          decision: decisionText,
        },
        message: `مقارنة [${j}] = ${arraySnapshot[j]} مع الأصغر ${arraySnapshot[min_idx]} في [${min_idx}].`,
      });
    }

    if (min_idx !== i) {
      [arraySnapshot[i], arraySnapshot[min_idx]] = [
        arraySnapshot[min_idx],
        arraySnapshot[i],
      ];

      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          highlightIndex: i,
          highlightIndex2: min_idx,
          swapping: true,
          sortedIndices: new Set(sortedIndices),
          algorithm: "selection",
        },
        logEntry: {
          i: i + 1,
          j: "—",
          minIdx: min_idx,
          minVal: arraySnapshot[i],
          currentJVal: arraySnapshot[min_idx],
          decision: `🔀 تبديل [${i}] ↔ [${min_idx}]`,
        },
        message: `🔀 تم تبديل [${i}] = ${arraySnapshot[i]} ↔ [${min_idx}] = ${arraySnapshot[min_idx]}.`,
      });
    } else {
      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          highlightIndex: i,
          minIndex: i,
          sortedIndices: new Set(sortedIndices),
          algorithm: "selection",
        },
        logEntry: {
          i: i + 1,
          j: "—",
          minIdx: i,
          minVal: arraySnapshot[i],
          currentJVal: arraySnapshot[i],
          decision: "✓ لا تبديل — الموضع الصحيح",
        },
        message: `✓ [${i}] = ${arraySnapshot[i]} هو الأصغر بالفعل.`,
      });
    }

    sortedIndices.add(i);

    simulationHistory.push({
      arrayState: {
        array: arraySnapshot.slice(),
        sortedIndices: new Set(sortedIndices),
        algorithm: "selection",
      },
      logEntry: {
        i: i + 1,
        j: "—",
        minIdx: min_idx,
        minVal: arraySnapshot[i],
        currentJVal: "—",
        decision: `✅ انتهت الدورة ${i + 1}.`,
      },
      message: `✅ الدورة ${i + 1}: [${i}] = ${arraySnapshot[i]} في مكانه الصحيح.`,
    });
  }

  sortedIndices.add(n - 1);
  simulationHistory.push({
    arrayState: {
      array: arraySnapshot.slice(),
      sortedIndices: new Set(Array.from({ length: n }, (_, k) => k)),
      algorithm: "selection",
    },
    logEntry: { decision: `🎉 تم الترتيب!` },
    message: `🎉 تم ترتيب المصفوفة: ${arraySnapshot.join(", ")}`,
    isSuccess: true,
  });
}

Object.assign(window, {renderArray: renderArray, showMessage: showMessage, updateControlButtons: updateControlButtons, renderSortTable: renderSortTable, startSort: startSort, nextStep: nextStep, previousStep: previousStep, resetSort: resetSort, updateVisualization: updateVisualization, bubbleSortSimulator: bubbleSortSimulator, selectionSortSimulator: selectionSortSimulator});
export {renderArray, showMessage, updateControlButtons, renderSortTable, startSort, nextStep, previousStep, resetSort, updateVisualization, bubbleSortSimulator, selectionSortSimulator};
