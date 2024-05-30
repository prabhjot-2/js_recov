class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){// static nal ki hoya jhera e function haiga oo bakia nu call nhi hovega  
        return '123'
    }
}

const prabh=new User("prabh")

// console.log(prabh.createId()) static keyword de karan oo call nhi hon dya

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const one= new Teacher("one", "one.com")
// console.log(one.createId());// same j eda v call krage te same o call nhi hon dvega fer to error ave 
//  static function odo use hunda jado tuc kisi databse ch kisi nu koi Unique id deni hove 
