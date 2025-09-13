let num1 = "";
let operator = "";
let num2 = "";

function add(a, b) {
    return result = a + b;
}

function subtract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    return result = a / b;
}

function operate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        if (num2 == "0") {
            return "Error";
        }
        return divide(num1, num2);
    }
}

const display = document.querySelector(".display");
let displayContent = "0";

function updateDisplay(value) {
    const nums = "01234567890";
    const operators = "+-*/"
    
    if (nums.includes(value)) {
        if (operator === "") {
            num1 += value;
        } else {
            num2 += value;
        }
        displayContent += value
    } else if (operators.includes(value) && num1 !== "") {
        if (operator === "") {
            operator = value;
            displayContent += value;
        }
    } else if (value === "=") {
        const result = operate(Number(num1), operator, Number(num2));
        if (result != null) {
            displayContent = result.toString();
            num1 = result.toString();
            num2 = "";
            operator = "";
            clearDisplay();
        }
    }

    display.textContent = displayContent;
}

function clearDisplay() {
    displayContent = "";
    display.textContent = displayContent;
}

const buttons = document.querySelectorAll(".num") 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.innerText);
    })
})

const clear = document.querySelector("#clear");

clear.addEventListener("click", clearDisplay);

const equal = document.querySelector("#equals");

equal.addEventListener("click", () => {
    updateDisplay("=");
})