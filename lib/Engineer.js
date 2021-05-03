const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, yearEnd, gitHubLink) {
        super(id, name, email);
        this.yearEnd = yearEnd;
        this.gitHubLink = gitHubLink
        
    }

    getRole(){
        return "Engineer"
    }

    getIcon(){
        return "fas fa-chess-bishop"
    }

    getYearJoined(){
        return this.yearJoined
    }

    getGithubLink(){
        return this.gitHubLink
    }



}

module.exports = Engineer