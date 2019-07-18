import jsBase from "./jsBase";
import jsRow from "./jsRow";
import { table as tableConfig } from "../components/vcConfig";
import { parseBoder, serializeBorder } from "../components/util/parser";
export default class jcTable extends jsBase {
  constructor(canvas, options) {
    super(null, options);
    this.canvas = canvas;
    this._init();
  }
  addChildren(height) {
    let row = new jsRow(this, {
      height,
      width: this.width
    });
    // this.children.push(row);
    return row;
  }
  _init() {
    this.context = this.canvas.getContext("2d");
    let canvas = this.canvas;
    canvas.style.width = this.width + "px";
    canvas.style.height = this.height + "px";
    canvas.width = this.width * 2;
    canvas.height = this.height * 2;
    this.brush.setCanvas(this.canvas);
    this.context.scale(2, 2);
    // this.initEvent();
    this.update();
    var mes = (window.mes = document.createElement("div"));
    mes.style.cssText =
      "background-color:black;color:red;width:200px;height:50px; position:fixed;right:0px; top:10px;";
    document.body.appendChild(mes);
  }
  refresh() {
    if (!this.context) return;
    this.clearPhysics();
    let { Point, Size } = this.geometry;
    let style = Object.assign(
      {},
      serializeBorder(this.styles.border),
      this.styles
    );
    let clearRect = new this.graphical.ClearRect(
      Point.create(this.x, this.y),
      Size.create(this.width, this.height)
    );
    this.pushPhysics(clearRect);

    let fillRect = new this.graphical.FillRect(
      Point.create(this.x, this.y),
      Size.create(this.width, this.height)
    );

    fillRect.style.setFillStyle(style.backgroundColor);

    // this.pushPhysics(fillRect);

    let bts = [
      {
        boder: parseBoder(style.borderTop),
        pos: [this.x, this.y, this.width, this.y]
      },
      {
        boder: parseBoder(style.borderRight),
        pos: [this.width, this.y, this.width, this.height]
      },
      {
        boder: parseBoder(style.borderBottom),
        pos: [this.x, this.height, this.width, this.height]
      },
      {
        boder: parseBoder(style.borderLeft),
        pos: [this.x, this.height, this.x, this.y]
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
      Point.create(this.x + 1, this.y + 1),
      Size.create(this.width - 2, this.height - 2)
    );
    this.pushPhysics(clipRect);
  }
}
