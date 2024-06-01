const descripter= Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)// ehde vich writable karke property andi jhedi false hegu mtlb oo posiible hai value chnage ho skdi par javascript de backend ch eda de checks rakhe ki onu chnage karna bhut mushkhil hai 


const one={
    name: "name",
    price: 230,
    isAvailable: true,

    order: function(){
        console.log("ordered");
    }
}

console.log(Object.getOwnPropertyDescriptor(one, "name"))

Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(one, "name"))


for(let [key,value] of Object.entries(chai)){// agar Object.entries(chai) e na likhde te sidha chai likhde te error ana c kyuki oo iterbale nhi haiga is liye e likhya  okay 
    if(typeof value!== 'function'){// e liye layi kyuki oo function na print hove is layi lagai hai 
        //  te agar oo uper vali define property nu comment nhi krde te name oo nhi chnage hon dvega 
             console.log(`${key} : ${value}`);
    }

}