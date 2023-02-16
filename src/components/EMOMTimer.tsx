import { Button } from '@mui/material';
import useEMOMTimer from '../hooks/timers/useEMOMTimer';

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
				<Button key={btn.name} onClick={() => btn.action()}>
					{btn.name.toUpperCase()}
				</Button>
			))}
		</>
	);
};

export default EMOMTimer;
