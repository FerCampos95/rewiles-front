import { FC } from 'react';
import { Button, Grid, Select, TextField, FormControl, MenuItem, InputLabel } from '@mui/material';
import { TUseForm } from '@formspree/react';

const PROFESSION_LIST = [
	'Fullstack Developer',
	'Frontend Developer',
	'Backend Developer',
	'Designer',
	'Project Manager',
	'Other',
];

type Props = {
  formProps: TUseForm;
}

const CareersForm: FC<Props> = ({ formProps }) => {
	const [, handleSubmit] = formProps;
  
	return (
		<form onSubmit={handleSubmit} encType="multipart/form-data">
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						fullWidth
						name="name"
						label="Name"
						type="text"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						fullWidth
						name="lastName"
						label="Last name"
						type="text"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="email"
						label="Email"
						type="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth required>
						<InputLabel>Profession</InputLabel>
						<Select
							required
							fullWidth
							name='profession'
							label="Profession"
							placeholder='Select a profession'
						>
							{PROFESSION_LIST.map((prof) => (
								<MenuItem value={prof} key={prof}>
									{prof}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="resume"
						label="Resume / LinkedIn URL"
						type="url"
					/>
				</Grid>

				<Grid container justifyContent="center" mt={18}>
					<Button type='submit' size="large">
            Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default CareersForm;