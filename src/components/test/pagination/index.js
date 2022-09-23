import {
  createElAndAtt,
  replaceClass,
  swapClass,
} from "../../utils/htmlHelper.js";
import { Test } from "../../../store/data/index.js";

let currentPage = 1;

function getQuestionsIndexRange(pageNumber) {
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
export function switchPages(pageNumber) {
  currentPage = pageNumber;

  const questionsIndex = getQuestionsIndexRange(pageNumber);

  const questionsToDisplay = Test.TestData.slice(
    questionsIndex.FirtIndex,
    questionsIndex.LastIndex
  ).map(({ QuestionId }) => QuestionId);

  document.querySelectorAll("[questionId]").forEach((questionElement) => {
    const questionNumber = Number(questionElement.getAttribute("questionId"));

    if (questionsToDisplay.includes(questionNumber)) {
      replaceClass("hidden-question", "visible-question", questionElement);
    } else {
      replaceClass("visible-question", "hidden-question", questionElement);
    }
  });

  setCurrentPage(pageNumber);
}

function setCurrentPage(pageNumber) {
  const oldElement = document.getElementsByClassName("current-page")[0];
  const newElement =
    document.getElementsByClassName("pagination-button")[pageNumber];

  swapClass(oldElement, newElement, "current-page");
}

export function renderPagination() {
  const pageSize = document.getElementById("questionsQuantity").value;
  const testTotal = Test.TestData.length;
  const buttonsQuantity = Math.ceil(testTotal / pageSize);
  const paginationElement = document.createDocumentFragment();
  const paginationButtonsDiv = createElAndAtt("div", {
    attributes: { class: "pagination-numbers" },
  });

  for (let i = 1; i <= buttonsQuantity; i++) {
    paginationButtonsDiv.appendChild(
      createElAndAtt("button", {
        attributes: {
          class: `pagination-button ${i === 1 ? "current-page" : ""}`,
        },
        innerHTML: i,
        eventsListeners: {
          click: (e) => {
            e.preventDefault();
            switchPages(i);
          },
        },
      })
    );
  }

  //Back button
  paginationElement.prepend(
    createElAndAtt("button", {
      attributes: {
        class: "pagination-button",
      },
      innerHTML: "<<",
      eventsListeners: {
        click: (e) => {
          e.preventDefault();
          switchPages(Math.max(--currentPage, 1));
        },
      },
    })
  );

  paginationElement.appendChild(paginationButtonsDiv);

  //Next button
  paginationElement.appendChild(
    createElAndAtt("button", {
      attributes: {
        class: "pagination-button",
      },
      innerHTML: ">>",
      eventsListeners: {
        click: (e) => {
          e.preventDefault();
          switchPages(Math.min(++currentPage, buttonsQuantity));
        },
      },
    })
  );

  return paginationElement;
}

export default () => renderPagination();
