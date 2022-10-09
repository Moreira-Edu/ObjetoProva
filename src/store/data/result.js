import { checkAnswer, Answers, Test } from "./index.js";

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

function questionPerTopic() {
  const disciplineType = {
    portuguese: {
      topic: "Língua Portuguesa",
      correct: 0,
      total: 5,
    },
    actuality: {
      topic: "Temas de Atualidade",
      correct: 0,
      total: 5,
    },

    informatic: {
      topic: "Noções de Informática",
      correct: 0,
      total: 5,
    },

    specific: {
      topic: "Conhecimentos Específicos",
      correct: 0,
      total: 15,
    },
  };
  Test.TestData.forEach(({ QuestionId, DisciplineType, AnswerOptions }) => {
    AnswerOptions.forEach(({ id, isCorrect }) => {
      if (Answers[QuestionId] === id && isCorrect) {
        DisciplineType === disciplineType.portuguese.topic &&
          disciplineType.portuguese.correct++;
        DisciplineType === disciplineType.actuality.topic &&
          disciplineType.actuality.correct++;
        DisciplineType === disciplineType.informatic.topic &&
          disciplineType.informatic.correct++;
        DisciplineType === disciplineType.specific.topic &&
          disciplineType.specific.correct++;
      }
    });
  });

  return disciplineType;
}
