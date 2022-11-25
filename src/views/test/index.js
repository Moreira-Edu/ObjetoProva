google.charts.load("current", { packages: ["corechart"] });
import RenderTest from "../../components/test/testComponent.js";
import { updateAnswers } from "../../store/data/localStorageModule.js";
import { progressUpdate } from "./progressUpdate.js";
import { correctAnswers } from "../../store/data/answers.js";
import { drawCharts, drawStack } from "../../components/chart/drawChart.js";

const containersReferences = {
  test: document.getElementById("TestContainer"),
  // pagination: document.getElementById(),
};
window.addEventListener("load", () => {
  updateAnswers();
  containersReferences.test.append(RenderTest());
  progressUpdate();

  document.getElementById("send").addEventListener("click", () => {
    document.getElementsByTagName("main")[0].style =
      "grid-template-columns: 50% 50%;";
    document.getElementById("send").setAttribute("disabled", true);
    Array.from(document.getElementsByTagName("input")).forEach((input) => {
      input.setAttribute("disabled", true);
    });
    Array.from(document.getElementsByTagName("label")).forEach((label) => {
      label.className = "wrong-answer";
    });
    correctAnswers().forEach((id) => {
      document.querySelectorAll(`[for="${id}"]`)[0].className =
        "correct-answer";
    });
    containersReferences.test.scrollTo(0, 0);

    const statisticContainer = document.querySelectorAll(".statistic");
    statisticContainer.forEach((container) => {
      drawStack(container.id);
    });
    drawCharts();
    localStorage.removeItem("answers");
  });
});
