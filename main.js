const container = document.querySelector("#questionsContainer");
const fragment = document.createDocumentFragment();

const questionsInHtml = document.createElement("ol");

function renderAnswerOptions(questionId, options) {
  return options
    .map(({ id, AnswerText }) => {
      return `<li>
        <input id='answer-${id}' name='question-${questionId}' type="radio" data-id='${id}' />
        <label for='answer-${id}'>${AnswerText}</label>
      </li>`;
    })
    .join("");
}

function renderQuestions(questions) {
  return questions
    .map(
      ({
        QuestionId,
        QuestionText,
        QuestionEnunciation,
        AnswerOptions,
        Font,
      }) => {
        return `<li>
      ${QuestionText ? `<p>${QuestionText}</p>` : ""}
      ${Font ? `<small>${Font}</small> <br>` : ""}
      <span>${QuestionEnunciation}</span>
      <ol class="answers-options">
        ${renderAnswerOptions(QuestionId, AnswerOptions)}
      </ol>
    </li>`;
      }
    )
    .join("");
}

questionsInHtml.innerHTML = renderQuestions(Test);
fragment.append(questionsInHtml);
container.append(fragment);

function sendAnswers(){
  alert('TODO: pegar respostas e checar');
  // document.querySelector('input[name="question-${questionId}"]:checked').value;
}
S