import { applyStyles } from "../../components/utils/htmlHelper.js";
import { totalAnswered } from "../../store/data/index.js";

export function progressUpdate() {
  const sendButton = document.getElementById("send");
  const progress = document.querySelector(".progress-bar");
  const progressTooltip = document.querySelector(".progress-tooltip");
  const progressValue = totalAnswered();
  progressTooltip.innerText = `Progresso da prova: ${progressValue}%`;
  applyStyles(progress, { width: `${progressValue}%` });
  progressValue == 100 && sendButton.removeAttribute("disabled", "");
}
