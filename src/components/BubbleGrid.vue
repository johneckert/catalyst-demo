<template>
  <v-flex row>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="bubbleGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="bubbleColumns" 
            :rowData="bubbleData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>  
</template>
<script>
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "BubbleGrid",
  components: {
    AgGridVue
  },
  computed: {
    ...mapGetters(["bubbleData", "bubbleColumns", "options", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    setFilter() {
      let tooltip = document.getElementsByClassName("d3_visuals_tooltip")[0];
      let x = null;
      if (tooltip.getElementsByTagName("b")[0]) {
        x = tooltip.getElementsByTagName("b")[0].innerHTML;
      }
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
};
</script>
<style>
</style>
