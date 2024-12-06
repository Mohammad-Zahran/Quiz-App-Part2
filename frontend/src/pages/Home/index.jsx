import React, { useEffect } from "react";
import { quizQuestions } from "../../../utils/questions";
import "../Home/style.css";
import StartScreen from "../../components/StartScreen";
import QuizStart from "../../components/QuizStart";
import FooterContent from "../../components/FooterContent"; 
import { QuizProvider, useQuiz } from "../../context/QuizContext";

const Home = () => {
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    if (quizQuestions) {
      dispatch({ type: "data-received", payload: quizQuestions });
    }
  }, [dispatch]);

  return (
    <div className="home-container">
      {state.status === "ready" && <StartScreen />}
      {state.status === "active" && <QuizStart dispatch={dispatch} />}
      {state.status === "finished" && <FooterContent />} 
    </div>
  );
};

export default () => (
  <QuizProvider>
    <Home />
  </QuizProvider>
);
