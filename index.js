const Manager = require("./lib/Manager.cjs");
const Employee= require("./lib/Employee.cjs");
const Engineer = require("./lib/Engineer.cjs");
const Intern = require("./lib/Intern.cjs");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
  
inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the team manager`s name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager`s employee ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager`s email address?",
    
        },
        {
            type: "input",
            name: "officeNr",
            message: "What is the team manager`s office number?",
        }
       
    ])
    .then((response) => {
   console.log(response);
   console.log(response.email);

})