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
let a;

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
        pushNumber(numberBtns[i].value);
        if ("+-/*".includes(calculation[calculation.length - 2])) {
            calculatorScreen.value = numberBtns[i].value;
        } else {
            calculatorScreen.value += numberBtns[i].value;
        }
    });
}

//LISTENER: loops through the operator buttons nodelist (.operator) and attaches 'click' eventlistener to each node
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        pushOperator(operatorBtns[i].value);
        calculatorScreen.value = operatorBtns[i].value;
        calculate();
    });
}

//LISTENER: attaches a click eventlistener to the equals button
equalsBtn.addEventListener("click", () => {
    calculation.push("=");
    calculate(equalsBtn.value);
});

//LISTENER: attaches click event listener to the clear button
clearBtn.addEventListener("click", () => {
    calculation = [];
    a = undefined;
    calculatorScreen.value = "";
});

//LISTENER: attaches click event listener to decimal button
decimalBtn.addEventListener("click", () => {
    calculation.push(".");
    calculatorScreen.value += ".";
});

//LISTENER: attaches click event listener to decimal button
percentageBtn.addEventListener("click", () => {
    let splitNumbers = calculation
        .join("")
        .split(/\+|-|\*|\//g)
        .filter((x) => !!x);
    addPercentNum = splitNumbers.pop();
    for (let i = calculation.length - 1; i >= 0; i--) {
        if (String(addPercentNum).includes(calculation[i])) {
            calculation.splice(i, 1);
        }
    }
    calculation.push(addPercentNum / 100);
    calculatorScreen.value = addPercentNum / 100;
});

//addition function
function add(num1, num2) {
    calculation = calculation.slice(-1);
    return Number(num1) + Number(num2);
}

//subtraction function
function subtract(num1, num2) {
    calculation = calculation.slice(-1);
    return Number(num1) - Number(num2);
}

//multiplication function
function multiply(num1, num2) {
    calculation = calculation.slice(-1);
    return Number(num1) * Number(num2);
}

//division function
function divide(num1, num2) {
    calculation = calculation.slice(-1);
    return Number(num1) / Number(num2);
}

//alerts the user when the equals sign is 'clicked'; Nested inside a 'click' eventlistener
function calculate(equalsElem = null) {
    //for looping checking if '=' was added to calculation array
    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] === "=") {
            alert(`The ${equalsElem} sign was pressed`);
            calculation.pop();
        }
    }

    //regex to breakdown calculation array into two separate arrays: numbers & operators
    let splitNumbers = calculation
        .join("")
        .split(/\+|-|\*|\//g)
        .filter((x) => !!x);
    let splitOperator = calculation
        .join("")
        .split(/[0-9\.]+/)
        .filter((x) => !!x);

    //checking to see if calculate() needs to set the very first number entered; after first number is entered, the rest of the operators will be between an accumulator variable, the newest operator selected and a second number
    if (a === undefined) {
        a = Number(splitNumbers[0]);
        splitNumbers = [];
        //This loop is going to take off the first number recieved -- loop needed for multi-digit numbers
        for (let i = calculation.length - 1; i >= 0; i--) {
            if ("0123456789.".includes(calculation[i])) {
                calculation.splice(i, 1);
            }
        }
        return;
    } else {
        //switch case for finding which operator function to fire
        switch (splitOperator[0]) {
            case "+":
                a = add(a, splitNumbers[0]);
                calculatorScreen.value = a;
                break;
            case "-":
                a = subtract(a, splitNumbers[0]);
                calculatorScreen.value = a;
                break;

            case "*":
                a = multiply(a, splitNumbers[0]);
                calculatorScreen.value = a;
                break;

            case "/":
                a = divide(a, splitNumbers[0]);
                calculatorScreen.value = a;
                break;
        }
    }
}
