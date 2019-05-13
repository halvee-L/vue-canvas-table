export default class Path {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   * 填充当前的图像（路径）。默认颜色是黑色。
   */
  fill() {
    this.ctx.fill();
  }
  /**
   * 会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
   */
  stroke() {
    this.ctx.stroke();
  }
  /**
   * beginPath() 方法开始一条路径，或重置当前的路径
   */
  beginPath() {
    this.ctx.beginPath();
  }
  /**
   * closePath() 方法创建从当前点到开始点的路径。
   */
  closePath() {
    this.ctx.closePath();
  }
  /**
   * 移动到(x,y)开始操作
   * @param {*} x 路径的目标位置的 x 坐标
   * @param {*} y 路径的目标位置的 y 坐标
   */
  moveTo(x, y) {
    this.ctx.moveTo(x, y);
  }
  /**
   * lineTo() 方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。
   * @param {*} x 路径的目标位置的 x 坐标
   * @param {*} y 路径的目标位置的 y 坐标
   */
  lineTo(x, y) {
    this.ctx.lineTo(x, y);
  }
  /**
   * clip() 方法从原始画布中剪切任意形状和尺寸。
   * 一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。您也可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。
   */
  clip() {
    this.ctx.clip();
  }
  /**
   * quadraticCurveTo() 方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。
   * @param {*} cpx 贝塞尔控制点的 x 坐标
   * @param {*} cpy 贝塞尔控制点的 y 坐标
   * @param {*} x 	结束点的 x 坐标
   * @param {*} y 结束点的 y 坐标
   */
  quadraticCurveTo(cpx, cpy, x, y) {
    this.ctx.quadraticCurveTo(cpx, cpy, x, y);
  }
  /**
   * bezierCurveTo() 方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。
   * @param {*} cp1x 第一个贝塞尔控制点的 x 坐标
   * @param {*} cp1y 第一个贝塞尔控制点的 y 坐标
   * @param {*} cp2x 第二个贝塞尔控制点的 x 坐标
   * @param {*} cp2y 第二个贝塞尔控制点的 y 坐标
   * @param {*} x 	结束点的 x 坐标
   * @param {*} y 结束点的 y 坐标
   */
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }
  /** arc() 方法创建弧/曲线（用于创建圆或部分圆）。
   *
   * @param {*} x 圆的中心的 x 坐标。
   * @param {*} y 圆的中心的 y 坐标。
   * @param {*} r 圆的半径。
   * @param {*} sAngle 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
   * @param {*} eAngle 结束角，以弧度计。
   * @param {*} counterclockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
   */
  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    this.ctx.arc(x, y, r, sAngle, eAngle, counterclockwise);
  }
  /**
   * arcTo() 方法在画布上创建介于两个切线之间的弧/曲线。
   * @param {*} x1 弧的起点的 x 坐标
   * @param {*} y1 弧的起点的 y 坐标
   * @param {*} x2 弧的终点的 x 坐标
   * @param {*} y2 弧的终点的 y 坐标
   * @param {*} r 弧的半径
   */
  arcTo(x1, y1, x2, y2, r) {
    this.ctx.arcTo(x1, y1, x2, y2, r);
  }
  /**
   * isPointInPath() 方法返回 true，如果指定的点位于当前路径中；否则返回 false
   * @param {*} x 测试的 x 坐标
   * @param {*} y 测试的 y 坐标
   */
  isPointInPath(x, y) {
    this.ctx.isPointInPath(x, y);
  }
}
