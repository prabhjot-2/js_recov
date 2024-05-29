// javascript ka behaviour hai prototyping behaviour (mtlb agr usko koi chiz nhi mil rahi to vo upar ja kar dekhti rehti hai jab tak null na mil jaye)
// new this classes and prototyple inheritance bhi ise se aa rha hai prototype se

// javascript me har kuch objects hai jaise arrays, string and function bhi object bhi hai 
// function function bhi hai  function k ander ki functionality hai vo function ki tra kam kardi hai baki onu asi object di tra v use karde hai 


function multipleBy5(num){
    return num*5
}

multipleBy5.power=2

console.log((multipleBy5(5))); //25
console.log(multipleBy5.power); //2 ye jaise array.sss use karte hai vaise hi function ko use kiya hai
console.log(multipleBy5.prototype);// {}


function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;// this ta lagaya kyu ki value te de nhi skde is layi te this lga k unu jhis di value chahiye di this lga do

}

createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
}

const one= new createUser("one", 89)
const two= new createUser("two", 45)

 one.printMe()
 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
