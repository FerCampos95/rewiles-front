import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import useTabataTimer from '../hooks/timers/useTabataTimer';

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
				Rest: {rest}
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

export default TabataTimer;
