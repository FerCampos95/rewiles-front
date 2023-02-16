import { useState, useEffect } from 'react';

interface UseAMRAPTimerReturn {
  time: number;
  rounds: number;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const useAMRAPTimer = (duration: number): UseAMRAPTimerReturn => {
  const [time, setTime] = useState(duration);
  const [rounds, setRounds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    if (time === 0) {
      clearInterval(intervalId);
      setRounds(rounds + 1);
      setTime(duration);
    }
    return () => clearInterval(intervalId);
  }, [time, isRunning, rounds, duration]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(duration);
    setRounds(0);
  };

  return { time, rounds, startTimer, pauseTimer, resetTimer };
};

export default useAMRAPTimer;
