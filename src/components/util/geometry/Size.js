export default class Size {
  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
    return this;
  }
  setHeight(height) {
    this.height = height;
    return this;
  }
  clone() {
    return new Size(this.width, this.height);
  }
  static create(width, height) {
    return new Size(width, height);
  }
}
