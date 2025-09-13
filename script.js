// first three empty variables
let firstNumber = "";
let operator = "";
let secondNumber = "";
// calling the display to the DOM
let display = document.querySelector("#display");
// empty variable that stores the content in the display
let displayContent = "0";
// bring all buttons into the DOM 
let buttons = document.querySelectorAll("button")
//bring the clear button into Dom 
let clear = document.querySelector("#clear");

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
    if (b === 0) {
        return "Error: Cannot divide by 0.";
    } else {
        return a / b;
    }
}

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);
    } else if (operator === "-") {
        return subtract(firstNum, secondNum);
    } else if (operator === "*") {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    }
}

function clearDisplay() {
    displayContent = "0";
    display.innerHTML = displayContent;
    firstNumber = "";
    operator = "";
    secondNumber = "";
    //set everything to empty basically
}

function populateDisplay(value) {
    let nums = "0123456789";
    let operators = "+-/*";

    if (displayContent === "0") {
        displayContent = value;
    } else {
        displayContent += value;
    }

    if (nums.includes(value)) {
        //if theres no operator yet add it to firstNumber
        if (operator === "") {
            firstNumber += value;
        } else {
            //if there is an operator add it to secondNumber
            secondNumber += value;
        }

    } else if(operators.includes(value)) {
        operator = value

    } else if (value === "=") {
        result = operate(Number(firstNumber), operator, Number(secondNumber));
        displayContent = result;
        firstNumber = String(result);
        secondNumber = "";
        operator = "";
    }

    display.innerHTML = displayContent;
}

//add event listeners to all the buttons to put them in the display
buttons.forEach(button => {
    button.addEventListener("click", () => {
        populateDisplay(button.innerHTML);
    })
});

//add another event listener specifically to the clear button to make it clear everything
clear.addEventListener("click", () => {
    clearDisplay();
})