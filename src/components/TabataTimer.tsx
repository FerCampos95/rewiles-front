import React from 'react';

import useTabataTimer from '../hooks/useTabataTimer';

const TabataTimer: React.FC = () => {
  const { time, rest, rounds, startTimer, pauseTimer, restartTimer } = useTabataTimer({
    time: 10,
    rest: 5,
    rounds: 2
  });

  const BUTTONS = [
    { name: 'start', action: startTimer },
    { name: 'pause', action: pauseTimer },
    { name: 'restart', action: restartTimer },
  ]

  return (
    <>
      <p style={{ textAlign: 'center' }}>Time: {time}</p>
      <p>Rest: {rest}</p>
      <p>Rounds: {rounds}</p>
      {BUTTONS.map(btn => (
        <button key={btn.name} onClick={() => btn.action()}>
          {btn.name.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default TabataTimer;
