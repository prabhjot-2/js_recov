//array

//JavaScript arrays are resizeable and can contain a mix of different datatypes.
// it makes shallow copy as in other languages makes deep copy 
// means it refference to same object (copy and original)

const myArr=[0,1,2,3,4,5];
const myHeros=["superamn", "batman"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

// Array Methods

myArr.push(6)// it adds the element in the end 
myArr.pop()// it remove element from last
myArr.unshift(9)// it add the element in the starting of the array
myArr.shift()// it removes the element from the starting


console.log(myArr.includes(9))// it gives that the number 9 is present or not gives true / false
console.log(myArr.indexOf(9))// it tells about the index of the number if not present then gives -1;

const newArr=myArr.join()// it convert array into string form 

console.log(myArr);
console.log(typeof(newArr))


//slice , splice (interview)
console.log("A", myArr)
const myn1= myArr.slice(1,3)
//in this the 3 index is not included
console.log(myn1)
console.log("B", myArr)

const myn2=myArr.splice(1,3)
//in this 3 index included and it reemoves that part from array to 
//but in slice it does remove the part of that array
console.log("C", myArr)
console.log(myn2);
