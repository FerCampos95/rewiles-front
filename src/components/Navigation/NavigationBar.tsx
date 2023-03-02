import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoSVG from '@/assets/images/LogoSVG';
import { Grid, MenuList } from '@mui/material';
import { ListItem } from '@mui/material';

const pages = [{
	label: 'What we do',
	link: '#what-we-do',
}, {
	label: 'About Us',
	link: '#about-us',
}, {
	label: 'Contact',
	link: '#contact'
}, {
	label: 'Careers',
	link: '#careers'
}];

function NavigationBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="fixed" component="nav">
			<Container maxWidth="xl">
				<Toolbar>
					<Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
						<LogoSVG width='30px' />
					</Box>

					<Grid
						container
						gap={4}
						sx={{
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'center',
						}}
					>
						{pages.map(({label, link}) => (
							<Button
								key={link}
								variant='text'
								component={Link}
								href={link}
								LinkComponent={Link}
								scroll={false}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{label}
							</Button>
						))}
					</Grid>

					<Grid
						container
						justifyContent="flex-end"
						sx={{ display: { xs: 'flex', md: 'none' } }}
					>
						<IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorElNav}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
							marginThreshold={0}
							PaperProps={{
								style: {
									width: '100%',
									maxWidth: '100%',
									left: 0,
									right: 0,
								}
							}}
						>
							<MenuList sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
								{pages.map(({label, link}) => (
									<ListItem key={link} onClick={handleCloseNavMenu} dense>
										<Button
											fullWidth
											key={link}
											variant='text'
											component={Link}
											href={link}
											LinkComponent={Link}
											scroll={false}
											onClick={handleCloseNavMenu}
											sx={{ color: 'white' }}
										>
											{label}
										</Button>
									</ListItem>
								))}
							</MenuList>
						</Menu>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavigationBar;