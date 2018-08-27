import BarWGrid from "../components/BarWGrid.vue";
import BubbleChart from "../components/BubbleChart.vue";
import BubbleGrid from "../components/BubbleGrid.vue";
import BoxPlotWGrid from "../components/BoxPlotWGrid.vue";
import DendrogramMouse from "../components/DendrogramMouse.vue";

export const routes = [
  { path: "", component: BarWGrid, name: "barWGrid" },
  { path: "/bubblechart", component: BubbleChart, name: "bubbleChart" },
  { path: "/bubblegrid", component: BubbleGrid, name: "bubbleGrid" },
  { path: "/boxplot", component: BoxPlotWGrid, name: "BoxPlotWGrid" },
  { path: "/dendrogram", component: DendrogramMouse, name: "DendrogramMouse" },
  { path: "*", redirect: "/" }
];
