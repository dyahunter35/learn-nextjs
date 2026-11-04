// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
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
  algorithm = "bubble"
} = {}) {
  arrayContainer.innerHTML = "";
  const maxValue = Math.max(...array, 1);
  const maxHeight = 160;
  array.forEach((value, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("element-wrapper");
    const element = document.createElement("div");
    element.classList.add("array-element");
    element.style.height = `${Math.max(value / maxValue * maxHeight, 30)}px`;
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
        markerLabels.push({
          text: "j",
          color: "bg-red-500"
        });
      } else if (index === highlightIndex2) {
        markerLabels.push({
          text: "j+1",
          color: "bg-red-700"
        });
      }
    } else if (algorithm === "selection") {
      if (index === highlightIndex) {
        markerLabels.push({
          text: "i",
          color: "bg-orange-500"
        });
      } else if (index === highlightIndex2) {
        markerLabels.push({
          text: "j",
          color: "bg-amber-500"
        });
      } else if (index === minIndex) {
        markerLabels.push({
          text: "min",
          color: "bg-purple-700"
        });
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
  document.getElementById("nextButton").disabled = isSortFinished || currentStepIndex === simulationHistory.length - 1;
  document.getElementById("prevButton").disabled = currentStepIndex <= 0;
  document.getElementById("startButton").disabled = isSortFinished;
  if (currentStepIndex === -1 && !isSortFinished) {
    document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.a8094f238fe603c2");
  } else if (isSortFinished) {
    document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.678b717ab14a2572");
    document.getElementById("nextButton").disabled = true;
  } else {
    document.getElementById("startButton").textContent = translateLegacyRuntime("legacy.5eaaff812af33515");
  }
}
function renderSortTable(steps, algorithm) {
  let headers = [];
  if (algorithm === "bubble") {
    headers = [translateLegacyRuntime("legacy.41195137d9eaa4ab"), "j", "arr[j]", "arr[j+1]", translateLegacyRuntime("legacy.a881a87897ba730f")];
  } else if (algorithm === "selection") {
    headers = [translateLegacyRuntime("legacy.41195137d9eaa4ab"), "j", translateLegacyRuntime("legacy.a2a53ce4516ecaca"), "arr[j]", translateLegacyRuntime("legacy.a881a87897ba730f")];
  }
  let tableHTML = `
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead><tr>`;
  headers.forEach(h => tableHTML += `<th>${h}</th>`);
  tableHTML += `</tr></thead><tbody>`;
  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const rowClass = i === currentStepIndex ? "current-step" : "";
    const decisionClass = step.decision.includes(translateLegacyRuntime("legacy.12061129be3172bb")) ? "text-red-600" : step.decision.includes(translateLegacyRuntime("legacy.92e356bd50f5fb97")) || step.decision.includes(translateLegacyRuntime("legacy.c349b59c70a81234")) ? "text-green-600" : "text-gray-700";
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
    currentArray = input.split(",").map(n => {
      const num = parseInt(n.trim());
      if (isNaN(num)) throw new Error("Contains non-numeric values.");
      return num;
    });
  } catch (e) {
    showMessage(translateLegacyRuntime("legacy.f149fdc7f7468b1f"), "error");
    return;
  }
  if (currentArray.length < 2) {
    showMessage(translateLegacyRuntime("legacy.a01a946cdbbb1447"), "error");
    return;
  }
  showMessage(translateLegacyRuntime(`🔍 بدء المحاكاة التفاعلية لخوارزمية ${algorithm === "bubble" ? "ترتيب الفقاعة" : "ترتيب الاختيار"}...`, "legacy.0914aeaafe6eca75", "\uD83D\uDD0D \u0628\u062F\u0621 \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 ${algorithm === \"bubble\" ? \"\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0641\u0642\u0627\u0639\u0629\" : \"\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631\"}..."), "info");
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
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  }
}
function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();
    const btn = document.getElementById("prevButton");
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  }
}
function resetSort(shouldClearMessage = true) {
  currentStepIndex = -1;
  simulationHistory = [];
  isSortFinished = false;
  stepsLog.innerHTML = "";
  const input = document.getElementById("arrayInput").value;
  try {
    currentArray = input.split(",").map(n => {
      const num = parseInt(n.trim());
      if (isNaN(num)) throw new Error("Contains non-numeric values.");
      return num;
    });
  } catch (e) {
    currentArray = [50, 20, 80, 10, 60];
  }
  nodeCountBadge.textContent = translateLegacyRuntime(`${currentArray.length} عناصر`, "legacy.c378d002a974ac9c", "${currentArray.length} \u0639\u0646\u0627\u0635\u0631");
  renderArray({
    array: currentArray,
    sortedIndices: new Set(),
    algorithm: document.getElementById("algorithmSelect").value
  });
  if (shouldClearMessage) {
    statusMessage.textContent = translateLegacyRuntime("legacy.731a32faccd0b15a");
    statusMessage.className = "status-message";
  }
  updateControlButtons();
}
function updateVisualization() {
  if (currentStepIndex >= 0 && currentStepIndex < simulationHistory.length) {
    const step = simulationHistory[currentStepIndex];
    renderArray(step.arrayState);
    const algorithm = document.getElementById("algorithmSelect").value;
    renderSortTable(simulationHistory.map(s => s.logEntry).filter(l => l.i !== undefined), algorithm);
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
      algorithm: "bubble"
    },
    logEntry: {
      decision: translateLegacyRuntime("legacy.9e62b0b90a190ca6")
    },
    message: translateLegacyRuntime(`🔄 بدء خوارزمية ترتيب الفقاعة. نقارن كل عنصرين متجاورين.`, "legacy.e8bad4fe3eff8584", "\uD83D\uDD04 \u0628\u062F\u0621 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0641\u0642\u0627\u0639\u0629. \u0646\u0642\u0627\u0631\u0646 \u0643\u0644 \u0639\u0646\u0635\u0631\u064A\u0646 \u0645\u062A\u062C\u0627\u0648\u0631\u064A\u0646.")
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
          algorithm: "bubble"
        },
        logEntry: {
          i: i + 1,
          j: j,
          currentJValue: arraySnapshot[j],
          nextJValue: arraySnapshot[j + 1],
          decision: translateLegacyRuntime(`مقارنة: ${arraySnapshot[j]} > ${arraySnapshot[j + 1]}?`, "legacy.9bbdb7dd30f45873", "\u0645\u0642\u0627\u0631\u0646\u0629: ${arraySnapshot[j]} > ${arraySnapshot[j + 1]}?")
        },
        message: translateLegacyRuntime(`الدورة ${i + 1} - المقارنة ${j + 1}: هل ${arraySnapshot[j]} > ${arraySnapshot[j + 1]}؟`, "legacy.3f93c119efea20ac", "\u0627\u0644\u062F\u0648\u0631\u0629 ${i + 1} - \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 ${j + 1}: \u0647\u0644 ${arraySnapshot[j]} > ${arraySnapshot[j + 1]}\u061F")
      });
      if (arraySnapshot[j] > arraySnapshot[j + 1]) {
        [arraySnapshot[j], arraySnapshot[j + 1]] = [arraySnapshot[j + 1], arraySnapshot[j]];
        swapped = true;
        simulationHistory.push({
          arrayState: {
            array: arraySnapshot.slice(),
            highlightIndex: j,
            highlightIndex2: j + 1,
            swapping: true,
            sortedIndices: new Set(sortedIndices),
            algorithm: "bubble"
          },
          logEntry: {
            i: i + 1,
            j: j,
            currentJValue: arraySnapshot[j],
            nextJValue: arraySnapshot[j + 1],
            decision: translateLegacyRuntime(`🔀 تبديل! ${arraySnapshot[j + 1]} ↔ ${arraySnapshot[j]}`, "legacy.be47fac66713a819", "\uD83D\uDD00 \u062A\u0628\u062F\u064A\u0644! ${arraySnapshot[j + 1]} \u2194 ${arraySnapshot[j]}")
          },
          message: translateLegacyRuntime(`🔄 تم التبديل: ${arraySnapshot[j + 1]} ↔ ${arraySnapshot[j]}.`, "legacy.6ef49fbef70dc971", "\uD83D\uDD04 \u062A\u0645 \u0627\u0644\u062A\u0628\u062F\u064A\u0644: ${arraySnapshot[j + 1]} \u2194 ${arraySnapshot[j]}.")
        });
      } else {
        simulationHistory.push({
          arrayState: {
            array: arraySnapshot.slice(),
            highlightIndex: j,
            highlightIndex2: j + 1,
            sortedIndices: new Set(sortedIndices),
            algorithm: "bubble"
          },
          logEntry: {
            i: i + 1,
            j: j,
            currentJValue: arraySnapshot[j],
            nextJValue: arraySnapshot[j + 1],
            decision: translateLegacyRuntime("legacy.964e5ba626385971")
          },
          message: translateLegacyRuntime(`✓ ${arraySnapshot[j]} < ${arraySnapshot[j + 1]} — لا تبديل.`, "legacy.ff51342d632dd354", "\u2713 ${arraySnapshot[j]} < ${arraySnapshot[j + 1]} \u2014 \u0644\u0627 \u062A\u0628\u062F\u064A\u0644.")
        });
      }
    }
    sortedIndices.add(n - 1 - i);
    simulationHistory.push({
      arrayState: {
        array: arraySnapshot.slice(),
        sortedIndices: new Set(sortedIndices),
        algorithm: "bubble"
      },
      logEntry: {
        i: i + 1,
        j: "—",
        currentJValue: "—",
        nextJValue: "—",
        decision: translateLegacyRuntime(`✅ انتهت الدورة ${i + 1}.`, "legacy.6664b59c8d5d73b4", "\u2705 \u0627\u0646\u062A\u0647\u062A \u0627\u0644\u062F\u0648\u0631\u0629 ${i + 1}.")
      },
      message: translateLegacyRuntime(`✅ الدورة ${i + 1}: العنصر ${arraySnapshot[n - 1 - i]} استقر في مكانه [${n - 1 - i}].`, "legacy.ee92b3bcf6760769", "\u2705 \u0627\u0644\u062F\u0648\u0631\u0629 ${i + 1}: \u0627\u0644\u0639\u0646\u0635\u0631 ${arraySnapshot[n - 1 - i]} \u0627\u0633\u062A\u0642\u0631 \u0641\u064A \u0645\u0643\u0627\u0646\u0647 [${n - 1 - i}].")
    });
    if (!swapped) {
      for (let k = 0; k < n - 1 - i; k++) {
        sortedIndices.add(k);
      }
      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          sortedIndices: new Set(sortedIndices),
          algorithm: "bubble"
        },
        logEntry: {
          decision: translateLegacyRuntime("legacy.7c4174fa19ac08e4")
        },
        message: translateLegacyRuntime(`⏹ لم تحدث أي تبادلات في الدورة — المصفوفة أصبحت مرتبة.`, "legacy.44e0e65bfb57e348", "\u23F9 \u0644\u0645 \u062A\u062D\u062F\u062B \u0623\u064A \u062A\u0628\u0627\u062F\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0629 \u2014 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0623\u0635\u0628\u062D\u062A \u0645\u0631\u062A\u0628\u0629."),
        isSuccess: true
      });
      break;
    }
  }
  simulationHistory.push({
    arrayState: {
      array: arraySnapshot.slice(),
      sortedIndices: new Set(Array.from({
        length: n
      }, (_, k) => k)),
      algorithm: "bubble"
    },
    logEntry: {
      decision: translateLegacyRuntime(`🎉 تم الترتيب!`, "legacy.f44b998a3420caaa", "\uD83C\uDF89 \u062A\u0645 \u0627\u0644\u062A\u0631\u062A\u064A\u0628!")
    },
    message: translateLegacyRuntime(`🎉 تم ترتيب المصفوفة: ${arraySnapshot.join(", ")}`, "legacy.43a36a69346da5ea", "\uD83C\uDF89 \u062A\u0645 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629: ${arraySnapshot.join(\", \")}"),
    isSuccess: true
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
      algorithm: "selection"
    },
    logEntry: {
      decision: translateLegacyRuntime("legacy.60b2320e7987d76d")
    },
    message: translateLegacyRuntime(`🔄 بدء خوارزمية ترتيب الاختيار. نبحث عن أصغر عنصر في كل دورة.`, "legacy.9dc9288d354b5d67", "\uD83D\uDD04 \u0628\u062F\u0621 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631. \u0646\u0628\u062D\u062B \u0639\u0646 \u0623\u0635\u063A\u0631 \u0639\u0646\u0635\u0631 \u0641\u064A \u0643\u0644 \u062F\u0648\u0631\u0629.")
  });
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    simulationHistory.push({
      arrayState: {
        array: arraySnapshot.slice(),
        highlightIndex: i,
        minIndex: min_idx,
        sortedIndices: new Set(sortedIndices),
        algorithm: "selection"
      },
      logEntry: {
        i: i + 1,
        j: i + 1,
        minIdx: min_idx,
        minVal: arraySnapshot[min_idx],
        currentJVal: arraySnapshot[i],
        decision: translateLegacyRuntime(`نفترض أن ${arraySnapshot[i]} هو الأصغر`, "legacy.c2d491778ea7045a", "\u0646\u0641\u062A\u0631\u0636 \u0623\u0646 ${arraySnapshot[i]} \u0647\u0648 \u0627\u0644\u0623\u0635\u063A\u0631")
      },
      message: translateLegacyRuntime(`الدورة ${i + 1}: نبدأ من [${i}] = ${arraySnapshot[i]} كأقل قيمة.`, "legacy.6c2a3179c1f4303f", "\u0627\u0644\u062F\u0648\u0631\u0629 ${i + 1}: \u0646\u0628\u062F\u0623 \u0645\u0646 [${i}] = ${arraySnapshot[i]} \u0643\u0623\u0642\u0644 \u0642\u064A\u0645\u0629.")
    });
    for (let j = i + 1; j < n; j++) {
      let decisionText;
      let newMin = false;
      if (arraySnapshot[j] < arraySnapshot[min_idx]) {
        min_idx = j;
        decisionText = translateLegacyRuntime(`✦ أصغر جديد: ${arraySnapshot[min_idx]} في [${min_idx}]`, "legacy.393b61aa8ab8d98a", "\u2726 \u0623\u0635\u063A\u0631 \u062C\u062F\u064A\u062F: ${arraySnapshot[min_idx]} \u0641\u064A [${min_idx}]");
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
          algorithm: "selection"
        },
        logEntry: {
          i: i + 1,
          j: j,
          minIdx: min_idx,
          minVal: arraySnapshot[min_idx],
          currentJVal: arraySnapshot[j],
          decision: decisionText
        },
        message: translateLegacyRuntime(`مقارنة [${j}] = ${arraySnapshot[j]} مع الأصغر ${arraySnapshot[min_idx]} في [${min_idx}].`, "legacy.da80a3825b915e86", "\u0645\u0642\u0627\u0631\u0646\u0629 [${j}] = ${arraySnapshot[j]} \u0645\u0639 \u0627\u0644\u0623\u0635\u063A\u0631 ${arraySnapshot[min_idx]} \u0641\u064A [${min_idx}].")
      });
    }
    if (min_idx !== i) {
      [arraySnapshot[i], arraySnapshot[min_idx]] = [arraySnapshot[min_idx], arraySnapshot[i]];
      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          highlightIndex: i,
          highlightIndex2: min_idx,
          swapping: true,
          sortedIndices: new Set(sortedIndices),
          algorithm: "selection"
        },
        logEntry: {
          i: i + 1,
          j: "—",
          minIdx: min_idx,
          minVal: arraySnapshot[i],
          currentJVal: arraySnapshot[min_idx],
          decision: translateLegacyRuntime(`🔀 تبديل [${i}] ↔ [${min_idx}]`, "legacy.ab01eef45695ed86", "\uD83D\uDD00 \u062A\u0628\u062F\u064A\u0644 [${i}] \u2194 [${min_idx}]")
        },
        message: translateLegacyRuntime(`🔀 تم تبديل [${i}] = ${arraySnapshot[i]} ↔ [${min_idx}] = ${arraySnapshot[min_idx]}.`, "legacy.3d69244fca28f471", "\uD83D\uDD00 \u062A\u0645 \u062A\u0628\u062F\u064A\u0644 [${i}] = ${arraySnapshot[i]} \u2194 [${min_idx}] = ${arraySnapshot[min_idx]}.")
      });
    } else {
      simulationHistory.push({
        arrayState: {
          array: arraySnapshot.slice(),
          highlightIndex: i,
          minIndex: i,
          sortedIndices: new Set(sortedIndices),
          algorithm: "selection"
        },
        logEntry: {
          i: i + 1,
          j: "—",
          minIdx: i,
          minVal: arraySnapshot[i],
          currentJVal: arraySnapshot[i],
          decision: translateLegacyRuntime("legacy.769062844a5ec7de")
        },
        message: translateLegacyRuntime(`✓ [${i}] = ${arraySnapshot[i]} هو الأصغر بالفعل.`, "legacy.47a5ae7b7847fb51", "\u2713 [${i}] = ${arraySnapshot[i]} \u0647\u0648 \u0627\u0644\u0623\u0635\u063A\u0631 \u0628\u0627\u0644\u0641\u0639\u0644.")
      });
    }
    sortedIndices.add(i);
    simulationHistory.push({
      arrayState: {
        array: arraySnapshot.slice(),
        sortedIndices: new Set(sortedIndices),
        algorithm: "selection"
      },
      logEntry: {
        i: i + 1,
        j: "—",
        minIdx: min_idx,
        minVal: arraySnapshot[i],
        currentJVal: "—",
        decision: translateLegacyRuntime(`✅ انتهت الدورة ${i + 1}.`, "legacy.6664b59c8d5d73b4", "\u2705 \u0627\u0646\u062A\u0647\u062A \u0627\u0644\u062F\u0648\u0631\u0629 ${i + 1}.")
      },
      message: translateLegacyRuntime(`✅ الدورة ${i + 1}: [${i}] = ${arraySnapshot[i]} في مكانه الصحيح.`, "legacy.b37ee42542d45e4e", "\u2705 \u0627\u0644\u062F\u0648\u0631\u0629 ${i + 1}: [${i}] = ${arraySnapshot[i]} \u0641\u064A \u0645\u0643\u0627\u0646\u0647 \u0627\u0644\u0635\u062D\u064A\u062D.")
    });
  }
  sortedIndices.add(n - 1);
  simulationHistory.push({
    arrayState: {
      array: arraySnapshot.slice(),
      sortedIndices: new Set(Array.from({
        length: n
      }, (_, k) => k)),
      algorithm: "selection"
    },
    logEntry: {
      decision: translateLegacyRuntime(`🎉 تم الترتيب!`, "legacy.f44b998a3420caaa", "\uD83C\uDF89 \u062A\u0645 \u0627\u0644\u062A\u0631\u062A\u064A\u0628!")
    },
    message: translateLegacyRuntime(`🎉 تم ترتيب المصفوفة: ${arraySnapshot.join(", ")}`, "legacy.43a36a69346da5ea", "\uD83C\uDF89 \u062A\u0645 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629: ${arraySnapshot.join(\", \")}"),
    isSuccess: true
  });
}
Object.assign(window, {
  renderArray: renderArray,
  showMessage: showMessage,
  updateControlButtons: updateControlButtons,
  renderSortTable: renderSortTable,
  startSort: startSort,
  nextStep: nextStep,
  previousStep: previousStep,
  resetSort: resetSort,
  updateVisualization: updateVisualization,
  bubbleSortSimulator: bubbleSortSimulator,
  selectionSortSimulator: selectionSortSimulator
});
export { renderArray, showMessage, updateControlButtons, renderSortTable, startSort, nextStep, previousStep, resetSort, updateVisualization, bubbleSortSimulator, selectionSortSimulator };
