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

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ routes });

const store = new Vuex.Store({
  state: {
    barData: [
      { x: "A", y: 13.3 },
      { x: "B", y: 12.08 },
      { x: "C", y: 14.62 },
      { x: "D", y: 17.57 },
      { x: "E", y: 14.35 }
    ],
    columns: [
      {
        headerName: "X Value",
        field: "x"
      },
      { headerName: "Y Value", field: "y" }
    ],
    options: {},
    height: 500
  },
  getters: {
    barData: state => state.barData,
    columns: state => state.columns,
    options: state => state.options,
    height: state => state.height
  }
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
