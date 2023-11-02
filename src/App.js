import React, { useState, useContext } from "react";
import { QuizContextAPI } from "./context/QuizContext";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import "./App.css";

function App() {
  const { status } = useContext(QuizContextAPI);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {status === "Main" && <MainMenu />}
      {status === "Quiz" && <Quiz />}
      {status === "Finished" && <EndScreen />}
    </div>
  );
}

export default App;
