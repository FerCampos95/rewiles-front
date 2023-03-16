import { Theme } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Button(theme: Theme) {
	return {
		MuiButton: {
			defaultProps: {
				variant: 'contained' as const,
			},
			styleOverrides: {
				root: {
				},
				containedPrimary: {
					background: theme.palette.gradients.secondary,
					'&:hover': {
						opacity: 0.85,
					},
				},
			},
		},
	};
}
