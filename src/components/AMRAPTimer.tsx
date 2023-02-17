import { Button, Grid, Stack, Typography } from '@mui/material';
import useAMRAPTimer from '../hooks/timers/useAMRAPTimer';

const AMRAPTimer: React.FC = () => {
	const { time, rounds, startTimer, pauseTimer, resetTimer } = useAMRAPTimer(60);

	const BUTTONS = [
		{ name: 'start', action: startTimer },
		{ name: 'pause', action: pauseTimer },
		{ name: 'reset', action: resetTimer },
	];

	return (
		<Stack
			height="100vh"
			gap={4}
			alignItems="center"
			justifyContent="center"
		>
			<Typography variant='h3'>
        Time: {time}
			</Typography>
			<Typography variant='h3'>
        Rounds: {rounds}
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

export default AMRAPTimer;
