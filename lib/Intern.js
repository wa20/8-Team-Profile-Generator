const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, yearEnd, gitHubLink) {
        super(id, name, email);
        this.yearEnd = yearEnd;
        this.gitHubLink = gitHubLink
        
    }

    getRole(){
        return "Intern"
    }

    getIcon(){
        return "fas fa-chess-pawn"
    }

    getYearJoined(){
        return this.yearJoined
    }

    getGithubLink(){
        return this.gitHubLink
    }


}

module.exports = Intern