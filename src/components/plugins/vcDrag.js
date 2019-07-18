import VCBase from "../vcBase";
export default VCBase.extend({
  props: ["value"],
  data() {
    return {
      width: this.$parent.width,
      height: this.$parent.height
    };
  },
  methods: {
    refresh() {
      let { Point, Size } = this.geometry;
      this.clearPhysics();
      let line = new this.graphical.FillRect(
        Point.create(this.x + this.width - 2, this.y),
        Size.create(2, this.height)
      );
      line.style.setFillStyle("red");
      this.pushPhysics(line);
    }
  },
  created() {
    this.on("mousemove", () => console.log("----hahahhahhah"));
  }
});
