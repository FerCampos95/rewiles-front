import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LogoSVG from '@/assets/images/LogoSVG';

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

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				bgcolor: '#EDD4FF',
				color: '#0D0D0D'
			}}
		>
			<Container maxWidth="lg">
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
						sx={{ display: { md: 'none', xs: 'flex' }}}
					>
						<Typography variant="subtitle1">
								Contact
						</Typography>
						<Typography variant="subtitle1">
								info@rewiles.com
						</Typography>
					</Grid>
					<Grid item>
						<Grid container alignItems="center" gap={2}>
							<LogoSVG width="30" />
							<Typography variant="body1" fontSize={40}>
								Rewiles
							</Typography>
						</Grid>
						<Copyright />
					</Grid>
					<Grid item sx={{ display: { md: 'block', xs: 'none' }}}>
						<Typography variant="subtitle1">
							Contact
						</Typography>
						<Typography variant="body1">
							info@rewiles.com
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}