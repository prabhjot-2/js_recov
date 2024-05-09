const score=100;
console.log(score);

const balance=new Number(200)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1));// it is used to precision(means . to baad kine digit chahide)

const otherNumber= 30.9789
console.log(otherNumber.toPrecision(3));//e number kine digits ch ave o output dinda
// par string return karda te round off v kar dinda

const hundrends=1000000;
console.log(hundrends.toLocaleString('en-IN'));
// e onu comma la dinda te eda default US standard hai te indian stand change karn layi en-IN likh do 

// +++++++++ Maths "+++++++++++++=\

console.log(Math);
console.log(Math.abs(-4))// -ve to +ve
console.log(Math.round(4.6));// round off
console.log(Math.min(4,5,6,7,3));//gives min value
console.log(Math.max(4,5,3,5,6,7));// gives max value


console.log(Math.random);//gives randommvalue between 0.something
console.log((Math.random)*10 +1);//gives random value above 1
console.log(Math.floor(Math.random)*10 +1); //only gives integer

const min=10;
const max=20;
console.log(Math.floor(Math.random() *(max-min+1))+min);
//creates a formula to gives number between min and max

