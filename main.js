import {Test} from './src/data/index.js';
import { renderQuestions } from './src/views/render.js';

const container = document.querySelector("#questionsContainer");
const fragment = document.createDocumentFragment();

const questionsInHtml = document.createElement("ol");

questionsInHtml.appendChild(renderQuestions(Test));
fragment.append(questionsInHtml);
container.append(fragment);

function sendAnswers() {
  alert("TODO: pegar respostas e checar");
  // document.querySelector('input[name="question-${questionId}"]:checked').value;
};
