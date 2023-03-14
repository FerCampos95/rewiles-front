import { FC } from 'react';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { ValidationError, TUseForm } from '@formspree/react';

import useDevice from '@/hooks/utils/useDevice';

type Props = {
  formProps: TUseForm;
}

const Form: FC<Props> = ({ formProps }) => {
	const [state, handleSubmit] = formProps;
	const { isMobile } = useDevice();

	return (
		<form onSubmit={handleSubmit}>
			<Grid container maxWidth={632} spacing={4}>
				<Grid item xs={12}>
					<Typography
						variant={isMobile ? 'h2' : 'h1'}
						component={'h2'}
						color="text.primary"
						textAlign="center"
						gutterBottom
					>
            Contact
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						fullWidth
						label="Name"
						name="name"
						type="text"
					/>
					<ValidationError
						prefix="Name"
						field="name"
						errors={state.errors}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						fullWidth
						name="email"
						label="Email"
						type="email"
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="subject"
						label="Subject"
						type="text"
					/>
					<ValidationError
						prefix="Subject"
						field="subject"
						errors={state.errors}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="description"
						label="Description"
						multiline
						rows={5}
						helperText="Please enter the details of your request. A member of our support staff will respond as soon as possible"
					/>
					<ValidationError
						prefix="Description"
						field="description"
						errors={state.errors}
					/>
				</Grid>

				<Grid container justifyContent="center" mt={18}>
					<Button type='submit' size="large" disabled={state.submitting}>
            Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default Form;