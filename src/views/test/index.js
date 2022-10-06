import RenderTest from "../../components/test/testComponent/index.js";
import {
  renderPagination,
  switchPages,
} from "../../components/test/pagination/index.js";
import { updateAnswers } from "../../store/data/localStorageModule.js";
import { progressUpdate } from "./progressUpdate.js";

const containersReferences = {
  pagination: document.getElementById("paginationContainer"),
  test: document.getElementById("questionsContainer"),
};

window.addEventListener("load", () => {
  updateAnswers();
  containersReferences.test.append(RenderTest());
  containersReferences.pagination.append(renderPagination());
  switchPages(1);
  progressUpdate();
});

document.getElementById("questionsQuantity").addEventListener("change", () => {
  containersReferences.pagination.replaceChildren(renderPagination());
  switchPages(1);
});

document.getElementById("send").addEventListener("click", (e) => {
  e.preventDefault();
});
