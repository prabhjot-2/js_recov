const coding=["js", "ruby", "java", "python"];

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe) // ethe bss function da name likhna ki printMe() mtlb brackets nhi lagani
// forEach has basically 3 params access like ( forEach(item , index, array))

coding.forEach((item,index, arr)=>{
    console.log(item , index, arr);
    // js 0 [ 'js', 'ruby', 'java', 'python' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python' ]
    // java 2 [ 'js', 'ruby', 'java', 'python' ]
    // python 3 [ 'js', 'ruby', 'java', 'python' ]
})

// // [{}, {}, {}]
const myCoding=[
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
//     js
// java
// cpp
})
