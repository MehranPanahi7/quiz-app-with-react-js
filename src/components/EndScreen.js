import React, { useContext } from "react";
import { QuizContextAPI } from "../context/QuizContext";
import { questions } from "../Questions";

export default function EndScreen() {
  const { score } = useContext(QuizContextAPI);
  return (
    <div className="endScreen">
      <strong>
        {score} / {questions.length}
      </strong>
    </div>
  );
}
