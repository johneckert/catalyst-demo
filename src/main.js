import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import App from "./App.vue";
import "jscatalyst/dist/jscatalyst.min.js";
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
// import { ClientTable } from "vue-tables-2";
import { ThemePlugin } from "jscatalyst";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuex);
// Vue.use(ClientTable, {}, true);

const store = new Vuex.Store({
  state: {
    tableData: [
      { x: "A", y: 13.3 },
      { x: "B", y: 12.08 },
      { x: "C", y: 14.62 },
      { x: "D", y: 17.57 },
      { x: "E", y: 14.35 }
    ],
    columns: [
      {
        headerName: "x",
        field: "x",
        checkboxSelection: true,
        filter: "agTextColumnFilter"
      },
      { headerName: "y", field: "y" }
    ],
    options: {},
    height: 500,
    clicked: "zfsdfsdf",
    customFilters: [
      {
        name: "barFilter",
        callback: function(row, query) {
          return row.name[0] == query;
        }
      }
    ]
  },
  getters: {
    tableData: state => state.tableData,
    columns: state => state.columns,
    options: state => state.options,
    clicked: state => state.clicked,
    height: state => state.height
  },
  mutations: {
    selectEl: state => {
      //currently unused
      //Get clicked Bar's X value from tool tip
      let tooltip = document.getElementsByClassName("d3_visuals_tooltip")[0];
      let x = tooltip.getElementsByTagName("b")[0].innerHTML;
      state.clicked = x;
    },
    setClicked: (state, payload) => {
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
