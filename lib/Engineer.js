const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, yearJoined) {
        super(name, id, email, yearJoined);
        // this.officeNumber = officeNumber
    }

    getRole(){
        return "Engineer"
    }

    getIcon(){
        return "chess bishop icon"
    }

    // getyearJoined(){
        
    // }


   
}

module.exports = Engineer