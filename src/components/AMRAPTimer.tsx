import { Button } from '@mui/material';
import useAMRAPTimer from '../hooks/timers/useAMRAPTimer';

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
				<Button key={btn.name} onClick={() => btn.action()}>
					{btn.name.toUpperCase()}
				</Button>
			))}
		</>
	);
};

export default AMRAPTimer;
