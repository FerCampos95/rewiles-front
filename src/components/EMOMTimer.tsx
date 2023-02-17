import { Button, Grid, Stack, Typography } from '@mui/material';
import useEMOMTimer from '../hooks/timers/useEMOMTimer';

const EMOMTimer: React.FC = () => {
	const { time, rounds, startTimer, pauseTimer , restartTimer} = useEMOMTimer(1, 5);

	const BUTTONS = [
		{ name: 'start', action: startTimer },
		{ name: 'pause', action: pauseTimer },
		{ name: 'restart', action: restartTimer },
	];

	return (
		<Stack
			height="100vh"
			gap={4}
			alignItems="center"
			justifyContent="center"
		>
			<Typography variant='h3'>
				{`Time: ${Math.floor(time / 60).toString().padStart(2,'0')}:${(time % 60).toString().padStart(2,'0')}`}
			</Typography>
			<Typography variant='h3'>
				{`Rounds: ${rounds}`}
			</Typography>
			<Grid container gap={4} justifyContent="center">
				{BUTTONS.map(btn => (
					<Button key={btn.name} onClick={() => btn.action()}>
						{btn.name.toUpperCase()}
					</Button>
				))}
			</Grid>
		</Stack>
	);
};

export default EMOMTimer;
