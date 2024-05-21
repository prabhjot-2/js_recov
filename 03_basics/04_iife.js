//Immediately INvoked Function Expressions(IIFE)
//global scope k pollution se problem hoti hai us global scope k variable and pollution ko hatne k liye iifi ka use karte hai 
//or ye function usi vakt run ho jata hai apne aap

(function learn(){
    // named IIFE
    console.log(`DB Connected`);
})();
// jado iife decalre karn ate semicolon lagana hai nhi te onu pta nhi llgda ki kithe khtm huna te oo bakia layi errro davega
((name)=>{
    console.log(`DB Connected Two ${name}`);
})("Prabh");
//e v iife functions hai arrow func de nal declare kita

