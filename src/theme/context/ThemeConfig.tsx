import { useMemo, ReactNode } from 'react';
// material
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  StyledEngineProvider,
} from '@mui/material/styles';
// hooks
import useSettings from './SettingsContext';
//
import shape from '../shape';
import palette from '../palette';
import typography from '../typography';
import breakpoints from '../breakpoints';
import componentsOverride from '../overrides';
import shadows, { customShadows } from '../shadows';
import spacing from '../spacing';
import GlobalStyles from '../globalStyles';
import { MemUIThemeWrapperProvider } from './ThemeContext';

// ----------------------------------------------------------------------

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const { themeMode, toggleMode } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      shape,
      typography,
      breakpoints,
      spacing,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight],
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MemUIThemeWrapperProvider theme={theme} toggleMode={toggleMode}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MemUIThemeWrapperProvider>
    </StyledEngineProvider>
  );
}
