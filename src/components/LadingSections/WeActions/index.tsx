import { FC } from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';

import Section from '../../Navigation/Section';

import DesktopBlob from '@/assets/blobs/DesktopBlob';
import { onlyDesktop, onlyMobile } from '@/utils/hidden';
import { ACTIONS_PLAN } from './actions';

const WeActions: FC = () => {
	const theme = useTheme();

	return (
		<Stack>
			<DesktopBlob left='40vw' top='10vh' width='50vw' style={{ position: 'sticky', height: '0px' }} />

			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant="h3">
								We listen to you and understand your needs.
						</Typography>
						<Typography variant="body1">
								We take a customer-centric approach that focuses on understanding the customer&apos;s requirements and tailoring the product or service to meet those needs. It involves actively listening to you, gathering feedback, and analyzing your needs and preferences to create a personalized experience. This way, we can create products and services that are tailored to your specific needs.
						</Typography>
					</Stack>
				</Grid>
			</Section>

			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant="h3">
								We analyze and relieve the information we find
						</Typography>
						<Typography variant="body1">
								We take a data-driven approach that involves gathering and analyzing information to identify patterns, trends, and insights. This way, we gain a deeper understanding of your customers, market trends, and industry performance. By analyzing data, we can identify areas for improvement, opportunities for growth, and potential risks. We can use this information to make informed decisions and take strategic action to achieve your goals.
						</Typography>
					</Stack>
				</Grid>
			</Section>

			<Stack>
				<Grid sx={{
					...onlyMobile,
					zIndex: 1,
					pt: 6,
					px: 6,
					position: 'sticky',
					top: 50
				}}>
					<Typography variant="h3">
							We create an action plan
					</Typography>
				</Grid>
				<Grid sx={{ px: 4, height: '100%', ...onlyMobile }}>
					<Grid
						sx={{
							width: '14px',
							height: '15vh',
							alignItems:'center',
							justifyContent:'center',
							background: theme.palette.gradients.tertiary
						}}
					/>
					<Typography sx={{ pl: 4 }} variant="body1">
							Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
					</Typography>
				</Grid>

				<Section sx={{ ...onlyDesktop }}>
					<Grid container>
						<Stack maxWidth={468} gap={8}>
							<Typography variant="h3">
									We create an action plan
							</Typography>
							<Typography variant="body1">
									Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
							</Typography>
						</Stack>
					</Grid>
				</Section>

				{ACTIONS_PLAN.map(({ title, description, ImgComponent, IconComponent }) => (
					<Section key={title} withBorder>
						<Grid container alignItems="center">
							<Grid item xs={12} md={6}>
								<Stack maxWidth={468} gap={4} sx={{ pl: { xs: 4 } }}>
									<Typography variant="h3" sx={{ ...onlyDesktop }}>
											We create an action plan
									</Typography>

									<Grid container gap={2} alignItems="center" sx={{ ...onlyMobile }}>
										<IconComponent />
										<Typography variant="h2" component="h3">
											{title}
										</Typography>
									</Grid>

									<Typography variant="h2" component="h2" sx={{ ...onlyDesktop }}>
										{title}
									</Typography>
									<Typography variant="body1">
										{description}
									</Typography>
								</Stack>
							</Grid>
							<Grid item md={6} sx={{ ...onlyDesktop }}>
								<ImgComponent />
							</Grid>
						</Grid>
					</Section>
				))}
			</Stack>
		</Stack>
	);
};

export default WeActions;