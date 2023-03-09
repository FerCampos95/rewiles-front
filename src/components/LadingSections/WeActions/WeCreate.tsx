import { FC } from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import Section from '@/components/Navigation/Section';
import useDevice from '@/hooks/utils/useDevice';
import { ACTIONS_PLAN } from './actions';

const WeCreate: FC = () => {
	const { isMobile } = useDevice();
	const theme = useTheme();

	if (isMobile) return (
		<>
			<Grid zIndex={1} pt={6} px={6} 
				sx={{
					position: 'sticky',
					top: 50,
					backgroundColor: theme.palette.background.default
				}}>
				<Typography variant="h4" component="h3">
          We create an action plan
				</Typography>
			</Grid>

			<Grid px={4} container flexWrap="nowrap">
				<Grid
					sx={{
						width: '16px',
						height: '16vh',
						background: theme.palette.gradients.tertiary
					}}
				/>
				<Typography sx={{ pl: 4 }} variant="body1">
            Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
				</Typography>
			</Grid>

			{ACTIONS_PLAN.map(({ title, description, IconComponent }, index) => (
				<Section
					key={title}
					withLeftLine
					sx={index === ACTIONS_PLAN.length - 1 
						? { pb: 64, mb: 64 } 
						: {}
					}
				>
					<Grid container alignItems="center">
						<Grid item xs={12} md={6}>
							<Stack maxWidth={468} gap={4} sx={{ pl: { xs: 4 } }}>
								<Grid container gap={2} alignItems="center">
									<IconComponent />
									<Typography variant="h2" component="h4">
										{title}
									</Typography>
								</Grid>

								<Typography variant="body1" component="p">
									{description}
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Section>
			))}
		</>
	);

	return (
		<Stack>
			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant="h3" component="h3">
              We create an action plan
						</Typography>
						<Typography variant="body1" component="p">
              Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
						</Typography>
					</Stack>
				</Grid>
			</Section>
			{ACTIONS_PLAN.map(({ title, description, ImgComponent }) => (
				<Section key={title}>
					<Grid container alignItems="center">
						<Grid item xs={12} md={6}>
							<Stack maxWidth={468} gap={4} sx={{ pl: { xs: 4 } }}>
								<Typography variant="h3">
                  We create an action plan
								</Typography>

								<Typography variant="h2" component="h4">
									{title}
								</Typography>
								<Typography variant="body1" component="p">
									{description}
								</Typography>
							</Stack>
						</Grid>
						<Grid item md={6}>
							<ImgComponent />
						</Grid>
					</Grid>
				</Section>
			))}
		</Stack>
	);
};

export default WeCreate;