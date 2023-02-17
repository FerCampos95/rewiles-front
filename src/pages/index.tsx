import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';

export default function Home() {
	return (
		<Grid>
			<Head>
				<title>Azkar</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Stack
					height="100vh"
					justifyContent="center"
					alignItems="center"
					gap={4}
				>
					<Typography variant="h1">Welcome to Azkar</Typography>
					<NextLink href="/timers" style={{ textDecoration: 'none' }}>
						<Link
							component={Button}
							color="text.primary"
							underline="none"
						>
							Go to Timers
						</Link>
					</NextLink>
				</Stack>
			</main>
		</Grid>
	);
}
