import Emitter from "../components/util/Emitter";
import Brush from "../components/util/Brush";
import graphical from "../components/util/graphical";
import geometry from "../components/util/geometry";

const isArray = (() =>
  Array.isArray
    ? arr => Array.isArray(arr)
    : arr => Object.prototype.toString.call(arr) === "[object Array]")();
export default class extends Emitter {
  constructor(parent, options = {}) {
    super(options);
    this.x = 0.5;
    this.y = 0.5;
    this.width = 0;
    this.height = 0;
    // this.styles =
    this.children = [];
    this.styles = {};
    this.parent = parent || {};
    this.physics = [];
    this.index = parent ? this.parent.children.length : 0;
    parent && this.parent.children.push(this);
    Object.assign(
      this,
      {
        tableTag: true,
        brush: (parent && this.parent.brush) || new Brush(),
        graphical,
        geometry,
        emitter: this.parent.emitter || new Emitter(),
        isMouseIn: false
      },
      options
    );
    this.init();
  }
  init() {
    if (this.parent.tableTag) {
      let { x, y } = this.parent;
      let name = this.name;
      if (name === "vc-row") {
        this.y = this.parent.children
          .slice(0, -1)
          .reduce((s, v) => s + v.height, y);
      } else {
        this.y = y;
        this.x = this.parent.children
          .slice(0, -1)
          .reduce((s, v) => s + v.width, x);
      }
    } else {
      this.index = 0;
    }
  }
  getData() {
    return {
      x: this.x,
      y: this.y,
      w: this.width,
      h: this.height,
      c: this.children.map(vm => vm.getData())
    };
  }
  render() {
    this.physics.map(p => p.draw(this.brush));
    this.children.map(vm => vm && vm.render());
    this.afterRendered();
  }
  afterRendered() {}
  refresh() {}
  renderView() {
    if (this.parent.tableTag) {
      this.parent.renderView();
    } else {
      if (this.rendering) return;
      this.rendering = true;
      var timer = setTimeout(() => {
        clearTimeout(timer);
        this.rendering = false;
        this.render();
      }, 0);
    }
  }
  update() {
    this.updated();
    this.children.map(vm => vm.update());
  }
  updated() {
    this.refresh();
    this.render();
  }
  pushPhysics(physics) {
    this.physics.push(physics);
  }
  clearPhysics() {
    this.physics = [];
  }
  mousedown(evt) {}
  mouseup(evt) {}
  mousemove(evt) {
    let [x, y] = [evt.offsetX, evt.offsetY];
    if (this.isPointIn(x, y)) {
      this.children.map(vm => vm.mousemove(evt));
      if (!this.isMouseIn) {
        this.isMouseIn = true;
        this.emit("mousemove");
      }
    } else {
      this.mouseout(evt);
    }
  }
  mouseout(evt) {
    this.isMouseIn = false;
    this.children.map(vm => vm.mouseout(evt));
  }
  click(evt) {
    let [x, y] = [evt.offsetX, evt.offsetY];
    if (this.isPointIn(x, y)) {
      this.children.map(vm => vm.mousemove(evt));
      this._click && this._click();
    }
  }
  mouseenter() {}
  isPointIn(x, y) {
    return (
      this.x <= x &&
      this.y <= y &&
      this.x + this.width >= x &&
      this.y + this.height >= y
    );
  }
}
