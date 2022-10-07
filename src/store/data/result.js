import { checkAnswer, Answers, questionPerTopic } from "./index.js";

export function writeResult() {
  let correctAnswer = 0;
  Object.entries(Answers).forEach(([questionId, optionId]) => {
    if (checkAnswer(Number(questionId), Number(optionId))) correctAnswer++;
  });
  const result = {
    absolute: {
      Corretos: correctAnswer,
      Errados: 30 - correctAnswer,
    },
    perTopic: questionPerTopic(),
  };
  localStorage.setItem("result", JSON.stringify(result));
}

export function getResult() {
  return JSON.parse(localStorage.getItem("result"));
}

let test = {
  rightAnswer: Number,
  wrongAnswer: Number,
};
