let myNAme="Prabh"

let myHeros=["thor", "spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.prabh= function(){// prabh di jhga koi v name de skde baki same 
    console.log("Prabh is present in all object");
}// ise kya hua ki ye property sab k pass chali gayi kyu ki array function string sab object ko dekh hi jate hiai 

heroPower.prabh()
myHeros.prabh()
// heirachry: (array, function, string )   ----> OBJECT  ------> NULL
Array.prototype.heyPrabh=function(){
    console.log(`Prabh says hello`)
}
myHeros.heyPrabh() 
// heroPower.heyPrabh()// gives error because ye power bss array ko di hai 

// prototyple inheritance

const user={
    name:"PRabh",
    mail:"prabh@gmail.com",
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport// jida uper prototype c oda same ede ch eda karde te niche ik hor tarika hai 
    // te is nal e teachingupport di sari property lai lavage
}

Teacher.__proto__=user

// modern Syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)// is vich TeachingSupport Teacher di property lai lavage ga te e same hai bss new syntax hai

