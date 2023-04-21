import { NextPage } from 'next';

import useDevice from '@/hooks/utils/useDevice';

import SimpleLayout from '@/components/SimpleLayout';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import ComingSoon from '@/components/ComingSoon';
import LogoSVG from '@/assets/images/LogoSVG';
import NewDesktopBlob from '@/assets/blobs/NewDesktopBlob';
import NewDesktopBlob2 from '@/assets/blobs/NewDesktopBlob2';

const Landing: NextPage = () => {
	const { isMobile } = useDevice();
	const theme = useTheme();

	{/* <MobileBlob top='22%' left='0' width='70vw' />
	<DesktopBlob bottom='0' left='1vw' width='60vw' /> */}
	return (
		<SimpleLayout>
			{isMobile ? (
				<>
					<NewDesktopBlob left="1%" width="70vw" />
					<NewDesktopBlob2 right="1%" bottom="1%" width="70vw" />
				</>
			) : (
				<>
					<NewDesktopBlob left="10%" />
					<NewDesktopBlob2 right="10%" bottom="15%" />
				</>
			)}
			<Stack justifyContent="center" minHeight="100vh" gap={16}>
				<Stack justifyContent="center" alignItems="center">
					<Grid container justifyContent="center" alignItems="center" gap={2}>
						<LogoSVG width={isMobile ? '30' : '40'} />
						<Typography variant="h1" component="h1" textAlign="center" fontSize={isMobile ? 40 : 55}>
							Rewiles
						</Typography>
					</Grid>
					<Grid container justifyContent="center">
						<Typography variant={isMobile ? 'h5' : 'h3'} component="h2">
							Unleash your organization&apos;s
						</Typography>
						<Typography
							variant={isMobile ? 'h5' : 'h3'}
							textAlign="center"
							component="h2"
							sx={{
								background: theme.palette.gradients.secondary,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							&nbsp;potential.
						</Typography>
					</Grid>
					<Grid container justifyContent="center">
						<Typography variant={isMobile ? 'h5' : 'h3'} textAlign="center" component="h2">
							Achieve&nbsp;
						</Typography>
						<Typography
							variant={isMobile ? 'h5' : 'h3'}
							textAlign="center"
							component="h2"
							sx={{
								background: theme.palette.gradients.secondary,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							greatness.
						</Typography>
					</Grid>
				</Stack>
				<ComingSoon />
			</Stack>
		</SimpleLayout>
	);
};

export default Landing;
