let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//kafi bar interview mw pucha jata hai

// output as follows:
// 2024-05-14T17:51:14.865Z
// Tue May 14 2024 23:21:14 GMT+0530 (India Standard Time)
// Tue May 14 2024
// 14/5/2024, 11:21:14 pm
// object

let myCreatedDate= new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());// output: Mon Jan 23 2023
// let myCreatedDate= new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());// output: 23/1/2023, 5:03:00 am


let MyTimeStamp=Date.now();

console.log(MyTimeStamp);//e sanu miliseconds ch time dida
console.log(myCreatedDate.getTime())// e date nu time ch convert kar k miliseconds ch dinda te e odo 
// use karna jado comapre karna hove time nu 
console.log(Math.floor(Date.now()/1000));// e seconds ch convert krta time nu interviw ch puchys janda 

let newDate=new Date();
console.log(newDate);

newDate.toLocaleString('default', {
    weekday:"long",
})// e customize kar dinda kis tra date chahidi