import DesktopBlob from '@/assets/blobs/DesktopBlob';
import useDevice from '@/hooks/utils/useDevice';
import palette from '@/theme/configs/palette';
import shadows, { customShadows } from '@/theme/configs/shadows';
import ComponentsOverrides from '@/theme/overrides';
import { createTheme, ThemeOptions } from '@mui/material';
import { Button, Grid, Stack, TextField, ThemeProvider, Typography, useTheme } from '@mui/material';

const Contact = () => {
	const { isMobile } = useDevice();
	const currentTheme = useTheme();

	const themeOptions: ThemeOptions = {
		...currentTheme,
		palette: { ...palette.light, mode: 'light' },
		shadows: shadows.light,
		customShadows: customShadows.light,
	};

	const theme = createTheme(themeOptions);
	theme.components = ComponentsOverrides(theme);

	return (
		<ThemeProvider theme={theme}>
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
				{!isMobile && (
					<DesktopBlob
						right='0' bottom='0' width="50vw"
						style={{ position: 'absolute' }}
					/>
				)}

				<Grid container justifyContent="center">
					<Grid container maxWidth={632} spacing={4}>
						<Grid item xs={12}>
							<Typography
								variant={isMobile ? 'h2' : 'h1'}
								component={'h2'}
								color={theme.palette.text.primary}
								textAlign="center"
								gutterBottom
							>
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
								multiline
								rows={5}
								helperText="Please enter the details of your request. A member of our support staff will respond as soon as possible"
							/>
						</Grid>

						<Grid container justifyContent="center" mt={18}>
							<Button type='submit' size="large">
								Submit
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Stack>
		</ThemeProvider>
	);
};

export default Contact;