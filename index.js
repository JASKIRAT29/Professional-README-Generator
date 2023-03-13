// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown= require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//const questions = [];
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
     
    },
    {
      type: 'list',
      message: 'What is your user name?',
      name: 'UserName',
      choices:[
        {value:'jaskirat'},
        {value:'jaskirat29'},
        {value:'jaskirat29'},
        {value:'jasr22'},
      ]
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'ProjectName',
     
    },
    {
      type: 'input',
      message: 'Description of your project:',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What is your email address:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?:',
      name: 'githubusername',
    },
  ])
  
  .then((data) =>{
    //jaskirat kaur
    // TODO: Create a function to write README file
    const filename = data.ProjectName.replace(' ', "").toLowerCase()
    fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
})}



// TODO: Create a function to initialize app


// Function call to initialize app
init();

  
