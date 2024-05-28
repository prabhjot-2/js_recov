const randomColor= function(){
    const hex="0123456789ABCDEF";
    let color='#'
    for(let i=0; i<6; i++){
        color +=hex[Math.floor(Math.random()*16 )]
    }
 
    return color
}
let intervalId;
 
const startChangingColor= function(){
    if(!intervalId)// e ta check kita kyuki jado null value karde fer eda set hundi oda set nhi hundi te thoda optimise hon dya code
        intervalId=setInterval(changeBgColor, 1000);
 
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
 
const stopChangingColor= function(){
    clearInterval(intervalId)
    intervalId=null// e ta kita jo ki stop karn de oo waste na ho jan value
}
 
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
 