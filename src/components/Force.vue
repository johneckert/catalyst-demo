<template>
  <v-container>
    <v-layout >
      <v-flex row>
        <v-card :height="height / 1.5">
          <ag-grid-vue 
            id="barGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="forceColumns" 
            :rowData="forceData.nodes" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
      <v-flex row>
        <v-btn @click="removeFilter">Remove Filter</v-btn>
      </v-flex>
      <v-flex row>
        <v-card :height="height">
          <force-graph
          @jsc_mouseover="groupFilter"
          @jsc_click="nameFilter"
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
    ...mapGetters(["forceData", "forceColumns", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    groupFilter(data) {
      let groupFilterInstance = this.gridApi.getFilterInstance("group");

      let model = groupFilterInstance.setModel({
        type: "equals",
        filter: data.group
      });
      groupFilterInstance.onFilterChanged();
    },
    nameFilter(data) {
      let nameFilterInstance = this.gridApi.getFilterInstance("id");

      let model = nameFilterInstance.setModel({
        type: "equals",
        filter: data.id
      });
      nameFilterInstance.onFilterChanged();
    },
    removeFilter() {
      if (this.gridApi) {
        this.gridApi.setFilterModel(null);
      }
    },
    // removeFilter() {
    //   if (this.gridApi) {
    //     this.gridApi.setQuickFilter(null);
    //   }
    // },
    testEvent(data) {
      console.log(data);
    }
  }
};
</script>

<style>
</style>
