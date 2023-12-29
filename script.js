
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



let displayNumber = [22];
let displayNumberIsResult = false;
// function eraseDisplay(){

// }

displayBot.textContent = displayNumber;
// i will probably have to create a variable that turns ON/Off
// to see if its a result or not, if its a result, delete it when
// i press a button, if its not, then just keep adding number

const num1= document.getElementById('num1');

num1.addEventListener('click', ()=>{
    if (displayNumberIsResult === true){
        displayNumber = [];
        displayNumberIsResult = false;
    }
    displayNumber.push(1);
    displayBot.textContent = displayNumber.join('');
}) 
    
 









