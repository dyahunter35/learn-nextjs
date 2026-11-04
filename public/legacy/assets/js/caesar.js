const ARABIC_ALPHABET = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش",
  "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي",
];
const ALPHABET_SIZE = ARABIC_ALPHABET.length;

let stepsLog, statusMessage, resultText;
let currentStepIndex = -1;
let simulationHistory = [];
let isCipherFinished = false;
let operationMode = "";
let cleanText = "";

function renderAlphabetTable() {
  const container = document.getElementById("alphabetTableContainer");
  let tableHTML = `<table class="alphabet-table w-full text-sm"><thead>`;

  tableHTML += '<tr><th class="bg-indigo-600 text-white !sticky !top-0 z-10">الفهرس</th>';
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

  tableHTML += '<tr><th class="bg-indigo-600 text-white">الحرف</th>';
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
  text = text.replace(/[ى]/g, "ي");
  text = text.replace(/[ة]/g, "ه");
  text = text.replace(/[أآإئؤ]/g, "ا");
  text = text.replace(/[ ][ ]*/g, " ");

  text = text.replace(/[^ \u0621-\u064A]/g, "");

  return text
    .toUpperCase()
    .split("")
    .filter((char) => char !== " ")
    .join("");
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
    showMessage(
      `مفتاح الإزاحة يجب أن يكون رقماً بين 1 و ${
        ALPHABET_SIZE - 1
      } (27).`,
      true
    );
    return;
  }

  cleanText = cleanAndNormalizeText(textInput);

  if (cleanText.length === 0) {
    showMessage("يرجى إدخال نص عربي يحتوي على حروف للتشفير.", true);
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
    showMessage(
      `بدء التشفير التفاعلي بالنص "${cleanText}" والمفتاح ${key}.`,
      false
    );
  } else {
    cipherSimulator(cleanText, key, "decrypt");
    showMessage(
      `بدء فك التشفير التفاعلي بالنص "${cleanText}" والمفتاح ${key}.`,
      false
    );
  }

  nextStep();
}

function nextStep() {
  if (currentStepIndex < simulationHistory.length - 1) {
    currentStepIndex++;
    updateVisualization();
  }
}

function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();
  } else if (currentStepIndex === 0) {
    currentStepIndex--;
    updateVisualization();
  }
}

function resetCipher(shouldClearMessage = true) {
  currentStepIndex = -1;
  simulationHistory = [];
  isCipherFinished = false;
  operationMode = "";
  stepsLog.innerHTML = "";
  resultText.textContent = "...";
  resultText.className = "cipher-text text-gray-400 min-h-[40px] text-lg text-center py-4";

  renderAlphabetTable();

  if (shouldClearMessage) {
    statusMessage.textContent =
      'اضغط على زر "ابدأ التشفير" أو "ابدأ فك التشفير".';
    statusMessage.className = "text-center py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 text-sm font-medium";
  }

  updateControlButtons();
}

function updateControlButtons() {
  const isStarted = currentStepIndex >= 0;

  document.getElementById("nextButton").disabled =
    isCipherFinished || currentStepIndex === simulationHistory.length - 1;
  document.getElementById("prevButton").disabled = currentStepIndex <= 0;

  document.getElementById("encryptButton").disabled =
    isStarted && operationMode === "encrypt" && !isCipherFinished;
  document.getElementById("decryptButton").disabled =
    isStarted && operationMode === "decrypt" && !isCipherFinished;

  if (isCipherFinished) {
    document.getElementById("encryptButton").textContent = "إعادة تشفير";
    document.getElementById("decryptButton").textContent =
      "إعادة فك التشفير";
    document.getElementById("encryptButton").disabled = false;
    document.getElementById("decryptButton").disabled = false;
  } else if (isStarted) {
    document.getElementById("encryptButton").textContent =
      "التشفير قيد التقدم";
    document.getElementById("decryptButton").textContent =
      "فك التشفير قيد التقدم";
  } else {
    document.getElementById("encryptButton").textContent =
      "ابدأ التشفير (خطوة 1)";
    document.getElementById("decryptButton").textContent =
      "ابدأ فك التشفير (خطوة 1)";
  }
}

function showMessage(msg, isError) {
  statusMessage.textContent = msg;
  statusMessage.className = `text-center py-3 px-4 rounded-xl text-sm font-bold ${
    isError
      ? "bg-red-50 border border-red-200 text-red-700"
      : "bg-emerald-50 border border-emerald-200 text-emerald-700"
  }`;
}

function updateVisualization() {
  renderAlphabetTable();

  const step = simulationHistory[currentStepIndex];

  renderCipherTable(
    simulationHistory.map((s) => s.logEntry),
    operationMode
  );

  showMessage(step.message, step.isError);

  resultText.textContent = step.arrayState.result;
  resultText.className = "cipher-text text-indigo-700 min-h-[40px] text-2xl font-bold text-center py-4 bg-indigo-50 rounded-xl border border-indigo-100";

  if (currentStepIndex === simulationHistory.length - 1) {
    isCipherFinished = true;
    showMessage(step.message, false);
  } else {
    isCipherFinished = false;
  }

  const currentStepRow = stepsLog.querySelector(".bg-yellow-200");
  if (currentStepRow) {
    currentStepRow.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  updateControlButtons();
}

function renderCipherTable(steps, mode) {
  let headers = [
    "#",
    "الحرف",
    "فهرس (P)",
    mode === "encrypt" ? "صيغة التشفير" : "صيغة فك التشفير",
    "الفهرس الجديد",
    "الناتج",
    "النتيجة",
  ];

  let tableHTML = `<table class="steps-table shadow-sm border border-gray-200">
                <thead><tr>`;
  headers.forEach((h) => (tableHTML += `<th>${h}</th>`));
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

    const shiftedIndexDisplay =
      step.intermediateIndex < 0
        ? `${step.intermediateIndex} → ${shiftedIndex_1based}`
        : shiftedIndex_1based;

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
    arrayState: { originalIndex: -1, shiftedIndex: -1, result: "" },
    logEntry: {
      char: "-",
      decision: `بدء عملية ${
        mode === "encrypt" ? "التشفير" : "فك التشفير"
      } بالنص ${text} والمفتاح ${key}`,
    },
    message: `بدء العملية، المفتاح المستخدم هو: ${key}.`,
    isError: false,
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
      shiftedIndex_0based =
        ((intermediateIndex % ALPHABET_SIZE) + ALPHABET_SIZE) %
        ALPHABET_SIZE;
    }

    const shiftedIndex_1based = shiftedIndex_0based + 1;
    const resultChar = ARABIC_ALPHABET[shiftedIndex_0based];
    result += resultChar;

    simulationHistory.push({
      arrayState: {
        originalIndex: originalIndex_0based,
        shiftedIndex: shiftedIndex_0based,
        result: result,
      },
      logEntry: {
        char: char,
        originalIndex_1based: originalIndex_1based,
        key: key,
        intermediateIndex: intermediateIndex,
        shiftedIndex_1based: shiftedIndex_1based,
        resultChar: resultChar,
        result: result,
      },
      message: `تمت معالجة الحرف '${char}'. الفهرس الأصلي ${originalIndex_1based}. النتيجة: ${resultChar}. النتيجة الجزئية: ${result}`,
      isError: false,
    });
  }

  simulationHistory.push({
    arrayState: { originalIndex: -1, shiftedIndex: -1, result: result },
    logEntry: {
      char: "-",
      originalIndex_1based: 0,
      key: key,
      intermediateIndex: 0,
      shiftedIndex_1based: 0,
      resultChar: "انتهت",
      result: result,
    },
    message: `انتهت العملية. النص النهائي هو: ${result}`,
    isError: false,
  });
}
