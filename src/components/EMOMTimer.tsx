import useEMOMTimer from '../hooks/useEMOMTimer';

const EMOMTimer: React.FC = () => {
	const { time, rounds, startTimer, pauseTimer , restartTimer} = useEMOMTimer(1, 5);

	const BUTTONS = [
		{ name: 'start', action: startTimer },
		{ name: 'pause', action: pauseTimer },
		{ name: 'restart', action: restartTimer },
	];

	return (
		<>
			<p>{`Time: ${Math.floor(time / 60)}:${time % 60}`}</p>
			<p>{`Rounds: ${rounds}`}</p>
			{BUTTONS.map(btn => (
				<button key={btn.name} onClick={() => btn.action()}>
					{btn.name.toUpperCase()}
				</button>
			))}
		</>
	);
};

export default EMOMTimer;
