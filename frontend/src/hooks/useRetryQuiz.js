import { useQuiz } from "../context/QuizContext";
const useRetryQuiz = () => {
  const { dispatch } = useQuiz();

  const handleRetry = () => {
    dispatch({ type: "quiz-restart" }); 
  };

  return { handleRetry };
};

export default useRetryQuiz;
