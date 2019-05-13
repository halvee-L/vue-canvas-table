import { LINECAP } from "../enum";
import Style from "./Style";
import GBase from "./GBase";
// import LineT from "../api/Line";
// import Path from "../api/Path";

export default class Line extends GBase {
  constructor(sp, ep, width = 1, style = new Style()) {
    super(style);
    this.start = sp;
    this.end = ep;
    this.width = width;
    this.lineCap = LINECAP.butt;
    this.lineDash = [];
  }
  setLineDash(...args) {
    this.lineDash = args;
    return this;
  }
  toDotted() {
    // todo
    this.lineDash = [2, 3];
    return this;
  }
  toSolid() {
    this.lineDash = [];
    return this;
  }
  setWidth(width) {
    this.width = width;
    return this;
  }
  setStyle(style) {
    this.style = style;
    return this;
  }
  setLineCap(linecap) {
    this.lineCap = linecap;
  }
  clone() {
    let line = new Line(
      this.start.clone(),
      this.end.clone(),
      this.width,
      this.style.clone()
    );
    line.lineCap = this.lineCap;
    return line;
  }
  draw(brush) {
    super.draw(brush);
    let { line, path } = brush;
    // {
    //   line: new LineT(brush),
    //   path: new Path(brush)
    // };
    path.beginPath();
    line.setLineCap(this.lineCap);
    line.setLineWidth(this.width);
    line.setLineDash(this.lineDash);
    path.moveTo(this.start.x, this.start.y);
    path.lineTo(this.end.x, this.end.y);
    path.stroke();
    path.closePath();
  }
}
