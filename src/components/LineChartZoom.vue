<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="lineGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="lineColumns" 
            :rowData="lineData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <line-chart-zoom
          xaxis-label="x"
          yaxis-label="y"
          @jsc_mouseover="testOver"
          @jsc_click="testClick"
          :data-model="lineData"
          title="line Chart"
      ></line-chart-zoom>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3ZoomableLineChart } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "LineChartWGrid",
  components: {
    lineChartZoom: D3ZoomableLineChart,
    AgGridVue
  },
  computed: {
    ...mapGetters(["lineData", "lineColumns", "options", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    testOver(data) {
      console.log("over", data);
    },
    testClick(data) {
      console.log("click", data);
    }
  }
};
</script>

<style>
</style>
