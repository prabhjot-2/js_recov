// const marvel=["thor", "ironman","spiderman"]
// const dc=["superman","flash","batman"]
// marvel.push(dc)// it converts it to array fo array 

// console.log(marvel);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allhero=marvel.concat(dc);
// console.log(allhero)//it gives both array merge into one array and gives ouput in new array

// const allNewHero=[...marvel, ...dc]//it is callled spread method 
// // ... is de nal oo array de element sare alag oo jande te last ch ik array ch combine ho jande 
// //it can take more than 2 values also like ...marvel, ...dc, ...allhero

// console.log(allNewHero);

// const another_array=[1,2,3,[4,5,6],7,[5,3[5,6]]]
// const real_anaother_array=another_array.flat(Infinity)//Infinity is layi dita kyu ki e vekhda kini depth tak ja skda 
// //infinity den nal oo aape dekh lainda 

// console.log(real_anaother_array)//e jo array de ander array haige  c sarea de elements nu bhar kad K
// //saria de elemenst nu add kar k 1 array ch converyt kar dinda

console.log(Array.isArray("Prabhjot"));// it check that given input is array or not gives true or false
// it gives false
console.log(Array.from("Prabhjot"));// it converts it into array from
//it gives output: [
//   'P', 'r', 'a',
//   'b', 'h', 'j',
//   'o', 't'
// ]

console.log(Array.from({name:"Prabhjot"}));// interesting interview ch puhya janda
// it gives output: []  becaues it is not able to convert it into array because it not understand ki kinu kra conert key nu ja value nu 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3))
// it also convert it into array from set of elements

