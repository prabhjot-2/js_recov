// var has global scope
// let and const has block scope
//  scope is different in node environment and in env in inscept console

function one(){
    const userName="prabh"
    function two(){
        const website="github.com"
        console.log(userName);// ehnu call ho skdi hai kyu ki child apne parent di chiz lai skda par parent apne child di nhi is tra smj skde 

    }

    // console.log(website) it gives error becuase website scope is between the two functoons and don't call outside means ki eda scope us function tak hi c 
    two();
}
one();



// Hoisting INsteresting

addone(3)  // ine error nhi dena kyu ki eda function apa declare kite te onu kite store nhi kita lekin
//add two vich v decalre kita par onu decalre is hisab nal kita ki ohdi value store kiti te onu oo vikh da nhi pya te odo run karega jado onu bbad ch call krage
function addone(num){
    return num+1
}

addtwo(4)
const addtwo= function(num){
    return num+2;
}