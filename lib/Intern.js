const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, gitHubLink, yearJoined, ) {
        super(id, name, email);
        this.gitHubLink = gitHubLink
        this.yearJoined = yearJoined;
        
    }

    getRole(){
        return "Intern"
    }

    getIcon(){
        return "fas fa-chess-pawn"
    }

    getGithubLink(){
        return this.gitHubLink
    }


    getYearJoined(){
        return this.yearJoined
    }

   

}

module.exports = Intern