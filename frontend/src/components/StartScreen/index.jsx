import React from "react";
import { useQuiz } from "../../context/QuizContext";

const StartScreen = () => {
  const { state, dispatch } = useQuiz();

  return (
    <div className="quiz-wrapper">
      <h3 className="home-title">Welcome to the</h3>
      <h3 className="home-subtitle">FSW Quiz</h3>
      <p className="home-text">Number of Questions: {state.questions.length}</p>
      <p className="home-text">Total Points: 0</p>
      <button
        className="home-button"
        onClick={() => dispatch({ type: "active" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
