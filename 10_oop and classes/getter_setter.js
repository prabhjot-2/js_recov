class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get password(){
        return this._password.toUpperCase()// _password is layi lagay j apa e na lagande te oo error aa jana si te value set nhi honi c 
        // ik nave variable likh k one set kar deta te oo enu hi use karega te constrcutor bss email hi set karega 

    }

    set password(value){
        this._password=value.toUpperCase()// setter ko return nhi krte 
    }
}

const prabh= new User("prabh@gmail.com", "abc")
console.log(prabh.password)