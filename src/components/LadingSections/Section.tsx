import { FC, ReactNode } from 'react';
import { Container, Grid, SxProps } from '@mui/material';
import useDevice from '@/hooks/utils/useDevice';

type Props = {
  children?: ReactNode;
	id?: string;
	sx?: SxProps
	withBorder?: boolean;
};

const Section: FC<Props> = ({ children, id, sx, withBorder }) => {
	const { isMobile } = useDevice();

	return (
		<Container id={id} maxWidth="lg" sx={{
			position:'relative',
			height: '100vh',
			display: 'flex',
			alignItems:'center',
			justifyContent:'center',
			width:'100%',
			px: 4,
			...sx
		}}>
			<Grid container sx={{
				width:'100%',
				height: '100%',
				alignItems:'center',
				justifyContent:'center',
				borderLeft: withBorder && isMobile ? 'solid 4px blue': '',
			}}>
				{children}
			</Grid>
		</Container>
	);
};

export default Section;
