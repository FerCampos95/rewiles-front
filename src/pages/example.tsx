import { Container, Grid, Stack, Typography } from '@mui/material';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

const url = (name: string, wrap = false) =>
	`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function landing() {
	const parallax = useRef<IParallax>(null!);

	return (
		<div style={{ width: '100%', height: '100%', background: '#0D0D0D' }}>
			<Parallax ref={parallax} pages={3}>
				<ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#805E73' }} />

				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

				{/* STARS */}
				<ParallaxLayer
					offset={0}
					speed={0}
					factor={3}
					style={{
						backgroundImage: url('stars', true),
						backgroundSize: 'cover',
					}}
				/>
			
				<ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
					<img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
				</ParallaxLayer>

				{/* CLOUDS */}
				<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
				</ParallaxLayer>

				{/* earth 3ra pagina */}
				<ParallaxLayer
					offset={2.5}
					speed={-0.4}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						pointerEvents: 'none',
					}}>
					<img src={url('earth')} style={{ width: '60%' }} />
				</ParallaxLayer>

				{/* Dos imagenes laterales (3ra pag) */}
				<ParallaxLayer
					offset={2}
					speed={-0.3}
					style={{
						backgroundSize: '80%',
						backgroundPosition: 'center',
						backgroundImage: url('clients', true),
					}}
				/>

				<ParallaxLayer
					offset={0}
					speed={0.1}
					onClick={() => parallax.current.scrollTo(1)}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Stack textAlign="center">
						<Typography variant="h4">Rewiles</Typography>
						<Typography variant="h3">
							Unleash your organization&apos;s potential.
							<br />
							Achieve greatness.
						</Typography>
					</Stack>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.1}
					onClick={() => parallax.current.scrollTo(2)}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Stack textAlign="center" maxWidth={468} gap={16}>
						<Typography variant="h2">What we do</Typography>
						<Typography variant="h6">
							We believe that the key to our success is our commitment to collaboration and communication,so we work closely with our clients to understand their unique needs and goals.
							<br />
							We believe that the best solutions come from working together.
						</Typography>
					</Stack>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onClick={() => parallax.current.scrollTo(0)}>
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
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default landing;