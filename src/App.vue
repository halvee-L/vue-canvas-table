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
          <!-- <vc-text>{{'单元格'+col.data}}</vc-text> -->
        </vc-col>
      </vc-row>
    </vc-table>
  </div>
</template>
<script>
import { vcTable, vcRow, vcCol } from "./components";
import vcText from "./components/plugins/vcText";
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
  components: { vcTable, vcRow, vcCol, vcText }
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
