export default class Merge {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   * globalAlpha 属性设置或返回绘图的当前透明值（alpha 或 transparency）
   * @param {*} val 	透明值。必须介于 0.0（完全透明） 与 1.0（不透明） 之间。
   */
  setGlobalAlpha(val) {
    this.ctx.globalAlpha = val;
  }
  /**
   * globalCompositeOperation 属性设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上。
   * @param {*} val 参见GLOBALCOMPOSITEOPERATION
   */
  setGlobalCompositeOperation(val) {
    this.ctx.globalCompositeOperation = val;
  }
}
