//require
const Shape = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

//write SVG file
function writeToFile(file, data) {
  let svg = "";
  svg = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svg += "<g>";

  //conditional check which shape the user wants
  if (data.shape[0] === "Circle") {
    svg += new Shape.Circle(data.shapeColor).render();
  } else if (data.shape[0] === "Triangle") {
    svg += new Shape.Triangle(data.shapeColor).render();
  } else {
    svg += new Shape.Square(data.shapeColor).render();
  }

  //adding user text
  var text = data.logo;
  svg += `<text x="30" y="50" text-anchor="middle"  font-size="20" fill="${
    data.logoColor
  }" >${text.toUpperCase()}</text>`;
  //close the group
  svg += "</g>";
  //close the svg element
  svg += "</svg>";

  //write the file and shows if successful or not

  fs.writeFile(file, svg, (err) => {
    err
      ? console.log(err)
      : console.log(
          "Success! Logo.svg has been created in the examples folder.  "
        );
  });
}

//create the input prompts
var inputs = [
  {
    type: "text",
    message: "3 letters of logo: ",
    name: "logo",
  },
  {
    type: "text",
    message: "Text color: ",
    name: "logoColor",
  },
  {
    type: "checkbox",
    message: "Logo Shape: ",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "text",
    message: "Shape Color: ",
    name: "shapeColor",
  },
];

//save svg file using inquirer
inquirer.prompt(inputs).then((data) => {
  writeToFile("./examples/logo.svg", data);
});
