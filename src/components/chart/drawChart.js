import { createStatistic, getResult } from "../../store/data/index.js";
import { drawChart } from "../utils/chartModel.js";

function drawPie() {
  const { absolute } = getResult();
  const column = [
    ["string", "Legenda"],
    ["number", "porcentagem"],
  ];
  const options = {
    title: "Aproveitamento da prova",
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

function drawStack() {
  const randomStatistic = ["Alternativas", ...createStatistic()];

  const column = [
    ["string", "Alternativas"],
    ["number", "a"],
    ["number", "b"],
    ["number", "c"],
    ["number", "d"],
    ["number", "e"],
  ];
  const options = {
    title: "Porcentagem de alternativas selecionadas",
    height: 100,
    legend: "bottom",
    animation: {
      startup: true,
      duration: 800,
      easing: "out",
    },
    backgroundColor: "transparent",
    bar: { groupWidth: "15%" },
    isStacked: true,
  };

  drawChart(column, [randomStatistic], "BarChart", "charts-1", options);
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
    animation: {
      startup: true,
      duration: 800,
      easing: "out",
    },
  };

  drawChart(column, arrData, "ColumnChart", "charts-n", options);
}

export function drawCharts() {
  drawPie();
  drawColumn();
  drawStack();
}
