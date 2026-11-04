let conversionSteps = [];
let finalOutput = "";
let currentStepIndex = -1;
let originalInput = "";
let integerStepsCount = 0;
let currentConversionType = "";
const MAX_FRACTIONAL_STEPS = 12;

const messageDiv = document.getElementById("message");
const resultsSection = document.getElementById("resultsSection");
const resultBox = document.getElementById("resultBox");
const resultTypeTitle = document.getElementById("resultTypeTitle");
const inputDisplay = document.getElementById("inputDisplay");
const outputDisplay = document.getElementById("outputDisplay");
const stepsTableBody = document.getElementById("stepsTableBody");
const currentStepTitle = document.getElementById("currentStepTitle");
const tableHeaderRow = document.getElementById("tableHeaderRow");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const currentStepDisplay = document.getElementById("currentStepDisplay");
const totalStepsDisplay = document.getElementById("totalStepsDisplay");

const decimalInput = document.getElementById("decimalInput");
const binaryInput = document.getElementById("binaryInput");

function displayMessage(text, type = "error") {
  messageDiv.textContent = text;
  messageDiv.className = `p-4 mb-6 rounded font-medium transition duration-300`;
  messageDiv.classList.remove("hidden");

  if (type === "error") {
    messageDiv.classList.add(
      "bg-red-100", "border-red-500", "text-red-700", "border-r-4"
    );
  } else if (type === "success") {
    messageDiv.classList.add(
      "bg-green-100", "border-green-500", "text-green-700", "border-r-4"
    );
  } else {
    messageDiv.classList.add(
      "bg-blue-100", "border-blue-500", "text-blue-700", "border-r-4"
    );
  }
}

function getDecToBinIntegerSteps(decimalInteger) {
  let num = parseInt(decimalInteger);
  const steps = [];

  if (num === 0) return { steps: [], binary: "0" };

  while (num > 0) {
    const remainder = num % 2;
    const quotient = Math.floor(num / 2);

    steps.push({
      phase: "integer",
      type: "division",
      dividend: num,
      quotient: quotient,
      remainder: remainder,
    });
    num = quotient;
  }

  const binary = steps
    .map((step) => step.remainder)
    .reverse()
    .join("");
  return { steps, binary };
}

function getDecToBinFractionalSteps(fractionalPart, maxSteps) {
  let frac = fractionalPart;
  const steps = [];
  let currentStep = 1;

  if (frac === 0) return { steps: [], binary: "" };

  while (frac > 0 && currentStep <= maxSteps) {
    const result = frac * 2;
    const integerPart = Math.floor(result);
    const newFractional = result - integerPart;

    steps.push({
      phase: "fractional",
      type: "multiplication",
      fraction: frac,
      result: result.toFixed(maxSteps + 1),
      integerPart: integerPart,
      newFraction: newFractional,
    });

    frac = newFractional;
    currentStep++;
  }

  const binary = steps.map((step) => step.integerPart).join("");
  return { steps, binary };
}

function handleDecToBinConversion(rawInput) {
  const floatValue = parseFloat(rawInput);
  if (rawInput === "" || isNaN(floatValue) || floatValue < 0) {
    displayMessage(
      "الإدخال غير صالح. يرجى إدخال عدد عشري صحيح أو حقيقي وموجب."
    );
    return false;
  }

  const parts = rawInput.split(".");
  const integerPart = parseInt(parts[0] || 0);
  let fractionalPart = 0;

  if (parts.length > 1 && parts[1].length > 0) {
    fractionalPart = parseFloat("0." + parts[1]);
  }

  const { steps: intSteps, binary: intBinary } =
    getDecToBinIntegerSteps(integerPart);
  integerStepsCount = intSteps.length;
  const { steps: fracSteps, binary: fracBinary } =
    getDecToBinFractionalSteps(fractionalPart, MAX_FRACTIONAL_STEPS);

  conversionSteps = [...intSteps, ...fracSteps];

  let finalIntBinary = intBinary || "0";
  if (integerPart === 0 && intBinary === "0") finalIntBinary = "0";

  finalOutput = fracBinary
    ? `${finalIntBinary}.${fracBinary}`
    : finalIntBinary;

  return true;
}

function getBinToDecSteps(binaryInput) {
  const parts = binaryInput.split(".");
  const intPart = parts[0];
  const fracPart = parts[1] || "";
  const steps = [];
  let decimalSum = 0;

  for (let i = 0; i < intPart.length; i++) {
    const bit = parseInt(intPart[intPart.length - 1 - i]);
    const power = i;
    const weight = Math.pow(2, power);
    const result = bit * weight;
    decimalSum += result;

    steps.push({
      phase: "integer",
      type: "weight_multiplication",
      bit: bit,
      power: power,
      weight: weight,
      result: result,
      currentSum: decimalSum,
      binaryPosition: intPart.length - 1 - i,
    });
  }

  integerStepsCount = steps.length;

  let currentPower = -1;
  for (let i = 0; i < fracPart.length; i++) {
    const bit = parseInt(fracPart[i]);
    const power = currentPower;
    const weight = Math.pow(2, power);
    const result = bit * weight;
    decimalSum += result;

    steps.push({
      phase: "fractional",
      type: "weight_multiplication",
      bit: bit,
      power: power,
      weight: weight,
      result: result,
      currentSum: decimalSum,
      binaryPosition: intPart.length + 1 + i,
    });

    currentPower--;
  }

  return { steps, decimal: decimalSum.toFixed(MAX_FRACTIONAL_STEPS) };
}

function handleBinToDecConversion(rawInput) {
  if (
    !/^[01]+(\.[01]*)?$/.test(rawInput) ||
    rawInput === "" ||
    rawInput === "."
  ) {
    displayMessage(
      "الإدخال الثنائي غير صالح. يرجى إدخال أصفار وآحاد فقط، مع فاصل عشري واحد كحد أقصى."
    );
    return false;
  }

  const { steps, decimal } = getBinToDecSteps(rawInput);
  conversionSteps = steps;
  finalOutput = decimal.replace(/\.?0+$/, "");
  integerStepsCount = steps.filter((s) => s.phase === "integer").length;

  return true;
}

function startConversion(type) {
  conversionSteps = [];
  finalOutput = "";
  currentStepIndex = -1;
  originalInput = "";
  integerStepsCount = 0;
  currentConversionType = type;

  resultsSection.classList.add("hidden");
  messageDiv.classList.add("hidden");
  stepsTableBody.innerHTML = "";

  let success = false;

  if (type === "decToBin") {
    originalInput = decimalInput.value.trim().replace(/,/g, ".");
    success = handleDecToBinConversion(originalInput);
    if (success) {
      inputDisplay.innerHTML = `(<span class="text-emerald-700">${originalInput}</span>)₁₀`;
      resultTypeTitle.textContent = "الرقم الثنائي الناتج";
      resultBox.className =
        "bg-emerald-50 p-6 rounded-lg mb-8 border-l-4 border-emerald-600";
    }
  } else if (type === "binToDec") {
    originalInput = binaryInput.value.trim().replace(/,/g, ".");
    success = handleBinToDecConversion(originalInput);
    if (success) {
      inputDisplay.innerHTML = `(<span class="text-blue-700 mono-font">${originalInput}</span>)₂`;
      resultTypeTitle.textContent = "الرقم العشري الناتج";
      resultBox.className =
        "bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-600";
    }
  }

  if (!success) return;

  if (conversionSteps.length > 0) {
    currentStepIndex = 0;
    nextButton.disabled = false;
  } else {
    if (parseFloat(originalInput) === 0 || originalInput === "0") {
      finalOutput = type === "decToBin" ? "0" : "0";
      currentStepIndex = -1;
    }
  }

  resultsSection.classList.remove("hidden");
  updateUI();
}

function updateUI() {
  const totalSteps = conversionSteps.length;
  const isLastStep = currentStepIndex === totalSteps - 1;

  prevButton.disabled = currentStepIndex <= 0;
  nextButton.disabled = isLastStep;

  currentStepDisplay.textContent = currentStepIndex + 1;
  totalStepsDisplay.textContent = totalSteps;

  if (totalSteps === 0) {
    const inputBase = currentConversionType === "decToBin" ? "₁₀" : "₂";
    const outputBase = currentConversionType === "decToBin" ? "₂" : "₁₀";
    outputDisplay.textContent = `(0)${outputBase}`;
    displayMessage(
      `التحويل مكتمل! العدد (${originalInput})${inputBase} يُكافئ (0)${outputBase}.`,
      "success"
    );
    return;
  }

  stepsTableBody.innerHTML = "";

  let currentIntOutput = currentConversionType === "decToBin" ? "" : 0;
  let currentFracOutput = currentConversionType === "decToBin" ? "" : 0;

  let integerPartFinished = false;

  conversionSteps.forEach((step, i) => {
    if (i > currentStepIndex) return;

    const isCurrent = i === currentStepIndex;
    const isIntegerPhase = step.phase === "integer";

    if (
      !integerPartFinished &&
      i === integerStepsCount &&
      integerStepsCount > 0 &&
      totalSteps > integerStepsCount
    ) {
      const separatorRow = stepsTableBody.insertRow();
      separatorRow.className = "separator-row";
      const title =
        currentConversionType === "decToBin"
          ? "انتقال إلى تحويل الجزء الكسري (الضرب في 2)"
          : "انتقال إلى تحويل الجزء الكسري (قوى 2 السلبية)";
      separatorRow.innerHTML = `<td colspan="4" class="py-3 px-6 text-xl">${title}</td>`;
      integerPartFinished = true;
    }

    if (currentConversionType === "decToBin") {
      if (isIntegerPhase) {
        currentStepTitle.textContent = `الجزء 1: تحويل الجزء الصحيح (${step.dividend}...) بواسطة القسمة على 2`;
        currentIntOutput = step.remainder + currentIntOutput;
      } else {
        currentStepTitle.textContent = `الجزء 2: تحويل الجزء الكسري (${step.fraction.toFixed(
          3
        )}...) بواسطة الضرب في 2`;
        currentFracOutput += step.integerPart;
      }
    } else {
      currentIntOutput = currentFracOutput = step.currentSum;
      if (isIntegerPhase) {
        currentStepTitle.textContent = `الجزء 1: تحويل الجزء الصحيح (${
          originalInput.split(".")[0]
        }) بواسطة أوزان القوى الموجبة`;
      } else {
        currentStepTitle.textContent = `الجزء 2: تحويل الجزء الكسري (${
          originalInput.split(".")[1] || ""
        }) بواسطة أوزان القوى السلبية`;
      }
    }

    if (isCurrent) {
      if (currentConversionType === "decToBin") {
        tableHeaderRow.className = "table-header-dec text-lg";
        if (isIntegerPhase) {
          tableHeaderRow.innerHTML = `
                            <th scope="col" class="px-6 py-3 text-center">القيمة الحالية</th>
                            <th scope="col" class="px-6 py-3 text-center">العملية: ÷ 2</th>
                            <th scope="col" class="px-6 py-3 text-center">ناتج القسمة (القيمة الجديدة)</th>
                            <th scope="col" class="px-6 py-3 text-center">الباقي (البت)</th>
                        `;
        } else {
          tableHeaderRow.innerHTML = `
                            <th scope="col" class="px-6 py-3 text-center">الكسر الحالي</th>
                            <th scope="col" class="px-6 py-3 text-center">العملية: × 2</th>
                            <th scope="col" class="px-6 py-3 text-center">ناتج الضرب</th>
                            <th scope="col" class="px-6 py-3 text-center">الجزء الصحيح (البت)</th>
                        `;
        }
      } else {
        tableHeaderRow.className = "table-header-bin text-lg";
        tableHeaderRow.innerHTML = `
                        <th scope="col" class="px-6 py-3 text-center">البت</th>
                        <th scope="col" class="px-6 py-3 text-center">قوة 2 (الوزن)</th>
                        <th scope="col" class="px-6 py-3 text-center">العملية: البت × الوزن</th>
                        <th scope="col" class="px-6 py-3 text-center">النتيجة الجزئية والمجموع التراكمي</th>
                    `;
      }
    }

    const row = stepsTableBody.insertRow();
    row.className = isCurrent
      ? "bg-yellow-50 font-semibold transition duration-150 border-r-4 border-yellow-500"
      : "bg-white text-gray-700 past-step-row hover:bg-gray-100";

    let cellContent;

    if (currentConversionType === "decToBin") {
      if (isIntegerPhase) {
        cellContent = `
                        <td class="px-6 py-3 whitespace-nowrap text-lg text-center">${
                          step.dividend
                        }</td>
                        <td class="px-6 py-3 whitespace-nowrap text-lg text-center">÷ 2</td>
                        <td class="px-6 py-3 whitespace-nowrap text-lg text-center text-indigo-700">${
                          step.quotient
                        }</td>
                        <td class="px-6 py-3 whitespace-nowrap text-2xl text-center mono-font ${
                          isCurrent
                            ? "text-red-700 font-extrabold highlight-cell border-l-4 border-red-500"
                            : "text-green-700 font-bold"
                        }">
                            ${step.remainder}
                        </td>
                    `;
      } else {
        cellContent = `
                        <td class="px-6 py-3 whitespace-nowrap text-lg text-center mono-font">${step.fraction.toFixed(
                          MAX_FRACTIONAL_STEPS
                        )}</td>
                        <td class="px-6 py-3 whitespace-nowrap text-lg text-center">× 2</td>
                        <td class="px-6 py-3 whitespace-nowrap text-lg text-center text-indigo-700 mono-font">${
                          step.result
                        }</td>
                        <td class="px-6 py-3 whitespace-nowrap text-2xl text-center mono-font ${
                          isCurrent
                            ? "text-red-700 font-extrabold highlight-cell border-l-4 border-red-500"
                            : "text-green-700 font-bold"
                        }">
                            ${step.integerPart}
                        </td>
                    `;
      }
    } else {
      const sign = step.power < 0 ? "" : "+";
      cellContent = `
                    <td class="px-6 py-3 whitespace-nowrap text-2xl text-center mono-font">${
                      step.bit
                    }</td>
                    <td class="px-6 py-3 whitespace-nowrap text-lg text-center">2<sup>${sign}${
        step.power
      }</sup> (أو ${step.weight
        .toFixed(MAX_FRACTIONAL_STEPS)
        .replace(/\.?0+$/, "")})</td>
                    <td class="px-6 py-3 whitespace-nowrap text-lg text-center text-indigo-700 mono-font">
                        ${step.bit} × ${step.weight
        .toFixed(MAX_FRACTIONAL_STEPS)
        .replace(/\.?0+$/, "")} = <span class="${
        isCurrent ? "font-bold" : ""
      }">${step.result
        .toFixed(MAX_FRACTIONAL_STEPS)
        .replace(/\.?0+$/, "")}</span>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap text-2xl text-center mono-font ${
                      isCurrent
                        ? "text-red-700 font-extrabold highlight-cell border-l-4 border-red-500"
                        : "text-green-700 font-bold"
                    }">
                        ${step.currentSum
                          .toFixed(MAX_FRACTIONAL_STEPS)
                          .replace(/\.?0+$/, "")}
                    </td>
                `;
    }

    row.innerHTML += cellContent;
  });

  const finalBase = currentConversionType === "decToBin" ? "₂" : "₁₀";
  let currentOutputText;

  if (currentConversionType === "decToBin") {
    const intPart = currentIntOutput || "0";
    currentOutputText = currentFracOutput
      ? `${intPart}.${currentFracOutput}`
      : intPart;
  } else {
    currentOutputText = currentIntOutput
      .toFixed(MAX_FRACTIONAL_STEPS)
      .replace(/\.?0+$/, "");
  }

  outputDisplay.innerHTML = `(<span class="text-indigo-700">${currentOutputText}</span>)${finalBase}`;

  if (isLastStep) {
    displayMessage(
      `التحويل مكتمل! النتيجة النهائية هي ${finalOutput}.`,
      "success"
    );
  } else if (currentStepIndex === 0 && totalSteps > 0) {
    displayMessage(
      'اضغط على "الخطوة التالية" لعرض المرحلة الأولى من التحويل.',
      "info"
    );
  } else {
    messageDiv.classList.add("hidden");
  }
}

function nextStep() {
  if (currentStepIndex < conversionSteps.length - 1) {
    currentStepIndex++;
    updateUI();
  }
}

function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateUI();
  }
}

decimalInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    startConversion("decToBin");
  }
});
binaryInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    startConversion("binToDec");
  }
});
