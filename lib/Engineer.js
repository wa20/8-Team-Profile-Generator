const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email,gitHubLink, yearJoined ) {
        super(id, name, email);
        this.gitHubLink = gitHubLink;
        this.yearJoined = yearJoined;
        
        
    }

    getRole(){
        return "Engineer"
    }

    getIcon(){
        return "fas fa-chess-bishop"
    }

    getGithubLink(){
        return this.gitHubLink
    }

    getYearJoined(){
        return this.yearJoined
    }


}

module.exports = Engineer