<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="boxGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="boxPlotColumns" 
            :rowData="boxPlotData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <box-plot
          @jsc_mouseover="logMouseover"
          @jsc_click="logClick"
          :data-model="boxPlotData"
          title="Box Plot"
      ></box-plot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3BoxPlot } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "BoxPlotWGrid",
  components: {
    boxPlot: D3BoxPlot,
    AgGridVue
  },
  computed: {
    ...mapGetters(["boxPlotData", "boxPlotColumns", "options", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    setFilter(data) {
      let x = data.x;
      if (this.gridApi) {
        this.gridApi.setQuickFilter(x);
      }
    },
    removeFilter() {
      if (this.gridApi) {
        this.gridApi.setQuickFilter(null);
      }
    },
    logMouseover() {
      console.log(event);
    },
    logClick() {
      console.log(event);
    }
  }
};
</script>

<style>
</style>
