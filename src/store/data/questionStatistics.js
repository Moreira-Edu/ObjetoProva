/**
 *
 * @returns {array} array of random numbers mocking a percentage of alternatives answereds
 */
function clickedAnswers() {
  const result = [];
  let max = 1000;
  const min = 1;

  for (let i = 1; i <= 5; i++) {
    const randomNumber = Math.floor(
      Math.random() * (max - 150 - min + 1) + min
    );
    if (i == 5) {
      result.push(percentualFormat(max));
    } else {
      result.push(percentualFormat(randomNumber));
      max -= randomNumber;
    }
  }
  return result;
}

/**
 *
 * @param {number} number
 * @returns a percentage of 1000 formated to 2f
 */
function percentualFormat(number) {
  return Number(((number * 100) / 1000).toFixed(2));
}

export function createStatistic() {
  const questionStatistic = clickedAnswers();
  return questionStatistic;
}
