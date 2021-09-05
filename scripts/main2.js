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

//alerts the user of the number that is 'clicked'; Nested inside a 'click' eventlistener
function pushNumber(numElem) {
    //alert(`You have clicked number ${numElem}`);
    calculation.push(numElem);
}

//alerts the user of the operator that is 'clicked'; Nested inside a 'click' eventlistener
function pushOperator(operElem) {
    //alert(`You have clicked the ${operElem} operator`);
    calculation.push(operElem);
}

//LISTENER: loops through the number buttons nodelist (.number) and attaches 'click' eventlistener to each node
for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", () => {
        if (
            lastNumPressed !== null &&
            "0123456789".includes(calculation[calculation.length - 1])
        ) {
            pushNumber(numberBtns[i].value);
            lastNumPressed += numberBtns[i].value;
            calculatorScreen.value = lastNumPressed;
        } else {
            pushNumber(numberBtns[i].value);
            lastNumPressed = numberBtns[i].value;
            calculatorScreen.value = lastNumPressed;
        }
    });
}

//LISTENER: loops through the operator buttons nodelist (.operator) and attaches 'click' eventlistener to each node
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        pushOperator(operatorBtns[i].value);
        calculate();
        lastOpPressed = operatorBtns[i].value;
        calculatorScreen.value = lastOpPressed;
    });
}

//LISTENER: attaches a click eventlistener to the equals button
equalsBtn.addEventListener("click", () => {
    calculation.push("=");
    calculate(equalsBtn.value);
});

// //LISTENER: attaches click event listener to the clear button
// clearBtn.addEventListener("click", () => {
//     calculation = [];
//     a = undefined;
//     calculatorScreen.value = "";
// });

// //LISTENER: attaches click event listener to decimal button
// decimalBtn.addEventListener("click", () => {
//     calculation.push(".");
//     calculatorScreen.value += ".";
// });

//LISTENER: attaches click event listener to decimal button
// percentageBtn.addEventListener("click", () => {
//     let splitNumbers = calculation
//         .join("")
//         .split(/\+|-|\*|\//g)
//         .filter((x) => !!x);
//     addPercentNum = splitNumbers.pop();
//     for (let i = calculation.length - 1; i >= 0; i--) {
//         if (String(addPercentNum).includes(calculation[i])) {
//             calculation.splice(i, 1);
//         }
//     }
//     calculation.push(addPercentNum / 100);
//     calculatorScreen.value = addPercentNum / 100;
// });

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

function calculate(equalsElem = null) {
    //for looping checking if '=' was added to calculation array

    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] === "=") {
            alert(`The ${equalsElem} sign was pressed`);
            findOperator();
            calculatorScreen.value = accum;
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

function findOperator(){
    //switch case for finding which operator function to fire
    switch (lastOpPressed) {
        case "+":
            accum = add(accum, lastNumPressed);
            console.log('accum', accum);
            break;
        case "-":
            accum = subtract(accum, lastNumPressed);
            console.log('accum', accum);
            break;
        case "*":
            accum = multiply(accum, lastNumPressed);
            console.log('accum', accum);
            break;
        case "/":
            accum = divide(accum, lastNumPressed);
            console.log('accum', accum);
            break;
    }
}