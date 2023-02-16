import { useState, useEffect, useCallback } from 'react';

interface UseEMOMTimerReturn {
  time: number;
  rounds: number;
  startTimer: () => void;
  pauseTimer: () => void;
  restartTimer: () => void;
}

const useEMOMTimer = (minutes: number, rounds: number): UseEMOMTimerReturn => {
  const [time, setTime] = useState(minutes * 60);
  const [round, setRound] = useState(rounds);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>(undefined);

  const startTimer = useCallback(() => {
    if (intervalId) return;

    const id = setInterval(() => {
      setTime(time => {
        if (time === 0) {
          setRound(round => round - 1);
          if (round === 0) {
            clearInterval(intervalId);
          }
          return minutes * 60;
        }
        return time - 1;
      });
    }, 1000);
    setIntervalId(id);
  }, [intervalId, minutes, round]);

  const pauseTimer = useCallback(() => {
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined)
    }
  }, [intervalId]);

  const restartTimer = () => {
    setTime(minutes * 60);
    setRound(rounds);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return { time, rounds: round, startTimer, pauseTimer, restartTimer };
};

export default useEMOMTimer;
