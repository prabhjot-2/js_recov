//  for of

// ["","", ""]
// [{}, {}, {}]

const arr=[1,2,3,4,5]

// for (const iterator of object) {
    
// } basic syntax ithe object da matlb kis chiz te loop lagana hai 


for (const num of arr) {
    // console.log(num);
} 

const greetings="Hello World";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// MAPS 
const map=new Map();// ide vich uniwue key hovegi te jis order ch kita ohi order nal return hov=n ge

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

console.log(map);
// Map(3) {
//     'IN' => 'Indiaa',
//     'USA' => 'United State of America',
//     'Fr' => 'France'
//   }

for (const key of map) {
    console.log(key);   
    // ["IN", "India"][("USA", "United State of America")][("Fr", "France")];    
}
//  agar alag alag likhna hunda ona nu te 
// destructor kardo
for (const [key,value] of map) {
  console.log(key, ":-", value);
  //     IN :- India
  // USA :- United State of America
  // Fr :- France

//   above same is not suitable for object to print value or using in objects for loops
}

const MyObject={
    game1: "jo",
    game2:"jj"
}
for (const [key,value] of MyObject) {
    console.log(key, ":-", value);// gives errror as mentioned below for object different loops are there
    // or (const [key,value] of MyObject) {
        // ^

        // TypeError: MyObject is not iterable
}