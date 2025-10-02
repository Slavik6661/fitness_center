"use client";
import { useEffect, useMemo, useState } from "react";

type UseTimerOpts = {
  initialTime: number;
  onTimeEnd?: () => void;
};

export default function useTimer({ initialTime, onTimeEnd }: UseTimerOpts) {
  const [remaining, setRemaining] = useState<number>(initialTime);
  const hasEnded = remaining <= 0;
  const isBlinking = remaining > 0 && remaining <= 30;

  useEffect(() => {
    if (hasEnded) {
      onTimeEnd?.();
      return;
    }
    const t = setInterval(() => {
      setRemaining((r) => Math.max(0, r - 1));
    }, 1000);

    return () => clearInterval(t);
  }, [hasEnded, onTimeEnd]);

  const formattedTime = useMemo(() => {
    const mm = Math.floor(remaining / 60)
      .toString()
      .padStart(2, "0");
    const ss = (remaining % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
  }, [remaining]);

  return { remaining, formattedTime, isBlinking, hasEnded };
}