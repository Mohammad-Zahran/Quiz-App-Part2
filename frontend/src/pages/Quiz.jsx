import React from "react";

const Quiz = () => {
  
  return (
    <div>
        <div>React Quiz App</div>
        <div>
            <div>{questions[0].questionText}</div>
            {questions[0].answerOptions.map((option, index) => (
                option.answerText
            ))}
        </div>
    </div>
  );
};

export default Quiz;
