export function serializeBorder(boder) {
  if (boder) {
    return {
      borderTop: boder,
      borderBottom: boder,
      borderLeft: boder,
      borderRight: boder
    };
  }
  return {};
}

export function parseBoder(boder = "") {
  let b = boder.split(" ");
  return {
    width: parseFloat(b[0] || 1),
    style: b[1] || "solid",
    color: b[2] || "white"
  };
}
