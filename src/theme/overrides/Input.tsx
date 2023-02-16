import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
	return {
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					'&:-webkit-autofill': {
						WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.default} inset`,
						WebkitTextFillColor: theme.palette.text.primary,
					},
				},
			},
		},
	};
}
