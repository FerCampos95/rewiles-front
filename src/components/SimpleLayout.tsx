import { Container } from '@mui/material';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
}

const SimpleLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Rewiles</title>
				<meta name="description" content="Rewiles offers creative solutions in design and development operations, quality assurance and cybersecurity. Choose Rewiles and be part of the change." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />

				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Container maxWidth="md">
				<main>
					{children}
				</main>
			</Container>
		</div>
	);
};

export default SimpleLayout;