console.log("Create Profile");
const path = require("path");
const fs = require("fs");
// const util = require("util");
const inquirer = require("inquirer");
const generateProfile = require("./utils/generateProfile");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// const writeFileAsync = util.promisify(fs.writeFile);

// const writeToFile = (fileName, data) => {
//   writeFileAsync(fileName, data);
// };

const htmlPath = path.join(__dirname, "team.html");
const profile = [];

const profileGenerator = () => {
  const generateManager = () => {
    //user is first prompted to input manager details for profile card
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
          message: "Enter name: ",
        },

        {
          type: "list",
          name: "avatar",
          message: "Select an Avatar",
          choices: ["male", "female"]

        },

        {
          type: "input",
          name: "email",
          message: "Enter Email: ",
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
      ])
      .then((data) => {
        const manager = new Manager(
          data.id,
          data.name,
          data.avatar,
          data.email,
          data.phoneNumber,
          data.dateJoined
        );
        profile.push(manager);
        addTeamMember();
      });
  };

  const generateEngineer = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "Icon",
          message: "Select Engineer to begin: ",
          choices: ["Engineer"],
        },

        {
          type: "input",
          name: "id",
          message: "Enter profile ID number: ",
        },

        {
          type: "input",
          name: "name",
          message: "Enter name: ",
        },

        {
          type: "list",
          name: "avatar",
          message: "Select an Avatar",
          choices: ["male", "female"]

        },

        {
          type: "input",
          name: "email",
          message: "Enter Email: ",
        },

        {
          type: "input",
          name: "gitHubId",
          message: "Enter link to github profile: ",
        },

        {
          type: "input",
          name: "dateJoined",
          message: "Enter date joined mm/yyyy: ",
        },
      ])
      .then((data) => {
        const engineer = new Engineer(
          data.id,
          data.name,
          data.avatar,
          data.email,
          data.gitHubId,
          data.dateJoined
        );
        profile.push(engineer);
        addTeamMember();
      });
  };

  const generateIntern = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "Icon",
          message: "Select Intern to begin: ",
          choices: ["Intern"],
        },

        {
          type: "input",
          name: "id",
          message: "Enter profile ID number: ",
        },

        {
          type: "input",
          name: "name",
          message: "Enter name: ",
        },
        {
          type: "list",
          name: "avatar",
          message: "Select an Avatar",
          choices: ["male", "female"]

        },

        {
          type: "input",
          name: "email",
          message: "Enter Email: ",
        },

        {
          type: "input",
          name: "gitHubId",
          message: "Enter link to github profile: ",
        },

        {
          type: "input",
          name: "dateJoined",
          message: "Enter date joined mm/yyyy: ",
        },
      ])
      .then((data) => {
        const intern = new Intern(
          data.id,
          data.name,
          data.avatar,
          data.email,
          data.gitHubId,
          data.dateJoined
        );
        profile.push(intern);
        addTeamMember();
      });
  };

  const addTeamMember = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addTeamMember",
          message: "Would you like to add another team member: ",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((data) => {
        if (data.addTeamMember === "Engineer") {
          generateEngineer();
        } else if (data.addTeamMember === "Intern") {
          generateIntern();
        } else {
          console.log(profile);
          buildHtml();
        }
      });
  };

  function buildHtml() {
    fs.writeFileSync(htmlPath, generateProfile(profile), "utf-8");
  }

  generateManager();
};

profileGenerator();

// .then((data) => writeToFile("...", generateManager(data)));
