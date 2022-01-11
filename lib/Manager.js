const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, avatar, email, officeNumber, yearJoined) {
        super(id, name, avatar, email); 
        this.officeNumber = officeNumber;
        this.yearJoined = yearJoined;
       
        
    }

    getRole(){
        return "Manager"
    }

    getIcon(){
        return "fas fa-chess-king"
    }
    

    getOfficeNumber(){
        return this.officeNumber
    }

    getYearJoined(){
        return this.yearJoined

    }
}

module.exports = Manager