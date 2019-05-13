import ColorStop from "./ColorStop";
export default class LinearGradient {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.colorStop = [];
    this.type = "linear";
  }
  addColorStop(percent, color) {
    if (!(percent instanceof ColorStop)) {
      percent = new ColorStop(percent, color);
    }
    this.colorStop.push(percent);
  }
  clone() {
    let lineargradient = new LinearGradient(
      this.start.clone(),
      this.end.clone()
    );
    lineargradient.colorStop = this.colorStop.map(
      cs => new ColorStop(cs.percent, cs.color)
    );
    return lineargradient;
  }
  brush(brush) {
    let apistyle = brush.style;
    let linear = apistyle.createLinearGradient(
      this.start.x,
      this.start.y,
      this.end.x,
      this.end.y
    );
    this.colorStop.map(p => linear.addColorStop(p.position, p.color));
    apistyle.setFillStyle(linear);
    return this;
  }
}
