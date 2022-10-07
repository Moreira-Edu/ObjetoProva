import { drawPie, drawColumn } from "./drawChart.js";
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  drawPie();
  drawColumn();
}
