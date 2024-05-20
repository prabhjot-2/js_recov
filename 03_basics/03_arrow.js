const user={
    username:"prabh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome `);
        console.log(this);// it referrs to user object keys , mtlb ki user vich ki ki haiga
    }
}

user.welcomeMessage();


// console.log(this) e refer krda node vale varible ch te o return karda {} mtlb empty haiga o
// IMPORTANYT ehi uper vali line j browser ch run karde te windows ana c  mtlb global object window hai jado browser ch run karde
// function one(){
//     let username="prabh"
//     console.log(this.username)// edi value ani undefined mtlb e this function ander run  nhi krda only objects vich krda

// }

// one()

// const one=function(){
//     let username="Prabh"
//     console.log(this.username);// ede vich v this nhi chal reha
// }
// one();

// Arrow Functiom

const one = ()=> {
  let username = "Prabh";
  console.log(this.username); // ede vich v this nhi chalda
};
one();

// Different methods to write ARrow Functions

// const add=(num1, num2)=>{
//     return num1+num2;// explixit return 
// }
// const add=(num1, num2)=>num1+num2

// const add=(num1, num2)=>(num1+num2) //implicit return
const add=(num1, num2)=>({username:"Prabh"})/// ede tarike nal object return karde
console.log(add(3,4));

