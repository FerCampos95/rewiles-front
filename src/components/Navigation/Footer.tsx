import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
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
				/* backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800], */
			}}
		>
			<Container maxWidth="lg">
				<Grid container justifyContent="space-between">
					<Grid item>
						<Typography variant="body1">
              Rewiles.
						</Typography>
						<Copyright />
					</Grid>
					<Grid item>
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