<template>
  <div id="app">
    <vc-table
      :styles="style"
      :width="800"
      :height="600"
      style="margin-bottom:20px;margin-left:50px;cursor:pointer;"
      @cell-enter="cellEnter"
      @cell-out="cellOut"
    >
      <vc-row :key="ri" v-for="(row,ri) in rows">
        <vc-col :key="ci" :data="col.data" :styles="col.style" v-for="(col,ci) in row.cols">
          <vc-text>{{col.data}}</vc-text>
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
    for (var j = 0; j < 30; j++) {
      let cols = [];
      for (var i = 0; i < 20; i++) {
        cols.push({
          data: j + "," + i,
          style: {
            backgroundColor: createColor(true, i)
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
      style: {
        // backgroundColor: "rgba(1, 1, 1, 0.1)",
        borderTop: "1px solid red",
        borderRight: "3px solid blue",
        borderBottom: "1px solid black",
        borderLeft: "1px solid green"
      }
    };
  },
  methods: {
    cellEnter(cell) {
      cell.styles.backgroundColor = "blue";
    },
    cellOut(cell) {
      cell.styles.backgroundColor = createColor(true, 1);
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
