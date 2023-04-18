import { useForm } from '@formspree/react';
import { Grid, Stack } from '@mui/material';

import Form from './Form';
import SuccessForm from '@/components/Careers/SuccessForm';

const Contact = () => {
	const formProps = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM_ID as string);
	const [state] = formProps;

	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			width="100%"
			p={4}
		>
			<Grid container justifyContent="center">
				{state.succeeded ? (
					<SuccessForm hideButton />
				) : (
					<Form formProps={formProps} />
				)}
			</Grid>
		</Stack>
	);
};

export default Contact;