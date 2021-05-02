const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, yearEnd, gitHubLink) {
        super(id, name, email);
        this.yearEnd = yearEnd;
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }

    getIcon(){
        return "chess king icon"
    }

    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager