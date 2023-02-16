import { Theme } from '@mui/material/styles';

type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export default function Alert(theme: Theme) {
	const standardStyle = (color: ColorSchema) => ({
		color: theme.palette[color].main,
		'& .MuiAlert-icon': {
			color: theme.palette[color].main,
		},
	});

	const filledStyle = (color: ColorSchema) => ({
		backgroundColor: theme.palette[color].main,
		color: theme.palette[color].contrastText,
	});

	const outlinedStyle = (color: ColorSchema) => ({
		color: theme.palette[color].main,
		border: `solid 1px ${theme.palette[color].main}`,
		'& .MuiAlert-icon': {
			color: theme.palette[color].main,
		},
	});

	return {
		MuiAlert: {
			defaultProps: {},

			styleOverrides: {
				message: {
					'& .MuiAlertTitle-root': {
						marginBottom: theme.spacing(0.5),
					},
				},
				action: {
					'& button:not(:first-of-type)': {
						marginLeft: theme.spacing(1),
					},
				},

				standardInfo: standardStyle('info'),
				standardSuccess: standardStyle('success'),
				standardWarning: standardStyle('warning'),
				standardError: standardStyle('error'),

				filledInfo: filledStyle('info'),
				filledSuccess: filledStyle('success'),
				filledWarning: filledStyle('warning'),
				filledError: filledStyle('error'),

				outlinedInfo: outlinedStyle('info'),
				outlinedSuccess: outlinedStyle('success'),
				outlinedWarning: outlinedStyle('warning'),
				outlinedError: outlinedStyle('error'),
			},
		},
	};
}
