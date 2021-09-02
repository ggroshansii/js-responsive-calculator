const numberBtns = document.querySelectorAll(".number");


function pushNumber(element) {
    alert(`You have clicked number ${element}`)
}

for (let i=0; i<numberBtns.length; i++) {
    console.log(numberBtns[i]);
    numberBtns[i].addEventListener('click', ()=> {
        pushNumber(numberBtns[i].value);
    });
}