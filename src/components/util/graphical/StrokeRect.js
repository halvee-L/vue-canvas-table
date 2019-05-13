import RectBase from "./RectBase";
export default class StrokeRect extends RectBase {
  constructor(start, size, style) {
    super(start, size, style);
  }
  draw(brush) {
    super.draw(brush);
    let { rect } = brush;
    rect.strokeRect(
      this.start.x,
      this.start.y,
      this.size.width,
      this.size.height
    );
  }
}
