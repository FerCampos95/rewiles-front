import figmaTypographyJson from '../figma-tokens/typography global.json';
import { ExtendedTypographyOptions } from '../types';

const Global = figmaTypographyJson;

type TextTransform = 'capitalize' | 'none' | 'uppercase' | 'lowercase';

function pxToRem(value: string) {
	return `${Number(value.replace('px', '')) / 16}rem`;
}

// TODO define responsive font sizes
/* function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
} */

const typography: ExtendedTypographyOptions = {
	fontFamily: Global.body1.value.fontFamily,
	/* fontWeightRegular: Global.Regular.value,
  fontWeightMedium: Global.Medium.value,
  fontWeightBold: Global.Bold.value, */
	h1: {
		fontFamily: Global.h1.value.fontFamily,
		fontWeight: Global.h1.value.fontWeight,
		lineHeight: pxToRem(Global.h1.value.lineHeight),
		fontSize: pxToRem(Global.h1.value.fontSize),
	},
	h2: {
		fontFamily: Global.h2.value.fontFamily,
		fontWeight: Global.h2.value.fontWeight,
		lineHeight: pxToRem(Global.h2.value.lineHeight),
		fontSize: pxToRem(Global.h2.value.fontSize),
	},
	h3: {
		fontFamily: Global.h3.value.fontFamily,
		fontWeight: Global.h3.value.fontWeight,
		lineHeight: pxToRem(Global.h3.value.lineHeight),
		fontSize: pxToRem(Global.h3.value.fontSize),
	},
	h4: {
		fontFamily: Global.h4.value.fontFamily,
		fontWeight: Global.h4.value.fontWeight,
		lineHeight: pxToRem(Global.h4.value.lineHeight),
		fontSize: pxToRem(Global.h4.value.fontSize),
	},
	h5: {
		fontFamily: Global.h5.value.fontFamily,
		fontWeight: Global.h5.value.fontWeight,
		lineHeight: pxToRem(Global.h5.value.lineHeight),
		fontSize: pxToRem(Global.h5.value.fontSize),
	},
	h6: {
		fontFamily: Global.h6.value.fontFamily,
		fontWeight: Global.h6.value.fontWeight,
		lineHeight: pxToRem(Global.h6.value.lineHeight),
		fontSize: pxToRem(Global.h6.value.fontSize),
	},
	subtitle1: {
		fontFamily: Global.subtitle1.value.fontFamily,
		fontWeight: Global.subtitle1.value.fontWeight,
		lineHeight: pxToRem(Global.subtitle1.value.lineHeight),
		fontSize: pxToRem(Global.subtitle1.value.fontSize),
	},
	subtitle2: {
		fontFamily: Global.subtitle2.value.fontFamily,
		fontWeight: Global.subtitle2.value.fontWeight,
		lineHeight: pxToRem(Global.subtitle2.value.lineHeight),
		fontSize: pxToRem(Global.subtitle2.value.fontSize),
	},
	body1: {
		fontFamily: Global.body1.value.fontFamily,
		fontWeight: Global.body1.value.fontWeight,
		lineHeight: pxToRem(Global.body1.value.lineHeight),
		fontSize: pxToRem(Global.body1.value.fontSize),
	},
	body2: {
		fontFamily: Global.body2.value.fontFamily,
		fontWeight: Global.body2.value.fontWeight,
		lineHeight: pxToRem(Global.body2.value.lineHeight),
		fontSize: pxToRem(Global.body2.value.fontSize),
	},
	caption: {
		fontFamily: Global.caption.value.fontFamily,
		fontWeight: Global.caption.value.fontWeight,
		lineHeight: pxToRem(Global.caption.value.lineHeight),
		fontSize: pxToRem(Global.caption.value.fontSize),
		textTransform: Global.caption.value.textCase as TextTransform,
	},
	overline: {
		fontFamily: Global.overline.value.fontFamily,
		fontWeight: Global.overline.value.fontWeight,
		lineHeight: pxToRem(Global.overline.value.lineHeight),
		fontSize: pxToRem(Global.overline.value.fontSize),
		textTransform: Global.overline.value.textCase as TextTransform,
	},
	button: {
		fontFamily: Global.button.value.fontFamily,
		fontWeight: Global.button.value.fontWeight,
		lineHeight: pxToRem(Global.button.value.lineHeight),
		fontSize: pxToRem(Global.button.value.fontSize),
		textTransform: Global.button.value.textCase as TextTransform,
	},
	Tooltip: {
		fontFamily: Global.Tooltip.value.fontFamily,
		fontWeight: Global.Tooltip.value.fontWeight,
		lineHeight: pxToRem(Global.Tooltip.value.lineHeight),
		fontSize: pxToRem(Global.Tooltip.value.fontSize),
		textTransform: Global.Tooltip.value.textCase as TextTransform,
	},
} as const;

export default typography;
