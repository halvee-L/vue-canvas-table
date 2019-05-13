import VCBase from "./vcBase";
import { table as tableConfig } from "./vcConfig";
import { parseBoder, serializeBorder } from "./util/parser";
export default VCBase.extend({
  // name: "table",
  props: ["width", "height"],
  data() {
    return {
      ratio: 1,
      data: {}
    };
  },
  created() {
    this.brush.setSize(this.width, this.height);
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
            style: {
              width: this.width + "px",
              height: this.height + "px"
            },
            domProps: {
              width: this.width * this.ratio,
              height: this.height * this.ratio
            },
            on: {
              mousemove(evt) {
                vm.mousemove(evt);
                window.mes.innerText = "x:" + evt.offsetX + "y:" + evt.offsetY;
              }
            }
          },
          this.$slots.default
        )
      ]
    );
    this.update();
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

      // this.pushPhysics(fillRect);

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
    mapCanvas() {
      this.context.putImageData(
        this.brush.pixel.getImageData(
          0,
          0,
          this.width * this.ratio + 1,
          this.height * this.ratio + 1
        ),
        0,
        0
      );
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
        });
    }
  },
  mounted() {
    this.$canvas = this.$el.querySelector("canvas");
    let context = (this.context = this.$canvas.getContext("2d"));
    // this.refresh(this.$vnode);
    var getPixelRatio = function(context) {
      var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
      return (window.devicePixelRatio || 1) / backingStore;
    };
    var ratio = getPixelRatio(context);
    this.ratio = ratio;
    let canvas = this.brush.canvas;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
    canvas.width = canvas.width * ratio;
    canvas.height = canvas.height * ratio;
    this.brush.transform.scale(ratio, ratio);
    this.context.scale(2, 2);
    this.initEvent();
    this.update();
    this.mapCanvas();
    var mes = (window.mes = document.createElement("div"));
    mes.style.cssText =
      "background-color:black;color:red;width:200px;height:50px; position:fixed;right:0px; top:10px;";
    document.body.appendChild(mes);
  }
});
