const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, avatar, email, gitHubId, yearJoined ) {
        super(id, name, avatar, email);
        this.gitHubId = gitHubId;
        this.yearJoined = yearJoined;
        
        
    }

    getRole(){
        return "Engineer"
    }

    getIcon(){
        return "fas fa-chess-bishop"
    }

    getGitHubId(){
        return this.gitHubId
    }

    getYearJoined(){
        return this.yearJoined
    }


}

module.exports = Engineer