import React, { FC, ReactNode } from 'react';
import ThemeConfig from './ThemeConfig';
import { SettingsThemeProvider } from './SettingsContext';

interface IProvider {
  children: ReactNode;
}

const MemUIThemeProvider: FC<IProvider> = ({ children }) => (
	<SettingsThemeProvider>
		<ThemeConfig>
			{children}
		</ThemeConfig>
	</SettingsThemeProvider>
);

export default MemUIThemeProvider;
