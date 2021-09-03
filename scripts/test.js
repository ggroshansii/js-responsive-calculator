

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
    calculation = calculation.slice(-1);  //grabbing that last operator that's essentially causing calculate() to run;
    }
//subtraction function
function subtract(num1, num2) {
    a = Number(num1) - Number(num2);
    calculation = calculation.slice(-1);
}

//multiplication function
function multiply(num1, num2) {
    a = Number(num1) * Number(num2);
    calculation = calculation.slice(-1);
}

//division function
function divide(num1, num2) {
    a = Number(num1) / Number(num2);
    calculation = calculation.slice(-1);
}

//alerts the user when the equals sign is 'clicked'; Nested inside a 'click' eventlistener
function calculate() { 
    //alert(`The ${equalsElem} sign was pressed`);
    splitNumbers = calculation.join("").split(/\+|-|\*|\//g).filter(x => !!x);
    splitOperator = calculation.join("").split(/[0-9]+/).filter(x => !!x);
        
        console.log("calc", calculation)
        console.log("sNums", splitNumbers);
        console.log("sOper", splitOperator);


        if (a === 0) {
            a = Number(splitNumbers[0]);
            splitNumbers = [];
            calculation.shift();
            console.log(a);
            return;
        } else {

            switch(splitOperator[0]) {
                case '+':
                    //splitOperator = [];
                    add(a, splitNumbers[0]);
                
                case '-':
                    //splitOperator = [];
                    subtract(a, splitNumbers[0]);
                
                case '*':
                    //splitOperator = [];
                    multiply(a, splitNumbers[0]);
                
                case '/':
                    //splitOperator = [];
                    divide(a, splitNumbers[0]);
        }
        }
    }



//attaches a click eventlistener to the equalsBtn
equalsBtn.addEventListener('click', () => {
    finalCalculation(equalsBtn.value);
});


function finalCalculation(equalsElem) {
    //alert(`The ${equalsElem} sign was pressed`);
    calculate();
    return console.log(a);
}

console.log(result)