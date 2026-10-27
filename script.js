const firstInput = document.getElementById("first-number");
const secondInput = document.getElementById("second-number");
const resultElement = document.getElementById("result");
const operationButtons = document.querySelectorAll("[data-operation]");

function readNumber(input, label) {
  const value = Number(input.value);

  if (input.value.trim() === "" || !Number.isFinite(value)) {
    throw new Error(`${label} must be a valid number.`);
  }

  return value;
}

function calculate(firstNumber, secondNumber, operation) {
  if (operation === "add") {
    return firstNumber + secondNumber;
  }

  if (operation === "subtract") {
    return firstNumber - secondNumber;
  }

  if (operation === "multiply") {
    return firstNumber * secondNumber;
  }

  if (operation === "divide") {
    if (secondNumber === 0) {
      throw new Error("A number cannot be divided by zero.");
    }

    return firstNumber / secondNumber;
  }

  throw new Error("Please choose a valid operation.");
}

function showResult(message, isError = false) {
  resultElement.textContent = message;
  resultElement.classList.toggle("error", isError);
}

function handleCalculation(event) {
  try {
    const firstNumber = readNumber(firstInput, "First number");
    const secondNumber = readNumber(secondInput, "Second number");
    const answer = calculate(firstNumber, secondNumber, event.currentTarget.dataset.operation);

    showResult(`Result: ${answer}`);
  } catch (error) {
    showResult(`Error: ${error.message}`, true);
  }
}

operationButtons.forEach((button) => {
  button.addEventListener("click", handleCalculation);
});