import changePageSize from "./src/helpers/changePageSize.js";
import switchers from "./src/helpers/switchPage.js";

const pageSize = document.querySelector("#select");

pageSize.addEventListener("change", (e) => {
  e.preventDefault();
  changePageSize(e.target.value);
  switchers();
});

window.addEventListener("load", () => {
  changePageSize(pageSize.value);
  switchers();
});

function sendAnswers(e) {
  e.preventDefault();

  alert("TODO: pegar respostas e checar");
  // document.querySelector('input[name="question-${questionId}"]:checked').value;
}
