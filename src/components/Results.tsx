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
  const scorePercentage = Math.round((score / questions.length) * 100);

  const fillSentence = (sentence: string, answers: string[]) => {
    const parts = sentence.split("_____________");
    return parts
      .map((part, i) => `${part}${answers[i] ?? ""}`)
      .join("")
      .trim();
  };

  const fullCorrectSentence = (sentence: string, correctAnswer: string[]) => {
    const parts = sentence.split("_____________");
    return parts
      .map((part, i) => `${part}${correctAnswer[i] ?? ""}`)
      .join("")
      .trim();
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-10 px-4 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {/* Go to Dashboard Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => window.location.reload()}
            className="border border-purple-600 text-purple-600 font-medium px-6 py-2 rounded-lg hover:bg-purple-50 transition"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 border-[6px] border-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-green-600">
              {scorePercentage}%
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Overall Score</h2>
          <p className="text-gray-600 text-sm">
            You completed the exercise! Review each response below.
          </p>
        </div>

        {/* Question Results */}
        <div className="space-y-8">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = compareAnswers(userAnswer, q.correctAnswer);
            const userSentence = fillSentence(q.question, userAnswer);
            const correctSentence = fullCorrectSentence(
              q.question,
              q.correctAnswer
            );

            return (
              <div
                key={q.questionId ?? idx}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Sentence number at top right */}
                <div className="absolute top-2 right-4 text-sm text-gray-400">
                  {idx + 1}/{questions.length}
                </div>

                {/* Prompt (Correct Answer) */}
                <div className="bg-gray-50 px-6 pt-5 pb-4">
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    Prompt
                  </p>
                  <p className="text-gray-800">{correctSentence}</p>
                </div>

                {/* Your Response */}
                {/* Your Response */}
                <div className="bg-gray-100 px-6 pt-4 pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-gray-500 font-medium">
                      Your response
                    </p>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isCorrect
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  </div>
                  <p className="text-gray-800">{userSentence}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
