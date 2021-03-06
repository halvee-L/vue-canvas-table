import jsBase from "./jsBase";
import { parseBoder, serializeBorder } from "../components/util/parser";
export default class jsCol extends jsBase {
  constructor(parent, options) {
    super(parent, options);
  }
  init() {
    this.name = "vc-col";
    super.init();
  }
  refresh() {
    let { Point, Size } = this.geometry;
    let style = Object.assign(
      {},
      // col.style,
      serializeBorder(this.styles.border),
      this.styles
    );

    this.clearPhysics();
    let clearRect = new this.graphical.ClearRect(
      Point.create(this.x - 1, this.y - 1),
      Size.create(this.width + 1, this.height + 1)
    );

    this.pushPhysics(clearRect);

    let line = new this.graphical.Line(
      Point.create(this.x + this.width, this.y),
      Point.create(this.x + this.width, this.y + this.height)
    );
    line.style.setStrokeStyle("black");
    this.pushPhysics(line);

    let x1 = this.x + this.width;
    let y1 = this.y + this.height;
    let bts = [
      {
        boder: parseBoder(style.borderTop),
        pos: [this.x, this.y, x1, this.y]
      },
      {
        boder: parseBoder(style.borderRight),
        pos: [x1, this.y, x1, y1]
      },
      {
        boder: parseBoder(style.borderBottom),
        pos: [this.x, y1, x1, y1]
      },
      {
        boder: parseBoder(style.borderLeft),
        pos: [this.x, this.y, this.x, y1]
      }
    ];
    bts.map(({ boder, pos }) => {
      let line = new this.graphical.Line(
        Point.create(...pos.slice(0, 2)),
        Point.create(...pos.slice(2)),
        boder.width
      );
      switch (boder.style) {
        case "dashed":
        case "dotted":
          line.toDotted();
          break;
        default:
          line.toSolid();
          break;
      }
      line.style.setStrokeStyle(boder.color);
      this.pushPhysics(line);
    });

    let clipRect = new this.graphical.ClipRect(
      Point.create(this.x, this.y),
      Size.create(this.width, this.height)
    );
    this.pushPhysics(clipRect);
    let fillRect = new this.graphical.FillRect(
      Point.create(this.x, this.y),
      Size.create(this.width, this.height)
    );
    fillRect.style.setFillStyle(style.backgroundColor);

    this.pushPhysics(fillRect);
    // if (this.$slots.default[0] && this.$slots.default[0].text) {
    //   let text = new this.graphical.Text(
    //     this.$slots.default[0].text,
    //     Point.create(this.x, this.y),
    //     Size.create(this.width, this.height)
    //   );
    //   text.style.setFillStyle("black");
    //   text.setTextAglin("center");
    //   this.pushPhysics(text);
    // }
  }
  afterRendered() {
    this.brush.restore();
  }
}
