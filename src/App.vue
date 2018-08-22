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
          <ag-grid-vue 
            id="barGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="columns" 
            :rowData="tableData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <bar-chart
          @mouseover.native="setFilter"
          @mouseout.native="removeFilter"
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
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "app",
  mixins: ["styleTogglerMixin"],
  components: {
    barChart: D3BarChart,
    AgGridVue
  },
  computed: {
    ...mapGetters(["tableData", "columns", "options", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    setFilter() {
      let tooltip = document.getElementsByClassName("d3_visuals_tooltip")[0];
      let x = null;
      if (tooltip.getElementsByTagName("b")[0]) {
        x = tooltip.getElementsByTagName("b")[0].innerHTML;
      }
      if (this.gridApi) {
        this.gridApi.setQuickFilter(x);
      }
    },
    removeFilter() {
      this.gridApi.setQuickFilter(null);
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
