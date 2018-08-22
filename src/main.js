import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import App from "./App.vue";
import "jscatalyst/dist/jscatalyst.min.js";
import "jscatalyst/dist/jscatalyst.min.css";
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
import { routes } from "./routes/routes";
import { barData, barColumns } from "./mockData/barData";
import { bubbleData, bubbleColumns } from "./mockData/bubbleData";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ mode: "history", routes });

const store = new Vuex.Store({
  state: {
    barData,
    barColumns,
    bubbleData,
    bubbleColumns,
    options: {},
    height: 500
  },
  getters: {
    barData: state => state.barData,
    barColumns: state => state.barColumns,
    options: state => state.options,
    height: state => state.height,
    bubbleData: state => state.bubbleData,
    bubbleColumns: state => state.bubbleColumns
  }
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
