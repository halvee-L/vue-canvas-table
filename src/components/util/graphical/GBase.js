import Style from "./Style";
export default class GBase {
  constructor(style = new Style()) {
    this.style = style;
  }
  brush(brush) {
    this.style.brush(brush);
  }
  draw(brush) {
    this.brush(brush);
  }
  isPointInPath(x, y) {
    return false;
  }
}
