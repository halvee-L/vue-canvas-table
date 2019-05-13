export default class Image {
  constructor(ctx) {
    this.ctx = ctx;
  }
  /**
   * drawImage() 方法在画布上绘制图像、画布或视频。
   * @param {*} img 规定要使用的图像、画布或视频。
   * @param {*} sx 可选。开始剪切的 x 坐标位置。
   * @param {*} sy 可选。开始剪切的 y 坐标位置。
   * @param {*} swidth 可选。被剪切图像的宽度。
   * @param {*} sheight 可选。被剪切图像的高度。
   * @param {*} x 在画布上放置图像的 x 坐标位置。
   * @param {*} y 在画布上放置图像的 y 坐标位置。
   * @param {*} width 	可选。要使用的图像的宽度。（伸展或缩小图像）
   * @param {*} height 可选。要使用的图像的高度。（伸展或缩小图像
   */
  drawImage(img, sx, sy, swidth, sheight, x, y, width, height) {
    if (arguments.length <= 3) {
      this.ctx.drawImage(img, sx, sy);
    } else if (arguments.length <= 5) {
      this.ctx.drawImage(img, sx, sy, swidth, sheight);
    } else {
      this.ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    }
  }
}
