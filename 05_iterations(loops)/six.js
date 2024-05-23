// const coding=["js", "ruby", "java", "python"];

// const values=coding.forEach((item)=>{
//     return item;
// })

// console.log(values);// kuch nhi return karda undefined dena na ki ona di values  undefined return 


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums)// [ 5, 6, 7, 8, 9, 10 ]


const newNums=myNums.filter((num)=> {
    return num>4 
})// agar curly braces use karde ho te return keyword likhna paina nhi te oo return nhi karda 
// agar curly braces nhi use karde jida uper filter fuction use kita fer oda v likh skde

console.log(newNums)