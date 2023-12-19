let operandOne = '';
let operator = '';
let operandTwo = '';
let displayValue = 0;

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

function operate(op, a, b) {
    if (op === "+") {return add(a, b)}
    else if (op === "-") {return subtract(a, b)}
    else if (op === "*") {return multiply(a, b)}
    else if (op === "/") {return divide(a, b)}
};

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText >= 0 || button.innerText <= 9) {
            display.innerText += button.innerText;
            displayValue = display.innerText;
            operandOne = displayValue;
            console.log(operandOne)
            
            if (button.innerText === '+' || button.innerText === '-' || 
            button.innerText === '*' || button.innerText === '/') {
                display.innerText += button.innerText;
                displayValue = display.innerText;
                operator = displayValue;
                console.log(operator)
            }
        }
    })
})