import React from "react";

interface QuestionProps {
  sentence: string;
  selectedWords: string[];
  onBlankClick: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({
  sentence,
  selectedWords,
  onBlankClick,
}) => {
  const parts = sentence.split("_____________");

  return (
    <div className="sentence-container bg-white p-4 rounded-lg text-lg  flex flex-wrap justify-center gap-2 mb-8">
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          <span>{part.trim()}</span>
          {i < parts.length - 1 && (
            <span
              onClick={() => onBlankClick(i)}
              className={`relative inline-block  my-6 `}
            >
              <div className="w-40 min-w-min"></div>
              <span className="absolute">_____________</span>
              {selectedWords[i] && (
                <span className="absolute  mx-1 min-w-[120px] -top-6 left-0 text-center px-2 py-1  text-gray-700  cursor-pointer rounded-lg border border-gray-300">
                  {selectedWords[i]}
                </span>
              )}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Question;

