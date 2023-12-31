
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


// This is so display numbers are deleted like with real calculators
function eraseDisplay(){
   
    if (displayNumberIsResult === true){
        displayTop.textContent = `${n1} ${operator}`
        // displayNumber.join('');
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

const period = document.getElementById('period');
period.addEventListener('click',(event)=>{
    
    if(displayNumber[displayNumber.length -1] === '.'){
        return;
    }

    else{

        eraseDisplay();
        const clickedBtn = event.target.textContent;
        
        displayNumber.push(clickedBtn);
        displayBot.textContent = displayNumber.join('')
    }

})


numbers.forEach((num) => {
    num.addEventListener('click', (event)=>{
    eraseDisplay();

    const clickedBtn = event.target.textContent;

    displayNumber.push(clickedBtn);
    displayBot.textContent = displayNumber.join('')



});
});



// Buttons to call actions of operators

let firstInput = true;
previousIsResult=false;




// ### Adding button ### 

const plus = document.getElementById('plusSymbol');
plus.addEventListener('click', (event)=>{
    
    if(operator === '+'){
        return;
    }
// && noOperationYet ===true
    else if(operator!='' && displayNumber.length=== 0){
        operator = '+';
        displayTop.textContent = `${n1} ${operator}`;
        displayBot.textContent=''; 

    }

    else if(firstInput === false && n2===''){
        operator = '+'
        displayTop.textContent = `${n1} ${operator} ${n2}`;
        displayBot.textContent='';
        previousIsResult = false; //testing

         console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult} else if +`)
    }

    // problem to solve 2 - +
    else if(firstInput === true && previousIsResult===false){
        n1= parseFloat(displayNumber.join(''));
        operator = '+'
        displayTop.textContent = `${n1} ${operator}`
        displayNumberIsResult = true; 
        firstInput = false;
        displayNumber = [];
        displayBot.textContent ='' 
        console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult} else if + 2nd`)
    }
    
    else if(firstInput === false && n2!=''){
        // n2 = parseFloat(displayBot.textContent);
        operator='+';
        // displayBot.textContent = add(n1, n2);
        displayTop.textContent = `${n1} ${operator}`;
        previousIsResult=false;
        // n1 = parseFloat(displayBot.textContent);
        // n2 = '';
        // displayNumber = [];

        previousIsResult=false; // testing
        console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult} if + 3rd`)
    }
    ;




});

// ### Equals Botton ###

const equals = document.getElementById('equalsSymbol');

equals.addEventListener('click', (event)=>{

    if(firstInput === true){
        return;
    }
    else if(operator!='' && displayNumber.length=== 0){
        return
    }

    else if((firstInput === false && previousIsResult===false)){
        n2=parseFloat(displayNumber.join(''));
        displayTop.textContent = `${n1} ${operator} ${n2}`; 

        operator === '+' ? (displayBot.textContent = add(n1,n2))
        : operator === '-' ? (displayBot.textContent = subsctract(n1,n2))
        : operator === '*' ? (displayBot.textContent = multiply(n1,n2))
        :operator === '/' ? (displayBot.textContent = divide(n1,n2))
        : 'undefined';

        n1= parseFloat(displayBot.textContent);
        n2= '';
        displayNumberIsResult = true;
        displayNumber=[];
        operator='';
        previousIsResult = true;
        console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult}`)
        
    }

})


// ## Substraction button ###

const substract = document.getElementById('substractSymbol');

substract.addEventListener('click', (event)=>{


    if (operator === '-'){
        return;
    }
    //&& noOperationYet ===true 
   else if(operator!='' &&  displayNumber.length=== 0){
        operator = '-';
        displayTop.textContent = `${n1} ${operator}`;
        displayBot.textContent=''; 
        
    }

    else if(firstInput===true && previousIsResult === false){
        operator = '-';
        console.log(operator)
        n1=parseFloat(displayBot.textContent);
        displayTop.textContent = `${n1} ${operator}`;
        displayNumber = [];
        firstInput = false; 
        console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult} if -`)
    }

    else if(firstInput === false && n2=== '' ){
        operator = '-';
        console.log(operator)
        displayTop.textContent = `${n1} ${operator}`
        previousIsResult = false
        console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult} if - 2nd`)
    }

    else if(firstInput ===false && n2!=''){
        operator = '-';
        n2 = parseFloat(displayBot.textContent);
        // displayBot.textContent = subsctract(n1,n2);
        displayTop.textContent = `${n1} ${operator}`;
        n2=''
        previousIsResult = false;
        console.log(`n1= ${n1} , n2= ${n2}, operator= ${operator}, firstInput = ${firstInput}, previousIsResult= ${previousIsResult} if - 3rd`)
    }
})


const multiplication = document.getElementById('multSymbol');
multiplication.addEventListener('click', (event)=>{

    if (operator === '*'){
        return;
    }

    else if(operator != '' && displayNumber.length === 0){
        operator = '*';
        displayTop.textContent=`${n1} ${operator}`;
        displayBot.textContent='';  
    }
    else if (firstInput===true && previousIsResult === false){
        operator = '*';
        n1=parseFloat(displayBot.textContent);
        displayTop.textContent = `${n1} ${operator}`;
        displayNumber=[]
        firstInput= false;
        
   }
    else if (firstInput===false && n2===''){
        operator='*';
        
        displayTop.textContent = `${n1} ${operator} ${n2}`;
        // displayBot.textContent = multiply(n1,n2);
        previousIsResult=false;
    }

    else if(firstInput===false && n2!=''){
        return
    }

})


const division = document.getElementById('divSymbol')

division.addEventListener('click', (event)=>{
if (operator === '/'){
    return;
}

else if(operator != '' && displayNumber.length === 0){
    operator = '/';
    displayTop.textContent=`${n1} ${operator}`;
    displayBot.textContent='';  
}
else if (firstInput===true && previousIsResult === false){
    operator = '/';
    n1=parseFloat(displayBot.textContent);
    displayTop.textContent = `${n1} ${operator}`;
    displayNumber=[]
    firstInput= false;
    
}
else if (firstInput===false && n2===''){
    operator='/';
    
    displayTop.textContent = `${n1} ${operator} ${n2}`;
    // displayBot.textContent = multiply(n1,n2);
    previousIsResult=false;
}

else if(firstInput===false && n2!=''){
    return
}

})





//2/4+6

const backspace = document.getElementById('backspace') ;
console.log(backspace)


backspace.addEventListener('click',(event)=>{
    displayNumber.pop();
    displayBot.textContent = displayNumber.join();
})


const clear = document.getElementById('clear');
console.log(clear)

clear.addEventListener('click',(event)=>{
    displayNumber=[]
    n1='';
    n2='';
    operator='';
    firstInput = true;
previousIsResult=false;
displayBot.textContent = ''
displayTop.textContent = ''
})