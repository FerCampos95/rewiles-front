import { Grid, Stack, Typography } from '@mui/material';
import LogoSVG from '@/assets/images/LogoSVG';
import useDevice from '@/hooks/utils/useDevice';

const AboutUs = () => {
	const { isMobile } = useDevice();

	return (
		<Stack
			id="about-us"
			minHeight="100vh"
			alignItems="center"
			justifyContent="center"
			width="100%"
			bgcolor="#EDD4FF"
			// position="relative"
			p={4}
			py={16}
		>
			<Grid container justifyContent="center">
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					sx={{ position: 'absolute', opacity: 0.15, mt: 15 }}
				>
					<LogoSVG />
				</Grid>
				<Stack maxWidth={630} gap={4} textAlign="center" color="#282728">
					<Typography variant={isMobile ? 'h2' : 'h1'} gutterBottom textAlign="center" component={'h1'}>
            About Us
					</Typography>
					<Typography variant="h6" component="p">
            Our name pays tribute to <strong>Sir Andrew Wiles</strong>, a renowned mathematician, who is best known for proving Fermat&apos;s Last Theorem in 1993.
					</Typography>

					<Typography variant="h6" component="p">
            When he was only ten years old, Sir Wiles came to know about Fermat&apos;s Last Theorem, which awakened in him a profound fascination, since although it was so simple even he, at his young age, could comprehend it, nobody had ever been able to prove it.
            He decided then that he would be the first person to achieve such a feat. His lack of necessary tools quickly forced him to abandon his objective; however, when he was thirty-three years old, having armed himself with knowledge and experience, he would achieve his coveted childhood dream, and he would receive the well-deserved recognition of the scientific world for his dedication and contribution to the community.
					</Typography>

					<Typography variant="h6" component="p">
            We, the brains behind Rewiles, feel immensely inspired by Sir Wiles&apos; story of perseverance. We are <strong>creative people</strong>, eager to contribute something <b>positive to humanity</b>, and thanks to the <strong>knowledge and experience</strong> gained throughout our careers, we believe it <b>is our moment</b> to make this vision a reality.
					</Typography>
				</Stack>
			</Grid>
		</Stack>
	);
};

export default AboutUs;