<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="boxGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="ganttColumns" 
            :rowData="ganttData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple" ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <gantt-chart
            @jsc_mouseover="logMouseover"
            @jsc_click="logClick"
            :data-model="ganttData"
            title="Gantt Chart"
          ></gantt-chart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3GanttChart } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "GanttWGrid",
  components: {
    ganttChart: D3GanttChart,
    AgGridVue
  },
  computed: {
    ...mapGetters(["ganttData", "ganttColumns", "options", "height"])
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
    logMouseover(data) {
      console.log(data);
    },
    logClick(data) {
      console.log(data);
    }
  }
};
</script>

<style>
</style>
