export default class Style {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   *设置或返回用于填充绘画的颜色、渐变或模式
   * */
  setFillStyle(style) {
    //color|gradient|pattern;
    this.ctx.fillStyle = style;
  }
  /**
   * 设置或返回用于笔触的颜色、渐变或模式。
   */
  setStrokeStyle(style) {
    this.ctx.strokeStyle = style;
  }
  /**
   * 设置或返回阴影的模糊级数。
   * @param {*} blur
   */
  setShadowBlur(blur) {
    this.ctx.shadowBlur = blur;
  }
  /**
   * 设置或返回用于阴影的颜色。
   *  */
  setShadowColor(color) {
    this.ctx.shadowColor = color;
  }
  /**
   * shadowOffsetX 属性设置或返回形状与阴影的水平距离。
   * shadowOffsetX=0 指示阴影位于形状的正下方。
   * shadowOffsetX=20 指示阴影位于形状 left 位置右侧的 20 像素处。
   * shadowOffsetX=-20 指示阴影位于形状 left 位置左侧的 20 像素处。
   *
   */
  setShadowOffsetX(x) {
    this.ctx.shadowOffsetX = x;
  }
  /**
   * shadowOffsetY 属性设置或返回形状与阴影的垂直距离。
   * shadowOffsetY=0 指示阴影位于形状的正下方。
   * shadowOffsetY=20 指示阴影位于形状 top 位置下方的 20 像素处。
   * shadowOffsetY=-20 指示阴影位于形状 top 位置上方的 20 像素处。
   */
  setShadowOffsetY(y) {
    this.ctx.shadowOffsetY = y;
  }

  /**
   *创建线性的渐变对象。
   * @param  {...any} args
   */
  createLinearGradient(...args) {
    return this.ctx.createLinearGradient(...args);
  }
  /**
   *  创建放射状/圆形渐变对象。
   * @param {*} x0 渐变的开始圆的 x 坐标
   * @param {*} y0 渐变的开始圆的 y 坐标
   * @param {*} r0 开始圆的半径
   * @param {*} x1 渐变的结束圆的 x 坐标
   * @param {*} y1 渐变的结束圆的 y 坐标
   * @param {*} r1 结束圆的半径
   *    var grd=ctx.createRadialGradient(75,50,5,90,60,100);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
   */
  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    return this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  }
  /**
   * 在指定的方向内重复指定的元素。
   * @param {*} image 元素可以是图片、视频，或者其他 <canvas> 元素。
   * @param {*} repeat repeat	默认。该模式在水平和垂直方向重复。
                      repeat-x	该模式只在水平方向重复。
                      repeat-y	该模式只在垂直方向重复。
                      no-repeat	该模式只显示一次（不重复）。
   */
  createPattern(image, repeat) {
    return this.ctx.createPattern(image, repeat);
  }
}
