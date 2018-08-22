<template>
<v-app>
  <router-view></router-view>      
</v-app>
</template>

<script>
import { D3BarChart } from "jscatalyst";
import { mapGetters } from "vuex";
// import { AgGridVue } from "ag-grid-vue";
// import barWGrid from "./components/BarWGrid.vue";

export default {
  name: "app"
  // components: {
  //   barChart: D3BarChart,
  //   lineChart: D3LineChart,
  //   AgGridVue,
  //   barWGrid
  // },
  // computed: {
  //   ...mapGetters(["tableData", "columns", "options", "height"])
  // },
  // methods: {
  //   onGridReady(params) {
  //     this.gridApi = params.api;
  //     this.columnApi = params.columnApi;
  //     this.gridApi.sizeColumnsToFit();
  //   },
  //   setFilter() {
  //     let tooltip = document.getElementsByClassName("d3_visuals_tooltip")[0];
  //     let x = null;
  //     if (tooltip.getElementsByTagName("b")[0]) {
  //       x = tooltip.getElementsByTagName("b")[0].innerHTML;
  //     }
  //     if (this.gridApi) {
  //       this.gridApi.setQuickFilter(x);
  //     }
  //   },
  //   removeFilter() {
  //     if (this.gridApi) {
  //       this.gridApi.setQuickFilter(null);
  //     }
  //   }
  // }
};
</script>

<style>
</style>
