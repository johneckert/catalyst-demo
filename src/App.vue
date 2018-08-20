<template>
  <v-app>
    <v-container text-xs-center>
      <v-layout align-center justify-center row>
        <v-flex xs12>
            <v-client-table
              :data="tableData"
              :columns="columns"
              :options="options"
            ></v-client-table>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row>
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
import { D3BulletChart } from "jscatalyst";

export default {
  name: "app",
  components: {
    bulletChart: D3BulletChart
  },
  data: function() {
    return {
      tableData: [
        {
          title: "Revenue",
          subtitle: "US$, in thousands",
          ranges: [150, 225, 300],
          measures: [270],
          markers: [250]
        },
        {
          title: "Profit",
          subtitle: "%",
          ranges: [20, 25, 30],
          measures: [23],
          markers: [26]
        },
        {
          title: "Order Size",
          subtitle: "US$, average",
          ranges: [350, 500, 600],
          measures: [320],
          markers: [550]
        },
        {
          title: "New Customers",
          subtitle: "count",
          ranges: [1400, 2000, 2500],
          measures: [1650],
          markers: [2100]
        },
        {
          title: "Satisfaction",
          subtitle: "out of 5",
          ranges: [3.5, 4.25, 5],
          measures: [4.7],
          markers: [4.4]
        }
      ],
      columns: ["title", "subtitle", "ranges", "measures", "markers"],
      options: {}
    };
  }
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
