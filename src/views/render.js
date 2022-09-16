import { Test, markAnswer } from "../data/index.js";
/**
 * Create a HTML Element and bind Attributes
 * @param {String} el HTML element name
 * @param {Object} attr Attributes for HTML element
 * @param {Object} options Optional configs {innerHtml , [childElements], {eventsListeners}}
 * @param {String} options.innerHTML
 * @param {Array} options.childElements
 * @param {Array} options.eventsListeners
 * @returns {HTMLElement}
 */
export function createElAndAtt(el, attr, options = false) {
  const element = document.createElement(el);

  if (options) {
    if (options.innerHTML) {
      element.innerHTML = options.innerHTML;
    }
    if (options.childElements) {
      options.childElements.forEach((htmlElement) => {
        element.appendChild(htmlElement);
      });
    }
    if (options.eventsListeners) {
      Object.entries(options.eventsListeners).forEach(
        ([eventListenerName, eventListener]) => {
          element.addEventListener(eventListenerName, eventListener);
        }
      );
    }
  }

  if (!attr) return element;

  Object.entries(attr).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

/**
 * Render the Answer Options
 * @param {Number} questionId Question identifier
 * @param {Array} options All alternatives
 * @returns {HTMLElement}
 */
export function renderAnswerOptions(questionId, options) {
  const result = document.createDocumentFragment();

  options.forEach(({ id, AnswerText }) => {
    const label = createElAndAtt(
      "label",
      { for: `answer-${id}` },
      { innerHTML: AnswerText }
    );
    const input = createElAndAtt(
      "input",
      {
        id: `answer-${id}`,
        name: `question-${questionId}`,
        type: "radio",
        "data-id": id,
      },
      {
        eventsListeners: {
          click: () => {
            markAnswer(questionId, id);
          },
        },
      }
    );
    const li = createElAndAtt("li", {});

    li.appendChild(input);
    li.appendChild(label);

    result.appendChild(li);
  });

  return result;
}

/**
 * Render the test
 * @param {Object} container container with all questions
 * @returns {HTMLElement}
 */
export function loadElementsQuestions() {
  const result = document.createDocumentFragment();

  Test.forEach(
    ({
      QuestionId,
      QuestionText,
      QuestionEnunciation,
      AnswerOptions,
      Font,
    }) => {
      const li = createElAndAtt("li", { questionId: QuestionId });

      const questionTexts = createElAndAtt(
        "div",
        { "question-id": QuestionId },
        {
          childElements: [
            createElAndAtt("p", {}, { innerHTML: QuestionText }),
            createElAndAtt("small", {}, { innerHTML: Font }),
            createElAndAtt("span", {}, { innerHTML: QuestionEnunciation }),
          ],
        }
      );

      const ol = createElAndAtt("ol", { class: "answers-options" });

      const questionsOptionsLi = renderAnswerOptions(QuestionId, AnswerOptions);

      li.appendChild(questionTexts);
      li.appendChild(ol);
      ol.appendChild(questionsOptionsLi);

      result.appendChild(li);
    }
  );

  return result;
}

export function renderQuestions() {
  document
    .getElementById("questionsContainer")
    .replaceChildren(loadElementsQuestions());
}

export default {
  renderQuestions,
  renderAnswerOptions,
  createElAndAtt,
  loadElementsQuestions,
};
