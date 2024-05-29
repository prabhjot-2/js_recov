const user={
    username:"Prabh",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("goted");
        console.log(this.username)// this is layi user kita kyuki onu dsna paina ki bhar to j saman laina te this use karn apaina nh te onu pta kive lage ga khere username di gal ho rahi
        console.log(this);// current context output ch avega jo thale dssi hai
        // OUTPUT: {
        //     username: 'Prabh',
        //     loginCount: 8,
        //     singedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }

    }


}
//  this keyword jab bhi use kare te vo current context ki baat krta hai
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)// value empty ave gi is vale kuj nhi haiga agar ehi value browser de ja k print karie te window name da object avega 


function User(username, loginCount, isLogged){
    this.isLoggedis =isLogged
    this.username=username
    this.loginCount=loginCount
    return this
}

const userOne= new User("prabh", 12, true)
const userTwo= new User("abs", 12, false)// agar new nhi likhde te oo userone nu overwrite kar davega

console.log(userOne);

// jistra NEW keyword use karde ab to phela ik empty object create hunda
// constructor function new keyWord de karan call hunda
//  3 step me jhere this vale arguments oo contreuctor vale function nu chal jande
//  4 strp me vo hame milll jate baad me 
