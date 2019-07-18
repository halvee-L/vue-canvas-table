<template>
  <div id="app">
    <vc-table
      :styles="style"
      :width="1000"
      :height="600"
      style="margin-bottom:20px;margin-left:50px;cursor:pointer;margin-top:100px;"
      @cell-enter="cellEnter"
      @cell-out="cellOut"
    >
      <vc-row :key="ri" v-for="(row,ri) in rows">
        <vc-col :key="ci" :data="col.data" :styles="col.style" v-for="(col,ci) in row.cols">
          {{col.data}}
          <vc-drag v-if="ri===0&& ci===0"></vc-drag>
          <!-- <vc-text>{{'单元格'+col.data}}</vc-text> -->
        </vc-col>
      </vc-row>
    </vc-table>
    <!-- <div style="margin-top:20px; border:1px solid red;">
      <canvas id="jsCanvas"></canvas>
    </div>-->
  </div>
</template>
<script>
import { vcTable, vcRow, vcCol } from "./components";
import vcText from "./components/plugins/vcText";
import vcDrag from "./components/plugins/vcDrag";
import jsTable from "./components-js/jcTable.js";
const createColor = (random, i) =>
  random
    ? "#" +
      Math.floor(Math.random(i) * 16777215).toString(16) +
      "" +
      Math.floor(Math.random(i) * 150 + 20).toString(16)
    : "white";
export default {
  name: "app",
  data() {
    let rows = [];
    let isPrint = (x, y) => (x > 0) & (y > 0) && y <= x && x <= 9;
    for (var j = 0; j < 30; j++) {
      let cols = [];
      for (var i = 0; i < 20; i++) {
        let _is = isPrint(j, i);
        cols.push({
          data: _is ? i + "*" + j + "=" + i * j : "--",
          style: {
            backgroundColor: createColor(_is, i)
            // boder: "1px solid red"
          }
        });
      }
      rows.push({
        style: {},
        cols
      });
    }
    return {
      rows: rows,
      style: {}
    };
  },
  methods: {
    cellEnter(cell) {
      cell.styles.backgroundColor = "red";
    },
    cellOut(cell) {
      cell.styles.backgroundColor = createColor(cell.data != "--", 1);
    }
  },
  mounted() {
    // let canvas = document.getElementById("jsCanvas");
    // let jst = new jsTable(canvas, {
    //   width: 1000,
    //   height: 600
    // });
    // for (let i = 0, len = this.rows.length; i < len; i++) {
    //   let row = jst.addChildren(28, {});
    //   let _rd = this.rows[i];
    //   for (let j = 0, len1 = _rd.cols.length; j < len1; j++) {
    //     row.addChildren(90, {});
    //   }
    // }
    // jst.update();
    // window.jst = jst;
  },
  components: { vcTable, vcRow, vcCol, vcText, vcDrag }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
