const display = document.getElementById("display");

const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");

let currentInput = "";
let firstNumber = null;
let operator = null;
let result = null;

const allClear = document.querySelector(".allclear");
const add = document.querySelector(".addition");
const sub = document.querySelector(".subtraction");
const multiply = document.querySelector(".multiplication");
const divide = document.querySelector(".division");
const equal = document.querySelector(".equals");
const decimal = document.getElementById("decimal");

decimal.addEventListener("click", () => {
    if (!currentInput.includes(".")) {
        if (currentInput === "") currentInput = "0";
        currentInput += ".";
        display.value += ".";
    }
});

allClear.addEventListener("click", () => {
    display.value = "";
    currentInput = "";
    firstNumber = null;
    operator = null;
})

add.addEventListener("click", () => {
    if (firstNumber === null) {
        firstNumber = currentInput;
    } else if (currentInput !== "") {
        switch (operator) {
            case "+":
                firstNumber = (parseFloat(firstNumber) + parseFloat(currentInput)).toString();
                break;
            case "-":
                firstNumber = (parseFloat(firstNumber) - parseFloat(currentInput)).toString();
                break;
            case "*":
                firstNumber = (parseFloat(firstNumber) * parseFloat(currentInput)).toString();
                break;
            case "/":
                firstNumber = (parseFloat(firstNumber) / parseFloat(currentInput)).toString();
                break;
        }
    }

    operator = "+";
    display.value = firstNumber + add.textContent;
    currentInput = "";
});

sub.addEventListener("click", () => {
    if (firstNumber === null) {
        firstNumber = currentInput;
    } else if (currentInput !== "") {
        switch (operator) {
            case "+":
                firstNumber = (parseFloat(firstNumber) + parseFloat(currentInput)).toString();
                break;
            case "-":
                firstNumber = (parseFloat(firstNumber) - parseFloat(currentInput)).toString();
                break;
            case "*":
                firstNumber = (parseFloat(firstNumber) * parseFloat(currentInput)).toString();
                break;
            case "/":
                firstNumber = (parseFloat(firstNumber) / parseFloat(currentInput)).toString();
                break;
        }
    }

    operator = "-";
    display.value = firstNumber + sub.textContent;
    currentInput = "";
});

multiply.addEventListener("click", () => {
    if (firstNumber === null) {
        firstNumber = currentInput;
    } else if (currentInput !== "") {
        switch (operator) {
            case "+":
                firstNumber = (parseFloat(firstNumber) + parseFloat(currentInput)).toString();
                break;
            case "-":
                firstNumber = (parseFloat(firstNumber) - parseFloat(currentInput)).toString();
                break;
            case "*":
                firstNumber = (parseFloat(firstNumber) * parseFloat(currentInput)).toString();
                break;
            case "/":
                firstNumber = (parseFloat(firstNumber) / parseFloat(currentInput)).toString();
                break;
        }
    }

    operator = "*";
    display.value = firstNumber + multiply.textContent;
    currentInput = "";
});

divide.addEventListener("click", () => {
    if (firstNumber === null) {
        firstNumber = currentInput;
    } else if (currentInput !== "") {
        switch (operator) {
            case "+":
                firstNumber = (parseFloat(firstNumber) + parseFloat(currentInput)).toString();
                break;
            case "-":
                firstNumber = (parseFloat(firstNumber) - parseFloat(currentInput)).toString();
                break;
            case "*":
                firstNumber = (parseFloat(firstNumber) * parseFloat(currentInput)).toString();
                break;
            case "/":
                firstNumber = (parseFloat(firstNumber) / parseFloat(currentInput)).toString();
                break;
        }
    }

    operator = "/";
    display.value = firstNumber + divide.textContent;
    currentInput = "";
});


equal.addEventListener("click", () => {
    if (firstNumber !== null && currentInput !== "") {
        switch (operator) {
            case "+":
                result = parseFloat(firstNumber) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(firstNumber) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(firstNumber) * parseFloat(currentInput);
                break;
            case "/":
                result = parseFloat(firstNumber) / parseFloat(currentInput);
                break;
        }

        display.value = result;
        firstNumber = result;
        currentInput = "";
        operator = null;
    }
});

const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

numbers.forEach((numBtn, index) => {
    numBtn.addEventListener("click", () => {
        if (index === 0 && currentInput === "0") return;

        if (currentInput === "0") {
            currentInput = index.toString();
            display.value = display.value.slice(0, -1) + currentInput;
        } else {
            currentInput += index.toString();
            display.value += index.toString();
        }
    });
});