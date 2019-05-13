import Rect from "./StrokeRect";
import { TEXTALIGN, BASELINE } from "../enum";
export default class Text extends Rect {
  constructor(text, start, size) {
    super(start, size);
    this.text = text;
    this.textAglin = TEXTALIGN.left;
    this.baseLine = BASELINE.bottom;
  }
  setText(text) {
    this.text = text;
    return this;
  }
  setTextAglin(aglin) {
    this.textAglin = aglin;
    return this;
  }
  setBaseLine(baseline) {
    this.baseLine = baseline;
    return this;
  }
  draw(brush) {
    super.draw(brush);
    let { text } = brush;
    text.setTextAlign(this.textAglin);
    text.setTextBaseline(this.baseLine);
    text.fillText(this.text, this.start.x, this.start.y, this.size.width); // todos
  }
}
