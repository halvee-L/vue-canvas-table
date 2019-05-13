/**
 * butt	 默认。向线条的每个末端添加平直的边缘。
 * round	向线条的每个末端添加圆形线帽。
 * square	向线条的每个末端添加正方形线帽。
 */
export const LINECAP = {
  butt: "butt",
  round: "round",
  square: "square"
};

/**
 * bevel	创建斜角。
 * round	创建圆角。
 * miter	默认。创建尖角。
 */
export const LINEJOIN = {
  bevel: "bevel",
  round: "round",
  miter: "miter"
};

/**
 * start: "默认。文本在指定的位置开始。",
 * end: "文本在指定的位置结束。",
 * center: "文本的中心被放置在指定的位置。",
 * left: "文本左对齐",
 * right: "文本右对齐。"
 */
export const TEXTALIGN = {
  start: "start",
  end: "end",
  center: "center",
  left: "left",
  right: "right"
};

/**
 * alphabetic:	默认。文本基线是普通的字母基线
 * top: 文本基线是 em 方框的顶端。。
 * hanging:文本基线是悬挂基线。
 * middle:文本基线是 em 方框的正中。
 * ideographic:文本基线是表意基线。
 * bottom:文本基线是 em 方框的底端。
 * 参考http://www.w3school.com.cn/tags/canvas_textbaseline.asp
 */
export const BASELINE = {
  alphabetic: "alphabetic",
  top: "top",
  hanging: "hanging",
  middle: "middle",
  ideographic: "ideographic",
  bottom: "bottom"
};

/**
 * source-over:默认。在目标图像上显示源图像。
 * source-atop:在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
 * source-in:在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
 * source-out:在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
 * destination-over:在源图像上方显示目标图像。
 * destination-atop:在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
 * destination-in:	在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
 * destination-out:	在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
 * lighter:显示源图像 + 目标图像。
 * copy:	显示源图像。忽略目标图像。
 * xor:使用异或操作对源图像与目标图像进行组合。
 */
export const GLOBALCOMPOSITEOPERATION = {
  sourceOver: "source-over",
  sourceAtop: "source-atop",
  sourceIn: "source-in",
  sourceOut: "source-out",
  destinationOver: "destination-over",
  destinationAtop: "destination-atop",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  lighter: "lighter",
  copy: "copy",
  xor: "xor"
};
