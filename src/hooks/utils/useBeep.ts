import { useState, useEffect } from 'react';

const useBeep = () => {
  const [beep, setBeep] = useState<HTMLAudioElement>();

  useEffect(() => {
    if (!beep) {
      const audio = new Audio('/assets/audio/electronic-beep.wav');
      setBeep(audio);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playBeep = async (listen: boolean) => {
    try {
      if (listen && beep) {
        await beep.play();
      }
    } catch (error) {
      console.error('LISTEN error', error);
    }
  };

  return {
    playBeep,
  }
};

export default useBeep;
