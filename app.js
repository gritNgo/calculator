let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = '0';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {return add(firstNumber, secondNumber)}
    else if (operator === "-") {return subtract(firstNumber, secondNumber)}
    else if (operator === "*") {return multiply(firstNumber, secondNumber)}
    else if (operator === "/") {return divide(firstNumber, secondNumber)}
};

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.innerText += button.innerText;
        displayValue = display.innerText;
        console.log(displayValue)
    })
})