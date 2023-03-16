import { NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import useDevice from '@/hooks/utils/useDevice';

import SVG404 from '@/assets/images/SVG404';

import Layout from '@/components/Layout';
import Section from '@/components/Navigation/Section';

const Page404: NextPage = () => {
	const { isMobile } = useDevice();
	return (
		<Layout>
			<Section>
				<Stack maxWidth={468} textAlign="center" alignItems="center" gap={4}>
					<SVG404 />
					<Typography variant={isMobile ? 'h4' : 'h3'} component="h1">
						Sorry, the page you are looking for cannot be found
					</Typography>
					<Typography variant="body2">
						The URL you have entered may be incorrect, the page may have been moved, or it may no longer exist. Please double-check the URL and try again. If you believe this is an error, please contact the website administrator.
						Thank you for your understanding.
					</Typography>
				</Stack>
			</Section>
		</Layout>
	);
};

export default Page404;