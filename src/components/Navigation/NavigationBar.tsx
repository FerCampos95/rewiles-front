import { useState } from 'react';
import Link from 'next/link';
import {
	Grid,
	MenuList,
	ListItem,
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Menu,
	Container,
	Button,
	useTheme } from '@mui/material';
import { Close, Menu as MenuIcon } from '@mui/icons-material';

import LogoSVG from '@/assets/images/LogoSVG';
import { onlyDesktop, onlyMobile } from '@/utils/hidden';

const pages = [{
	label: 'What we do',
	link: '/#what-we-do',
}, {
	label: 'About Us',
	link: '/#about-us',
}, {
	label: 'Contact',
	link: '/#contact'
}, {
	label: 'Careers',
	link: '/careers'
}];

function NavigationBar() {
	const theme = useTheme();
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="fixed" component="nav" sx={{ background: theme.palette.background.default }}>
			<Container maxWidth="xl">
				<Toolbar>
					<Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
						<Link href='/#home' scroll={false} aria-label="Go to home">
							<LogoSVG width='30px' aria-label="" />
						</Link>
					</Box>

					<Grid container justifyContent="space-evenly" gap={4} sx={{ ...onlyDesktop }}>
						{pages.map(({ label, link }) => (
							<Button
								key={link}
								variant='text'
								component={Link}
								href={link}
								LinkComponent={Link}
								scroll={false}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: theme.palette.text.primary }}
							>
								{label}
							</Button>
						))}
					</Grid>

					<Grid container justifyContent="flex-end" sx={{ ...onlyMobile }}>
						<IconButton size="large" onClick={handleOpenNavMenu} color="inherit" aria-label="menu">
							{anchorElNav ? <Close /> : <MenuIcon />}
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
									backgroundColor: theme.palette.background.default
								}
							}}
						>
							<MenuList sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
								{pages.map(({ label, link }) => (
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
											sx={{ color: theme.palette.text.primary }}
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
