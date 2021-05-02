console.log("Create Profile");
const path = require("path");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateProfile = require("./utils/generateProfile");
const Manager = require("./lib/Manager")

// const writeFileAsync = util.promisify(fs.writeFile);

// const writeToFile = (fileName, data) => {
//   writeFileAsync(fileName, data);
// };
const htmlPath = path.join(__dirname, "team.html");
const profile = [];

const profileGenerator = () => {
const generateManager = () => { //user is first prompted to input manager details for profile card
  inquirer
    .prompt([

        {
        type: "list",
        name: "Icon",
        message: "Select Manager to begin: ",
        choices: ["Manager"],
      },

      {
        type: "input",
        name: "id",
        message: "Enter profile ID number: ",
      },

      {
        type: "input",
        name: "name",
        message: "Enter your name: ",
      },

      {
        type: "input",
        name: "email",
        message: "Enter your email: ",
      },

      {
        type: "input",
        name: "phoneNumber",
        message: "Enter Phone Number: ",
      },

      {
        type: "input",
        name: "dateJoined",
        message: "Enter date joined mm/yyyy: ",
      },
    ]). then((data) =>{
        const manager = new Manager(
          data.id, 
          data.name, 
          data.email, 
          dat.phoneNumber,
          data.dateJoined
          )
            profile.push(manager);
            addTeamMember()

    })
    
};


const generateEngineer = () => {
    inquirer.prompt([ {
        type: "list",
        name: "Icon",
        message: "Select Enginer to begin or Done to end: ",
        choices: ["Engineer","Done"],
      },

      {
        type: "input",
        name: "id",
        message: "Enter profile ID number: ",
       
      },

      {
        type: "input",
        name: "name",
        message: "Enter your name: ",
      },

      {
        type: "input",
        name: "gitHubLink",
        message: "Enter link to your github profile: ",
      },

      {
        type: "input",
        name: "dateJoined",
        message: "Enter date joined mm/yyyy: ",
      },
        
    ]). then((data) =>{
          const engineer = new Engineer(
            data.id, 
            data.name, 
            data.gitHubLink, 
            data.dateJoined
            )
              profile.push(manager);
              addTeamMember()
  
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
        // validate: function (userAnswer) {
        //   if (userAnswer !== typeof Number) {
        //     return console.log("Please enter a number");
        //   }
        //   return true;
        // },
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
            profile.push(internCard);
            addTeamMember();
    })

}

const addTeamMember = () => {
    inquirer.prompt ([
        {
        type: "list",
        name: "addTeamMember",
        message: "Would like to add another team member: ",
        choices: ["Engineer","Intern","Done"],
    }
]) .then((data) => {
    if (data.addTeamMember === "Engineer"){
         generateEngineer()
    } else
    if(data.addTeamMember === "Intern"){
         generateIntern()
    } else {
        console.log(profile)
        buildHtml()
    }
})
}

function buildHtml(){

fs.writeFileSync(htmlPath, generateProfile(profile), "utf-8")
}

generateManager();
}


profileGenerator();




// .then((data) => writeToFile("...", generateManager(data)));