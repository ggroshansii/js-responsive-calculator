
//selecting specific groups of buttons (numbers, operators)
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal-sign");

//array dynamically holding the current expression
let calculation = []; 

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
    })
}

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
function division(num1, num2) {
    return Number(num1) / Number(num2);
}


//alerts the user when the equals sign is 'clicked'; Nested inside a 'click' eventlistener
function calculate(equalsElem) { 
    //alert(`The ${equalsElem} sign was pressed`);

//console.log(str.split(/\+|-|\*|\//g));
}

//attaches a click eventlistener to the equalsBtn
equalsBtn.addEventListener('click', () => {
    calculate(equalsBtn.value);
});