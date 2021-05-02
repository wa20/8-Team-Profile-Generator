console.log("Create Profile");

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateProfile = require("./utils/generateProfile");

const writeFileAsync = util.promisify(fs.writeFile);

const writeToFile = (fileName, data) => {
  writeFileAsync(fileName, data);
};

const profile = [];

const generateManager = () => { //user is first prompted to input manager details for profile card
  inquirer
    .prompt([

        {
        type: "list",
        name: "Icon",
        message: "Select Manager to begin: ",
        choices: ["Manager"],
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please make choice");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Enter profile ID number: ",
        validate: function (userAnswer) {
          if (userAnswer !== typeof Number) {
            return console.log("Please enter a number");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "name",
        message: "Enter your name: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input user name");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "gitHubLink",
        message: "Enter link to your github profile: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input link to github profile");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "dateJoined",
        message: "Enter date joined mm/yyyy: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input Project Title");
          }
          return true;
        },
      },
    ]). then((data) =>{
        const managerCard = new generateProfile({ 
            id: data.id,
            icon: data.icon,
            name: data.name,
            email: data.email,
            gitHubLink: data.gitHubLink,
            dateJoined: data.dataJoined   
        })
            profile.push(managerCard);

    })
    
};


const generateEngineer = () => {
    inquirer.prompt([ {
        type: "list",
        name: "Icon",
        message: "Select Enginer to begin or Done to end: ",
        choices: ["Engineer","Done"],
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please make choice");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Enter profile ID number: ",
        validate: function (userAnswer) {
          if (userAnswer !== typeof Number) {
            return console.log("Please enter a number");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "name",
        message: "Enter your name: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input user name");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "gitHubLink",
        message: "Enter link to your github profile: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input link to github profile");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "dateJoined",
        message: "Enter date joined mm/yyyy: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input Project Title");
          }
          return true;
        },
      },
        
    ]). then((data) =>{
        const engineerCard = new generateProfile({ 
            id: data.id,
            icon: data.icon,
            name: data.name,
            email: data.email,
            gitHubLink: data.gitHubLink,
            dateJoined: data.dataJoined   
        })
            profile.push(engineerCard);
    })

}

const generateIntern = () => {
    inquirer.prompt([ {
        type: "list",
        name: "Icon",
        message: "Select Enginer to begin or Done to end: ",
        choices: ["Intern","Done"],
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please make choice");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Enter profile ID number: ",
        validate: function (userAnswer) {
          if (userAnswer !== typeof Number) {
            return console.log("Please enter a number");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "name",
        message: "Enter your name: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input user name");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "gitHubLink",
        message: "Enter link to your github profile: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input link to github profile");
          }
          return true;
        },
      },

      {
        type: "input",
        name: "dateJoined",
        message: "Enter date joined mm/yyyy: ",
        validate: function (userAnswer) {
          if (userAnswer === "") {
            return console.log("Please input Project Title");
          }
          return true;
        },
      },
        
    ]). then((data) =>{
        const engineerCard = new generateProfile({ 
            id: data.id,
            icon: data.icon,
            name: data.name,
            email: data.email,
            gitHubLink: data.gitHubLink,
            dateJoined: data.dataJoined   
        })
            profile.push(engineerCard);
    })

}





profileGenerator();




// .then((data) => writeToFile("...", generateManager(data)));