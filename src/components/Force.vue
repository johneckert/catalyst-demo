<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <!-- <v-card :height="height / 2">
          <ag-grid-vue 
            id="barGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="barColumns" 
            :rowData="barData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card> -->
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <force-graph
          @jsc_mouseover="testEvent"
          @jsc_click="testEvent"
          :data-model="forceData"
          title="Force Graph"
      ></force-graph>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3ForceGraph } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "ForceGraph",
  components: {
    forceGraph: D3ForceGraph,
    AgGridVue
  },
  computed: {
    ...mapGetters(["forceData", "barColumns", "options", "height"])
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
    testEvent(data) {
      console.log(data);
    }
  }
};
</script>

<style>
</style>
