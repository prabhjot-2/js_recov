function setUsername(username) {
    this.username=username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)// agar call nhi dende te oo ede refernece nhi deni si one te oo username v nhi ana c is layi call use karde jo onu odi refernce mil ske te oo username di value de ske 

    this.email=email
    this.password=password
}

const one=new createUser("one", "email.ccom", "123")
console.log(one);