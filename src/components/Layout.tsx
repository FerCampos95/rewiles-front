import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from './Navigation/Footer';
import NavigationBar from './Navigation/NavigationBar';

type Props = {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Rewiles</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />

				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<NavigationBar />
			<main>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;