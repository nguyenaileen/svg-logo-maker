// shape class
class Shape {
  constructor(color) {
    this.color = color;
  }
}

//made shapes using https://www.w3schools.com/graphics/svg_circle.asp
//circle shape

class Circle extends Shape {
  render() {
    return `<circle cx="30" cy="45" r="30" fill="${this.color}"/>`;
  }
}

//triangle shape
class Triangle extends Shape {
  render() {
    return `<polygon points="100,10 190,190 10,190" fill="${this.color}"/>`;
  }
}
//square shape
class Square extends Shape {
  render() {
    return `<rect width="125" height="200" x="10" y="10" fill="${this.color}"/>`;
  }
}
module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};
