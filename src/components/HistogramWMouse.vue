<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs6>
        <v-card :height="height / 2">
          <ag-grid-vue 
            id="histogramGrid"
            style="width: 100%; height: 100%" 
            class="ag-theme-balham" 
            :columnDefs="histogramColumns" 
            :rowData="histogramData" 
            :enableSorting="true" 
            :enableFilter="true"
            :gridReady="onGridReady"
            rowSelection="multiple"
          ></ag-grid-vue>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-card :height="height">
          <histogram
          @jsc_mouseover="test"
          @jsc_click="toggleClicked"
          :data-model="histogramData"
          title="histogram"
      ></histogram>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3Histogram } from "jscatalyst";
import { mapGetters } from "vuex";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "HistogramWMouse",
  components: {
    histogram: D3Histogram,
    AgGridVue
  },
  data() {
    return {
      selectedEl: "",
      clicked: false
    };
  },
  computed: {
    ...mapGetters(["histogramData", "histogramColumns", "height"])
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    handleMouseOver(event) {
      this.selectedEl = event.data.name
        .split("-")
        .join(" ")
        .toUpperCase();
    },
    handleClick(event) {
      console.log(event);
    },
    toggleClicked() {
      this.clicked = !this.clicked;
    },
    test(event) {
      console.log(event);
    }
  }
};
</script>

<style>
</style>
