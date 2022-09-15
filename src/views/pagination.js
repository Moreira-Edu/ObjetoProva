import { renderQuestions, createElAndAtt } from "./render.js";
import { Test } from "../data/index.js";

/**
 *
 * @param {number} pageSize  number of items rendered in each page
 * @returns {} switchPage, renderPages
 */
export function paginate(pageSize) {
  const totalItems = Test.length;
  if (!pageSize || pageSize <= 0 || pageSize > totalItems) {
    pageSize = 1;
  }
  /**
   *
   * @param {string} text
   */
  const switchPage = (text) => {
    const pages = document.querySelectorAll("[data-page]");
    pages.forEach((page) => {
      const changeRegex = new RegExp(page.getAttribute("data-page"));
      const change = changeRegex.test(text);
      change ? (page.style.display = "block") : (page.style.display = "none");
    });
  };

  const totalPages = Math.ceil(totalItems / pageSize);
  const renderButtons = () => {
    const containerSwitch = createElAndAtt("div", {
      class: "container_switch",
    });
    containerSwitch.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const button = createElAndAtt(
        "button",
        {
          ["data-switch"]: `page${i - 1}`,
          class: "button-switcher",
        },
        i
      );

      containerSwitch.appendChild(button);
    }
    return containerSwitch;
  };

  /**
   * render pages
   */
  const renderPages = () => {
    const arrTest = [...Test];
    const container = document.querySelector("#questionsContainer");
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
    const questionsInHtml = createElAndAtt("ul", { id: "pagination" });
    const pages = [];
    for (let i = totalPages; i >= 1; i--) {
      pages.push(arrTest.splice(0, pageSize));
    }

    questionsInHtml.appendChild(renderQuestions(pages));
    fragment.appendChild(questionsInHtml);
    fragment.appendChild(renderButtons());
    container.append(fragment);

    switchPage("page0");
  };

  return {
    switchPage,
    renderPages,
  };
}
