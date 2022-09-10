import { renderQuestions, createElAndAtt } from "./render.js";
import { Test } from "../data/index.js";

/**
 *
 * @param {number} pageSize  number of items rendered in each page
 * @returns {} switchPage, renderPages
 */
export function paginate(pageSize) {
  const totalItems = Test.length;
  if (!pageSize || pageSize <= 0) {
    pageSize = 1;
  }

  const totalPages = Math.ceil(totalItems / pageSize);
  const renderButtons = () => {
    const containerSwitch = createElAndAtt("div", {
      class: "container_switch",
    });
    for (let i = 1; i <= totalPages; i++) {
      const button = createElAndAtt("button", {
        ["data-switch"]: `${i - 1}`,
        class: "button-switcher",
      });

      button.innerText = i;

      containerSwitch.appendChild(button);
    }
    return containerSwitch;
  };

  /**
   * render pages
   */
  const renderPages = () => {
    const container = document.querySelector("#questionsContainer");
    const fragment = document.createDocumentFragment();
    const questionsInHtml = createElAndAtt("ul", { id: "pagination" });
    const pages = [];
    for (let i = totalPages; i >= 1; i--) {
      pages.push(Test.splice(0, pageSize));
    }

    questionsInHtml.appendChild(renderQuestions(pages));
    fragment.appendChild(questionsInHtml);
    fragment.appendChild(renderButtons());
    container.append(fragment);
  };

  /**
   *
   * @param {string} text
   */
  const switchPage = (text) => {
    const pages = document.querySelectorAll("[data-page]");
    pages.forEach((page) => {
      let change = page.getAttribute("data-page").match(text)?.input;
      change == page.getAttribute("data-page")
        ? (page.style.display = "block")
        : (page.style.display = "none");
    });
  };

  return {
    switchPage,
    renderPages,
  };
}
