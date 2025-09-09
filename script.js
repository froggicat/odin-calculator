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

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(num1, operator, num2) {
    if (operator == "+") {
        return newNum = num1 + num2;
    } else if (operator == "-") {
        return newNum = num1 - num2;
    } else if (operator == "*") {
        return newNum = num1 * num2;
    } else if (operator == "/") {
        return newNum = num1 / num2;
    }
}