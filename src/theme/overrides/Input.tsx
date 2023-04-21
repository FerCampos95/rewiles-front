import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
	return {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgba(255, 255, 255, 0.23)'
					}
				},
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
