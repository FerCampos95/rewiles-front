import { NextPage } from 'next';
import { Grid } from '@mui/material';

import Layout from '@/components/Layout';

import Home from '@/components/LadingSections/Home';
import AboutUs from '@/components/LadingSections/AboutUs';
import Contact from '@/components/LadingSections/Contact';
import WhatWeDo from '@/components/LadingSections/WhatWeDo';
import WeActions from '@/components/LadingSections/WeActions';

import useDevice from '@/hooks/utils/useDevice';

import DesktopBlob from '@/assets/blobs/DesktopBlob';

const Landing: NextPage = () => {
	const { isMobile } = useDevice();

	return (
		<Layout>
			<DesktopBlob bottom='0' left='1vw' width='60vw' />
			<DesktopBlob top='0' right='2vw' width='60vw' />

			<Home />
			<WhatWeDo />
			<WeActions />
			

			<Grid>
				<AboutUs />
				<Contact />
			</Grid>
		</Layout>
	);
};

export default Landing;
