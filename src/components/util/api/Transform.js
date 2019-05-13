export default class Transform {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   * scale() 方法缩放当前绘图，更大或更小。
   * @param {*} scalewidth 缩放当前绘图的宽度 (1=100%, 0.5=50%, 2=200%, 依次类推)
   * @param {*} scaleheight 缩放当前绘图的高度 (1=100%, 0.5=50%, 2=200%, etc.)
   */
  scale(scalewidth, scaleheight) {
    this.ctx.scale(scalewidth, scaleheight);
  }
  /**
   * rotate() 方法旋转当前的绘图。
   * @param {*} angle 旋转角度，以弧度计。
                如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算。
                举例：如需旋转 5 度，可规定下面的公式：5*Math.PI/180。
   */
  rotate(angle) {
    return this.ctx.rotate(angle);
  }
  /**
   * translate() 方法重新映射画布上的 (0,0) 位置。
   * @param {*} x 添加到水平坐标（x）上的值
   * @param {*} y 添加到垂直坐标（y）上的值
   */
  translate(x, y) {
    return this.ctx.translate(x, y);
  }
  /**
   * 画布上的每个对象都拥有一个当前的变换矩阵。
   * @param {*} a 水平缩放绘图
   * @param {*} b 水平倾斜绘图
   * @param {*} c 垂直倾斜绘图
   * @param {*} d 垂直缩放绘图
   * @param {*} e 水平移动绘图
   * @param {*} f 垂直移动绘图
   * transform() 方法的行为相对于由 rotate(), scale(), translate(), or transform() 完成的其他变换。例如：如果您已经将绘图设置为放到两倍，则 transform() 方法会把绘图放大两倍，您的绘图最终将放大四倍。
   */
  transform(a, b, c, d, e, f) {
    return this.ctx.transform(a, b, c, d, e, f);
  }
  /**
   * 画布上的每个对象都拥有一个当前的变换矩阵。
   * @param {*} a 水平缩放绘图
   * @param {*} b 水平倾斜绘图
   * @param {*} c 垂直倾斜绘图
   * @param {*} d 垂直缩放绘图
   * @param {*} e 水平移动绘图
   * @param {*} f 垂直移动绘图
   */
  setTransform(a, b, c, d, e, f) {
    this.ctx.setTransform(a, b, c, d, e, f);
  }
}
