<template>
  <v-app>
    <v-container text-xs-center>
      <v-layout row flex>
        <v-flex xs12>
            <v-client-table
              :data="tableData"
              :columns="columns"
              :options="options"
              :isClientSide="true"
            ></v-client-table>
        </v-flex>
      </v-layout>
      <v-layout row flex>
        <v-flex xs12>
          <bullet-chart
            :data-model="tableData"
          ></bullet-chart>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { D3BulletChart, D3BarChart } from "jscatalyst";
import { mapGetters } from "vuex";

export default {
  name: "app",
  mixins: ["styleTogglerMixin"],
  components: {
    barChart: D3BarChart,
    bulletChart: D3BulletChart
  },
  computed: { ...mapGetters(["tableData", "columns", "options"]) }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
