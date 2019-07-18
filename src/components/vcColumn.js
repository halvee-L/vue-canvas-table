import VCBase from "./vcBase";
export default VCBase.extend({
  props: {
    prop: {
      type: String,
      default: "prop"
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    textAglin: {
      type: String,
      default: "left"
    }
  },
  methods: {
    refresh() {}
  }
});
