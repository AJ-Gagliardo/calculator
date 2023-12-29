
const add=(a,b)=>{
return a + b;
};

const subsctract = (a,b)=> {
    return a-b;
};

const multiply = (a,b)=>{
    return a*b;
}

const divide = (a,b)=>{
    return a/b;
}


// variables for operation

let n1 = 1; //first number on the operation
let operator = '+'; //if its plus, minus, etc.
let n2 = 2; //second number on the operation

// const operate = ()=>{
// if(operator == '+') return add(n1,n2)
// }

const operate = ()=>{
return (operator == '+') ? add(n1,n2): 'n/a'
}