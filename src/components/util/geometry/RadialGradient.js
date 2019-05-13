import ColorStop from "./ColorStop";
import Circle from "./Circle";
export default class RadialGradient {
  constructor(c1 = new Circle(), c2 = new Circle()) {
    this.start = c1;
    this.end = c2;
    this.colorStop = [];
    this.type = "radial";
  }
  addColorStop(percent, color) {
    if (!(percent instanceof ColorStop)) {
      percent = new ColorStop(percent, color);
    }
    this.colorStop.push(percent);
  }
  clone() {
    let radialgradient = new RadialGradient(
      this.start.clone(),
      this.end.clone()
    );
    radialgradient.colorStop = this.colorStop.map(
      cs => new ColorStop(cs.percent, cs.color)
    );
    return radialgradient;
  }

  brush(brush) {
    let apistyle = brush.style;
    let radial = apistyle.createRadialGradient(
      this.start.x,
      this.start.y,
      this.start.r,
      this.end.x,
      this.end.y,
      this.end.r
    );
    this.colorStop.map(p => radial.addColorStop(p.position, p.color));
    apistyle.setFillStyle(radial);
    return this;
  }
}
