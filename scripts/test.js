//selecting specific groups of buttons (numbers, operators)
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal-sign");
const calculatorScreen = document.querySelector(".calculator-screen");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");

//array dynamically holding the current expression
let calculation = [];
let a;

//alerts the user of the number that is 'clicked'; Nested inside a 'click' eventlistener
function pushNumber(numElem) {
    //alert(`You have clicked number ${numElem}`)
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
        pushNumber(numberBtns[i].value);
        calculatorScreen.value += numberBtns[i].value;
    });
}

//LISTENER: loops through the operator buttons nodelist (.operator) and attaches 'click' eventlistener to each node
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        pushOperator(operatorBtns[i].value);
        calculatorScreen.value += operatorBtns[i].value;
        calculate();
    });
}

//LISTENER: attaches a click eventlistener to the equals button
equalsBtn.addEventListener("click", () => {
    finalCalculation(equalsBtn.value);
});

//LISTENER: attaches click event listener to the clear button
clearBtn.addEventListener("click", () => {
    calculation = [];
    a = undefined; 
    calculatorScreen.value = "";
});

decimalBtn.addEventListener("click", () => {
    calculation.push(".");
    calculatorScreen.value += ".";
})


//addition function
function add(num1, num2) {
    console.log('calculation Before', calculation);
    calculation = calculation.slice(-1);
    console.log('calculation After', calculation);
    return Number(num1) + Number(num2);
}

//subtraction function
function subtract(num1, num2) {
    console.log('calculation Before', calculation);
    calculation = calculation.slice(-1);
    console.log('calculation After', calculation);
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
function calculate() {
    //alert(`The ${equalsElem} sign was pressed`);
    let splitNumbers = calculation
        .join("")
        .split(/\+|-|\*|\//g)
        .filter((x) => !!x);
    let splitOperator = calculation
        .join("")
        .split(/[0-9\.]+/)
        .filter((x) => !!x);


        console.log(calculation);
        console.log(splitNumbers);
        console.log(splitOperator);

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

function finalCalculation(equalsElem) {
    //alert(`The ${equalsElem} sign was pressed`);
    calculate();
    return console.log(a);
}
