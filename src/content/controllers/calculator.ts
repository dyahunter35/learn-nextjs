// @ts-nocheck
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

function factorial(n) {
  if (n < 0) return "Error";
  if (n === 0 || n === 1) return 1;
  if (n > 170) return Infinity;
  if (!Number.isInteger(n)) return "Error";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "0";
    this.previousOperand = "";
    this.operation = undefined;
    this.isAwaitingPower = false;
  }

  delete() {
    if (
      this.currentOperand === "Error" ||
      this.currentOperand === "NaN"
    ) {
      this.clear();
    } else if (this.currentOperand.length === 1) {
      this.currentOperand = "0";
    } else {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    if (this.isAwaitingPower) {
      this.currentOperand = number.toString();
      this.isAwaitingPower = false;
    } else if (this.currentOperand === "0" && number !== ".") {
      this.currentOperand = number.toString();
    } else if (
      this.currentOperand === "Error" ||
      this.currentOperand === "NaN"
    ) {
      this.currentOperand = number.toString();
    } else {
      this.currentOperand =
        this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === "Error" || this.currentOperand === "NaN")
      return;

    if (this.currentOperand === "0" && this.previousOperand === "")
      return;

    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "0";
  }

  performFunction(func) {
    const current = parseFloat(this.currentOperand);
    if (isNaN(current) && func !== "pi" && func !== "euler") return;

    let result;
    let displayFunc = func;

    switch (func) {
      case "pi":
        result = Math.PI;
        displayFunc = "π";
        break;
      case "sqrt":
        if (current < 0) {
          result = "Error";
        } else {
          result = Math.sqrt(current);
        }
        displayFunc = `√(${current})`;
        break;
      case "sin":
        result = Math.sin(toRadians(current));
        displayFunc = `sin(${current}°)`;
        break;
      case "cos":
        result = Math.cos(toRadians(current));
        displayFunc = `cos(${current}°)`;
        break;
      case "tan":
        result = Math.tan(toRadians(current));
        displayFunc = `tan(${current}°)`;
        break;
      case "log":
        result = Math.log10(current);
        displayFunc = `log(${current})`;
        break;
      case "ln":
        result = Math.log(current);
        displayFunc = `ln(${current})`;
        break;
      case "square":
        result = current * current;
        displayFunc = `(${current})²`;
        break;
      case "power":
        this.operation = "^";
        this.previousOperand = this.currentOperand;
        this.currentOperand = "0";
        this.isAwaitingPower = true;
        return;
      case "%":
        result = current / 100;
        displayFunc = `(${current})%`;
        break;
      case "sign":
        result = current * -1;
        displayFunc = "";
        break;
      case "sinh":
        result = Math.sinh(current);
        displayFunc = `sinh(${current})`;
        break;
      case "cosh":
        result = Math.cosh(current);
        displayFunc = `cosh(${current})`;
        break;
      case "tanh":
        result = Math.tanh(current);
        displayFunc = `tanh(${current})`;
        break;
      case "asin":
        if (current < -1 || current > 1) {
          result = "Error";
        } else {
          result = toDegrees(Math.asin(current));
        }
        displayFunc = `asin(${current})`;
        break;
      case "acos":
        if (current < -1 || current > 1) {
          result = "Error";
        } else {
          result = toDegrees(Math.acos(current));
        }
        displayFunc = `acos(${current})`;
        break;
      case "atan":
        result = toDegrees(Math.atan(current));
        displayFunc = `atan(${current})`;
        break;
      case "log2":
        if (current <= 0) {
          result = "Error";
        } else {
          result = Math.log2(current);
        }
        displayFunc = `log₂(${current})`;
        break;
      case "exp10":
        result = Math.pow(10, current);
        displayFunc = `10^(${current})`;
        break;
      case "exp":
        result = Math.exp(current);
        displayFunc = `e^(${current})`;
        break;
      case "twopow":
        result = Math.pow(2, current);
        displayFunc = `2^(${current})`;
        break;
      case "cube":
        result = Math.pow(current, 3);
        displayFunc = `(${current})³`;
        break;
      case "cuberoot":
        result = Math.cbrt(current);
        displayFunc = `∛(${current})`;
        break;
      case "factorial":
        result = factorial(current);
        displayFunc = `(${current})!`;
        break;
      case "reciprocal":
        if (current === 0) {
          result = "Error";
        } else {
          result = 1 / current;
        }
        displayFunc = `1/(${current})`;
        break;
      case "abs":
        result = Math.abs(current);
        displayFunc = `|${current}|`;
        break;
      case "euler":
        result = Math.E;
        displayFunc = "e";
        break;
      default:
        return;
    }

    if (result === "Error" || isNaN(result)) {
      this.currentOperand = "Error";
    } else {
      this.currentOperand = result.toString();
    }

    if (displayFunc) {
      this.previousOperand = displayFunc;
    }
    this.operation = undefined;
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        if (current === 0) {
          this.currentOperand = "Error";
          this.previousOperand = "";
          this.operation = undefined;
          return;
        }
        computation = prev / current;
        break;
      case "^":
        computation = Math.pow(prev, current);
        break;
      default:
        return;
    }

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const parts = stringNumber.split(".");
    const integerDigits = parseFloat(parts[0]);
    const decimalDigits = parts[1];
    let integerDisplay;

    if (
      number === "Error" ||
      number === "NaN" ||
      number === "Infinity" ||
      number === "-Infinity"
    ) {
      return "خطأ";
    }

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    const currentDisplay = this.getDisplayNumber(this.currentOperand);
    this.currentOperandTextElement.innerText = currentDisplay;

    this.currentOperandTextElement.classList.remove(
      "text-5xl",
      "text-scale-4xl",
      "text-scale-3xl"
    );

    if (currentDisplay.length > 18) {
      this.currentOperandTextElement.classList.add("text-scale-3xl");
    } else if (currentDisplay.length > 12) {
      this.currentOperandTextElement.classList.add("text-scale-4xl");
    } else {
      this.currentOperandTextElement.classList.add("text-5xl");
    }

    if (this.operation != null) {
      let displayOp = this.operation;
      if (this.operation === "^") {
        displayOp = "^";
      }
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${displayOp}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const functionButtons = document.querySelectorAll("[data-function]");
const previousOperandTextElement =
  document.getElementById("previous-operand");
const currentOperandTextElement =
  document.getElementById("current-operand");

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
calculator.updateDisplay();

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.dataset.number);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  const operation = button.dataset.operation;
  button.addEventListener("click", () => {
    switch (operation) {
      case "clear":
        calculator.clear();
        break;
      case "delete":
        calculator.delete();
        break;
      case "=":
        calculator.compute();
        break;
      default:
        calculator.chooseOperation(operation);
        break;
    }
    calculator.updateDisplay();
  });
});

functionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.performFunction(button.dataset.function);
    calculator.updateDisplay();
  });
});

document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    calculator.appendNumber(e.key);
  }
  else if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  ) {
    const op = e.key === "*" ? "×" : e.key === "/" ? "÷" : e.key;
    calculator.chooseOperation(op);
  }
  else if (e.key === "=" || e.key === "Enter") {
    e.preventDefault();
    calculator.compute();
  }
  else if (e.key === "Backspace") {
    calculator.delete();
  }
  else if (e.key === "Escape") {
    calculator.clear();
  }

  calculator.updateDisplay();
});

Object.assign(window, {toRadians: toRadians, toDegrees: toDegrees, factorial: factorial});
export {toRadians, toDegrees, factorial};
