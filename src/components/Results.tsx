import React from "react";
import { Question } from "../types";
import { compareAnswers } from "../utils/compareAnswers";

interface ResultsProps {
  questions: Question[];
  userAnswers: string[][];
}

const Results: React.FC<ResultsProps> = ({ questions, userAnswers }) => {
  const score = questions.reduce(
    (acc, q, i) =>
      acc + (compareAnswers(userAnswers[i], q.correctAnswer) ? 1 : 0),
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Quiz Results</h1>
      <p className="text-xl mb-4 text-center">
        Score: {score} / {questions.length}
      </p>
      {questions.map((q, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = compareAnswers(userAnswer, q.correctAnswer);
        return (
          <div
            key={q.questionId}
            className={`p-4 mb-4 rounded ${
              isCorrect ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <p className="font-semibold">
              Q{idx + 1}: {q.question}
            </p>
            <p>Your Answer: {userAnswer.join(", ") || "No answer"}</p>
            {!isCorrect && <p>Correct: {q.correctAnswer.join(", ")}</p>}
          </div>
        );
      })}
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default Results;

