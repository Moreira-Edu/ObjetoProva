import { paginate } from "../views/pagination.js";

const { switchPage } = paginate();

const switchers = () => {
  for (let button of document.querySelectorAll("[data-switch]")) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage(e.target.getAttribute("data-switch"));
    });
  }
};

export default switchers;
