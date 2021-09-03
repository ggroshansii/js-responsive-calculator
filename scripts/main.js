
//selecting specific groups of buttons (numbers, operators)
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal-sign");

//array dynamically holding the current expression
let calculation = []; 
let result = 0;
let splitOperator;

//alerts the user of the number that is 'clicked'; Nested inside a 'click' eventlistener
function pushNumber(numElem) {
    //alert(`You have clicked number ${numElem}`)
    calculation.push(numElem);
}

//loops through the number buttons nodelist (.number) and attaches 'click' eventlistener to each node
for (let i=0; i<numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', () => {
        pushNumber(numberBtns[i].value);
    });
}

//alerts the user of the operator that is 'clicked'; Nested inside a 'click' eventlistener
function pushOperator(operElem) {
    //alert(`You have clicked the ${operElem} operator`);
    calculation.push(operElem);
}

//loops through the operator buttons nodelist (.operator) and attaches 'click' eventlistener to each node
for (let i=0; i<operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', () => {
        pushOperator(operatorBtns[i].value);
        expressionCheck();
    })
}

//addition function
function add(num1, num2) {
    let outcome = Number(num1) + Number(num2);
    console.log("outcome", outcome);
    calculation = [];
    return result += outcome;
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

//alerts the user when the equals sign is 'clicked'; Nested inside a 'click' eventlistener
function calculate(equalsElem) { 
    //alert(`The ${equalsElem} sign was pressed`);
    let expressionString = calculation.join("");
    let splitNumbers = expressionString.split(/\+|-|\*|\//g);
    let splitOperator = expressionString.split(/[0-9]+/).slice(1,-1);
    console.log(splitNumbers[0], splitNumbers[1]);
    console.log(typeof splitNumbers[0], typeof splitNumbers[1]);

    console.log(splitOperator);
        switch(splitOperator[0]) {
            case '+':
                add(splitNumbers[0], splitNumbers[1]);
            
            case '-':
                subtract(splitNumbers[0], splitNumbers[1]);
            
            case '*':
                multiply(splitNumbers[0], splitNumbers[1]);
            
            case '/':
                divide(splitNumbers[0], splitNumbers[1]);
            
        }
    }



//attaches a click eventlistener to the equalsBtn
equalsBtn.addEventListener('click', () => {
    calculate(equalsBtn.value);
});

function expressionCheck() {
    if (calculation.length === 4 ) {

        calculate();
    }
}


console.log(result)