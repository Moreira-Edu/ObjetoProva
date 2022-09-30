import { markAnswer } from "./index.js";

export function readAnswers() {
  return JSON.parse(localStorage.getItem("answers"));
}

export function writeAnswer(answers) {
  localStorage.setItem("answers", JSON.stringify(answers));
}

export function updateAnswers() {
  const localAnswers = readAnswers();
  if (localAnswers) {
    Object.entries(localAnswers).forEach(([question, answer]) => {
      markAnswer(question, answer);
    });
  }
}
