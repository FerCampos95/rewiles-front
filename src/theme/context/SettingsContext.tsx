/* eslint-disable @typescript-eslint/no-empty-function */
import useLocalStorage from '@/hooks/utils/useLocalStorage';
import { ReactNode, createContext, useContext } from 'react';

type ThemeMode = 'light' | 'dark';

type SettingsContextProps = {
  themeMode: ThemeMode;
  toggleMode: () => void;
};

const initialState: SettingsContextProps = {
	themeMode: 'dark',
	toggleMode: () => {},
};

const SettingsContext = createContext(initialState);

type SettingsThemeProviderProps = {
  children: ReactNode;
};

function SettingsThemeProvider({ children }: SettingsThemeProviderProps) {
	const [settings, setSettings] = useLocalStorage('settings', {
		themeMode: initialState.themeMode,
	});

	const toggleMode = () => {
		setSettings({
			...settings,
			themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
		});
	};

	return (
		<SettingsContext.Provider
			// eslint-disable-next-line react/jsx-no-constructed-context-values
			value={{
				...settings,
				toggleMode,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
}

const useSettings = () => useContext(SettingsContext);

export { SettingsThemeProvider, SettingsContext };
export default useSettings;
