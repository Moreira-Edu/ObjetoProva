import { paginate } from "./src/views/pagination.js";

const { renderPages, switchPage } = paginate(3);
renderPages();

const switchers = document.querySelectorAll("[data-switch]");
for (let button of switchers) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    switchPage(e.target.getAttribute("data-switch"));
  });
}

function sendAnswers(e) {
  e.preventDefault();
  alert("TODO: pegar respostas e checar");
  // document.querySelector('input[name="question-${questionId}"]:checked').value;
}
