import { ChartPaletteOptions, GradientsPaletteOptions } from '../configs/palette';
import { CustomShadowOptions } from '../shadows';

// palette
declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
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
}

// shadows and typography
declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }

  interface TypographyVariants {
    Tooltip: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    Tooltip?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    Tooltip: true;
  }
}

// shape
declare module '@mui/system' {
  interface Shape {
    borderRadiusSm: number | string;
    borderRadiusMd: number | string;
  }
}
