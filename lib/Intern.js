const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, avatar, email, gitHubId, yearJoined) {
        super(id, name, avatar, email);
        this.gitHubId = gitHubId
        this.yearJoined = yearJoined;
        
    }

    getRole(){
        return "Intern"
    }

    getIcon(){
        return "fas fa-chess-pawn"
    }

    getGitHubId(){
        return this.gitHubId
    }


    getYearJoined(){
        return this.yearJoined
    }

   

}

module.exports = Intern