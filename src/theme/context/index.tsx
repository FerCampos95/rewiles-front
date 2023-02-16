import React, { FC, ReactNode } from 'react';
import ThemeConfig from './ThemeConfig';
import { SettingsThemeProvider } from './SettingsContext';

const MemUIContext = React.createContext(null);

interface IProvider {
  children: ReactNode;
}

const MemUIThemeProvider: FC<IProvider> = ({ children }) => (
  <MemUIContext.Provider value={null}>
    <SettingsThemeProvider>
      <ThemeConfig>
        {children}
      </ThemeConfig>
    </SettingsThemeProvider>
  </MemUIContext.Provider>
);

export default MemUIThemeProvider;
