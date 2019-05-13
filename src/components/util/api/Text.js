export default class Text {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   *
   * @param {*} font
   */
  setFont(font) {
    this.ctx.font = font;
  }
  /**
   * textAlign属性根据锚点，设置或返回文本内容的当前对齐方式。
   * @param {*} align 详见TEXTALIGN
   */
  setTextAlign(align) {
    this.ctx.textAlign = align;
  }
  /**
   * textBaseline 属性设置或返回在绘制文本时的当前文本基线。
   * @param {*} baseline 详见BASELINE
   */
  setTextBaseline(baseline) {
    this.ctx.textBaseline = baseline;
  }
  /**
   * fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。
   * @param {*} text 规定在画布上输出的文本
   * @param {*} x 开始绘制文本的 x 坐标位置（相对于画布）。
   * @param {*} y 开始绘制文本的 y 坐标位置（相对于画布）。
   * @param {*} maxWidth 可选。允许的最大文本宽度，以像素计。
   * 请使用 font 属性来定义字体和字号，并使用 fillStyle 属性以另一种颜色/渐变来渲染文本。
   */
  fillText(text, x, y, maxWidth) {
    this.ctx.fillText(text, x, y, maxWidth);
  }
  /**
   * strokeText() 方法在画布上绘制文本（没有填色）。文本的默认颜色是黑色。
   * @param {*} text 规定在画布上输出的文本
   * @param {*} x 开始绘制文本的 x 坐标位置（相对于画布）。
   * @param {*} y 开始绘制文本的 y 坐标位置（相对于画布）。
   * @param {*} maxWidth 可选。允许的最大文本宽度，以像素计。
   * 请使用 font 属性来定义字体和字号，并使用 fillStyle 属性以另一种颜色/渐变来渲染文本。
   */
  strokeText(text, x, y, maxWidth) {
    this.ctx.strokeText(text, x, y, maxWidth);
  }
  /**
   * measureText() 方法返回包含一个对象，该对象包含以像素计的指定字体宽度。
   * @param {*} text 要测量的文本。
   */
  measureTextWidth(text) {
    this.ctx.measureText(text).width;
  }
}
