import { Grid, Stack, Typography } from '@mui/material';

const Contact = () => {
	return (
		<Stack
			height="100vh"
			alignItems="center"
			justifyContent="center"
			width="100%"
			bgcolor="#EDD4FF"
		>
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