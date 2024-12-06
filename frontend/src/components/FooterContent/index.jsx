import React from "react";
import { useQuiz } from "../../context/QuizContext";
import useRetryQuiz from "../../hooks/useRetryQuiz";

const FooterContent = () => {
  const { state, totalQuestions } = useQuiz();
  const { handleRetry } = useRetryQuiz(); 

  const score = state.questions.reduce((acc, question, index) => {
    if (state.answers && state.answers[index] === question.correctOption) {
      return acc + question.points; 
    }
    return acc;
  }, 0);

  const passed = score >= totalQuestions * 0.5 * 10; 

  return (
    <div className="footer-content">
      <p className="completion-message">
        {passed
          ? `Congratulations! You passed the quiz with a score of ${score} / ${totalQuestions * 10}!`
          : `Better luck next time! You scored ${score} / ${totalQuestions * 10}.`}
      </p>
      <button className="btn finish-btn" onClick={handleRetry}>
        {passed ? "Retry" : "Try Again"}
      </button>
    </div>
  );
};

export default FooterContent;
