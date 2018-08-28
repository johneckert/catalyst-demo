<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
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
      <v-flex xs-12>
        <v-card>
          <span>Label: {{current.label}}</span>
          <span>Max: {{current.max}}</span>
          <span>Quartile 3: {{current.quartile3}}</span>
          <span>Median: {{current.median}}</span>
          <span>Quartile 1: {{current.quartile1}}</span>
          <span>Min: {{current.min}}</span>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card :height="height">
          <box-plot
          @jsc_mouseover="handleMouseover"
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
  data() {
    return {
      current: {
        label: "",
        max: 0,
        median: 0,
        min: 0,
        quartile1: 0,
        quartile3: 0
      }
    };
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
    handleMouseover(data) {
      let dataObj = {
        label: data.label,
        max: data.max,
        median: data.median,
        min: data.min,
        quartile1: data.quartile1,
        quartile3: data.quartile3
      };
      this.current = dataObj;
    }
  }
};
</script>

<style>
</style>
