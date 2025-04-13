import React, { useState } from "react";
import { QuizData } from "../types";
import Question from "./Question";
import Options from "./Options";
import Timer from "./Timer";
import Results from "./Results";
import QuitButton from "./QuitButton";

interface QuizProps {
  data: QuizData;
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[][]>(
    Array(data.questions.length).fill([])
  );
  const [timeLeft, setTimeLeft] = useState(30);
  const [finished, setFinished] = useState(false);
  console.log({ data });
  const current = data.questions[currentIndex];

  const onTimeUp = () => {
    nextQuestion();
  };

  const nextQuestion = () => {
    const updated = [...userAnswers];
    updated[currentIndex] = [...selectedWords];
    setUserAnswers(updated);
    setSelectedWords([]);
    if (currentIndex < data.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(30);
    } else {
      setFinished(true);
    }
  };

  const handleWordSelect = (word: string) => {
    if (
      selectedWords.length < current.correctAnswer.length &&
      !selectedWords.includes(word)
    ) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleBlankClick = (index: number) => {
    setSelectedWords(selectedWords.filter((_, i) => i !== index));
  };

  if (finished)
    return <Results questions={data.questions} userAnswers={userAnswers} />;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-4xl relative">
        <div className="flex justify-between mb-4">
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeUp={onTimeUp}
            active
          />
          <QuitButton />
        </div>

        <div className="flex gap-2 mb-6">
          {data.questions.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all ${
                i <= currentIndex ? "bg-yellow-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <h2 className="text-center text-xl text-gray-700 font-medium mb-10">
          Select the missing words in the correct order
        </h2>

        <Question
          sentence={current.question}
          selectedWords={selectedWords}
          onBlankClick={handleBlankClick}
        />
        <div className="h-min-10">
          <Options
            options={current.options}
            selectedWords={selectedWords}
            onSelect={handleWordSelect}
          />
        </div>

        <div className="text-right">
          <button
            onClick={nextQuestion}
            disabled={selectedWords.length !== current.correctAnswer.length}
            className={`mt-4 py-2 px-6 rounded font-semibold ${
              selectedWords.length === current.correctAnswer.length
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            ➜
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
