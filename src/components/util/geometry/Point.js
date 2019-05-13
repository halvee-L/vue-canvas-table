export default class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  static create(x, y) {
    return new Point(x, y);
  }
}
