import { Stack, Typography } from '@mui/material';
import Contact from '../LadingSections/Contact';
import useDevice from '@/hooks/utils/useDevice';

const ComingSoon = () => {
	const { isMobile } = useDevice();

	return (
		<Stack alignItems="center">
			<Typography variant="h2" sx={{ fontSize: isMobile ? '40px' : '60px' }} gutterBottom>
				<b>COMING SOON</b>
			</Typography>
			<Typography variant="subtitle1" textAlign="center" maxWidth={610}>
        In the meantime, if you have any questions or would like to learn more about our staff augmentation services, please don&apos;t hesitate to contact us. 
        We&apos;d love to hear from you. 
			</Typography>
			<Contact />
		</Stack>
	);
};

export default ComingSoon;