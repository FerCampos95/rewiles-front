import { useForm } from '@formspree/react';
import { createTheme, ThemeOptions, Typography } from '@mui/material';
import { Grid, Stack, ThemeProvider, useTheme } from '@mui/material';

import palette from '@/theme/configs/palette';
import ComponentsOverrides from '@/theme/overrides';
import shadows, { customShadows } from '@/theme/configs/shadows';

import DesktopBlob from '@/assets/blobs/DesktopBlob';
import useDevice from '@/hooks/utils/useDevice';

import Form from './Form';

const Contact = () => {
	const formProps = useForm('mvonqwqr');
	const [state] = formProps;

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
					{state.succeeded ? (
						<Typography color="text.primary">Thanks for joining!</Typography>
					) : (
						<Form formProps={formProps} />
					)}
				</Grid>
			</Stack>
		</ThemeProvider>
	);
};

export default Contact;