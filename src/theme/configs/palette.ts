import darkPalette from './palettes/dark';
import lightPalette from './palettes/light';

export interface GradientsPaletteOptions {
  primary: string;
  secondary: string;
  tertiary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

const palette = {
	light: {
		...lightPalette,
	},
	dark: {
		...darkPalette,
	},
};

export default palette;
