import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import App from "./App.vue";
import "jscatalyst/dist/jscatalyst.min.js";
import { ClientTable } from "vue-tables-2";
import { ThemePlugin } from "jscatalyst";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(ClientTable);

const store = new Vuex.Store({
  state: {
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
  },
  getters: {
    tableData: state => state.tableData,
    columns: state => state.columns,
    options: state => state.options
  }
});

Vue.use(ThemePlugin, {
  store,
  themes: ["Blue", "Pink", "Green", "Brown", "Red", "Grey"]
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
