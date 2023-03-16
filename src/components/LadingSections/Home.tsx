import useDevice from '@/hooks/utils/useDevice';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import Section from '../Navigation/Section';

const Home: FC = () => {
	const { isMobile } = useDevice();
	const theme = useTheme();

	return (
		<Section id="home">
			<Stack>
				<Typography variant="h4" paragraph component="h1" textAlign="center">
          Rewiles
				</Typography>
				<Grid container justifyContent="center">
					<Typography variant={isMobile ? 'h4' : 'h3'} component="h2">
            Unleash your organization&apos;s
					</Typography>
					<Typography
						variant={isMobile ? 'h4' : 'h3'}
						textAlign="center"
						component="h2"
						sx={{
							background: theme.palette.gradients.primary,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
            &nbsp;potential.
					</Typography>
				</Grid>
				<Grid container justifyContent="center">
					<Typography variant={isMobile ? 'h4' : 'h3'} textAlign="center" component="h2">
            Achieve&nbsp;
					</Typography>
					<Typography
						variant={isMobile ? 'h4' : 'h3'}
						textAlign="center"
						component="h2"
						sx={{
							background: theme.palette.gradients.primary,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}>
            greatness.
					</Typography>
				</Grid>
			</Stack>
		</Section>
	);
};

export default Home;