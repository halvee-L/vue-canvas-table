export default class Line {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   * 设置或返回线条末端线帽的样式
   * @param {*} linecap 见LINECAP
   */
  setLineCap(linecap) {
    this.ctx.lineCap = linecap;
  }
  /**
   * 设置或返回所创建边角的类型，当两条线交汇时。
   * @param {*} linejoin 见LINEJOIN
   */
  setLineJoin(linejoin) {
    this.ctx.lineJoin = linejoin;
  }
  /**
   * lineWidth 属性
   * @param {*} width  当前线条的宽度，以像素计。
   */
  setLineWidth(width) {
    this.ctx.lineWidth = width;
  }
  /**
   * 设置或返回最大斜接长度。边角的角度越小，斜接长度就会越大。
   * @param {*} limit 正数。规定最大斜接长度。 如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示。
   */
  setmiterLimit(limit) {
    this.ctx.miterLimit = limit;
  }
  /**
   * 设置描述交替绘制线段和间距（坐标空间单位）长度的数字
   * @param {*} dash 虚线数组
   */
  setLineDash(dash) {
    this.ctx.setLineDash(dash);
  }
}
