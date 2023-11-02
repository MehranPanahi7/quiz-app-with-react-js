import React, { createContext, useState } from "react";

export const QuizContextAPI = createContext("");

export default function QuizProvider({ children }) {
  const [status, setStatus] = useState("Main");
  const [score, setScore] = useState(0);

  const values = { status, setStatus, score, setScore };
  return (
    <QuizContextAPI.Provider value={values}>{children}</QuizContextAPI.Provider>
  );
}
