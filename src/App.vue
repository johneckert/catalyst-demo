<template>
  <!-- <div id="app">
    <div class="grid">
      <v-client-table
        :data="tableData"
        :columns="columns"
        :options="options"
        :isClientSide="true"
      ></v-client-table>
    </div>
    <div class="chart">
      <div @click="selectEl(event.target)" style="height:400px">
        <bar-chart
          :data-model="tableData"
          title="Fake Table"
      ></bar-chart>
      </div>
    </div>
  </div> -->
<v-app>
  <v-container>
    <v-layout >
      <v-flex>
        <v-card :height="height">
          <v-client-table
          name="barTable"
        :data="tableData"
        :columns="columns"
        :options="options"
        :isClientSide="true"
      ></v-client-table>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card :height="height">
          <bar-chart
          @click.native="selectEl"
          :data-model="tableData"
          title="Fake Table"
      ></bar-chart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import { D3BarChart } from "jscatalyst";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  mixins: ["styleTogglerMixin"],
  components: {
    barChart: D3BarChart
  },
  computed: {
    ...mapGetters(["tableData", "columns", "options", "clicked", "height"])
  },
  methods: {
    ...mapMutations(["selectEl"])
  }
};
</script>

<style>
.grid {
  text-align: center;
  padding: 0 30vw;
}

.chart {
  height: 40vw;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
