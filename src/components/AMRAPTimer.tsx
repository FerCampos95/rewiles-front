import useAMRAPTimer from '../hooks/useAMRAPTimer';

const AMRAPTimer: React.FC = () => {
  const { time, rounds, startTimer, pauseTimer, resetTimer } = useAMRAPTimer(60);

  const BUTTONS = [
    { name: 'start', action: startTimer },
    { name: 'pause', action: pauseTimer },
    { name: 'reset', action: resetTimer },
  ];

  return (
    <>
      <p>Time: {time}</p>
      <p>Rounds: {rounds}</p>
      {BUTTONS.map(btn => (
        <button key={btn.name} onClick={() => btn.action()}>
          {btn.name.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default AMRAPTimer;
