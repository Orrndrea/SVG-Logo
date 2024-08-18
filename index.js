// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length <= 3 || 'Text must be 3 characters or less',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;

  let selectedShape;
  switch (shape) {
    case 'Circle':
      selectedShape = new Circle();
      break;
    case 'Triangle':
      selectedShape = new Triangle();
      break;
    case 'Square':
      selectedShape = new Square();
      break;
  }

  selectedShape.setColor(shapeColor);

  const svgContent = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${selectedShape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
});
