import React from "react";

interface InfoCardProps {
  title: string;
  value: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => (
  <div className="flex flex-col items-center justify-center text-center md:w-[182px]">
    <h6 className="text-base font-medium text-neutral-700 mb-2">{title}</h6>
    <div className="text-sm text-neutral-500 flex items-center gap-2">
      {value}
    </div>
  </div>
);

const StatSection: React.FC = () => (
  <div className="mt-12 flex w-full max-w-xl flex-col items-center gap-6 md:flex-row md:justify-between">
    <InfoCard title="Time Per Question" value="30 sec" />
    <div className="hidden md:block h-12 w-px bg-neutral-300" />
    <InfoCard title="Total Questions" value="10" />
    <div className="hidden md:block h-12 w-px bg-neutral-300" />
    <InfoCard
      title="Coins"
      value={
        <>
          <div className="h-3 w-3 rounded-full border border-yellow-300 bg-yellow-400 animate-pulse" />
          <span>0</span>
        </>
      }
    />
  </div>
);

interface ActionButtonsProps {
  onStart: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center gap-4 mt-12 md:flex-row">
    <button
      onClick={() => {}}
      className="h-10 w-32 rounded-md border border-purple-600 text-purple-600 text-sm font-medium hover:bg-purple-50 transition duration-200"
    >
      Back
    </button>
    <button
      onClick={onStart}
      className="h-10 w-32 rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition duration-200"
    >
      Start
    </button>
  </div>
);

// ✅ Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-14 border-b border-neutral-200 flex items-center justify-between px-4 md:px-8 bg-white shadow-sm">
      <span className="absolute left-1/2 transform -translate-x-1/2 text-base md:text-lg font-semibold text-neutral-800 tracking-tight">
        Sentence Construction
      </span>
      <button className="text-neutral-500 hover:text-neutral-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v.01M12 12v.01M12 18v.01"
          />
        </svg>
      </button>
    </nav>
  );
};

interface SentenceConstructionProps {
  onStart: () => void;
}

const SentenceConstruction: React.FC<SentenceConstructionProps> = ({
  onStart,
}) => {
  return (
    <section className="w-full min-h-screen bg-white text-neutral-900">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-12 max-w-4xl mx-auto">
        {/* Icon */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="h-[60px] w-[60px] text-neutral-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z" />
        </svg>

        {/* Title */}
        <h1 className="mt-8 text-2xl md:text-4xl font-semibold text-center text-neutral-900">
          Sentence Construction
        </h1>

        {/* Description */}
        <p className="mt-3 text-center text-sm md:text-base text-neutral-500 max-w-md">
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </p>

        {/* Stats Section */}
        <StatSection />

        {/* Action Buttons */}
        <ActionButtons onStart={onStart} />
      </div>
    </section>
  );
};

export default SentenceConstruction;
