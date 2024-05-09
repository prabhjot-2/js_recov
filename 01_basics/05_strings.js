const name="prabh"
//one way to decalre the string
const value=40

//console.log(name+value+"value") old method to concatenate the string

console.log(`Hello my name is ${name} and value is ${value} `)
//this is new method and easy to read it is called strinf interpoltation

const gameName=new String('Prabh-jot-Singh')
// 2 way to declare the string in this way more method are come
// and they give as a key value pair 
// console.log(gameName[0]);
// console.log(gameName.__proto__);
 
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'));
// // site: mdn we can also see over there

// const newString=gameName.substring(0,4)
// console.log(newString);// -ve value not allowed and 0 to n-1 balue print

// const anotherString= gameName.slice(-8,4);
// console.log(anotherString);//-ve value allowed

const newStringOne="   prabh  "
console.log(newStringOne.trim())// it is used to removw the white space and new lines

const url="https://prabh.com/prabh%20jot"
console.log(url.replace('%20','-'));
//e url vich jithe jithe %20 sabb nu - nal replace kar davega

console.log(url.includes('jot'));
// e check karda ji jot haiga va url ch k nhi true/false

console.log(gameName.split('-'));
// e string nu hyphen"-" de hisab nal split kar davega in array 




