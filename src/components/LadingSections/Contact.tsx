import DesktopBlob from '@/assets/blobs/DesktopBlob';
import { Grid, Stack, Typography } from '@mui/material';

const Contact = () => {
	return (
		<Stack
			id="contact"
			height="100vh"
			alignItems="center"
			justifyContent="center"
			width="100%"
			bgcolor="#EDD4FF"
			position="relative"
			p={4}
		>
			<DesktopBlob right='0' bottom='0' width="50vw" style={{ position: 'absolute' }}/>
			<Grid container justifyContent="center">
				<Stack maxWidth={630} gap={4} textAlign="justify" color="#282728">
					<Typography variant="h1" gutterBottom textAlign="center" component={'h2'}>
            Contact
					</Typography>

					<Typography variant="h6">
            FORM
					</Typography>
				</Stack>
			</Grid>
		</Stack>
	);
};

export default Contact;