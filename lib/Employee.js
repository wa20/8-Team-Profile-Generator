class Employee {
    constructor(id, name, avatar, email){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.email = email;
    
    }

    getId(){
        return this.id
    }


    getName(){
        return this.name
    }

    getAvatar(){
        return this.avatar
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}

module.exports = Employee