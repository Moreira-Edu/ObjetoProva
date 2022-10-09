import { drawCharts } from "./drawChart.js";
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCharts);

window.addEventListener("resize", () => {
  if (window.outerWidth < 800) {
    drawCharts();
  } else if (window.outerWidth >= 800) {
    drawCharts();
  }
});
