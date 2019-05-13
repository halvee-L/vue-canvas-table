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

export const COLOR = {
  LightPink: "#FFB6C1",
  Pink: "#FFC0CB",
  Crimson: "#DC143C",
  LavenderBlush: "#FFF0F5",
  PaleVioletRed: "#DB7093",
  HotPink: "#FF69B4",
  DeepPink: "#FF1493",
  MediumVioletRed: "#C71585",
  Orchid: "#DA70D6",
  Thistle: "#D8BFD8",
  plum: "#DDA0DD",
  Violet: "#EE82EE",
  Magenta: "#FF00FF",
  Fuchsia: "#FF00FF",
  DarkMagenta: "#8B008B",
  Purple: "#800080",
  MediumOrchid: "#BA55D3",
  DarkVoilet: "#9400D3",
  DarkOrchid: "#9932CC",
  Indigo: "#4B0082",
  BlueViolet: "#8A2BE2",
  MediumPurple: "#9370DB",
  MediumSlateBlue: "#7B68EE",
  SlateBlue: "#6A5ACD",
  DarkSlateBlue: "#483D8B",
  Lavender: "#E6E6FA",
  GhostWhite: "#F8F8FF",
  Blue: "#0000FF",
  MediumBlue: "#0000CD",
  MidnightBlue: "#191970",
  DarkBlue: "#00008B",
  Navy: "#000080",
  RoyalBlue: "#4169E1",
  CornflowerBlue: "#6495ED",
  LightSteelBlue: "#B0C4DE",
  LightSlateGray: "#778899",
  SlateGray: "#708090",
  DoderBlue: "#1E90FF",
  AliceBlue: "#F0F8FF",
  SteelBlue: "#4682B4",
  LightSkyBlue: "#87CEFA",
  SkyBlue: "#87CEEB",
  DeepSkyBlue: "#00BFFF",
  LightBLue: "#ADD8E6",
  PowDerBlue: "#B0E0E6",
  CadetBlue: "#5F9EA0",
  Azure: "#F0FFFF",
  LightCyan: "#E1FFFF",
  PaleTurquoise: "#AFEEEE",
  Cyan: "#00FFFF",
  Aqua: "#00FFFF",
  DarkTurquoise: "#00CED1",
  DarkSlateGray: "#2F4F4F",
  DarkCyan: "#008B8B",
  Teal: "#008080",
  MediumTurquoise: "#48D1CC",
  LightSeaGreen: "#20B2AA",
  Turquoise: "#40E0D0",
  Auqamarin: "#7FFFAA",
  MediumAquamarine: "#00FA9A",
  MediumSpringGreen: "#00FF7F",
  MintCream: "#F5FFFA",
  SpringGreen: "#3CB371",
  SeaGreen: "#2E8B57",
  Honeydew: "#F0FFF0",
  LightGreen: "#90EE90",
  PaleGreen: "#98FB98",
  DarkSeaGreen: "#8FBC8F",
  LimeGreen: "#32CD32",
  Lime: "#00FF00",
  ForestGreen: "#228B22",
  Green: "#008000",
  DarkGreen: "#006400",
  Chartreuse: "#7FFF00",
  LawnGreen: "#7CFC00",
  GreenYellow: "#ADFF2F",
  OliveDrab: "#556B2F",
  Beige: "#F5F5DC",
  LightGoldenrodYellow: "#FAFAD2",
  Ivory: "#FFFFF0",
  LightYellow: "#FFFFE0",
  Yellow: "#FFFF00",
  Olive: "#808000",
  DarkKhaki: "#BDB76B",
  LemonChiffon: "#FFFACD",
  PaleGodenrod: "#EEE8AA",
  Khaki: "#F0E68C",
  Gold: "#FFD700",
  Cornislk: "#FFF8DC",
  GoldEnrod: "#DAA520",
  FloralWhite: "#FFFAF0",
  OldLace: "#FDF5E6",
  Wheat: "#F5DEB3",
  Moccasin: "#FFE4B5",
  Orange: "#FFA500",
  PapayaWhip: "#FFEFD5",
  BlanchedAlmond: "#FFEBCD",
  NavajoWhite: "#FFDEAD",
  AntiqueWhite: "#FAEBD7",
  Tan: "#D2B48C",
  BrulyWood: "#DEB887",
  Bisque: "#FFE4C4",
  DarkOrange: "#FF8C00",
  Linen: "#FAF0E6",
  Peru: "#CD853F",
  PeachPuff: "#FFDAB9",
  SandyBrown: "#F4A460",
  Chocolate: "#D2691E",
  SaddleBrown: "#8B4513",
  SeaShell: "#FFF5EE",
  Sienna: "#A0522D",
  LightSalmon: "#FFA07A",
  Coral: "#FF7F50",
  OrangeRed: "#FF4500",
  DarkSalmon: "#E9967A",
  Tomato: "#FF6347",
  MistyRose: "#FFE4E1",
  Salmon: "#FA8072",
  Snow: "#FFFAFA",
  LightCoral: "#F08080",
  RosyBrown: "#BC8F8F",
  IndianRed: "#CD5C5C",
  Red: "#FF0000",
  Brown: "#A52A2A",
  FireBrick: "#B22222",
  DarkRed: "#8B0000",
  Maroon: "#800000",
  White: "#FFFFFF",
  WhiteSmoke: "#F5F5F5",
  Gainsboro: "#DCDCDC",
  LightGrey: "#D3D3D3",
  Silver: "#C0C0C0",
  DarkGray: "#A9A9A9",
  Gray: "#808080",
  DimGray: "#696969",
  Black: "#000000",
  Default: "#000000"
};
