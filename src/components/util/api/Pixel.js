export default class Pixel {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   * createImageData() 方法创建新的空白 ImageData 对象。新对象的默认像素值 transparent black
   * @param {*} width ImageData 对象的宽度，以像素计。 当只传入一个参数时 为imageData 另一个 ImageData 对象。
   * @param {*} height  ImageData 对象的高度，以像素计。
   */
  createImageData(width, height) {
    if (arguments.length === 1) {
      this.ctx.createImageData(width);
    } else {
      this.ctx.createImageData(width, height);
    }
  }
  /**
   * getImageData() 方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。
   * @param {*} x 开始复制的左上角位置的 x 坐标。
   * @param {*} y 开始复制的左上角位置的 y 坐标。
   * @param {*} width 将要复制的矩形区域的宽度。
   * @param {*} height 将要复制的矩形区域的高度
   */
  getImageData(x, y, width, height) {
    return this.ctx.getImageData(x, y, width, height);
  }
  /**
   *
   * @param {*} imgData 规定要放回画布的 ImageData 对象。
   * @param {*} x ImageData 对象左上角的 x 坐标，以像素计。
   * @param {*} y ImageData 对象左上角的 y 坐标，以像素计。
   * @param {*} dirtyX 可选。水平值（x），以像素计，在画布上放置图像的位置。
   * @param {*} dirtyY 可选。水平值（y），以像素计，在画布上放置图像的位置。
   * @param {*} dirtyWidth 可选。在画布上绘制图像所使用的宽度。
   * @param {*} dirtyHeight 可选。在画布上绘制图像所使用的高度。
   */
  putImageData(imgData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
    this.ctx.putImageData(
      imgData,
      x,
      y,
      dirtyX,
      dirtyY,
      dirtyWidth,
      dirtyHeight
    );
  }
}
