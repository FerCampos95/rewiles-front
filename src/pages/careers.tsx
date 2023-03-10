import { NextPage } from 'next';
import { Button, Grid, Typography, Select, TextField, FormControl, MenuItem, InputLabel, Stack } from '@mui/material';

import Layout from '@/components/Layout';
import Section from '@/components/Navigation/Section';
import useDevice from '@/hooks/utils/useDevice';
import { FOOTER_DESKTOP_HEIGHT, FOOTER_MOBILE_HEIGHT } from '@/components/Navigation/Footer';

const PROFESSION_LIST = [
	'Fullstack Developer',
	'Frontend Developer',
	'Backend Developer',
	'Designer',
	'Project Manager',
	'Other',
];

const Careers: NextPage = () => {
	const { isMobile } = useDevice();

	const footerHeight = isMobile ? FOOTER_MOBILE_HEIGHT : FOOTER_DESKTOP_HEIGHT;

	return (
		<Layout>
			<Section sx={{ py: 16, height: isMobile ? 'auto' : `calc(100vh - ${footerHeight})` }}>
				<Stack alignItems="center" gap={25}>
					<Typography variant="h3" component="h1" textAlign="center" maxWidth={468}>
            We&apos;re always looking for talented individuals to join our team.
					</Typography>
					<Grid container spacing={8}>
						<Grid item xs={12} md={6}>
							<Typography variant="body1" component="p" maxWidth={468}>
                As a fast-growing company with a focus on <strong>innovation and collaboration</strong>, we offer a <b>dynamic and exciting work environment</b> with <b>opportunities for growth and development</b>.
                We&apos;re committed to providing our employees with the <b>support and resources</b> they need to succeed.
							</Typography>
							<br />
							<Typography variant="body1" component="p" maxWidth={468}>
                If you&apos;re interested in joining our team, we invite you to submit your resume and cover letter for future consideration.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container spacing={4}>
								<Grid item xs={12} md={6}>
									<TextField
										fullWidth
										name="name"
										label="Name"
										type="text"
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField
										fullWidth
										name="lastName"
										label="Last name"
										type="text"
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth>
										<InputLabel>Profession</InputLabel>
										<Select placeholder='Select a profession' label="Profession" fullWidth>
											{PROFESSION_LIST.map((prof) => (
												<MenuItem value={prof} key={prof}>
													{prof}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid container justifyContent="center" mt={18}>
									<Button type='submit' size="large">
                    Submit
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Stack>
			</Section>
		</Layout>
	);
};

export default Careers;
