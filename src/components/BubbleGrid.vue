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
            @click.native="removeFilter"
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
    setFilter(label) {
      if (this.gridApi) {
        this.gridApi.setQuickFilter(label);
      }
    },
    removeFilter() {
      if (this.gridApi) {
        this.gridApi.setQuickFilter(null);
      }
    }
  },
  created() {
    this.bc = new BroadcastChannel("bubble_channel");
    this.bc.onmessage = event => {
      this.setFilter(event.data);
    };
  },
  beforeDestroy() {
    this.bc.close();
  }
};
</script>
<style>
</style>
