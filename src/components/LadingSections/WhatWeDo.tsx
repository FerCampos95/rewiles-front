import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import useDevice from '@/hooks/utils/useDevice';
import Section from '../Navigation/Section';

const WhatWeDo: FC = () => {
	const { isMobile } = useDevice();

	return (
		<Section id="what-we-do">
			<Stack maxWidth={468} gap={16} textAlign="center">
				<Typography variant={isMobile ? 'h2' : 'h1'} component="h1">
          What we do
				</Typography>
				<Typography variant={isMobile ? 'body2' : 'h6'} component="p">
          We believe that the key to our success is our commitment to collaboration and communication,so we work closely with our clients to understand their unique needs and goals.
					<br />
          We believe that the best solutions come from working together.
				</Typography>
			</Stack>
		</Section>
	);
};

export default WhatWeDo;