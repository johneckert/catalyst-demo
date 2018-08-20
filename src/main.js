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
      { x: "A", y: 13.3 },
      { x: "B", y: 12.08 },
      { x: "C", y: 14.62 },
      { x: "D", y: 17.57 },
      { x: "E", y: 14.35 }
    ],
    columns: ["x", "y"],
    options: {},
    clicked: "zfsdfsdf"
  },
  getters: {
    tableData: state => state.tableData,
    columns: state => state.columns,
    options: state => state.options,
    clicked: state => state.clicked
  },
  mutations: {
    selectEl: (state, payload) => {
      state.clicked = payload;
    }
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
