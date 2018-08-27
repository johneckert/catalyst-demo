<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="diffGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="diffColumns" 
            :rowData="diffData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <difference-chart
          @jsc_mouseover="logMouseover"
          @jsc_click="logClick"
          :data-model="diffData"
          title="Difference Chart"
      ></difference-chart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3DifferenceChart } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "DifferenceWGrid",
  components: {
    differenceChart: D3DifferenceChart,
    AgGridVue
  },
  computed: {
    ...mapGetters(["diffData", "diffColumns", "options", "height"])
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
    logClick(data) {
      console.log("click", data);
    },
    logMouseover(data) {
      console.log("mouse", data);
    }
  }
};
</script>

<style>
</style>
