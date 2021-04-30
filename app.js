console.log("Create Profile");

const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const generateProfile = require('./utils/generateProfile')




const profileGenerator = () => {
    inquirer.prompt([

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
            type: "list",
            name: "Icon",
            message: "Choose your license for your project: ",
            choices: ["None", "Manager", "Engineer", "Intern"],
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
            name: "email",
            message: "Enter Project Title: ",
            validate: function (userAnswer) {
              if (userAnswer === "") {
                return console.log("Please input Project Title");
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





    ])
}