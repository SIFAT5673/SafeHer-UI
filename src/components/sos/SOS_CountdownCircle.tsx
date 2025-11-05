import { useEffect, useState } from "react";

interface SOS_CountdownCircleProps {
  initialSeconds: number;
  onComplete: () => void;
}

export function SOS_CountdownCircle({ initialSeconds, onComplete }: SOS_CountdownCircleProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (seconds / initialSeconds) * circumference;

  useEffect(() => {
    if (seconds <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onComplete]);

  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90" width="200" height="200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#FFD2D9"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#FF5E78"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl text-white">{seconds}</span>
      </div>
    </div>
  );
}
