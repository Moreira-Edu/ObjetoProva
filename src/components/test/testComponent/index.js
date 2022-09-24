import { createElAndAtt } from "../../utils/htmlHelper.js";
import { Test } from "../../../store/data/index.js";
import { tooltipUpdate } from "../../../views/test/tooltipUpdate.js";
import { markAnswer } from "../../../store/data/answers.js";

/**
 * Render the Answer Options
 * @param {Number} questionId Question identifier
 * @param {Array} options All alternatives
 * @returns {HTMLElement}
 */
function renderAnswerOptions(questionId, options) {
  const answersElement = createElAndAtt("ol", {
    attributes: { class: "answers-options" },
  });

  options.forEach(({ id, AnswerText }) => {
    const label = createElAndAtt("label", {
      innerHTML: AnswerText,
      attributes: { for: `answer-${id}` },
    });

    const input = createElAndAtt("input", {
      attributes: {
        id: `answer-${id}`,
        name: `question-${questionId}`,
        type: "radio",
      },
      eventsListeners: {
        click: () => {
          markAnswer(questionId, id);
          tooltipUpdate();
        },
      },
    });

    answersElement.appendChild(
      createElAndAtt("li", { childElements: [input, label] })
    );
  });

  return answersElement;
}

function renderQuestion(question) {
  const {
    QuestionId,
    DisciplineType,
    QuestionText,
    QuestionEnunciation,
    AnswerOptions,
    Font,
  } = question;

  const text = createElAndAtt("p", { innerHTML: QuestionText });
  const font = createElAndAtt("small", { innerHTML: Font });

  const questionElement = createElAndAtt("li", {
    attributes: { questionId: QuestionId, class: "question visible-question" },
    childElements: [
      createElAndAtt("h3", { innerHTML: `Questão ${QuestionId}` }),
      QuestionText ? createElAndAtt("p", { innerHTML: QuestionText }) : null,
      createElAndAtt("span", { innerHTML: QuestionEnunciation }),
      renderAnswerOptions(QuestionId, AnswerOptions),
      Font ? createElAndAtt("small", { innerHTML: Font }) : null,
    ],
  });

  return questionElement;
}

function renderTest() {
  const TestElements = document.createDocumentFragment();

  Test.TestData.forEach((question) => {
    TestElements.appendChild(renderQuestion(question));
  });

  return TestElements;
}

export default () => renderTest();
