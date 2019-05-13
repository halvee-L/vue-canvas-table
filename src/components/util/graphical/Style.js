import LinearGradient from "../geometry/LinearGradient";
import RadialGradient from "../geometry/RadialGradient";
export default class Style {
  constructor(fillstyle = "#000000", strokestyle = "#000000") {
    this.fillStyle = fillstyle;
    this.strokeStyle = strokestyle;
    this.shadowColor = "#000000";
    this.shadowBlur = 0;
    this.lineWidth = 1;
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;
  }
  setLineWidth(width) {
    this.lineWidth = width;
  }
  setFillStyle(style) {
    this.fillStyle = style;
    return this;
  }
  setFillStyleLineGradient(start, end, colorStops = []) {
    let lineargradient = new LinearGradient(start, end);
    colorStops.map(({ percent, color }) =>
      lineargradient.addColorStop(percent, color)
    );
    this.fillStyle = lineargradient;
    return this;
  }
  setFillStyleRadialGradient(c1, c2, colorStops = []) {
    let radialgradient = new RadialGradient(c1, c2);
    colorStops.map(({ percent, color }) =>
      radialgradient.addColorStop(percent, color)
    );
    this.fillStyle = radialgradient;
    return this;
  }
  setStrokeStyle(style) {
    this.strokeStyle = style;
    return this;
  }
  setStrokeStyleLineGradient(start, end, colorStops = []) {
    let lineargradient = new LinearGradient(start, end);
    colorStops.map(({ percent, color }) =>
      lineargradient.addColorStop(percent, color)
    );
    this.strokeStyle = lineargradient;
    return this;
  }
  setStrokeStyleRadialGradient(c1, c2, colorStops = []) {
    let radialgradient = new RadialGradient(c1, c2);
    colorStops.map(({ percent, color }) =>
      radialgradient.addColorStop(percent, color)
    );
    this.strokeStyle = radialgradient;
    return this;
  }
  setShadowColor(color) {
    this.shadowColor = color;
    return this;
  }
  setShadowOffsetX(offsetx) {
    this.shadowOffsetX = offsetx;
    return this;
  }
  setShadowOffsetY(offsetY) {
    this.shadowOffsetY = offsetY;
  }
  setShadowBlur(blur) {
    this.shadowBlur = blur;
  }
  clone() {
    let style = new Style(this.fillStyle, this.strokeStyle);
    style.shadowColor = this.shadowColor;
    style.shadowOffsetX = this.shadowOffsetX;
    style.shadowOffsetY = this.shadowOffsetY;
    return style;
  }
  brush(brush) {
    if (!brush) return;
    let { style, line } = brush;
    let fs = this.fillStyle;
    if (fs.brush) {
      fs.brush(brush);
    } else {
      style.setFillStyle(fs);
    }
    let ss = this.strokeStyle;
    if (ss.brush) {
      ss.brush(brush);
    } else {
      style.setStrokeStyle(ss);
    }
    line.setLineWidth(this.lineWidth);
    style.setShadowBlur(this.shadowBlur);
    style.setShadowColor(this.shadowColor);
    style.setShadowOffsetX(this.shadowOffsetY);
    style.setShadowOffsetY(this.shadowColor);
  }
}
