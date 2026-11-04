// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
const expressionInput = document.getElementById("expression-input");
const generateBtn = document.getElementById("generate-btn");
const quickButtons = document.getElementById("quick-buttons");
const tableHeader = document.getElementById("table-header");
const tableBody = document.getElementById("table-body");
const messageArea = document.getElementById("message-area");
const clearBtn = document.getElementById("clear-btn");
const tableEmpty = document.getElementById("table-empty");
const tableContainer = document.getElementById("table-container");
function toArabicBool(value) {
  return value ? translateLegacyRuntime("legacy.628f6d71f724c951") : translateLegacyRuntime("legacy.f01f2e7542ce05d6");
}
function displayMessage(message, type) {
  messageArea.textContent = message;
  messageArea.classList.remove("hidden", "bg-red-900", "bg-green-900", "bg-red-100", "bg-green-100", "text-red-300", "text-green-300", "border-red-500", "border-green-500");
  if (type === "error") {
    messageArea.classList.add("bg-red-100", "text-red-800", "border-red-400");
  } else if (type === "success") {
    messageArea.classList.add("bg-green-100", "text-green-800", "border-green-400");
  }
}
quickButtons.addEventListener("click", event => {
  const btn = event.target;
  if (btn.tagName === "BUTTON" && btn.hasAttribute("data-value")) {
    const value = btn.getAttribute("data-value");
    if (btn.id === "clear-btn") {
      expressionInput.value = "";
      tableHeader.innerHTML = "";
      tableBody.innerHTML = "";
      messageArea.classList.add("hidden");
      if (tableEmpty) tableEmpty.classList.remove("hidden");
    } else {
      const start = expressionInput.selectionStart;
      const end = expressionInput.selectionEnd;
      const currentValue = expressionInput.value;
      expressionInput.value = currentValue.substring(0, start) + value + currentValue.substring(end);
      const newCursorPosition = start + value.length;
      expressionInput.focus();
      expressionInput.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }
});
generateBtn.addEventListener("click", generateTruthTable);
function generateTruthTable() {
  messageArea.classList.add("hidden");
  tableHeader.innerHTML = "";
  tableBody.innerHTML = "";
  if (tableEmpty) tableEmpty.classList.add("hidden");
  let expression = expressionInput.value.trim();
  if (!expression) {
    displayMessage(translateLegacyRuntime("legacy.5a54a753eb0261a3"), "error");
    if (tableEmpty) tableEmpty.classList.remove("hidden");
    return;
  }
  let cleanExpression = expression.replace(/[\u0028\u066D]/g, "(").replace(/[\u0029\u066E]/g, ")");
  const variableRegex = /[A-Z\u0621-\u064A][0-9\u0660-\u0669]*/g;
  const variables = Array.from(new Set(cleanExpression.match(variableRegex) || [])).sort();
  const numVariables = variables.length;
  if (numVariables === 0) {
    displayMessage(translateLegacyRuntime("legacy.e43d5d579af65931"), "error");
    if (tableEmpty) tableEmpty.classList.remove("hidden");
    return;
  }
  if (numVariables > 5) {
    displayMessage(translateLegacyRuntime("legacy.2d269caf21b72292") + numVariables + translateLegacyRuntime("legacy.f2a4947bf0deb196"), "error");
    if (tableEmpty) tableEmpty.classList.remove("hidden");
    return;
  }
  variables.forEach(v => {
    const th = document.createElement("th");
    th.textContent = v;
    tableHeader.appendChild(th);
  });
  const finalTh = document.createElement("th");
  finalTh.textContent = expression;
  finalTh.classList.add("bg-blue-600", "text-white");
  tableHeader.appendChild(finalTh);
  const Implies = (a, b) => !a || b;
  const Equiv = (a, b) => a && b || !a && !b;
  const varPattern = "[A-Z\\u0621-\\u064A][0-9\\u0660-\\u0669]*";
  let evaluationCode = cleanExpression;
  evaluationCode = evaluationCode.replace(/¬/g, "!").replace(/∧/g, "&&").replace(/∨/g, "||");
  evaluationCode = evaluationCode.replace(new RegExp(`(${varPattern}|\\))\\s*↔\\s*(\\(|${varPattern})`, "g"), (match, p1, p2) => {
    return `Equiv(${p1.trim()}, ${p2.trim()})`;
  });
  evaluationCode = cleanExpression;
  const variableOrParen = `\\s*(${varPattern}|\\([^\\)]*\\))\\s*`;
  function replaceBinaryOp(expr, opSymbol, funcName) {
    const term = `(${varPattern}|\\([^\\)]+\\))`;
    const simpleTerm = `(${varPattern})`;
    const regex = new RegExp(`${simpleTerm}\\s*${opSymbol}\\s*${simpleTerm}`, "g");
    let tempExpr = expr;
    let count = 0;
    while (true) {
      const match = tempExpr.match(regex);
      if (!match || count > 100) break;
      let lastMatchIndex = -1;
      let lastMatchResult = null;
      let currentIndex = 0;
      while (currentIndex < tempExpr.length) {
        const currentMatch = tempExpr.substring(currentIndex).match(regex);
        if (!currentMatch) break;
        lastMatchIndex = currentIndex;
        lastMatchResult = currentMatch;
        currentIndex += currentMatch.index + currentMatch[0].length;
      }
      if (lastMatchResult) {
        const start = lastMatchIndex + lastMatchResult.index;
        const end = start + lastMatchResult[0].length;
        const p1 = lastMatchResult[1];
        const p2 = lastMatchResult[2];
        const replacement = `${funcName}(${p1}, ${p2})`;
        tempExpr = tempExpr.substring(0, start) + replacement + tempExpr.substring(end);
        count++;
      } else {
        break;
      }
    }
    return tempExpr;
  }
  evaluationCode = replaceBinaryOp(evaluationCode, "↔", "Equiv");
  evaluationCode = replaceBinaryOp(evaluationCode, "→", "Implies");
  evaluationCode = evaluationCode.replace(/∧/g, "&&").replace(/∨/g, "||").replace(/¬/g, "!");
  evaluationCode = evaluationCode.replace(/[()]/g, match => match === "(" ? "(" : ")");
  const totalRows = 1 << numVariables;
  let allResultsAreValid = true;
  for (let i = totalRows - 1; i >= 0; i--) {
    const row = document.createElement("tr");
    let variableAssignments = {};
    for (let j = 0; j < numVariables; j++) {
      const varName = variables[numVariables - 1 - j];
      const isTrue = !!(i >> j & 1);
      variableAssignments[varName] = isTrue;
      const cell = document.createElement("td");
      cell.textContent = toArabicBool(isTrue);
      row.appendChild(cell);
    }
    let finalResult = null;
    try {
      const paramNames = [...variables, "Implies", "Equiv"];
      const paramValues = [...variables.map(v => variableAssignments[v]), Implies, Equiv];
      const evaluator = new Function(...paramNames, `return ${evaluationCode};`);
      finalResult = evaluator(...paramValues);
    } catch (e) {
      allResultsAreValid = false;
      console.error(translateLegacyRuntime("legacy.05ba0a139b2df962"), e);
      displayMessage(translateLegacyRuntime(`خطأ في العبارة: ${e.message}. تأكد من استخدام الأقواس بشكل صحيح، وأن العبارة لا تحتوي إلا على المتغيرات المُحددة والعمليات المنطقية.`, "legacy.2bbe6018d969d947", "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0639\u0628\u0627\u0631\u0629: ${e.message}. \u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0642\u0648\u0627\u0633 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D\u060C \u0648\u0623\u0646 \u0627\u0644\u0639\u0628\u0627\u0631\u0629 \u0644\u0627 \u062A\u062D\u062A\u0648\u064A \u0625\u0644\u0627 \u0639\u0644\u0649 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u064F\u062D\u062F\u062F\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629."), "error");
      if (tableEmpty) tableEmpty.classList.remove("hidden");
      break;
    }
    const resultCell = document.createElement("td");
    resultCell.textContent = toArabicBool(finalResult);
    resultCell.classList.add(finalResult ? "bg-green-100/50" : "bg-red-100/50", "font-bold", "text-lg", "text-center");
    row.appendChild(resultCell);
    tableBody.appendChild(row);
  }
  if (allResultsAreValid) {
    displayMessage(translateLegacyRuntime(`تم توليد جدول الصواب والخطأ بنجاح للعبارة: ${expression}`, "legacy.4a6d4537eb9b339f", "\u062A\u0645 \u062A\u0648\u0644\u064A\u062F \u062C\u062F\u0648\u0644 \u0627\u0644\u0635\u0648\u0627\u0628 \u0648\u0627\u0644\u062E\u0637\u0623 \u0628\u0646\u062C\u0627\u062D \u0644\u0644\u0639\u0628\u0627\u0631\u0629: ${expression}"), "success");
  }
}
expressionInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    generateTruthTable();
  }
});
Object.assign(window, {
  toArabicBool: toArabicBool,
  displayMessage: displayMessage,
  generateTruthTable: generateTruthTable
});
export { toArabicBool, displayMessage, generateTruthTable };
