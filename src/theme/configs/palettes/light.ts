import figmaColors from '../../figma-tokens/color global.json';

export const colors = figmaColors['Color Global'];

export function createGradientBottom(color1: string, color2: string, color3?: string) {
	return color3
		? `linear-gradient(to bottom, ${color1}, ${color2}, ${color3})`
		: `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export function createGradientLeft(color1: string, color2: string) {
	return `linear-gradient(to left, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
	lighter: colors.purple[200].value,
	light: colors.purple[400].value,
	main: colors.purple[500].value,
	dark: colors.purple[600].value,
	darker: colors.purple[700].value,
	shadow: colors.purple.shadow24p.value,
};
const SECONDARY = {
	lighter: colors.orange[200].value,
	light: colors.orange[400].value,
	main: colors.orange[500].value,
	dark: colors.orange[600].value,
	darker: colors.orange[700].value,
	shadow: colors.orange.shadow24p.value,
};
const INFO = {
	lighter: colors.lightblue[200].value,
	light: colors.lightblue[400].value,
	main: colors.lightblue[500].value,
	dark: colors.lightblue[600].value,
	darker: colors.lightblue[700].value,
	shadow: colors.lightblue.shadow24p.value,
};
const SUCCESS = {
	lighter: colors.green[200].value,
	light: colors.green[400].value,
	main: colors.green[500].value,
	dark: colors.green[600].value,
	darker: colors.green[700].value,
	shadow: colors.green.shadow24p.value,
};
const WARNING = {
	lighter: colors.yellow[200].value,
	light: colors.yellow[400].value,
	main: colors.yellow[500].value,
	dark: colors.yellow[600].value,
	darker: colors.yellow[700].value,
	shadow: colors.yellow.shadow24p.value,
};
const ERROR = {
	lighter: colors.red[200].value,
	light: colors.red[400].value,
	main: colors.red[500].value,
	dark: colors.red[600].value,
	darker: colors.red[700].value,
	shadow: colors.red.shadow24p.value,
};

const GREY = {
	0: colors.grey['50'].value,
	50: colors.grey['50'].value,
	100: colors.grey['100'].value,
	200: colors.grey['200'].value,
	300: colors.grey['300'].value,
	400: colors.grey['400'].value,
	500: colors.grey['500'].value,
	600: colors.grey['600'].value,
	700: colors.grey['700'].value,
	800: colors.grey['800'].value,
	900: colors.grey['900'].value,
	500_8: colors.grey['500_8'].value,
	500_12: colors.grey['500_12'].value,
	500_16: colors.grey['500_16'].value,
	500_24: colors.grey['500_24'].value,
	500_32: colors.grey['500_32'].value,
	500_48: colors.grey['500_48'].value,
	500_56: colors.grey['500_56'].value,
	500_80: colors.grey['500_80'].value,
	shadow: colors.grey.shadow.value,
};

const GRADIENTS = {
	primary: createGradientBottom(SECONDARY.main, PRIMARY.main),
	secondary: createGradientLeft(SECONDARY.main, PRIMARY.main),
	tertiary: createGradientBottom(SECONDARY.main, PRIMARY.main, SECONDARY.main),
	info: createGradientBottom(INFO.light, INFO.main),
	success: createGradientBottom(SUCCESS.light, SUCCESS.main),
	warning: createGradientBottom(WARNING.light, WARNING.main),
	error: createGradientBottom(ERROR.light, ERROR.main),
};

// TODO define
const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
	common: { black: GREY[900], white: GREY[100] },
	primary: { ...PRIMARY, contrastText: GREY[100] },
	secondary: { ...SECONDARY, contrastText: GREY[100] },
	info: { ...INFO, contrastText: GREY[100] },
	success: { ...SUCCESS, contrastText: GREY[800] },
	warning: { ...WARNING, contrastText: GREY[800] },
	error: { ...ERROR, contrastText: GREY[100] },
	grey: GREY,
	gradients: GRADIENTS,
	chart: CHART_COLORS,
	divider: GREY[500_24],
	action: {
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
};

const lightPalette = {
	...COMMON,
	text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
	background: { paper: GREY[100], default: '#EDD4FF', neutral: GREY[200] },
	action: { active: GREY[600], ...COMMON.action },
};

export default lightPalette;
