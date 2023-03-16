import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LogoSVG from '@/assets/images/LogoSVG';
import { FC } from 'react';
import { Divider, Stack } from '@mui/material';
import { onlyDesktop, onlyMobile } from '@/utils/hidden';
import useDevice from '@/hooks/utils/useDevice';

export const FOOTER_MOBILE_HEIGHT = '186px';
export const FOOTER_DESKTOP_HEIGHT = '144px';

function Copyright() {
	return (
		<Typography variant="body2">
			{'Copyright © '}
			<Link color="inherit" href="https://rewiles.com">
				Rewiles
			</Link>{' '}
			{new Date().getFullYear()}
			. All Rights Reserved.
		</Typography>
	);
}

type Props = {
	isLight?: boolean;
}

const Footer: FC<Props> = ({ isLight }) => {
	const { isMobile } = useDevice();

	return (
		<Box
			component="footer"
			sx={{
				px: 2,
				mt: 'auto',
				height: isMobile ? FOOTER_MOBILE_HEIGHT : FOOTER_DESKTOP_HEIGHT,
				...(isLight && {
					bgcolor: '#EDD4FF',
					color: '#0D0D0D'
				})
			}}
		>
			<Grid container justifyContent="center">
				<Divider sx={{ width: '80%' }} />
			</Grid>
			<Container maxWidth="lg" sx={{ my: 8 }} >
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					height={100}
				>
					<Grid
						container
						gap={2}
						alignItems="center"
						justifyContent="center"
						mb={4}
						sx={{ ...onlyMobile }}
					>
						<Typography variant="subtitle1" component="p">
							Contact
						</Typography>
						<Typography variant="subtitle1" component="p">
							info@rewiles.com
						</Typography>
					</Grid>
					<Grid item>
						<Grid container gap={4}>
							<Grid container alignItems="center" gap={2}>
								<LogoSVG width="30" />
								<Typography variant="body1" fontSize={40}>
									Rewiles
								</Typography>
							</Grid>
							<Copyright />
						</Grid>
					</Grid>
					<Grid item sx={{ ...onlyDesktop }}>
						<Stack gap={2}>
							<Typography variant="subtitle1" component="p">
								Contact
							</Typography>
							<Typography variant="body1" component="p">
								info@rewiles.com
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
