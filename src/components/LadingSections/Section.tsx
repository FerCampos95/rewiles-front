import { FC, ReactNode } from 'react';
import { Container, Stack } from '@mui/material';

type Props = {
  children: ReactNode;
	id?: string;
};

const Section: FC<Props> = ({ children, id }) => {
	return (
		<Stack
			id={id}
			height="100vh"
			alignItems="center"
			justifyContent="center"
			position="relative"
			width="100%"
		>
			<Container maxWidth="lg">
				{children}
			</Container>
		</Stack>
	);
};

export default Section;
