import React, { useContext } from "react";
import { QuizContextAPI } from "../context/QuizContext";

export default function MainMenu() {
  const { status, setStatus } = useContext(QuizContextAPI);
  const changeStatus = () => {
    setStatus("Quiz");
  };
  return (
    <div className="menu">
      <div>
        <button onClick={changeStatus}>Start Quiz</button>
      </div>
    </div>
  );
}
