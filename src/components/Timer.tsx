import React, { useEffect } from "react";

interface TimerProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
  active: boolean;
}

const Timer: React.FC<TimerProps> = ({
  timeLeft,
  setTimeLeft,
  onTimeUp,
  active,
}) => {
  useEffect(() => {
    if (!active || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [active, timeLeft, setTimeLeft, onTimeUp]);

  return (
    <span className="flex justify-between items-center mb-4">
      <span className="text-gray-600 font-medium">
        0:{timeLeft.toString().padStart(2, "0")}
      </span>
    </span>
  );
};

export default Timer;
