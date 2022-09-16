import { createElAndAtt } from "./render.js";
import { Test } from "../data/index.js";

export let currentPage = 1;

export function questionsIndexRange(pageNumber) {
  const pageSize = document.getElementById("questionsQuantity").value;

  return {
    LastIndex: pageSize * pageNumber,
    FirtIndex: pageSize * Math.max(--pageNumber, 0),
  };
}

/**
 * Function that switch question on dom
 * @param {string} text
 */
export function displayQuestions(pageNumber) {
  const pageSize = document.getElementById("questionsQuantity").value;

  const questionsIndex = questionsIndexRange(pageNumber);
  currentPage = pageNumber;

  const questionsToDisplay = Test.slice(
    questionsIndex.FirtIndex,
    questionsIndex.LastIndex
  ).map(({ QuestionId }) => QuestionId);

  document.querySelectorAll("[questionId]").forEach((questionElement) => {
    if (
      questionsToDisplay.includes(
        Number(questionElement.getAttribute("questionId"))
      )
    ) {
      questionElement.setAttribute("class", "visible-question");
    } else {
      questionElement.setAttribute("class", "invisible-question");
    }
  });
}

/**
 * Render pagination
 * @returns {HTMLElement}
 */
export function loadPaginationElement() {
  const totalPages = Test.length;
  const pageSize = document.getElementById("questionsQuantity").value;
  const paginationElement = document.createDocumentFragment();

  for (let i = 1; i <= Math.ceil(totalPages / pageSize); i++) {
    paginationElement.appendChild(
      createElAndAtt(
        "button",
        {
          indexButton: i,
          class: "pagination-item",
        },
        {
          innerHTML: i,
          eventsListeners: {
            click: (e) => {
              e.preventDefault();
              displayQuestions(i);
            },
          },
        }
      )
    );
  }

  return paginationElement;
}

export function renderPagination() {
  document
    .getElementById("paginationContainer")
    .replaceChildren(loadPaginationElement());
}

export default { renderPagination, loadPaginationElement, displayQuestions };
