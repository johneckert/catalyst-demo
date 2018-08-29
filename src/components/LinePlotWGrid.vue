<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="lineGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="linePlotColumns" 
            :rowData="linePlotData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <line-plot
          @jsc_mouseover="testOver"
          @jsc_click="testClick"
          :dataModel="linePlotData"
          title="line plot"
          ></line-plot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3LinePlot } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "LinePlotWGrid",
  components: {
    linePlot: D3LinePlot,
    AgGridVue
  },
  computed: {
    ...mapGetters(["linePlotData", "linePlotColumns", "options", "height"])
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
