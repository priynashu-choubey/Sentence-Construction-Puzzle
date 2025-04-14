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
    if (!active) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <span className="flex justify-between items-center mb-4">
      <span className="text-gray-600 font-medium">0:{timeLeft}</span>
    </span>
  );
};

export default Timer;
