import RectBase from "./RectBase";
export default class ClipRect extends RectBase {
  constructor(start, size, style) {
    super(start, size, style);
  }
  draw(brush) {
    brush.save();
    brush.rect.rect(
      this.start.x,
      this.start.y,
      this.size.width,
      this.size.height
    );
    brush.path.clip();
  }
}
