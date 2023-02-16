import { ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { IMemUITheme } from '../types';

export type ThemeContextType = {
  theme: IMemUITheme;
  toggleMode: () => void;
}

const MemUIThemeWrapperContext = React.createContext<ThemeContextType | null>(null);

interface MemUIThemeWrapperProviderProps {
  children?: React.ReactNode;
  theme: IMemUITheme;
  toggleMode: () => void;
}
export const MemUIThemeWrapperProvider: FC<MemUIThemeWrapperProviderProps> = (props) => {
	const { children, theme, toggleMode } = props;

	return (
	// eslint-disable-next-line react/jsx-no-constructed-context-values
		<MemUIThemeWrapperContext.Provider value={{ theme, toggleMode }}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</MemUIThemeWrapperContext.Provider>
	);
};

export const useMemUITheme = () => React.useContext(MemUIThemeWrapperContext);
