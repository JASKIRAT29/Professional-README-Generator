// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown= require('./generateMarkdown');

// TODO: Create an array of questions for user input
//const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
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
      message: 'Re-enter password to confirm:',
      name: 'confirm',
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
    {
      type: 'input',
      message: 'What is your email address:',
      name: 'email',
    },
  ])
  
  .then((data) =>{
    //jaskirat kaur
    // TODO: Create a function to write README file
    const filename = data.title.replace(' ', "").toLowerCase()
    fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
})



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

  
