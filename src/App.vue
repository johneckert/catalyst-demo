<template>
  <!-- <div id="app">
    <div class="grid">
      <v-client-table
        :data="tableData"
        :columns="columns"
        :options="options"
        :isClientSide="true"
      ></v-client-table>
    </div>
    <div class="chart">
      <div @click="selectEl(event.target)" style="height:400px">
        <bar-chart
          :data-model="tableData"
          title="Fake Table"
      ></bar-chart>
      </div>
    </div>
  </div> -->
<v-app>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue style="width: 100%; height: 100%" class="ag-theme-balham" :columnDefs="columnDefs" :rowData="rowData"></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <bar-chart
          @click.native="selectEl"
          :data-model="tableData"
          title="Fake Table"
      ></bar-chart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import { D3BarChart } from "jscatalyst";
import { mapGetters, mapMutations } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "app",
  mixins: ["styleTogglerMixin"],
  components: {
    barChart: D3BarChart,
    AgGridVue
  },
  computed: {
    ...mapGetters(["tableData", "columns", "options", "clicked", "height"])
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "x", field: "x" },
      { headerName: "y", field: "y" }
    ];
    this.rowData = [
      { x: "A", y: 13.3 },
      { x: "B", y: 12.08 },
      { x: "C", y: 14.62 },
      { x: "D", y: 17.57 },
      { x: "E", y: 14.35 }
    ];
  },
  methods: {
    ...mapMutations(["selectEl"])
  }
};
</script>

<style>
.grid {
  text-align: center;
  padding: 0 30vw;
}

.chart {
  height: 40vw;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
