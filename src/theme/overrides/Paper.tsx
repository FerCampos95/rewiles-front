import { Theme } from '@mui/material/styles';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
}
