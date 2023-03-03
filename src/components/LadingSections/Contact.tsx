import DesktopBlob from '@/assets/blobs/DesktopBlob';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';

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
			<Grid container justifyContent="center" color="#282728">
				<Grid container maxWidth={630} spacing={4}>
					<Grid item xs={12}>
						<Typography variant="h1" gutterBottom textAlign="center" component={'h2'}>
              Contact
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Name"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Email"
							type="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Subject"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Description"
							rows={5}
							helperText="Please enter the details of your request. A member of our support staff will respond as soon as possible"
						/>
					</Grid>

					<Grid container justifyContent="center" mt={18}>
						<Button type='submit'>
						Submit
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default Contact;