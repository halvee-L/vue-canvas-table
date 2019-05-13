export default class ColorStop {
  constructor(position = 0, color = "white") {
    this.position = position;
    this.color = color;
  }
  clone() {
    return new ColorStop(this.position, this.color);
  }
  setPosition(pos) {
    this.position = pos;
    return this;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
}
