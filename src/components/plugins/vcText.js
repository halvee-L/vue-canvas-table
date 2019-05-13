import VCBase from "../vcBase";
import { col } from "../vcConfig";
export default VCBase.extend({
  props: ["value"],
  data() {
    return {
      width: col.width, // this.$parent.width,
      height: col.height // this.$parent.height
    };
  },
  methods: {
    refresh() {
      let { Point, Size } = this.geometry;
      let value = this.$parent.data;
      this.clearPhysics();
      // let clear = new this.graphical.ClearRect(
      //   Point.create(this.x, this.y),
      //   Size.create(this.width, this.height)
      // );
      // this.pushPhysics(clear);
      let text = new this.graphical.Text(
        "(" +
          value +
          ")  = [" +
          "[" +
          this.x +
          "~" +
          (this.x + this.width) +
          "," +
          this.y +
          "~" +
          (this.y + this.height) +
          "] = " +
          this.isMouseIn +
          "",
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );
      // text.style.setStrokeStyle();
      text.style.setFillStyle("red");
      text.setTextAglin("left");
      text.setBaseLine("top");
      this.pushPhysics(text);
      // console.log(
      //   "vctext.refresh-" + this.x + "," + this.y + ":",
      //   this.isMouseIn,
      //   this.physics
      // );
    },
    update() {
      this.refresh();
      this.$parent.update();
    }
  },
  render() {
    this.update();
    return this.$slots.default;
  },
  created() {
    // this.update();
  }
});
