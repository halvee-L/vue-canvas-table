import RectBase from "./RectBase";
export default class ClearRect extends RectBase {
  constructor(start, size, style) {
    super(start, size, style);
  }
  draw(brush) {
    let { rect } = brush;
    rect.clearRect(
      this.start.x,
      this.start.y,
      this.size.width,
      this.size.height
    );
  }
}
