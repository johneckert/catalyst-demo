import BarWGrid from "../components/BarWGrid.vue";
import BubbleChart from "../components/BubbleChart.vue";
import BubbleGrid from "../components/BubbleGrid.vue";
import BoxPlotWGrid from "../components/BoxPlotWGrid.vue";
import BulletChartWGrid from "../components/BulletChartWGrid.vue";
import DendrogramMouse from "../components/DendrogramMouse.vue";
import DifferenceWGrid from "../components/DifferenceWGrid.vue";
import ForceGraph from "../components/Force.vue";
import GantWGrid from "../components/GanttWGrid.vue";
import HeatMapWGrid from "../components/HeatMapWGrid.vue";
import HistogramWMouse from "../components/HistogramWMouse.vue";
import LineChartWGrid from "../components/LineChartWGrid.vue";
import LineChartZoom from "../components/LineChartZoom.vue";

export const routes = [
  { path: "/bar", component: BarWGrid, name: "BarWGrid" },
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
  { path: "/force", component: ForceGraph, name: "ForceGraph" },
  { path: "/gantt", component: GantWGrid, name: "GanttWGrid" },
  { path: "/heat", component: HeatMapWGrid, name: "HeatMapWGrid" },
  { path: "/histogram", component: HistogramWMouse, name: "HistogramWMouse" },
  { path: "/line", component: LineChartWGrid, name: "LineChartWGrid" },
  { path: "/zoom", component: LineChartZoom, name: "LineChartZoom" },
  { path: "*", redirect: "/bar" }
];
