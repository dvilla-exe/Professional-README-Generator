// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this project?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to this project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md has been generated successfully!');
      }
    });
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      })
      .catch((error) => console.error(error));
  }

// Function call to initialize app
init();
