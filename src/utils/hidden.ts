import { SxProps } from '@mui/material';

export const onlyMobile: SxProps = {
	display: { xs: 'flex', md : 'none'}
};

export const onlyDesktop: SxProps = {
	display: { xs: 'none', md : 'flex'}
};