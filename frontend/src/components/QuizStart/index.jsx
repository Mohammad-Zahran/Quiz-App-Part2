import React from "react";
import { useQuiz } from "../../context/QuizContext";
import { useAnswer } from "../../hooks/useAnswer";
import FooterContent from "../FooterContent"; 

const QuizStart = () => {
  const { state, totalQuestions, dispatch } = useQuiz();
  const currentQuestion = state.questions[state.index];
  const { isCorrect, isIncorrect } = useAnswer(currentQuestion, state.answer);

  const handleAnswerClick = (index) => {
    console.log(`User selected option ${index}: ${currentQuestion.options[index]}`);
    dispatch({ type: "newAnswer", payload: index });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };

  const isQuizFinished = state.index === totalQuestions;

  if (isQuizFinished) {
    return <FooterContent />; 
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>{currentQuestion ? currentQuestion.question : "Loading..."}</h2>
      </div>
      <div className="quiz-body">
        {currentQuestion?.options?.map((option, index) => {
          let optionClass = "";

          if (state.answer !== null) {
            if (index === currentQuestion.correctOption) {
              optionClass = "correct";
            } else if (index === state.answer && state.answer !== currentQuestion.correctOption) {
              optionClass = "wrong";
            }
          }

          return (
            <li
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={optionClass}
            >
              {option}
            </li>
          );
        })}
      </div>
      <div className="quiz-footer">
        <p>
          Question {state.index + 1} / {totalQuestions}
        </p>
        {state.answer !== null && (
          <button className="btn" onClick={handleNextQuestion}>
            {state.index === totalQuestions - 1 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizStart;
