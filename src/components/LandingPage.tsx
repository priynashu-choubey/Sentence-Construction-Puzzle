import React from "react";

interface InfoCardProps {
  title: string;
  value: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => (
  <div className="flex flex-col items-center justify-center text-center md:w-[182px]">
    <h6 className="text-lg mb-2 md:mb-4">{title}</h6>
    <div className="text-base text-neutral-500 flex items-center gap-2">
      {value}
    </div>
  </div>
);

const StatSection: React.FC = () => (
  <div className="mt-24 flex w-[90%] flex-col items-center gap-6 md:flex-row md:w-[60%] md:justify-between md:gap-[50px]">
    <InfoCard title="Time Per Question" value="1 minute" />
    <div className="hidden md:block h-full w-[1px] bg-neutral-200" />
    <InfoCard title="Total Questions" value="10" />
    <div className="hidden md:block h-full w-[1px] bg-neutral-200" />
    <div className="hidden md:flex">
      <InfoCard
        title="Coins"
        value={
          <>
            <div className="h-4 w-4 rounded-full border-2 border-[#F5CE00] bg-[#FFD700]"></div>
            20 coins
          </>
        }
      />
    </div>
  </div>
);

interface ActionButtonsProps {
  onStart: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center gap-4 mt-12 md:flex-row">
    <button
      onClick={() => {}}
      className="h-10 w-36 rounded-md border border-primary-600 bg-background px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50"
    >
      Back
    </button>

    <button
      onClick={onStart}
      className="h-10 w-36 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
    >
      Start
    </button>
  </div>
);

interface SentenceConstructionProps {
  onStart: () => void;
}

const SentenceConstruction: React.FC<SentenceConstructionProps> = ({
  onStart,
}) => {
  return (
    <section className="w-full px-4">
      <div className="mx-auto my-[20%] flex max-w-4xl flex-col items-center justify-center md:my-[5%]">
        {/* Icon */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="h-[75px] w-[75px] text-neutral-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"></path>
        </svg>

        {/* Title */}
        <h3 className="mt-8 mb-3 text-3xl font-semibold text-center md:text-5xl">
          Sentence Construction
        </h3>

        {/* Description */}
        <p className="text-center text-base text-neutral-500 max-w-lg">
          The user has to construct a sentence with random words by placing them
          in the correct order.
        </p>

        {/* Stats */}
        <StatSection />

        {/* Buttons */}
        <ActionButtons onStart={onStart} />
      </div>
    </section>
  );
};

export default SentenceConstruction;
