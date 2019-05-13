export default class Circle {
  constructor(x = 0, y = 0, r = 0) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  clone() {
    return new Circle(this.x, this.y, this.r);
  }
}
