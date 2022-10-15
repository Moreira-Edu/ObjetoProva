import { getResult } from "../../store/data/index.js";
import { drawChart } from "../utils/chartModel.js";

function drawPie() {
  const { absolute } = getResult();
  const column = [
    ["string", "Legenda"],
    ["number", "porcentagem"],
  ];
  const options = {
    title: "Quantidade de acertos e erros totais",
    titleTextStyle: {
      color: "black",
      fontSize: 16,
      bold: true,
    },
    is3D: true,
    legend: "labeled",
  };

  drawChart(column, Object.entries(absolute), "PieChart", "charts", options);
}

function drawColumn() {
  const { perTopic } = getResult();
  const column = [
    ["string", "Tópico"],
    ["number", "Acertos"],
    ["number", "Erros"],
  ];
  const arrData = [];
  Object.values(perTopic).forEach((topic) => {
    arrData.push(Object.values(topic));
  });
  const options = {
    title: "Quantidade de acertos e erros por tópico.",
    legend: "none",
  };

  drawChart(column, arrData, "ColumnChart", "charts-n", options);
}

export function drawCharts() {
  drawPie();
  drawColumn();
}
