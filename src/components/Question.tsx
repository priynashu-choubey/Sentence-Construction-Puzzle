import React from "react";

interface QuestionProps {
  sentence: string;
  selectedWords: string[];
  onBlankClick?: (index: number) => void;
  readOnly?: boolean;
}

const Question: React.FC<QuestionProps> = ({
  sentence,
  selectedWords,
  onBlankClick,
  readOnly = false,
}) => {
  const parts = sentence.split("_____________");

  return (
    <div className="bg-white p-4 rounded-lg text-[17px] leading-8 font-medium text-neutral-500 flex flex-wrap justify-center gap-x-2 gap-y-3 text-center">
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part && <span>{part.trim()}</span>}

          {i < parts.length - 1 && (
            <span
              onClick={() => {
                if (!readOnly && onBlankClick) onBlankClick(i);
              }}
              className={`inline-flex items-center justify-center min-w-[80px] px-2 py-1 border-b-2 transition-all ${
                readOnly
                  ? "cursor-default border-neutral-300"
                  : "cursor-pointer border-neutral-400"
              }`}
            >
              {selectedWords[i] ? (
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-md text-neutral-700 shadow-sm text-sm">
                  {selectedWords[i]}
                </span>
              ) : (
                <span className="text-transparent select-none">
                  placeholder
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
