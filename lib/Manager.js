const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, yearJoined, officeNumber) {
        super(id, name, email);
        this.yearJoined = yearJoined;
        this.officeNumber = officeNumber;
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