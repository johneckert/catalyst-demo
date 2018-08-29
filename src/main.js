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
import { boxPlotData, boxPlotColumns } from "./mockData/boxPlotData";
import { bulletData, bulletColumns } from "./mockData/bulletData";
import { dendroData } from "./mockData/dendroData";
import { diffData, diffColumns } from "./mockData/differenceData";
import { forceData, forceColumns } from "./mockData/forceData";
import { ganttData, ganttColumns } from "./mockData/ganttData";
import { heatData, heatColumns } from "./mockData/heatData";
import { histogramData, histogramColumns } from "./mockData/histogramData";
import { lineData, lineColumns } from "./mockData/lineChartData";

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
    boxPlotData,
    boxPlotColumns,
    bulletData,
    bulletColumns,
    dendroData,
    diffData,
    diffColumns,
    forceData,
    forceColumns,
    ganttData,
    ganttColumns,
    heatData,
    heatColumns,
    histogramData,
    histogramColumns,
    lineData,
    lineColumns,
    options: {},
    height: 500
  },
  getters: {
    options: state => state.options,
    height: state => state.height,
    barData: state => state.barData,
    barColumns: state => state.barColumns,
    bubbleData: state => state.bubbleData,
    bubbleColumns: state => state.bubbleColumns,
    boxPlotData: state => state.boxPlotData,
    boxPlotColumns: state => state.boxPlotColumns,
    bulletData: state => state.bulletData,
    bulletColumns: state => state.bulletColumns,
    dendroData: state => state.dendroData,
    diffData: state => state.diffData,
    diffColumns: state => state.diffColumns,
    forceData: state => state.forceData,
    forceColumns: state => state.forceColumns,
    ganttData: state => state.ganttData,
    ganttColumns: state => state.ganttColumns,
    heatData: state => state.heatData,
    heatColumns: state => state.heatColumns,
    histogramData: state => state.histogramData,
    histogramColumns: state => state.histogramColumns,
    rowData: state => {
      const convertedData = [];
      state.histogramData.map(dataPoint => {
        let dataObj = { value: dataPoint };
        convertedData.push(dataObj);
      });
      return convertedData;
    },
    lineColumns: state => state.lineColumns,
    lineData: state => state.lineData
  }
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
