const MyObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
//for objects loop is used is FORIN


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// } basic syntax

for (const key in MyObject) {
    console.log(`${key} is shortcut for ${MyObject[key]}`);
} // it runs


// for Array

// const programming=["js", "cpp", "py", "java"]
// for (const key in object) {
//     console.log(programming[key]);
// }

// for map

// const map=new Map();

// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")

// for (const key in object) {
//     console.log(key);
//     // when runs this gives nothing empty

// }