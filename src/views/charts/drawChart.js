import { getResult } from "../../store/data/index.js";
import { drawChart } from "./chartModel.js";

export function drawPie() {
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
      italic: false,
    },
    is3D: true,
    chartArea: { width: "50%", height: "75%" },
    legend: "labeled",
  };
  drawChart(column, Object.entries(absolute), "PieChart", "charts", options);
}

export function drawColumn() {
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
    chartArea: { width: "50%", height: "50%", backgroundColor: "" },
    legend: "none",
  };

  drawChart(column, arrData, "ColumnChart", "charts-n", options);
}
