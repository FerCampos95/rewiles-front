import { FC, ReactNode } from 'react';
import { Container, Grid, SxProps, useTheme } from '@mui/material';

type Props = {
  children?: ReactNode;
	id?: string;
	sx?: SxProps
	withLeftLine?: boolean;
};

const Section: FC<Props> = ({ children, id, sx, withLeftLine }) => {
	const theme = useTheme();

	return (
		<Container id={id} maxWidth="lg" sx={{
			position:'relative',
			height: withLeftLine ? '70vh' : '100vh',
			display: 'flex',
			alignItems:'center',
			justifyContent:'center',
			width:'100%',
			px: 4,
			...sx
		}}>
			{withLeftLine && <Grid
				sx={{
					width:'4px',
					height: '100%',
					background: theme.palette.gradients.tertiary
				}}
			/>}
			<Grid container sx={{
				width:'100%',
				height: '100%',
				alignItems:'center',
				justifyContent:'center',
			}}>
				{children}
			</Grid>
		</Container>
	);
};

export default Section;
