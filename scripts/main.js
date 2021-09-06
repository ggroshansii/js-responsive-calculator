//selecting specific groups of buttons (numbers, operators and other btns)
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal-sign");
const calculatorScreen = document.querySelector(".calculator-screen");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");
const percentageBtn = document.querySelector(".percent");
const plusMinusBtn = document.querySelector(".plus-minus");

//array dynamically holding the current expression
let calculation = [];
let accum = null;
let lastNumPressed = null;
let lastOpPressed = null;
let calcRunning = true;

//alerts the user of the number that is 'clicked'; Nested inside a 'click' eventlistener
function pushNumber(numElem) {
    alert(`You have clicked number ${numElem}`);
    calculation.push(numElem);
}

//alerts the user of the operator that is 'clicked'; Nested inside a 'click' eventlistener
function pushOperator(operElem) {
    alert(`You have clicked the ${operElem} operator`);
    calculation.push(operElem);
}

//LISTENER: loops through the number buttons nodelist (.number) and attaches 'click' eventlistener to each node
for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", () => {
        if (calcRunning) {
            if (
                lastNumPressed !== null &&
                ".0123456789".includes(calculation[calculation.length - 1])
            ) {
                lastNumPressed += numberBtns[i].value;
                calculatorScreen.value = lastNumPressed;
            } else {
                lastNumPressed = numberBtns[i].value;
                calculatorScreen.value = lastNumPressed;
            }
            pushNumber(numberBtns[i].value);
        }
    });
}

//LISTENER: loops through the operator buttons nodelist (.operator) and attaches 'click' eventlistener to each node
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        if (calcRunning) {
            pushOperator(operatorBtns[i].value);
            calculatorScreen.value = operatorBtns[i].value;
            calculate();
            lastOpPressed = operatorBtns[i].value;
        }
    });
}

//LISTENER: attaches a click eventlistener to the equals button
equalsBtn.addEventListener("click", () => {
    if (calcRunning) {
        calculation.push("=");
        calculate(equalsBtn.value);
    }
});

//LISTENER: attaches click event listener to the clear button
clearBtn.addEventListener("click", () => {
    calculation = [];
    accum = null;
    lastNumPressed = null;
    lastOpPressed = null;
    calcRunning = true;
    calculatorScreen.value = "";
});

// //LISTENER: attaches click event listener to decimal button
decimalBtn.addEventListener("click", () => {
    if (calcRunning) {
        calculation.push(".");
        calculatorScreen.value += ".";
        lastNumPressed += ".";
    }

});

//LISTENER: attaches click event listener to decimal button
percentageBtn.addEventListener("click", () => {
    if (calcRunning) {
        let currentNumLength = lastNumPressed.length;
        calculation.splice(
            calculation.length - currentNumLength,
            currentNumLength
        );
        lastNumPressed = String(lastNumPressed / 100);
        calculation.push(lastNumPressed.split(""));
        calculatorScreen.value = lastNumPressed;
    }
});

//LISTENER: attaches click event listener to the plus/minus button
plusMinusBtn.addEventListener("click", () => {
    if (calcRunning) {
        if (lastNumPressed.includes("-")) {
            lastNumPressed = lastNumPressed.slice(1);
            let currentNumLength = lastNumPressed.length;
            calculation.splice(
                calculation.length - currentNumLength,
                currentNumLength
            );
            calculation.push(lastNumPressed.split(""));
            calculatorScreen.value = lastNumPressed;
        } else {
            let currentNumLength = lastNumPressed.length;
            calculation.splice(
                calculation.length - currentNumLength,
                currentNumLength
            );
            lastNumPressed = "-" + lastNumPressed;
            calculation.push(lastNumPressed.split(""));
            calculatorScreen.value = lastNumPressed;
        }
    }
});

//addition function
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

//subtraction function
function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

//multiplication function
function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

//division function
function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

//calculates the accumulated variable (accum) with the next operator and number
function calculate(equalsElem = null) {
    //for looping checking if '=' was added to calculation array
    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] === "=") {
            calcRunning = false;
            alert(`The ${equalsElem} sign was pressed`);
            findOperator();
            calculatorScreen.value = accum;
            calculation = [];
            calculation.push(accum);
            return;
        }
    }
    //checking to see if calculate() needs to set the very first number entered; after first number is entered, the rest of the operators will be between an accumulator variable, the newest operator selected and a second number
    if (accum === null) {
        accum = lastNumPressed;
        console.log("accum now", accum);
        return;
    } else {
        findOperator();
    }
}

//finds value of lastOpPressed and executes corresponding operator function
function findOperator() {
    switch (lastOpPressed) {
        case "+":
            accum = add(accum, lastNumPressed);
            calculatorScreen.value = accum;
            break;
        case "-":
            accum = subtract(accum, lastNumPressed);
            calculatorScreen.value = accum;
            break;
        case "*":
            accum = multiply(accum, lastNumPressed);
            calculatorScreen.value = accum;
            break;
        case "/":
            accum = divide(accum, lastNumPressed);
            calculatorScreen.value = accum;
            break;
    }
}
