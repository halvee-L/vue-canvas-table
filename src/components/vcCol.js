import VCBase from "./vcBase";
import { col } from "./vcConfig";
import { serializeBorder, parseBoder } from "./util/parser";
export default VCBase.extend({
  props: {
    width: {
      type: Number,
      default: col.width
    },
    height: {
      type: Number,
      default: col.height
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    data: {}
  },
  methods: {
    refresh() {
      let { Point, Size } = this.geometry;

      this.clearPhysics();
      let clearRect = new this.graphical.ClearRect(
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );

      this.pushPhysics(clearRect);
      let line = new this.graphical.Line(
        Point.create(this.x + this.width, 0),
        Point.create(this.x + this.width, this.y + this.height)
      );
      line.style.setStrokeStyle("gray");
      this.pushPhysics(line);

      let style = Object.assign(
        {},
        col.style,
        serializeBorder(this.styles.border),
        this.styles
      );
      let fillRect = new this.graphical.FillRect(
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );

      fillRect.style.setFillStyle(style.backgroundColor);

      this.pushPhysics(fillRect);
      // console.log("ddd", this.isMouseIn, this.isMouseIn + "");

      let bts = [
        {
          boder: parseBoder(style.borderTop),
          pos: [this.x, this.y, this.width, this.y]
        },
        {
          boder: parseBoder(style.borderRight),
          pos: [this.width, this.y, this.width, this.height]
        },
        {
          boder: parseBoder(style.borderBottom),
          pos: [this.x, this.height, this.width, this.height]
        },
        {
          boder: parseBoder(style.borderLeft),
          pos: [this.x, this.height, this.x, this.y]
        }
      ];
      bts.map(({ boder, pos }) => {
        let line = new this.graphical.Line(
          Point.create(...pos.slice(0, 2)),
          Point.create(...pos.slice(2)),
          boder.width
        );
        switch (boder.style) {
          case "dashed":
          case "dotted":
            line.toDotted();
            break;
          default:
            line.toSolid();
            break;
        }
        line.style.setStrokeStyle(boder.color);
        this.pushPhysics(line);
      });
    }
  },
  watch: {
    isMouseIn(n) {
      this.emitter.emit(n ? "mouse-over" : "mouse-leave", this);
    }
  },
  name: "vccol",
  render() {
    this.update();
    return this.$slots.default;
  },
  mounted() {}
});
