import { Button, Link, Grid, Typography, Stack } from '@mui/material';
import NextLink from 'next/link';

const TIMERS = ['amrap', 'emom', 'tabata'];

const Timers = () => {
	return (
		<Stack
			height="100vh"
			gap={4}
			alignItems="center"
			justifyContent="center"
		>
			<Typography variant='h3'>
        Select a Timer
			</Typography>
			<Grid container gap={4} justifyContent="center">
				{TIMERS.map((timer) => (
					<NextLink key={timer} href={`/timers/${timer}`} style={{ textDecoration: 'none' }}>
						<Link
							component={Button}
							color="text.primary"
							underline="none"
						>
							{timer.toUpperCase()}
						</Link>
					</NextLink>
				))}
			</Grid>
		</Stack>
	);
};

export default Timers;