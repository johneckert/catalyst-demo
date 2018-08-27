import BarWGrid from "../components/BarWGrid.vue";
import BubbleChart from "../components/BubbleChart.vue";
import BubbleGrid from "../components/BubbleGrid.vue";
import BoxPlotWGrid from "../components/BoxPlotWGrid.vue";
import BulletChartWGrid from "../components/BulletChartWGrid.vue";
import DendrogramMouse from "../components/DendrogramMouse.vue";
import DifferenceWGrid from "../components/DifferenceWGrid.vue";

export const routes = [
  { path: "", component: BarWGrid, name: "BarWGrid" },
  { path: "/bubblechart", component: BubbleChart, name: "BubbleChart" },
  { path: "/bubblegrid", component: BubbleGrid, name: "BubbleGrid" },
  { path: "/boxplot", component: BoxPlotWGrid, name: "BoxPlotWGrid" },
  {
    path: "/bulletChart",
    component: BulletChartWGrid,
    name: "BulletChartWGrid"
  },
  { path: "/dendrogram", component: DendrogramMouse, name: "DendrogramMouse" },
  { path: "/difference", component: DifferenceWGrid, name: "DifferenceWGrid" },
  { path: "*", redirect: "/" }
];
