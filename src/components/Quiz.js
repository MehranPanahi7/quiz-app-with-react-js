import React, { useContext, useState } from "react";
import { QuizContextAPI } from "../context/QuizContext";
import { questions } from "../Questions";

export default function Quiz() {
  const { score, setScore, status, setStatus } = useContext(QuizContextAPI);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const chooseOption = (option) => {
    setOptionChoosen(option);
  };

  const nextQuestion = () => {
    if (questions[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const endOfQuiz = () => {
    setStatus("Finished");
  };
  return (
    <div className="quiz">
      <h2>{questions[currentQuestion].title}</h2>
      <div className="options">
        <button className="option" onClick={() => chooseOption("A")}>
          {questions[currentQuestion].options.A}
        </button>
        <button className="option" onClick={() => chooseOption("B")}>
          {questions[currentQuestion].options.B}
        </button>
        <button className="option" onClick={() => chooseOption("C")}>
          {questions[currentQuestion].options.C}
        </button>
        <button className="option" onClick={() => chooseOption("D")}>
          {questions[currentQuestion].options.D}
        </button>
      </div>
      {currentQuestion === questions.length - 1 ? (
        <button onClick={endOfQuiz}>Finish Quiz</button>
      ) : (
        <button className="nextBtn" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}
