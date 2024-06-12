//circle shape

class Circle {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<circle cx="30" cy="45" r="30" fill="${this.color}"/>`;
  }
}

//triangle shape
class Triangle {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<polygon points="-20,60 30,10 80,60" fill="${this.color}"/>`;
  }
}
//square shape
class Square {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<rect x="5" y="20" width="50" height="50" fill="${this.color}"/>`;
  }
}
module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};
