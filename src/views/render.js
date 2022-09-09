/**
 * Create a HTML Element and bind Attributes
 * @param {String} el HTML element name
 * @param {Object} attr Attributes for HTML element
 * @param {String} innerHTML Optional innerHtml access
 * @returns {HTMLElement}
 */
export function createElAndAtt(el, attr, innerHTML = false) {
  const element = document.createElement(el);
  if (innerHTML) element.innerHTML = innerHTML;
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
    const label = createElAndAtt("label", { for: `answer-${id}` }, AnswerText);
    const input = createElAndAtt("input", {
      id: `answer-${id}`,
      name: `question-${questionId}`,
      type: "radio",
      "data-id": id,
    });
    const li = createElAndAtt("li", {});

    li.appendChild(input);
    li.appendChild(label);

    result.appendChild(li);
  });

  return result;
}

/**
 * Render the test
 * @param {Object} Test Test with all questions
 * @returns {HTMLElement}
 */
export function renderQuestions(Test) {
  const result = document.createDocumentFragment();

  Test.forEach(
    ({
      QuestionId,
      QuestionText,
      QuestionEnunciation,
      AnswerOptions,
      Font,
    }) => {
      const li = createElAndAtt("li", {});
      const p = createElAndAtt("p", {}, QuestionText);
      const small = createElAndAtt("small", {}, Font);
      const span = createElAndAtt("span", {}, QuestionEnunciation);
      const ol = createElAndAtt("ol", { class: "answers-options" });
      const questionsOptionsLi = renderAnswerOptions(QuestionId, AnswerOptions);

      if (QuestionText) li.appendChild(p);
      if (Font) li.appendChild(small);
      li.appendChild(span);
      li.appendChild(ol);
      ol.appendChild(questionsOptionsLi);

      result.appendChild(li);
    }
  );

  return result;
}

export default { renderQuestions, renderAnswerOptions, createElAndAtt };
