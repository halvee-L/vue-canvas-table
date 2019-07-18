import VCBase from "./vcBase";
import { table as tableConfig } from "./vcConfig";
import { parseBoder, serializeBorder } from "./util/parser";
export default VCBase.extend({
  // name: "table",
  props: ["width", "height"],
  data() {
    return {
      data: {}
    };
  },
  created() {
    // this.brush.setSize(this.width, this.height);
    window.vcTable = this;
  },
  render(h) {
    let vm = this;
    let node = h(
      "div",
      {
        style: {
          width: this.width + "px",
          height: this.height + "px"
        }
      },
      [
        h(
          "canvas",
          {
            style: {},
            domProps: {},
            on: {
              mousedown(evt) {
                vm.mousedown();
                window.mes.innerText =
                  "mousedown->x:" + evt.offsetX + "y:" + evt.offsetY;
              },
              mousemove(evt) {
                vm.mousemove(evt);
                window.mes.innerText = "x:" + evt.offsetX + "y:" + evt.offsetY;
              },
              mouseup(evt) {
                vm.mouseup(evt);
                window.mes.innerText =
                  "mouseup->x:" + evt.offsetX + "y:" + evt.offsetY;
              },
              click(evt) {
                vm.click(evt);
                window.mes.innerText =
                  "click->x:" + evt.offsetX + "y:" + evt.offsetY;
              }
            }
          },
          this.$slots.default
        )
      ]
    );
    return node;
  },
  methods: {
    refresh() {
      if (!this.context) return;
      this.clearPhysics();
      let { Point, Size } = this.geometry;
      let style = Object.assign(
        {},
        tableConfig.style,
        serializeBorder(this.styles.border),
        this.styles
      );
      let clearRect = new this.graphical.ClearRect(
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );
      this.pushPhysics(clearRect);

      let fillRect = new this.graphical.FillRect(
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );

      fillRect.style.setFillStyle(style.backgroundColor);

      this.pushPhysics(fillRect);

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

      let clipRect = new this.graphical.ClipRect(
        Point.create(this.x + 1, this.y + 1),
        Size.create(this.width - 2, this.height - 2)
      );
      this.pushPhysics(clipRect);
    },
    initEvent() {
      this.emitter
        .on(
          "mouse-over",
          cell => {
            //cellEnter
            this.$emit("cell-enter", cell);
          },
          this
        )
        .on("mouse-leave", cell => {
          this.$emit("cell-out", cell);
        })
        .on("mouse-click", cell => {
          this.$emit("cell", cell);
        });
    }
  },
  mounted() {
    this.$canvas = this.$el.querySelector("canvas");
    this.context = this.$canvas.getContext("2d");
    let canvas = this.$canvas;
    canvas.style.width = this.width + "px";
    canvas.style.height = this.height + "px";
    canvas.width = this.width * 2;
    canvas.height = this.height * 2;
    this.brush.setCanvas(this.$canvas);
    this.context.scale(2, 2);
    this.initEvent();
    this.update();
    var mes = (window.mes = document.createElement("div"));
    mes.style.cssText =
      "background-color:black;color:red;width:200px;height:50px; position:fixed;right:0px; top:10px;";
    document.body.appendChild(mes);
  }
});
