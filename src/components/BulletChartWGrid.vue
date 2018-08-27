<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="bulletGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="bulletColumns" 
            :rowData="bulletData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <bullet-chart
          xaxis-label="x"
          yaxis-label="y"
          @jsc_click="logEvent"
          @jsc_mouseover="logEvent"
          @mouseout.native="removeFilter"
          :data-model="bulletData"
          title="Bullet Chart"
      ></bullet-chart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3BulletChart } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "BulletChartWGrid",
  components: {
    bulletChart: D3BulletChart,
    AgGridVue
  },
  computed: {
    ...mapGetters(["bulletData", "bulletColumns", "options", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    logEvent(data) {
      console.log(event);
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
    }
  }
};
</script>

<style>
</style>
