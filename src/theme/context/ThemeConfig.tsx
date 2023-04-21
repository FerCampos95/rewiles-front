import { useMemo, ReactNode } from 'react';
// material
import { CssBaseline, ThemeProvider } from '@mui/material';
import {
	createTheme,
	ThemeOptions,
	// StyledEngineProvider,
} from '@mui/material/styles';

import shape from '../configs/shape';
import palette from '../configs/palette';
import typography from '../configs/typography';
import breakpoints from '../configs/breakpoints';
import componentsOverride from '../overrides';
import shadows, { customShadows } from '../configs/shadows';
import spacing from '../configs/spacing';
import GlobalStyles from '../globalStyles';

// ----------------------------------------------------------------------

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {

	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette: palette.dark,
			shape,
			typography,
			breakpoints,
			spacing,
			shadows: shadows.dark,
			customShadows: customShadows.dark,
		}),
		[],
	);

	const theme = createTheme(themeOptions);
	theme.components = componentsOverride(theme);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
}
