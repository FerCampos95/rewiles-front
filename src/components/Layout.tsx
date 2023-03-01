import { FC, ReactNode } from 'react';
import Footer from './Navigation/Footer';
import NavigationBar from './Navigation/NavigationBar';

type Props = {
  children: ReactNode;
}

const Layout: FC<Props> = ({children}) => {
	return (
		<div>
			<NavigationBar />
			<main style={{ height: '100%' }}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;