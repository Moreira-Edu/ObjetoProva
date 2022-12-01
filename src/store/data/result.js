import { checkAnswer, Answers, Test } from "./index.js";

export function writeResult() {
  console.log(Answers);
  let correctAnswer = 0;
  Object.entries(Answers).forEach(([questionId, optionId]) => {
    if (checkAnswer(Number(questionId), Number(optionId))) correctAnswer++;
  });
  const result = {
    absolute: {
      Corretos: correctAnswer,
      Errados: 30 - correctAnswer,
    },
    perTopic: resultPerTopic(),
  };
  localStorage.setItem("result", JSON.stringify(result));
}

export function getResult() {
  writeResult();
  return JSON.parse(localStorage.getItem("result"));
}

function resultPerTopic() {
  const portuguese = {
    topic: "Língua Portuguesa",
    correct: 0,
    total: 5,
  };
  const actuality = {
    topic: "Temas de Atualidade",
    correct: 0,
    total: 5,
  };

  const informatic = {
    topic: "Noções de Informática",
    correct: 0,
    total: 5,
  };

  const specific = {
    topic: "Conhecimentos Específicos",
    correct: 0,
    total: 15,
  };

  Test.TestData.forEach(({ QuestionId, DisciplineType, AnswerOptions }) => {
    AnswerOptions.forEach(({ id, isCorrect }) => {
      if (Answers[QuestionId] === id && isCorrect) {
        DisciplineType === portuguese.topic && portuguese.correct++;
        DisciplineType === actuality.topic && actuality.correct++;
        DisciplineType === informatic.topic && informatic.correct++;
        DisciplineType === specific.topic && specific.correct++;
      }
    });
  });

  return { portuguese, actuality, informatic, specific };
}
