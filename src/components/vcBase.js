import Vue from "vue";
import Brush from "./util/Brush";
import graphical from "./util/graphical";
import geometry from "./util/geometry";
import Emitter from "./util/Emitter";

const isArray = (() =>
  Array.isArray
    ? arr => Array.isArray(arr)
    : arr => Object.prototype.toString.call(arr) === "[object Array]")();
export default Vue.extend({
  props: ["styles"],
  data() {
    return {
      tableTag: true,
      children: [],
      // brush: this.$parent.brush || initBrush(),
      graphical,
      geometry,
      x: 0.5,
      y: 0.5,
      index: -1,
      emitter: this.$parent.emitter || new Emitter(),
      isMouseIn: false
      // physics: []
    };
  },
  updated() {
    this.update();
  },
  methods: {
    getData() {
      return {
        x: this.x,
        y: this.y,
        w: this.width,
        h: this.height,
        c: this.$children.map(vm => vm.getData())
      };
    },
    updateChild() {
      this.children = this.$slots.default;
    },
    render() {
      this.physics.map(p => p.draw(this.brush));
      this.$children.map(vm => vm && vm.render());
      this.afterRendered();
    },
    afterRendered() {},
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
      this.render();
    },
    pushPhysics(physics) {
      this.physics.push(physics);
    },
    clearPhysics() {
      this.physics = [];
    },
    mousemove(evt) {
      if (this.isPointIn(evt.offsetX, evt.offsetY)) {
        this.$children.map(vm => vm.mousemove(evt));
        if (!this.isMouseIn) {
          // console.log("vcBase.mouseent.isMouseIn");
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

  created() {
    this.physics = [];
    this.brush = this.$parent.brush || new Brush();
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
  render(h) {
    this.update();
    let children = this.$slots.default;
    return h("s", {}, isArray(children) ? children : [children]);
  },
  mounted() {
    if (this.$parent.tableTag) {
      this.$el.parentElement.removeChild(this.$el);
    }
  }
});
