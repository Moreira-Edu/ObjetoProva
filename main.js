import { Test } from "./src/data/index.js";

function createElAndAtt(el, attr, innerHTML = false) {
  const element = document.createElement(el);
  if (innerHTML) element.innerHTML = innerHTML;
  if (!attr) return element;
  Object.entries(attr).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

const container = document.querySelector("#questionsContainer");
const fragment = document.createDocumentFragment();

const questionsInHtml = document.createElement("ol");

function renderAnswerOptions(questionId, options) {
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

function renderQuestions(questions) {
  const result = document.createDocumentFragment();

  questions.forEach(
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

questionsInHtml.appendChild(renderQuestions(Test));
fragment.append(questionsInHtml);
container.append(fragment);

function sendAnswers() {
  alert("TODO: pegar respostas e checar");
  // document.querySelector('input[name="question-${questionId}"]:checked').value;
}
