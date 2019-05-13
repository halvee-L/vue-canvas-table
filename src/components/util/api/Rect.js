export default class Rect {
  constructor(ctx) {
    this.ctx = ctx;
  }

  /**
   * 创建矩形
   * @param {*} x 矩形左上角的 x 坐标
   * @param {*} y 矩形左上角的 y 坐标
   * @param {*} width 矩形的宽度，以像素计
   * @param {*} height 矩形的高度，以像素计
   */
  rect(x, y, width, height) {
    this.ctx.rect(x, y, width, height);
  }
  /**
   * 绘制“已填色”的矩形。默认的填充颜色是黑色
   * @param {*} x 矩形左上角的 x 坐标
   * @param {*} y 矩形左上角的 y 坐标
   * @param {*} width 矩形的宽度，以像素计
   * @param {*} height 矩形的高度，以像素计
   */
  fillRect(x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
  }
  /**
   * 绘制矩形（不填色）。笔触的默认颜色是黑色
   * @param {*} x 矩形左上角的 x 坐标
   * @param {*} y 矩形左上角的 y 坐标
   * @param {*} width 矩形的宽度，以像素计
   * @param {*} height 矩形的高度，以像素计
   */
  strokeRect(x, y, width, height) {
    this.ctx.strokeRect(x, y, width, height);
  }
  /**
   * 清空给定矩形内的指定像素
   * @param {*} x 矩形左上角的 x 坐标
   * @param {*} y 矩形左上角的 y 坐标
   * @param {*} width 矩形的宽度，以像素计
   * @param {*} height 矩形的高度，以像素计
   */
  clearRect(x, y, width, height) {
    this.ctx.clearRect(x, y, width, height);
  }
}
