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
      let str =
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
        "";
      str = "(" + value + ") ";
      let text = new this.graphical.Text(
        this.$slots.default[0].text,
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );
      text.style.setFillStyle("black");
      text.setTextAglin("center");
      this.pushPhysics(text);
    },
    update() {
      this.refresh();
      this.$parent.update();
    }
  },
  created() {}
});
