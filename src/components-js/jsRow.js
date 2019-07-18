import jsBase from "./jsBase";
import jsCol from "./jsCol";
export default class jsRow extends jsBase {
  constructor(parent, options) {
    super(parent, options);
  }
  init() {
    this.name = "vc-row";
    super.init();
  }
  addChildren(width) {
    let col = new jsCol(this, {
      width,
      height: this.height
    });
    // this.children.push(col);
    return col;
  }
  refresh() {
    let { Point, Size } = this.geometry;
    this.clearPhysics();
    let clearRect = new this.graphical.ClearRect(
      Point.create(this.x, this.y + this.height),
      Size.create(this.width, this.height)
    );
    this.brush.restore();
    this.pushPhysics(clearRect);
    let line = new this.graphical.Line(
      Point.create(this.x, this.y + this.height),
      Point.create(this.x + this.width, this.y + this.height)
    );
    line.style.setStrokeStyle("black");
    this.pushPhysics(line);
  }
}
