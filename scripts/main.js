
//selecting groups of buttons (numbers, operators)
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal-sign");

let calculation = []; 

//alerts the user of the number that is 'clicked'; Nested inside a 'click' eventlistener
function pushNumber(numElem) {
    alert(`You have clicked number ${numElem}`)
}

//loops through the number buttons nodelist (.number) and attaches 'click' eventlistener to each node
for (let i=0; i<numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', () => {
        pushNumber(numberBtns[i].value);
    });
}

//alerts the user of the operator that is 'clicked'; Nested inside a 'click' eventlistener
function pushOperator(operElem) {
    alert(`You have clicked the ${operElem} operator`);
}

//loops through the operator buttons nodelist (.operator) and attaches 'click' eventlistener to each node
for (let i=0; i<operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', () => {
        pushOperator(operatorBtns[i].value);
    })
}

//alerts the user when the equals sign is 'clicked'; Nested inside a 'click' eventlistener
function calculate(equalsElem) { 
    alert(`The ${equalsElem} sign was pressed`);
}

equalBtn.addEventListener('click', () => {
    calculate(equalBtn.value);
})
