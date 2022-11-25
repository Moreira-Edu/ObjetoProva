import { createElAndAtt } from "../utils/htmlHelper.js";
import { Test, markAnswer, markedAnswer } from "../../store/data/index.js";
import { progressUpdate } from "../../views/test/progressUpdate.js";

function renderAnswerOptions(questionId, options) {
  const answersElement = createElAndAtt("ul", {
    attributes: { class: "question-answer" },
  });

  options.forEach(({ id, AnswerText }) => {
    const isAnswered = markedAnswer(questionId, id) && { checked: "" };

    const label = createElAndAtt("label", {
      innerHTML: AnswerText,
      attributes: { for: `answer-${id}` },
    });

    const input = createElAndAtt("input", {
      attributes: {
        id: `answer-${id}`,
        name: `question-${questionId}`,
        type: "radio",
        ...isAnswered,
      },
      eventsListeners: {
        click: () => {
          markAnswer(questionId, id);
          progressUpdate();
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

  const questionNumber = createElAndAtt("h1", { innerHTML: QuestionId });
  const questionText = createElAndAtt("p", {
    innerHTML: QuestionText,
    attributes: { class: "text" },
  });
  const questionEnunciation = createElAndAtt("p", {
    innerHTML: QuestionEnunciation,
  });
  const questionFont = createElAndAtt("small", { innerHTML: Font });

  const questionElement = createElAndAtt("li", {
    attributes: { questionId: QuestionId, class: "question visible-question" },
    childElements: [
      createElAndAtt("div", {
        attributes: { class: "question-text" },
        childElements: [
          questionNumber,
          QuestionText ? questionText : null,
          questionEnunciation,
        ],
      }),
      renderAnswerOptions(QuestionId, AnswerOptions),
      Font ? questionFont : null,
    ],
  });

  return questionElement;
}

function renderTest() {
  const TestElements = document.createDocumentFragment();

  Test.TestData.forEach((question) => {
    TestElements.appendChild(renderQuestion(question));
  });

  TestElements.appendChild(
    createElAndAtt("button", {
      attributes: { id: "send", class: "send-button", disabled:true },
      innerHTML: "Enviar",
    })
  );

  return TestElements;
}

export default () => renderTest();
