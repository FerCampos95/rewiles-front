import { NextPage } from 'next';
import { Grid, Typography, Stack, useTheme } from '@mui/material';
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

import DesktopBlob from '@/assets/blobs/DesktopBlob';
import { onlyDesktop, onlyMobile } from '@/utils/hidden';
import useDevice from '@/hooks/utils/useDevice';
import DesignIcon from '@/assets/icons/DesignIcon';
import DesignOpsIcon from '@/assets/icons/DesignOpsIcon';
import DevIcon from '@/assets/icons/DevIcon';
import DevOpsIcon from '@/assets/icons/DevOpsIcon';
import QAIcon from '@/assets/icons/QAIcon';
import SecurityIcon from '@/assets/icons/SecurityIcon';


const ACTIONS_PLAN = [
	{
		title: 'Design',
		description: 'Create visually appealing and/or creative elements for various purposes, with a focus on aesthetics and usability. We ensure that the product is easy to use, provides a positive experience, and solves the user\'s problem in the best possible way.',
		img: <DesignSVG />,
		icon: <DesignIcon />
	},
	{
		title: 'Design Ops',
		description: 'Improve the efficiency and effectiveness of design teams by streamlining workflows, tools, and processes. We work to ensure that designers have the resources and support they need to produce high-quality work.',
		img: <DesignOpsSVG />,
		icon: <DesignOpsIcon />
	},
	{
		title: 'Development',
		description: 'We use a combination of technical skills, creativity, and problem-solving to create the digital product that you need. Our developers ensure that they are optimized for performance and user experience.',
		img: <DevSVG />,
		icon: <DevIcon />
	},
	{
		title: 'Dev Ops',
		description: 'Ensure that software is deployed and maintained smoothly, with a focus on automation and continuous improvement. Implement tools and processes that help teams work together more efficiently.We focus on improving the reliability and performance of software systems.',
		img: <DevOpsSVG />,
		icon: <DevOpsIcon />
	},
	{
		title: 'QA',
		description: 'We use a variety of testing methods, such as manual testing, automated testing, performance testing, and security testing. These methods are used to identify any issues with the product and ensure that it meets industry standards and best practices.',
		img: <QASVG />,
		icon: <QAIcon />
	},
	{
		title: 'Cybersecurity',
		description: 'Lets protect your company and users from potential security threats, such as hackers, viruses, or malware. We ensure that your digital products are secure and reliable.',
		img: <SecuritySVG />,
		icon: <SecurityIcon />
	}
];

const Home: NextPage = () => {
	const { isMobile } = useDevice();
	const theme = useTheme();

	return (
		<Layout>
			<DesktopBlob bottom='0' left='1vw' width='60vw' />
			<DesktopBlob top='0' right='2vw' width='60vw' />

			<Section id="home">
				<Stack>
					<Typography variant="h4" paragraph component="h1" textAlign="center">
						Rewiles
					</Typography>
					<Grid container justifyContent="center">
						<Typography variant={isMobile ? 'h4' : 'h3'} >
							Unleash your organization&apos;s
						</Typography>
						<Typography
							variant={isMobile ? 'h4' : 'h3'}
							textAlign="center"
							sx={{
								background: theme.palette.gradients.primary,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							&nbsp;potential.
						</Typography>
					</Grid>
					<Grid container justifyContent="center">
						<Typography variant={isMobile ? 'h4' : 'h3'} textAlign="center">
							Achieve&nbsp;
						</Typography>
						<Typography variant={isMobile ? 'h4' : 'h3'} textAlign="center"
							sx={{
								background: theme.palette.gradients.primary,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							greatness.
						</Typography>
					</Grid>
				</Stack>
			</Section>

			<Section id="what-we-do">
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

			<Stack>
				<DesktopBlob left='40vw' top='10vh' width='50vw' style={{ position: 'sticky', height: '0px' }} />

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

				<Stack>
					<Grid sx={{
						...onlyMobile,
						zIndex: 1,
						pt: 6,
						px: 6,
						position: 'sticky',
						top: 50
					}}>
						<Typography variant="h3">
							We create an action plan
						</Typography>
					</Grid>
					<Grid sx={{ px: 4, height: '100%', ...onlyMobile }}>
						<Grid
							sx={{
								width: '14px',
								height: '15vh',
								alignItems:'center',
								justifyContent:'center',
								background: theme.palette.gradients.tertiary
							}}
						/>
						<Typography sx={{ pl: 4 }} variant="body1">
							Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
						</Typography>
					</Grid>

					<Section sx={{ ...onlyDesktop }}>
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

					{ACTIONS_PLAN.map(({ title, description, img, icon }) => (
						<Section key={title} withBorder>
							<Grid container alignItems="center">
								<Grid item xs={12} md={6}>
									<Stack maxWidth={468} gap={4} sx={{ pl: { xs: 4 } }}>
										<Typography variant="h3" sx={{ ...onlyDesktop }}>
											We create an action plan
										</Typography>

										<Grid container gap={2} alignItems="center" sx={{ ...onlyMobile }}>
											{icon}
											<Typography variant="h2" component="h3">
												{title}
											</Typography>
										</Grid>

										<Typography variant="h2" component="h2" sx={{ ...onlyDesktop }}>
											{title}
										</Typography>
										<Typography variant="body1">
											{description}
										</Typography>
									</Stack>
								</Grid>
								<Grid item md={6} sx={{ ...onlyDesktop }}>
									{img}
								</Grid>
							</Grid>
						</Section>
					))}
				</Stack>
			</Stack>

			<Grid>
				<AboutUs />
				<Contact />
			</Grid>
		</Layout>
	);
};

export default Home;
