

//selecting specific groups of buttons (numbers, operators)
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal-sign");

//array dynamically holding the current expression
let calculation = []; 
let result = 0;
let a = 0;
let b = 0;
let splitOperator;
let splitNumbers;

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
        calculate();
    })
}

//addition function
function add(num1, num2) {
    a = Number(num1) + Number(num2);
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
function calculate() { 
    //alert(`The ${equalsElem} sign was pressed`);
    splitNumbers = calculation.join("").split(/\+|-|\*|\//g).filter(x => !!x);
    splitOperator = calculation.join("").split(/[0-9]+/).filter(x => !!x);
        console.log(calculation)
        console.log(splitNumbers);
        console.log(splitOperator);


        if (a === 0) {
            a = splitNumbers[0];
            calculation = [];
            splitNumbers = [];
            return;
        }
        console.log(calculation, splitNumbers, a);

        switch(calculation[0]) {
            case '+':
                add(a, calculation[1]);
            
            case '-':
                subtract(a, calculation[1]);
            
            case '*':
                multiply(a, calculation[1]);
            
            case '/':
                divide(a, calculation[1]);
        }
    }



//attaches a click eventlistener to the equalsBtn
equalsBtn.addEventListener('click', () => {
    finalCalculation(equalsBtn.value);
});


function finalCalculation(equalsElem) {
    //alert(`The ${equalsElem} sign was pressed`);
    calculate();
    return console.log(result);
}

console.log(result)