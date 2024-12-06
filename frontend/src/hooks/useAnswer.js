import { useMemo } from "react";

export const useAnswer = (currentQuestion, userAnswer) => {
  const { correctOption } = currentQuestion || {};

  const isCorrect = useMemo(() => {
    return userAnswer !== null && userAnswer === correctOption;
  }, [userAnswer, correctOption]);

  const isIncorrect = useMemo(() => {
    return userAnswer !== null && userAnswer !== correctOption;
  }, [userAnswer, correctOption]);

  return { isCorrect, isIncorrect };
};

// I used useMemo in this hook since it is good in memorizing the result of a calculation.It recomputes the value only when one of its dependencies changes.