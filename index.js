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
  
const employees = [];

function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's employee ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the team manager's email address:",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      menu();
    });
}
//adding engineer
function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: "Enter the engineer's name:",
        },
        {
          type: 'input',
          name: 'id',
          message: "Enter the engineer's employee ID:",
        },
        {
          type: 'input',
          name: 'email',
          message: "Enter the engineer's email address:",
        },
        {
          type: 'input',
          name: 'github',
          message: "Enter the engineer's GitHub username:",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        employees.push(engineer);
        menu();
      });
  }
// adding intern
function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: "Enter the intern's name:",
        },
        {
          type: 'input',
          name: 'id',
          message: "Enter the intern's employee ID:",
        },
        {
          type: 'input',
          name: 'email',
          message: "Enter the intern's email address:",
        },
        {
          type: 'input',
          name: 'school',
          message: "Enter the intern's school:",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
        menu();
      });
  }

//menu function
function menu() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'What would you like to do?',
          choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        },
      ])
      .then((answers) => {
        switch (answers.choice) {
          case 'Add an engineer':
            addEngineer();
            break;
          case 'Add an intern':
            addIntern();
            break;
          case 'Finish building the team':
            finish();
            break;
        }
      });
  }
//Finish function
function finish() {
    const html = render(employees);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
      }
    const outputPath = './output/team.html';
    fs.writeFileSync(outputPath, html);
    console.log(`HTML file written to ${outputPath}`);
  }

  addManager();