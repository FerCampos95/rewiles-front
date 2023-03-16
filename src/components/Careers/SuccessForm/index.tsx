import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import SentSVG from '@/assets/images/SentSVG';
import { Button } from '@mui/material';
import Link from 'next/link';

const SuccessForm: FC = () => {
	return (
		<Stack alignItems="center" textAlign="center" maxWidth={468} gap={4}>
			<SentSVG />
			<Typography variant="h3">
        Thank you for your message!
			</Typography>
			<Typography variant="body2">
        We have received your message and will get back to you as soon as possible. Your feedback is important to us and we appreciate you taking the time to get in touch.
			</Typography>
			<Button
				size="large"
				href="/#home"
				component={Link}
				LinkComponent={Link}
				scroll={false}
			>
        Home
			</Button>
		</Stack>
	);
};

export default SuccessForm;