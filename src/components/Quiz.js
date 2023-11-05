import React, { useContext, useState } from "react";
import { QuizContextAPI } from "../context/QuizContext";
import { questions } from "../Questions";

export default function Quiz() {
  const { score, setScore, status, setStatus, btnColor, setBtnColor } =
    useContext(QuizContextAPI);
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
    if (questions[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }
    setStatus("Finished");
  };

  const changeColor = () => {
    setBtnColor(!btnColor);
  };

  return (
    <div className="quiz">
      <h2>{questions[currentQuestion].title}</h2>
      <div className="options">
        <button
          className={btnColor === true ? "selected" : ""}
          onClick={() => {
            chooseOption("A");
            changeColor();
          }}
        >
          {questions[currentQuestion].options.A}
        </button>
        <button
          className={btnColor === true ? "selected" : ""}
          onClick={() => {
            chooseOption("B");
            changeColor();
          }}
        >
          {questions[currentQuestion].options.B}
        </button>
        <button onClick={() => chooseOption("C")}>
          {questions[currentQuestion].options.C}
        </button>
        <button onClick={() => chooseOption("D")}>
          {questions[currentQuestion].options.D}
        </button>
      </div>
      {currentQuestion === questions.length - 1 ? (
        <button onClick={endOfQuiz}>Finish Quiz</button>
      ) : (
        <button
          className="nextBtn"
          onClick={() => {
            nextQuestion();
            setBtnColor(false);
          }}
        >
          Next Question
        </button>
      )}
    </div>
  );
}
