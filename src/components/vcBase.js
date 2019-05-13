import Vue from "vue";
import Brush from "./util/Brush";
import graphical from "./util/graphical";
import geometry from "./util/geometry";
import Emitter from "./util/Emitter";
const initBrush = () => {
  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  return new Brush(canvas);
};

export default Vue.extend({
  props: ["styles"],
  data() {
    return {
      tableTag: true,
      children: [],
      brush: this.$parent.brush || initBrush(),
      graphical,
      geometry,
      x: 0,
      y: 0,
      index: -1,
      emitter: this.$parent.emitter || new Emitter(),
      isMouseIn: false
      // physics: []
    };
  },
  updated() {
    this.mapCanvas && this.mapCanvas();
  },
  methods: {
    updateChild() {
      this.children = this.$slots.default;
    },
    render() {
      // this.brush.transform.translate(this.x, this.y);
      this.physics.map(p => p.draw(this.brush));
      let isClip = !this.$parent.tableTag;
      if (isClip) {
        this.brush.save();
        this.brush.rect.rect(1, 1, this.width - 2, this.height - 2); // todo
        this.brush.path.clip();
      }
      this.$children.map(vm => vm && vm.render());
      if (isClip) {
        this.brush.restore();
      }
      // console.log("render.exce", this);
    },
    refresh() {},
    renderView() {
      if (this.$parent.tableTag) {
        this.$parent.renderView();
      } else {
        if (this.rendering) return;
        this.rendering = true;
        this.$nextTick(() => {
          this.rendering = false;
          this.render();
        });
      }
    },
    update() {
      this.refresh();
      // this.renderView();
      // this.$nextTick(() => this.renderView());
      this.render();
    },
    pushPhysics(physics) {
      this.physics.push(physics);
    },
    clearPhysics() {
      this.physics = [];
    },
    mapCanvas() {
      this.$parent.mapCanvas && this.$parent.mapCanvas();
    },
    mousemove(evt) {
      if (this.isPointIn(evt.offsetX, evt.offsetY)) {
        this.$children.map(vm => vm.mousemove(evt));
        if (!this.isMouseIn) {
          // console.log("mouseent", this);
          this.isMouseIn = true;
        }
      } else {
        this.mouseout(evt);
      }
    },
    mouseout(evt) {
      this.isMouseIn = false;
      this.$children.map(vm => vm.mouseout(evt));
    },
    mouseenter() {},
    isPointIn(x, y) {
      return (
        this.x <= x &&
        this.y <= y &&
        this.x + this.width >= x &&
        this.y + this.height >= y
      );
    }
  },
  // mounted() {
  //   this.index = this.$parent.$children.indexOf(this);
  // },
  created() {
    this.physics = [];
    if (this.$parent.tableTag) {
      this.$parent.updateChild();
      this.index = this.$parent.children.indexOf(this.$vnode);
      let { x, y } = this.$parent;
      let name = this.$options.name;
      if (name === "vc-row") {
        this.y = this.$parent.$children
          .slice(0, -1)
          .reduce((s, v) => s + v.height, y);
      } else {
        this.y = y;
        this.x = this.$parent.$children
          .slice(0, -1)
          .reduce((s, v) => s + v.width, x);
      }
    } else {
      this.index = 0;
    }
  },
  mounted() {},
  beforeDestroy() {
    // let children = this.$parent._physics.children;
    // for (var i = 0, len = children.length; i < len; i++) {
    //   if (children[i] === this._physics) {
    //     children.splice(i, 1);
    //   }
    // }
  }
});
