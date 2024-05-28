const promiseOne=new Promise(function(resolve, reject){
    // Do async task
    //  DB calls, Cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise Consumed")
})// e function  .then  odo hi run hovega jado apa uper resolve likhde e 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})// 2 way to create a promise without using const


const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"prabh", email:"prabh@example.com"})
    }, 1000)
})// ede ch ki j tuhada promise jida koi kito koi data lai k aya te oo data use kida karna oo dsya onu asi resolve de vich de k use kar skde resolve vich kuj v dio jive array , objects etc..
// te onu agge then function nal use kar lo

promiseThree.then(function(user){
    console.log(user);// output: { username: 'Chai', email: 'chai@example.com' }
})


const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"prabh", password:"1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)

})// e function jida koi web request kari ja file req kari j oo aaa gayi ja reject ho gayi ode layi function likhya mtlb oda da ralda milda

// callback HELL
promiseFour.then((user)=>{
    console.log(user)
    return user.username// e jhera return laya e return jheda thale apa then lagaya chaining nal onu value javegi
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is resolved or rejected")
}) // or ye jab DB se data ata hai tab bhut use hota hai syntax 



const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"prabhhh", password:"123432"})
        }
        else{
            reject('ERROR: Somethingggg went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response= await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}// other way to write above code

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response=await fetch('https://api.github.com/users/prabhjot-2')

//     const data=await response.json()// agar ethe await nhi lainde te oo chalna nhi c kyu ki ooo bbhut time le reha c te is kark v kari vari code nhi chalde te lagda hunda ki asi code galat likhya

//     console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/prabhjot-2')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))// diffeerent way to write above code 
// ede ch ki hai sanu pta ik to baad hi dusra run karna hai te wait karda o te chal janda 
// ik chiz fass gayi mere code ch e upar vale di console vich last te ayi value par kayia ch phele ayi te bakia di baad ch ayi bakia value rest of code e v ik chiz hai jo agle file ch dssi gayi hai 