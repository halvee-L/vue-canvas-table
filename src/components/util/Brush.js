import Style from "./api/Style";
import Line from "./api/Line";
import Rect from "./api/Rect";
import Path from "./api/Path";
import Transform from "./api/Transform";
import Text from "./api/Text";
import Image from "./api/Image";
import Pixel from "./api/Pixel";
import Merge from "./api/Merge";
export default class Brush {
  constructor(canvas = document.createElement("canvas")) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this._init();
  }
  _init() {
    this.style = new Style(this.ctx);
    this.line = new Line(this.ctx);
    this.rect = new Rect(this.ctx);
    this.path = new Path(this.ctx);
    this.transform = new Transform(this.ctx);
    this.text = new Text(this.ctx);
    this.image = new Image(this.ctx);
    this.pixel = new Pixel(this.ctx);
    this.merge = new Merge(this.ctx);
  }
  setCanvas(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this._init();
  }
  setSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
  save() {
    this.ctx.save();
  }
  restore() {
    this.ctx.restore();
  }
  createEvent() {
    this.ctx.createEvent();
  }
  getContext() {
    return this.canvas.getContext("2d");
  }
  toDataURL() {
    return this.canvas.toDataURL();
  }
}
