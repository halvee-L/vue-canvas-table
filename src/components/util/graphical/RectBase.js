import Style from "./Style";
import Point from "../geometry/Point";
import Size from "../geometry/Size";
import GBase from "./GBase";
export default class Rect extends GBase {
  constructor(start = new Point(), size = new Size(), style = new Style()) {
    super(style);
    this.start = start;
    this.size = size;
  }
  setPosition(x, y) {
    this.start.setX(x).setY(y);
    return this;
  }
  setSize(width, height) {
    this.size.setWidth(width).setHeight(height);
    return this;
  }
  clone() {
    let rect = new Rect(
      this.start.clone(),
      this.size.clone(),
      this.style.clone()
    );
    return rect;
  }
  draw(brush) {
    super.draw(brush);
  }
  isPointInPath(x, y) {
    this.start.x <= x &&
      this.start.y <= y &&
      this.start.x + this.size.width >= x &&
      this.start.y + this.size.height >= y;
  }
}
