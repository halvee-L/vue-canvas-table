import Rect from "./StrokeRect";
import Line from "./Line";
import Point from "../geometry/Point";
import { TEXTALIGN, COLOR, BASELINE } from "../enum";
export default class Text extends Rect {
  constructor(text, start, size) {
    super(start, size);
    this.text = text;
    this.textAglin = TEXTALIGN.left;
    this.verticalAlign = BASELINE.middle;
    this.color = COLOR.Default;
  }
  setText(text) {
    this.text = text;
    return this;
  }
  setTextAglin(aglin) {
    this.textAglin = aglin;
    return this;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
  setVerticalAlign(aglin) {
    this.verticalAlign = aglin;
    return this;
  }
  draw(brush) {
    super.draw(brush);
    let { text, style } = brush;
    let { x, y } = this.start;
    let { width, height } = this.size;
    switch (this.verticalAlign) {
      case BASELINE.middle:
        y += height / 2;
        break;
      case BASELINE.bottom:
        y += height;
        break;
      default:
        break;
    }
    switch (this.textAglin) {
      case TEXTALIGN.center:
        x += width / 2;
        break;
      case TEXTALIGN.right:
        x += width;
        break;
      case TEXTALIGN.left:
        x += 2;
      default:
        break;
    }
    style.setFillStyle(this.color);
    text.setTextBaseline(this.verticalAlign);
    text.setTextAlign(this.textAglin);
    text.fillText(this.text, x, y); // todos,, this.size.width
  }
}
