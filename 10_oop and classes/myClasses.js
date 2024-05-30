//  ES6

class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password

    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const one =new User("one", "one@email.com", "12345")

console.log(one.encryptPassword());
// behind the scenes (classes se phele kaise krte the )

function User(username, email, password){
    this.username=username
    this.email=email
    this.password=password

}

User.prototype.encryptPassword= function(){
    return `${this.password}abc` 
}

User.prototype.changeUserName= function(){
    return `${this.username.toUpperCase()}`
 
}