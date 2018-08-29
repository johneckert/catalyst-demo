<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="boxGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="heatColumns" 
            :rowData="heatData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple" ></ag-grid-vue>
        </v-card>
      </v-flex>
      
      <v-flex row>
        <v-card :height="height">
          <heat-map
           style="height:100%"
            @jsc_mouseover="setFilter"
            @mouseout.native="removeFilter"
            :data-model="heatData"
            title="Heat Map"
          ></heat-map>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3HeatMap } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "HeatMaptWGrid",
  components: {
    heatMap: D3HeatMap,
    AgGridVue
  },
  computed: {
    ...mapGetters(["heatData", "heatColumns", "options", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    setFilter(data) {
      let dateFilterInstance = this.gridApi.getFilterInstance("date");

      let model = dateFilterInstance.setModel({
        type: "contains",
        filter: data.date
      });
      dateFilterInstance.onFilterChanged();
    },
    removeFilter() {
      if (this.gridApi) {
        this.gridApi.setFilterModel(null);
      }
    }
  }
};
</script>

<style>
</style>
