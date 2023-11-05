import React, { useContext } from "react";
import { QuizContextAPI } from "../context/QuizContext";
import { questions } from "../Questions";

export default function EndScreen() {
  const { score, setScore, setStatus } = useContext(QuizContextAPI);
  return (
    <div className="endScreen">
      <h2>Your Score :</h2>
      <p>
        {score} / {questions.length}
      </p>
      <button
        onClick={() => {
          setStatus("Main");
          setScore(0);
        }}
      >
        Start Again
      </button>
    </div>
  );
}
