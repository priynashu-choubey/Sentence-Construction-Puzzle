import React from "react";

interface OptionsProps {
  options: string[];
  selectedWords: string[];
  onSelect: (word: string) => void;
}

const Options: React.FC<OptionsProps> = ({
  options,
  selectedWords,
  onSelect,
}) => (
  <div className="flex flex-wrap justify-center gap-2 mb-8 h-">
    {options.map((word, i) =>
      !selectedWords.includes(word) ? (
        <button
          key={i}
          onClick={() => onSelect(word)}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 cursor-pointer hover:text-gray-800 hover:border-gray-400"
        >
          {word}
        </button>
      ) : null
    )}
  </div>
);

export default Options;

