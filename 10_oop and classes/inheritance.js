class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{// extends keyword ohde sare method inherit kar lainda 
    constructor(username, email, password){
        super(username)// e apne aap ehde parent nu bol k username set kra davega
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }

   
}

const one = new Teacher("one", "one@gmail.com","123")

one.addCourse()

// if we cretae one from user then they don't have access to add course 
