// singleton object
const userSingleton= Object();

// non-singleton:
const user={};

user.id="123abs"
user.name="Sam"
user.isLoggedIn=false
// console.log(user);// output: { id: '123abs', name: 'Sam', isLoggedIn: false }

const regularUser={
    email:"pr@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Prabhjot",
            lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};

const obj3={obj1, obj2}
console.log(obj3)// object te ander object aa jana jida array nal hoya c 
// output/:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const objConcatenate=Object.assign(obj1, obj2)
const objConcatenate2=Object.assign({},obj1, obj2) // e prefer karo 
console.log(objConcatenate) //output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(objConcatenate2) // same output but is tarike nal dena jada vdia hunda
// sab to phela vala target hunda baki sourcce hunde 
// {} e lende te oo hunda ki oo target ch mena s{} ede ch add ho jande j enu apa nhi likhde jhera obj hou ode ch sari values add\
// add ho jania 


const obj4={...obj1, ...obj2};
console.log(obj4)// best and latest way 


const users=[
    {name:"dds",
        email:"dmd@mskm"

    },
    {name:"ddscdc",
        email:"ecn@ds"
    }

]

users[1].email
console.log(user)

console.log(Object.keys(user))// output:[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user))// output: [ '123abs', 'Sam', false ]
console.log(Object.entries(user))// output: [ [ 'id', '123abs' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] 

console.log(user.hasOwnProperty('id'));// e dsda hai ki ode kol e key haigi hai k nhi 