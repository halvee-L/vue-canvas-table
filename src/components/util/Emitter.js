export default class Emitter {
  constructor() {
    this.listener = {};
  }
  on(name, fn, ctx) {
    let list = this.listener[name] || (this.listener[name] = []);
    list.push({
      name,
      fn,
      ctx
    });
    return this;
  }
  emit(name, ...args) {
    let list = (this.listener[name] || []).slice();
    for (let i = 0, len = list.length; i < len; i++) {
      let emitter = list[i];
      try {
        emitter.fn.apply(emitter.ctx, args);
      } catch (e) {
        console.warn("Emitter:warn", e);
      }
    }
    return this;
  }
  off(name, fn, ctx) {
    if (!name) {
      this.listener = {};
      return;
    }
    let list = this.listener[name] || [];
    for (let i = list.length - 1; i >= 0; i--) {
      let emitter = list[i];
      if (emitter.fn === fn || emitter.ctx === ctx) {
        list.splice(i, 1);
      }
    }
    return this;
  }
}
