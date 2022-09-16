import { renderPagination, displayQuestions } from "./src/views/pagination.js";
import { renderQuestions } from "./src/views/render.js";
import { Answers } from "./src/data/index.js";

window.addEventListener("load", () => {
  renderQuestions();
  displayQuestions(1);
  renderPagination();
});

document.getElementById("questionsQuantity").addEventListener("change", () => {
  displayQuestions(1);
  renderPagination();
});

document.getElementById("send").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(Answers);
});
