import { checkedAnswers } from "../../store/data/answers.js";
import { applyStyles } from "../../components/utils/htmlHelper.js";

export function update() {
  const progress = document.querySelector(".progress-bar");
  const progressTooltip = document.querySelector(".progress-tooltip");
  const progressValue = checkedAnswers();

  progressTooltip.innerText = `Progresso da prova: ${progressValue}`;
  applyStyles(progress, { width: progressValue });
}
