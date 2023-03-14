import { FC, useRef, useState } from 'react';
import { Button, Grid, IconButton, useTheme, Typography} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
	state: any;
};

const InputFile: FC<Props> = ({ state }) => {
	const [selectedFile, setSelectedFile] = useState<File | undefined>();
	const hiddenFileInput = useRef(null);

	const theme = useTheme();

	const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		const selectedFiles = files as FileList;
		setSelectedFile(selectedFiles?.[0]);
	};

	return (
		<Grid container justifyContent="flex-end">
			{selectedFile && (
				<Grid container justifyContent="flex-end" alignItems="center">
					<Typography variant="subtitle2">
						{selectedFile.name}
					</Typography>
					<IconButton onClick={() => setSelectedFile(undefined)} color="secondary">
						<DeleteIcon />
					</IconButton>
				</Grid>
			)}
			<Button
				variant="text"
				component="label"
				sx={{
					color: theme.palette.common.white,
					display: selectedFile ? 'none' : 'flex',
				}}
			>
				<UploadFileIcon />
				&nbsp;Attach your resume
				<input hidden name="resume" accept="image/*" type="file" onChange={handleFile} />
			</Button>
		</Grid>
	);
};

export default InputFile;