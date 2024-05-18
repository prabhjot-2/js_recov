// function first(){

// } syntax

function add(number1, number2){
    console.log(number1+number2);
}
add(3,4);

function add(number1, number2){
    // let res=number1+number2;
    // return res;
    return number1+number2
}

const res=add(4,5);

console.log("result:" ,res);

// jab ham function me kuch pass nhi karte to ata hai undefined
// agar ham predefined value de de  parameter me to vohi print karega jab tak null de rhe agar value pass kar diye to vo value use karega na ki predefined vali

// jab hame pta ho ki kitne parameter honge functions me 
// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(val1,val2,...num1){// j eda ho jave te first and second goes to val1, val2 rest num1
    return num1; 
}
console.log(calculateCartPrice(200,300,400,222))


const user={
    username:"Prabh",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // e dhyan rakhna paina ki key jo den daye shi de rhe k nhi 
    // nhi te condtions likhni painia 
}
handleObject(user) 