import { LINECAP, LINEJOIN } from "../enum";
import Style from "./Style";
import Point from "../geometry/Point";
import GBase from "./GBase";
export default class PolygonLine extends GBase {
  constructor(
    width,
    style = new Style(),
    linecap = LINECAP.butt,
    linejoin = LINEJOIN.miter
  ) {
    super(style);
    this.points = [];
    this.width = width;
    this.lineCap = linecap;
    this.lineJoin = linejoin;
  }
  addPoint(point) {
    this.points.add(point);
  }
  addPointByPos(x, y) {
    this.points.add(new Point(x, y));
  }
  setWidth(width) {
    this.width = width;
    return this;
  }
  setStyle(style) {
    this.style = style;
    return this;
  }
  setLineCap(linecap) {
    this.lineCap = linecap;
  }
  setLineJoin(linejoin) {
    this.lineJoin = linejoin;
  }
  clone() {
    let polygonline = new PolygonLine(
      this.width,
      this.style.clone(),
      this.lineCap,
      this.lineJoin
    );
    polygonline.points = this.points.map(p => p.clone());
    return polygonline;
  }
}
