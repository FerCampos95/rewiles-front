import DesignOpsSVG from '@/assets/images/DesignOpsSVG';
import DesignSVG from '@/assets/images/DesignSVG';
import DevOpsSVG from '@/assets/images/DevOpsSVG';
import DevSVG from '@/assets/images/DevSVG';
import LogoSVG from '@/assets/images/LogoSVG';
import QASVG from '@/assets/images/QASVG';
import SecuritySVG from '@/assets/images/SecuritySVG';
import FakeBlobSVG from '@/components/FakeBlob';
import Layout from '@/components/Layout';
import ParallaxSection from '@/components/ParallaxSection';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

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

function landing() {
	const parallax = useRef<IParallax>(null!);

	return (
		<Layout>
			<div style={{ height: '100%' }}>
				<Parallax ref={parallax} pages={13}>
					<ParallaxLayer factor={3} sticky={{ start: 1, end: 10 }} style={{ zIndex: -1 }}>
						<FakeBlobSVG right='-105.67px' bottom='10.57px' />
					</ParallaxLayer>

					<ParallaxSection pageNumber={0} parallaxRef={parallax}>
						<Stack textAlign="center">
							<FakeBlobSVG right='25.57%' bottom='21.61%' />
							<FakeBlobSVG left='838.95px' top='299.37px' />
							<Typography variant="h4" paragraph>Rewiles</Typography>
							<Typography variant="h3">
								Unleash your organization&apos;s potential.
								<br />
								Achieve greatness.
							</Typography>
						</Stack>
					</ParallaxSection>

					<ParallaxSection pageNumber={1} parallaxRef={parallax}>
						<Stack textAlign="center" maxWidth={468} gap={16}>
							<Typography variant="h2">What we do</Typography>
							<Typography variant="h6">
								We believe that the key to our success is our commitment to collaboration and communication,so we work closely with our clients to understand their unique needs and goals.
								<br />
								We believe that the best solutions come from working together.
							</Typography>
						</Stack>
					</ParallaxSection>

					<ParallaxSection pageNumber={2} parallaxRef={parallax}>
						<Container maxWidth="lg">
							<Grid container>
								<Stack maxWidth={468} gap={8}>
									<Typography variant="h3">We listen to you and understand your needs.</Typography>
									<Typography variant="body1">
										We take a customer-centric approach that focuses on understanding the customer&apos;s requirements and tailoring the product or service to meet those needs. It involves actively listening to you, gathering feedback, and analyzing your needs and preferences to create a personalized experience. This way, we can create products and services that are tailored to your specific needs.
									</Typography>
								</Stack>
							</Grid>
						</Container>
					</ParallaxSection>


					<ParallaxSection pageNumber={3} parallaxRef={parallax}>
						<Container maxWidth="lg">
							<Grid container>
								<Stack maxWidth={468} gap={8}>
									<Typography variant="h3">We analyze and relieve the information we find.</Typography>
									<Typography variant="body1">
										We take a data-driven approach that involves gathering and analyzing information to identify patterns, trends, and insights. This way, we gain a deeper understanding of your customers, market trends, and industry performance. By analyzing data, we can identify areas for improvement, opportunities for growth, and potential risks. We can use this information to make informed decisions and take strategic action to achieve your goals.
									</Typography>
								</Stack>
							</Grid>
						</Container>
					</ParallaxSection>

					{/* Actions Plan */}
					<ParallaxLayer
						factor={3}
						sticky={{ start: 4, end: 10 }}
						style={{
							zIndex: -1,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Container maxWidth="lg">
							<Grid container sx={{ pb: 32 }}>
								<Stack maxWidth={468}>
									<Typography variant="h3">
										We create an action plan
									</Typography>
								</Stack>
							</Grid>
						</Container>
					</ParallaxLayer>

					<ParallaxSection pageNumber={4} parallaxRef={parallax}>
						<Container maxWidth="lg">
							<Grid container>
								<Stack maxWidth={468}>
									<Typography variant="body1">
										Our strategic approach involves developing a plan of action to achieve specific goals. It’s important to plan and prepare to ensure that resources are used effectively and goals are achieved efficiently.
									</Typography>
								</Stack>
							</Grid>
						</Container>
					</ParallaxSection>

					{ACTIONS_PLAN.map(({ title, description, img }, index) => (
						<ParallaxSection key={title} pageNumber={5 + index} parallaxRef={parallax}>
							<Container maxWidth="lg">
								<Grid container>
									<Grid item xs={12} md={6} mt={36}>
										<Stack maxWidth={468} gap={4}>
											<Typography variant="h2">
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
							</Container>
						</ParallaxSection>
					))}

					<ParallaxLayer offset={11} speed={0} style={{ backgroundColor: '#EDD4FF' }} />
					<ParallaxSection pageNumber={11} parallaxRef={parallax}>
						<Container maxWidth="lg">
							<Grid container justifyContent="center">
								<Grid
									container
									justifyContent="center"
									alignItems="center"
									sx={{ position: 'absolute', opacity: 0.2 }}
								>
									<LogoSVG />
								</Grid>
								<Stack maxWidth={630} gap={4} textAlign="justify" color="#282728">
									<Typography variant="h1" gutterBottom textAlign="center" component={'h2'}>
										About Us
									</Typography>
									<Typography variant="h6">
										Our name pays tribute to Sir Andrew Wiles, a renowned mathematician, who is best known for proving Fermat&apos;s Last Theorem in 1993.
									</Typography>

									<Typography variant="h6">
										When he was only ten years old, Sir Wiles came to know about Fermat&apos;s Last Theorem, which awakened in him a profound fascination, since although it was so simple even he, at his young age, could comprehend it, nobody had ever been able to prove it.
										He decided then that he would be the first person to achieve such a feat. His lack of necessary tools quickly forced him to abandon his objective; however, when he was thirty-three years old, having armed himself with knowledge and experience, he would achieve his coveted childhood dream, and he would receive the well-deserved recognition of the scientific world for his dedication and contribution to the community.
									</Typography>

									<Typography variant="h6">
										We, the brains behind Rewiles, feel immensely inspired by Sir Wiles&apos; story of perseverance. We are creative people, eager to contribute something positive to humanity, and thanks to the knowledge and experience gained throughout our careers, we believe it is our moment to make this vision a reality.
									</Typography>
								</Stack>
							</Grid>
						</Container>
					</ParallaxSection>

					{/* <ParallaxLayer offset={12} speed={1} style={{ backgroundColor: '#EDD4FF' }} /> */}
					<ParallaxSection pageNumber={12} parallaxRef={parallax} style={{ backgroundColor: '#EDD4FF' }}>
						<Container maxWidth="lg">
							<Grid container justifyContent="center">
								<Stack maxWidth={630} gap={4} textAlign="justify" color="#282728">
									<Typography variant="h1" gutterBottom textAlign="center" component={'h2'}>
										Contact Us
									</Typography>
									FORM CONTACT
								</Stack>
							</Grid>
						</Container>
					</ParallaxSection>
				</Parallax>
			</div>
		</Layout>
	);
}

export default landing;