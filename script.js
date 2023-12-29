
let displayResult = (result)=> displayBot.textContent = result;

const add=(a,b)=>{
    let result = a + b;
    displayResult(result);
    return result; 
};

const subsctract = (a,b)=> {
    let result = a-b;
    displayResult(result);
    return a-b;
};

const multiply = (a,b)=>{
    let result = a*b;
    displayResult(result);
    return a*b;
}

const divide = (a,b)=>{
    let result = a/b;
    displayResult(result);
    return a/b;
}


// variables for operation

let n1 ; //first number on the operation
let operator ; //if its plus, minus, etc.
let n2 ; //second number on the operation

// const operate = ()=>{
// if(operator == '+') return add(n1,n2)
// }

const operate = ()=>{
return (operator == '+') ? add(n1,n2)
: operator == '-' ? subsctract(n1,n2)
: operator == '*' ? multiply(n1,n2)
: operator == '/' ? divide(n1,n2)
: 'n/a'
}


let displayPrevious = [n1,operator,n2];
// let displayValue;


// DOM
const displayBot = document.getElementById('display-bot');
const displayTop = document.getElementById('display-top');



let displayNumber = [];
let displayNumberIsResult = false; //begins false to display input


function eraseDisplay(){
    if (displayNumberIsResult === true){
        displayNumber = [];
        displayNumberIsResult = false;
    }
}

displayBot.textContent = displayNumber;






const numbers = [];

for (let i = 0; i <= 9; i++) {
  const num = document.getElementById(`num${i}`);
  numbers.push(num);
}



numbers.forEach((num) => {
    num.addEventListener('click', (event)=>{
    eraseDisplay();

    const clickedBtn = event.target.textContent;

    displayNumber.push(clickedBtn);
    displayBot.textContent = displayNumber.join('')


});
});

 
/// probably later will have to do something to move displayNumber to become 'n1' once operator is clicked
// and then it has to erase the 'display number'
// in the top display  iwill hae to o something like `${n1} ${operator} ${n2}`


// Buttons to call actions of operators

let firstInput = true;


const plus = document.getElementById('plusSymbol');
plus.addEventListener('click', (event)=>{
    
    if(firstInput === true){
        n1= parseFloat(displayNumber.join(''));
        operator = '+'
        displayTop.textContent = `${n1} ${operator}`
        displayNumberIsResult = true;
        firstInput = false;
        displayNumber = [];
        displayBot.textContent =''
    };

    // elseif(displayNumberIsResult === true){

    // }


});


const equals = document.getElementById('equalsSymbol');
equals.addEventListener('click', (event)=>{
    // if(displayNumberIsResult === false){
    //     return;
    // }
    if(firstInput === false){
        n2=parseFloat(displayNumber.join(''));
        displayTop.textContent = `${n1} ${operator} ${n2}`; 

        operator === '+' ? (displayBot.textContent = add(n1,n2))
        : operator === '-' ? (displayBot.textContent = subsctract(n1,n2))
        : operator === '*' ? (displayBot.textContent = multiply(n1,n2))
        :operator === '/' ? (display.Bot.textContent = divide(n1,n2))
        : 'undefined';

        n1= parseFloat(displayBot.textContent);
        n2= '';
        displayNumberIsResult = true;
        displayNumber=[];

    }

})









