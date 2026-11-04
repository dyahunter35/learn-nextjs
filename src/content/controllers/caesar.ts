// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const ARABIC_ALPHABET = [translateLegacyRuntime("legacy.be0fa08bb8f12a37"), translateLegacyRuntime("legacy.cb22e4a914210546"), translateLegacyRuntime("legacy.6a9b00bf691bdfd2"), translateLegacyRuntime("legacy.e57c96ba8aea7ea0"), translateLegacyRuntime("legacy.51c9a584ad13b9d2"), translateLegacyRuntime("legacy.56750292f58ce336"), translateLegacyRuntime("legacy.84d816dcc5339ad7"), translateLegacyRuntime("legacy.b15aa8e25eddf663"), translateLegacyRuntime("legacy.29b50a05e8dc1b4a"), translateLegacyRuntime("legacy.36a9d753b0bdc5e7"), translateLegacyRuntime("legacy.a83185c0fe218172"), translateLegacyRuntime("legacy.861183a44bf3c1f1"), translateLegacyRuntime("legacy.119c5451ad7c3fae"), translateLegacyRuntime("legacy.1f6940369a9cd852"), translateLegacyRuntime("legacy.892f5fc72c8aceba"), translateLegacyRuntime("legacy.a55da129540086ad"), translateLegacyRuntime("legacy.ac850b0dfe00607a"), translateLegacyRuntime("legacy.a0f49047a7ffbc61"), translateLegacyRuntime("legacy.d6f7c01d455fe141"), translateLegacyRuntime("legacy.6e6a73ade56e964f"), translateLegacyRuntime("legacy.c67f042db9cc1f17"), translateLegacyRuntime("legacy.854a312a1a019aaa"), translateLegacyRuntime("legacy.6ddaa72eed069591"), translateLegacyRuntime("legacy.988ada1c5b979ec6"), translateLegacyRuntime("legacy.cb92a8b00c6956fd"), translateLegacyRuntime("legacy.517d335897807109"), translateLegacyRuntime("legacy.6245b4d08f3f2a99"), translateLegacyRuntime("legacy.68a74b81692467b8")];
const ALPHABET_SIZE = ARABIC_ALPHABET.length;
let stepsLog, statusMessage, resultText;
let currentStepIndex = -1;
let simulationHistory = [];
let isCipherFinished = false;
let operationMode = "";
let cleanText = "";
let autoPlayTimer = null;
function renderAlphabetTable() {
  const container = document.getElementById("alphabetTableContainer");
  let tableHTML = `<table class="alphabet-table w-full text-sm"><thead>`;
  tableHTML += translateLegacyRuntime("legacy.281c9da91610a39d");
  ARABIC_ALPHABET.forEach((_, index) => {
    const displayedIndex = index + 1;
    let highlightClass = "";
    if (currentStepIndex >= 0) {
      const step = simulationHistory[currentStepIndex];
      if (displayedIndex === step.arrayState.originalIndex + 1) {
        highlightClass = "highlight-current";
      } else if (displayedIndex === step.arrayState.shiftedIndex + 1) {
        highlightClass = "highlight-result";
      }
    }
    tableHTML += `<td class="font-mono text-xs ${highlightClass}">${displayedIndex}</td>`;
  });
  tableHTML += "</tr>";
  tableHTML += translateLegacyRuntime("legacy.e39156611e3aac28");
  ARABIC_ALPHABET.forEach((char, index) => {
    const displayedIndex = index + 1;
    let highlightClass = "";
    if (currentStepIndex >= 0) {
      const step = simulationHistory[currentStepIndex];
      if (displayedIndex === step.arrayState.originalIndex + 1) {
        highlightClass = "highlight-current";
      } else if (displayedIndex === step.arrayState.shiftedIndex + 1) {
        highlightClass = "highlight-result";
      }
    }
    tableHTML += `<td class="text-lg ${highlightClass}">${char}</td>`;
  });
  tableHTML += "</tr></thead></table>";
  container.innerHTML = tableHTML;
}
function cleanAndNormalizeText(text) {
  text = text.replace(/[ى]/g, translateLegacyRuntime("legacy.68a74b81692467b8"));
  text = text.replace(/[ة]/g, translateLegacyRuntime("legacy.517d335897807109"));
  text = text.replace(/[أآإئؤ]/g, translateLegacyRuntime("legacy.be0fa08bb8f12a37"));
  text = text.replace(/[ ][ ]*/g, " ");
  text = text.replace(/[^ \u0621-\u064A]/g, "");
  return text.toUpperCase().split("").filter(char => char !== " ").join("");
}
function getCharIndex(char) {
  return ARABIC_ALPHABET.indexOf(char);
}
window.onload = function () {
  stepsLog = document.getElementById("stepsLog");
  statusMessage = document.getElementById("statusMessage");
  resultText = document.getElementById("resultText");
  renderAlphabetTable();
  resetCipher(false);
};
function startCipher(mode) {
  const key = parseInt(document.getElementById("keyInput").value);
  const textInput = document.getElementById("textInput").value;
  operationMode = mode;
  if (isNaN(key) || key < 1 || key > ALPHABET_SIZE - 1) {
    showMessage(translateLegacyRuntime(`مفتاح الإزاحة يجب أن يكون رقماً بين 1 و ${ALPHABET_SIZE - 1} (27).`, "legacy.5d40db5d46f752f2", "\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0625\u0632\u0627\u062D\u0629 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B \u0628\u064A\u0646 1 \u0648 ${ALPHABET_SIZE - 1} (27)."), true);
    return;
  }
  cleanText = cleanAndNormalizeText(textInput);
  if (cleanText.length === 0) {
    showMessage(translateLegacyRuntime("legacy.d0ce4187c00b4077"), true);
    return;
  }
  if (isCipherFinished) {
    resetCipher(true);
    startCipher(mode);
    return;
  }
  if (simulationHistory.length > 0 && currentStepIndex === -1) {
    nextStep();
    return;
  }
  simulationHistory = [];
  currentStepIndex = -1;
  isCipherFinished = false;
  if (mode === "encrypt") {
    cipherSimulator(cleanText, key, "encrypt");
    showMessage(translateLegacyRuntime(`بدء التشفير التفاعلي بالنص "${cleanText}" والمفتاح ${key}.`, "legacy.d01fb94b30ea8ca1", "\u0628\u062F\u0621 \u0627\u0644\u062A\u0634\u0641\u064A\u0631 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A \u0628\u0627\u0644\u0646\u0635 \"${cleanText}\" \u0648\u0627\u0644\u0645\u0641\u062A\u0627\u062D ${key}."), false);
  } else {
    cipherSimulator(cleanText, key, "decrypt");
    showMessage(translateLegacyRuntime(`بدء فك التشفير التفاعلي بالنص "${cleanText}" والمفتاح ${key}.`, "legacy.0c1ec798723b3bf0", "\u0628\u062F\u0621 \u0641\u0643 \u0627\u0644\u062A\u0634\u0641\u064A\u0631 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A \u0628\u0627\u0644\u0646\u0635 \"${cleanText}\" \u0648\u0627\u0644\u0645\u0641\u062A\u0627\u062D ${key}."), false);
  }
  nextStep();
}
function nextStep() {
  if (currentStepIndex < simulationHistory.length - 1) {
    currentStepIndex++;
    updateVisualization();
  } else {
    stopAutoPlay();
  }
}
function previousStep() {
  stopAutoPlay();
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();
  } else if (currentStepIndex === 0) {
    currentStepIndex--;
    updateVisualization();
  }
}
function jumpToEnd() {
  if (simulationHistory.length === 0) return;
  stopAutoPlay();
  currentStepIndex = simulationHistory.length - 1;
  updateVisualization();
}
function toggleAutoPlay() {
  if (simulationHistory.length === 0) {
    const textInput = document.getElementById("textInput");
    if (textInput && textInput.value.trim()) {
      startCipher(operationMode || "encrypt");
    }
  }
  if (autoPlayTimer) {
    stopAutoPlay();
  } else {
    if (currentStepIndex >= simulationHistory.length - 1) {
      currentStepIndex = 0;
      updateVisualization();
    }
    const btn = document.getElementById("autoPlayButton");
    if (btn) btn.textContent = translateLegacyRuntime("legacy.0bb64766df432714");
    autoPlayTimer = setInterval(() => {
      if (currentStepIndex < simulationHistory.length - 1) {
        currentStepIndex++;
        updateVisualization();
      } else {
        stopAutoPlay();
      }
    }, 600);
  }
}
function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    const btn = document.getElementById("autoPlayButton");
    if (btn) btn.textContent = translateLegacyRuntime("legacy.721af803b7b7ea70");
  }
}
function resetCipher(shouldClearMessage = true) {
  stopAutoPlay();
  currentStepIndex = -1;
  simulationHistory = [];
  isCipherFinished = false;
  operationMode = "";
  stepsLog.innerHTML = "";
  resultText.textContent = "...";
  resultText.className = "cipher-text text-gray-400 min-h-[40px] text-lg text-center py-4";
  renderAlphabetTable();
  if (shouldClearMessage) {
    statusMessage.textContent = translateLegacyRuntime("legacy.89091e5900e284ed");
    statusMessage.className = "text-center py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 text-sm font-medium";
  }
  updateControlButtons();
}
function updateControlButtons() {
  const isStarted = currentStepIndex >= 0;
  const isAtEnd = isCipherFinished || currentStepIndex === simulationHistory.length - 1;
  const nextBtn = document.getElementById("nextButton");
  if (nextBtn) nextBtn.disabled = isAtEnd || simulationHistory.length === 0;
  const prevBtn = document.getElementById("prevButton");
  if (prevBtn) prevBtn.disabled = currentStepIndex <= 0;
  const jumpBtn = document.getElementById("jumpEndButton");
  if (jumpBtn) jumpBtn.disabled = isAtEnd || simulationHistory.length === 0;
  const autoBtn = document.getElementById("autoPlayButton");
  if (autoBtn) autoBtn.disabled = simulationHistory.length === 0 && !document.getElementById("textInput")?.value?.trim();
  const stepCounter = document.getElementById("stepCounter");
  if (stepCounter) {
    if (simulationHistory.length > 0 && currentStepIndex >= 0) {
      stepCounter.textContent = translateLegacyRuntime(`الخطوة ${currentStepIndex + 1} من ${simulationHistory.length}`, "legacy.75c6ed9b81f98f63", "\u0627\u0644\u062E\u0637\u0648\u0629 ${currentStepIndex + 1} \u0645\u0646 ${simulationHistory.length}");
    } else {
      stepCounter.textContent = translateLegacyRuntime("legacy.78436e9ac7e3fd24");
    }
  }
  document.getElementById("encryptButton").disabled = isStarted && operationMode === "encrypt" && !isCipherFinished;
  document.getElementById("decryptButton").disabled = isStarted && operationMode === "decrypt" && !isCipherFinished;
  if (isCipherFinished) {
    document.getElementById("encryptButton").textContent = translateLegacyRuntime("legacy.6085ac4fb11d601b");
    document.getElementById("decryptButton").textContent = translateLegacyRuntime("legacy.966a705a95cc638c");
    document.getElementById("encryptButton").disabled = false;
    document.getElementById("decryptButton").disabled = false;
  } else if (isStarted) {
    document.getElementById("encryptButton").textContent = translateLegacyRuntime("legacy.31b7168bb42e8833");
    document.getElementById("decryptButton").textContent = translateLegacyRuntime("legacy.ac3fd7cf907498da");
  } else {
    document.getElementById("encryptButton").textContent = translateLegacyRuntime("legacy.06eaab093501b264");
    document.getElementById("decryptButton").textContent = translateLegacyRuntime("legacy.6ce29cb0340fb55a");
  }
}
function showMessage(msg, isError) {
  statusMessage.textContent = msg;
  statusMessage.className = `text-center py-3 px-4 rounded-xl text-sm font-bold ${isError ? "bg-red-50 border border-red-200 text-red-700" : "bg-emerald-50 border border-emerald-200 text-emerald-700"}`;
}
function updateVisualization() {
  renderAlphabetTable();
  const step = simulationHistory[currentStepIndex];
  renderCipherTable(simulationHistory.map(s => s.logEntry), operationMode);
  showMessage(step.message, step.isError);
  resultText.textContent = step.arrayState.result;
  resultText.className = "cipher-text text-indigo-700 min-h-[40px] text-2xl font-bold text-center py-4 bg-indigo-50 rounded-xl border border-indigo-100";
  if (currentStepIndex === simulationHistory.length - 1) {
    isCipherFinished = true;
    showMessage(step.message, false);
  } else {
    isCipherFinished = false;
  }
  const currentStepRow = stepsLog ? stepsLog.querySelector(".bg-yellow-200") : null;
  if (currentStepRow && stepsLog) {
    // Scroll ONLY inside the stepsLog container, NEVER scroll the browser window!
    const rowOffset = currentStepRow.offsetTop - stepsLog.offsetTop;
    const targetScroll = rowOffset - stepsLog.clientHeight / 2 + currentStepRow.clientHeight / 2;
    stepsLog.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: "smooth"
    });
  }
  updateControlButtons();
}
function renderCipherTable(steps, mode) {
  let headers = ["#", translateLegacyRuntime("legacy.fdfdf3a018085c1f"), translateLegacyRuntime("legacy.290a588c08d15179"), mode === "encrypt" ? translateLegacyRuntime("legacy.e1307acb0cd50419") : translateLegacyRuntime("legacy.2a88b634e17bb2fa"), translateLegacyRuntime("legacy.7ae3624bb961a80e"), translateLegacyRuntime("legacy.bcbbba52e80ac255"), translateLegacyRuntime("legacy.3c64ba0afab6c4a8")];
  let tableHTML = `<table class="steps-table shadow-sm border border-gray-200">
                <thead><tr>`;
  headers.forEach(h => tableHTML += `<th>${h}</th>`);
  tableHTML += `</tr></thead><tbody>`;
  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    const isCurrent = i === currentStepIndex;
    const rowClass = isCurrent ? "bg-yellow-200" : "";
    if (step.char === "-") continue;
    const originalIndex_1based = step.originalIndex_1based;
    const shiftedIndex_1based = step.shiftedIndex_1based;
    let formula;
    if (mode === "encrypt") {
      formula = `C = (${originalIndex_1based} + ${step.key} - 1) mod 28 + 1`;
    } else {
      formula = `P = (${originalIndex_1based} - ${step.key} - 1) mod 28 + 1`;
    }
    const shiftedIndexDisplay = step.intermediateIndex < 0 ? `${step.intermediateIndex} → ${shiftedIndex_1based}` : shiftedIndex_1based;
    tableHTML += `<tr class="${rowClass}">
                    <td class="font-mono text-gray-400">${i + 1}</td>
                    <td class="cipher-text font-bold text-indigo-700">${step.char}</td>
                    <td class="font-mono font-bold">${originalIndex_1based}</td>
                    <td class="formula text-gray-600">${formula}</td>
                    <td class="font-mono font-bold text-green-700">${shiftedIndexDisplay}</td>
                    <td class="cipher-text font-bold text-indigo-700">${step.resultChar}</td>
                    <td class="cipher-text text-gray-700">${step.result}</td>
                </tr>`;
  }
  tableHTML += "</tbody></table>";
  stepsLog.innerHTML = tableHTML;
}
function cipherSimulator(text, key, mode) {
  let result = "";
  simulationHistory.push({
    arrayState: {
      originalIndex: -1,
      shiftedIndex: -1,
      result: ""
    },
    logEntry: {
      char: "-",
      decision: translateLegacyRuntime(`بدء عملية ${mode === "encrypt" ? "التشفير" : "فك التشفير"} بالنص ${text} والمفتاح ${key}`, "legacy.af8e029b7af81309", "\u0628\u062F\u0621 \u0639\u0645\u0644\u064A\u0629 ${mode === \"encrypt\" ? \"\u0627\u0644\u062A\u0634\u0641\u064A\u0631\" : \"\u0641\u0643 \u0627\u0644\u062A\u0634\u0641\u064A\u0631\"} \u0628\u0627\u0644\u0646\u0635 ${text} \u0648\u0627\u0644\u0645\u0641\u062A\u0627\u062D ${key}")
    },
    message: translateLegacyRuntime(`بدء العملية، المفتاح المستخدم هو: ${key}.`, "legacy.32e8b276a2f1f2f3", "\u0628\u062F\u0621 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u060C \u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0647\u0648: ${key}."),
    isError: false
  });
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const originalIndex_0based = getCharIndex(char);
    const originalIndex_1based = originalIndex_0based + 1;
    let shiftedIndex_0based;
    let intermediateIndex;
    if (originalIndex_0based === -1) {
      result += char;
      continue;
    }
    if (mode === "encrypt") {
      shiftedIndex_0based = (originalIndex_0based + key) % ALPHABET_SIZE;
      intermediateIndex = originalIndex_1based + key - 1;
    } else {
      intermediateIndex = originalIndex_0based - key;
      shiftedIndex_0based = (intermediateIndex % ALPHABET_SIZE + ALPHABET_SIZE) % ALPHABET_SIZE;
    }
    const shiftedIndex_1based = shiftedIndex_0based + 1;
    const resultChar = ARABIC_ALPHABET[shiftedIndex_0based];
    result += resultChar;
    simulationHistory.push({
      arrayState: {
        originalIndex: originalIndex_0based,
        shiftedIndex: shiftedIndex_0based,
        result: result
      },
      logEntry: {
        char: char,
        originalIndex_1based: originalIndex_1based,
        key: key,
        intermediateIndex: intermediateIndex,
        shiftedIndex_1based: shiftedIndex_1based,
        resultChar: resultChar,
        result: result
      },
      message: translateLegacyRuntime(`تمت معالجة الحرف '${char}'. الفهرس الأصلي ${originalIndex_1based}. النتيجة: ${resultChar}. النتيجة الجزئية: ${result}`, "legacy.f8b6c645304bde87", "\u062A\u0645\u062A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u062D\u0631\u0641 '${char}'. \u0627\u0644\u0641\u0647\u0631\u0633 \u0627\u0644\u0623\u0635\u0644\u064A ${originalIndex_1based}. \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${resultChar}. \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062C\u0632\u0626\u064A\u0629: ${result}"),
      isError: false
    });
  }
  simulationHistory.push({
    arrayState: {
      originalIndex: -1,
      shiftedIndex: -1,
      result: result
    },
    logEntry: {
      char: "-",
      originalIndex_1based: 0,
      key: key,
      intermediateIndex: 0,
      shiftedIndex_1based: 0,
      resultChar: translateLegacyRuntime("legacy.80e3d0d358166366"),
      result: result
    },
    message: translateLegacyRuntime(`انتهت العملية. النص النهائي هو: ${result}`, "legacy.a5ef5840d80b94dc", "\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0627\u0644\u0646\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0647\u0648: ${result}"),
    isError: false
  });
}
Object.assign(window, {
  renderAlphabetTable: renderAlphabetTable,
  cleanAndNormalizeText: cleanAndNormalizeText,
  getCharIndex: getCharIndex,
  startCipher: startCipher,
  nextStep: nextStep,
  previousStep: previousStep,
  jumpToEnd: jumpToEnd,
  toggleAutoPlay: toggleAutoPlay,
  stopAutoPlay: stopAutoPlay,
  resetCipher: resetCipher,
  updateControlButtons: updateControlButtons,
  showMessage: showMessage,
  updateVisualization: updateVisualization,
  renderCipherTable: renderCipherTable,
  cipherSimulator: cipherSimulator
});
export { renderAlphabetTable, cleanAndNormalizeText, getCharIndex, startCipher, nextStep, previousStep, jumpToEnd, toggleAutoPlay, stopAutoPlay, resetCipher, updateControlButtons, showMessage, updateVisualization, renderCipherTable, cipherSimulator };
