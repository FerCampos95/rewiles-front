import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography, Stack } from '@mui/material';
import { IHomeWordings, en, es } from '@/locales';
import Layout from '@/components/Layout';
import Section from '@/components/LadingSections/Section';
import AboutUs from '@/components/LadingSections/AboutUs';
import Contact from '@/components/LadingSections/Contact';

import DesignSVG from '@/assets/images/DesignSVG';
import DesignOpsSVG from '@/assets/images/DesignOpsSVG';
import DevSVG from '@/assets/images/DevSVG';
import DevOpsSVG from '@/assets/images/DevOpsSVG';
import QASVG from '@/assets/images/QASVG';
import SecuritySVG from '@/assets/images/SecuritySVG';

import FakeBlobSVG from '@/components/FakeBlob';
import RightBlob from '@/assets/blobs/RigthBlob';


const ACTIONS_PLAN = [
	{
		title: 'Design',
		description: 'Create visually appealing and/or creative elements for various purposes, with a focus on aesthetics and usability. We ensure that the product is easy to use, provides a positive experience, and solves the user\'s problem in the best possible way.',
		img: <DesignSVG />
	},
	{
		title: 'Design Ops',
		description: 'Improve the efficiency and effectiveness of design teams by streamlining workflows, tools, and processes. We work to ensure that designers have the resources and support they need to produce high-quality work.',
		img: <DesignOpsSVG />
	},
	{
		title: 'Development',
		description: 'We use a combination of technical skills, creativity, and problem-solving to create the digital product that you need. Our developers ensure that they are optimized for performance and user experience.',
		img: <DevSVG />
	},
	{
		title: 'Dev Ops',
		description: 'Ensure that software is deployed and maintained smoothly, with a focus on automation and continuous improvement. Implement tools and processes that help teams work together more efficiently.We focus on improving the reliability and performance of software systems.',
		img: <DevOpsSVG />
	},
	{
		title: 'QA',
		description: 'We use a variety of testing methods, such as manual testing, automated testing, performance testing, and security testing. These methods are used to identify any issues with the product and ensure that it meets industry standards and best practices.',
		img: <QASVG />
	},
	{
		title: 'Cybersecurity',
		description: 'Lets protect your company and users from potential security threats, such as hackers, viruses, or malware. We ensure that your digital products are secure and reliable.',
		img: <SecuritySVG />
	}
];

type Props = {
	wordings: IHomeWordings
}

// eslint-disable-next-line react/prop-types
const Home: NextPage<Props> = ({ wordings }) => {
	return (
		<Layout>
			<Section>
				<FakeBlobSVG right='25.57%' bottom='21.61%' />
				<FakeBlobSVG left='15%' top='10%' />
				<Typography variant="h4" paragraph component="h1" textAlign="center">
					Rewiles
				</Typography>
				<Typography variant="h3" textAlign="center">
					Unleash your organization&apos;s potential.
					<br />
					Achieve greatness.
				</Typography>
			</Section>

			<Section>
				<Stack maxWidth={468} gap={16} textAlign="center">
					<Typography variant="h2">
						What we do
					</Typography>
					<Typography variant="h6">
						We believe that the key to our success is our commitment to collaboration and communication,so we work closely with our clients to understand their unique needs and goals.
						<br />
						We believe that the best solutions come from working together.
					</Typography>
				</Stack>
			</Section>

			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant="h3">
							We listen to you and understand your needs.
						</Typography>
						<Typography variant="body1">
							We take a customer-centric approach that focuses on understanding the customer&apos;s requirements and tailoring the product or service to meet those needs. It involves actively listening to you, gathering feedback, and analyzing your needs and preferences to create a personalized experience. This way, we can create products and services that are tailored to your specific needs.
						</Typography>
					</Stack>
				</Grid>
				<RightBlob left='40%' bottom='1rem' />
			</Section>

			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant="h3">
							We analyze and relieve the information we find
						</Typography>
						<Typography variant="body1">
							We take a data-driven approach that involves gathering and analyzing information to identify patterns, trends, and insights. This way, we gain a deeper understanding of your customers, market trends, and industry performance. By analyzing data, we can identify areas for improvement, opportunities for growth, and potential risks. We can use this information to make informed decisions and take strategic action to achieve your goals.
						</Typography>
					</Stack>
				</Grid>
			</Section>

			<Section>
				<Grid container>
					<Stack maxWidth={468} gap={8}>
						<Typography variant="h3">
							We create an action plan
						</Typography>
						<Typography variant="body1">
							Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
						</Typography>
					</Stack>
				</Grid>
			</Section>

			{ACTIONS_PLAN.map(({ title, description, img }) => (
				<Section key={title}>
					<Grid container alignItems="center">
						<Grid item xs={12} md={6}>
							<Stack maxWidth={468} gap={4}>
								<Typography variant="h3">
									We create an action plan
								</Typography>
								<Typography variant="h2" component="h4">
									{title}
								</Typography>
								<Typography variant="body1">
									{description}
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6}>
							{img}
						</Grid>
					</Grid>
				</Section>
			))}

			<AboutUs />
			<Contact />
		</Layout>
	);
};

export default Home;

// Captures the information needed for the static page
export const getStaticProps: GetStaticProps = async (ctx) => {
	const lang = ctx.params?.lang || 'en';

	// Returns the properties used in the main component: the page
	return {
		props: {
			locale: ctx.params?.lang || 'en', // Captures the language of [lang] route
			wordings: lang === 'en' ? en : es,
		},
	};
};

// Generates static files on export
export const getStaticPaths: GetStaticPaths = async () => {
	// All supported languages must be listed in 'paths'.
	// If not informed, the static page will not be generated.
	return {
		paths: [{ params: { lang: 'en' } }, { params: { lang: 'es' } }],
		fallback: false,
	};
};
