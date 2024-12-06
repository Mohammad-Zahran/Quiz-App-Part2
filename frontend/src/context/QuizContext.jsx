
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  questions: [],  
  status: "loading", 
  index: 0,  
  answer: null, 
  correctAnswer: null 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "data-received":
      return { ...state, questions: action.payload, status: "ready" };
    case "active":
      return { ...state, status: "active" };
    case "newAnswer":
      const currentQuestion = state.questions[state.index];
      const isCorrect = action.payload === currentQuestion.correctOption;
      return { 
        ...state, 
        answer: action.payload, 
        correctAnswer: isCorrect 
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null, correctAnswer: null }; 
    case "quiz-finished":
      return { ...state, status: "finished" }; 
    case "quiz-restart":
      return { ...state, index: 0, answer: null, correctAnswer: null, status: "ready" }; 
    default:
      return state;
  }
};


const QuizContext = createContext();

export const useQuiz = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalQuestions = state.questions.length;

  return (
    <QuizContext.Provider value={{ state, dispatch, totalQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};
