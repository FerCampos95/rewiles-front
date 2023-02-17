import {
	PaletteColor as PaletteColorDefault,
	TypeBackground as TypeBackgroundDefault,
	Color as ColorDefault,
	Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { ChartPaletteOptions, GradientsPaletteOptions } from '../configs/palette';
import { CustomShadowOptions } from '../configs/shadows';

interface PaletteColor extends PaletteColorDefault {
  lighter: string;
  darker: string;
}

interface TypeBackground extends TypeBackgroundDefault {
  neutral: string;
}

interface Color extends ColorDefault {
  0: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  Tooltip: React.CSSProperties;
}

interface Shape {
  borderRadius: number; // default of MUI
  borderRadiusSm: number | string;
  borderRadiusMd: number | string;
}

export type IMemUITheme = Theme & {
  palette: {
    background: TypeBackground;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    grey: Color;
    gradients: GradientsPaletteOptions; // inexistent on MUI
    chart: ChartPaletteOptions; // inexistent on MUI
  }
  customShadows: CustomShadowOptions; // inexistent on MUI
  shape: Shape;
  typography: ExtendedTypographyOptions;
};
