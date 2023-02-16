import { Theme } from '@mui/material/styles';

export default function Tooltip(theme: Theme) {
	return {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					fontFamily: theme.typography.Tooltip.fontFamily,
					fontWeight: theme.typography.Tooltip.fontWeight,
					lineHeight: theme.typography.Tooltip.lineHeight,
					fontSize: theme.typography.Tooltip.fontSize,
					textTransform: theme.typography.Tooltip.textTransform,
				},
			},
		},
	};
}
