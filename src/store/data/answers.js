import { writeAnswer } from "./localStorageModule.js";
import { Test } from "./index.js";

//#region getters/setters

/**
 *  write input value on object Answers and set it on localStorage
 * @param {number} questionId
 * @param {number} answerId
 */
export function markAnswer(questionId, answerId) {
  Answers[questionId] = answerId;
  writeAnswer(Answers);
}

/**
 *
 * @returns percentual of questions answered
 */
export function totalAnswered() {
  const rawValue = Object.values(Answers).filter(
    (answer) => answer !== undefined
  ).length;

  return `${((rawValue * 100) / 30).toFixed(2)}%`;
}

/**
 * check wich answers are marked early
 *
 * @param {number} questionId
 * @param {number} answerId
 * @returns boolean value
 */
export function markedAnswer(questionId, answerId) {
  return Answers[questionId] === answerId;
}

/**
 * Check if a answer is correct
 * @param {Number} questionId
 * @param {Number} answerId
 * @returns {Boolean}
 */
export function checkAnswer(questionId, answerId) {
  return Test.TestData.find(
    ({ QuestionId }) => questionId === QuestionId
  ).AnswerOptions.find(({ id }) => id === answerId).isCorrect;
}
//#endregion

//#region data
export const Answers = {
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
  6: undefined,
  7: undefined,
  8: undefined,
  9: undefined,
  10: undefined,
  11: undefined,
  12: undefined,
  13: undefined,
  14: undefined,
  15: undefined,
  16: undefined,
  17: undefined,
  18: undefined,
  19: undefined,
  20: undefined,
  21: undefined,
  22: undefined,
  23: undefined,
  24: undefined,
  25: undefined,
  26: undefined,
  27: undefined,
  28: undefined,
  29: undefined,
  30: undefined,
};
//#endregion

export default {
  Answers,
  checkAnswer,
  markAnswer,
  totalAnswered,
  markAnswer,
  markedAnswer,
};
