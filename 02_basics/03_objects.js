// singleton :jab aap constructor se banate hai to vo singleton banata hai mean ski ede varga 1 hi hai 
Object.create

// jab ham literals se karte hai to singleton nhi banta
//obejct literals

// in interview they asked using symbol as a key print the value

const mySym=Symbol("key1");

const JsUser={
    name: "Prabhjot",
    [mySym]:"mykey1",//to use symbol as key define in [] brackets 
    //agar simple mySym kar k kara ge te oo thoda galat ho janda

    age:18,
    location:"Punjab",
    email:"prabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Tuesday"]
} // object declaration

console.log(JsUser.email);
console.log(JsUser["email"]);// this is good way 
//both ways used to access

console.log(JsUser[mySym]);

JsUser.email="prabh@google.com"// eda  nal koi v value nu change kar skde
//Object.freeze(JsUser);// ede nal us object di value change nhi kitia ja skdia
JsUser.email="prabh@micro.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS USer");
}

console.log(JsUser.greeting);//output: [Function (anonymous)]
console.log(JsUser.greeting())// output:Hello JS USer


JsUser.greetingTwo=function(){
    console.log(`HEllo Js USer ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
// output:
// Hello JS USer
// HEllo Js USer Prabhjot




