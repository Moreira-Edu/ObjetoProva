//#region getters/setters
export function markAnswer(questionId, answerId) {
  Answers[questionId] = answerId;
}

/**
 * Check if a answer is correct
 * @param {Number} questionId
 * @param {Number} answerId
 * @returns {Boolean}
 */
export function checkAnswer(questionId, answerId) {
  return Test.find(
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

export default { Answers, checkAnswer, markAnswer };
