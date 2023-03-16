import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import SentSVG from '@/assets/images/SentSVG';
import { Button } from '@mui/material';
import Link from 'next/link';

type Props = {
  hideButton?: boolean;
}

const SuccessForm: FC<Props> = ({ hideButton }) => {

	return (
		<Stack alignItems="center" textAlign="center" maxWidth={468} gap={4}>
			<SentSVG />
			<Typography variant="h3" color="text.primary">
        Thank you for your message!
			</Typography>
			<Typography variant="body2" color="text.primary">
        We have received your message and will get back to you as soon as possible. Your feedback is important to us and we appreciate you taking the time to get in touch.
			</Typography>
			{!hideButton && (
				<Button
					size="large"
					href="/#home"
					component={Link}
					LinkComponent={Link}
					scroll={false}
				>
        Home
				</Button>
			)}
		</Stack>
	);
};

export default SuccessForm;