import { drawCharts } from "../../components/chart/drawChart.js";
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCharts);

window.addEventListener("resize", () => {
  drawCharts();
});
