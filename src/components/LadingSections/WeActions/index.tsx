import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';

import Section from '../../Navigation/Section';

import DesktopBlob from '@/assets/blobs/DesktopBlob';
import useDevice from '@/hooks/utils/useDevice';
import WeCreate from './WeCreate';
import MobileBlob from '@/assets/blobs/MobileBlob';

const WeActions: FC = () => {
	const { isMobile } = useDevice();

	return (
		<Stack sx={{ position: 'relative' }}>
			{!isMobile && (
				<DesktopBlob
					left='40vw' top='10vh' width='50vw'
					style={{ position: 'sticky', height: '0px' }}
				/>
			)}

			<Section>
				{isMobile && (
					<MobileBlob
						top='75%' left="1%" width='100vw'
						style={{ position: 'absolute', height: '0px' }}
					/>
				)}
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant={isMobile ? 'h4' : 'h3'} component="h2">
								We listen to you and understand your needs.
						</Typography>
						<Typography variant={isMobile ? 'body2' : 'body1'} component="p">
								We take a customer-centric approach that focuses on understanding the customer&apos;s requirements and tailoring the product or service to meet those needs. It involves actively listening to you, gathering feedback, and analyzing your needs and preferences to create a personalized experience. This way, we can create products and services that are tailored to your specific needs.
						</Typography>
					</Stack>
				</Grid>
			</Section>

			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant={isMobile ? 'h4' : 'h3'} component="h2">
								We analyze and relieve the information we find
						</Typography>
						<Typography variant={isMobile ? 'body2' : 'body1'} component="p">
								We take a data-driven approach that involves gathering and analyzing information to identify patterns, trends, and insights. This way, we gain a deeper understanding of your customers, market trends, and industry performance. By analyzing data, we can identify areas for improvement, opportunities for growth, and potential risks. We can use this information to make informed decisions and take strategic action to achieve your goals.
						</Typography>
					</Stack>
				</Grid>
			</Section>

			<Stack>
				<WeCreate />
			</Stack>
		</Stack>
	);
};

export default WeActions;