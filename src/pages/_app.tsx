import MemUIThemeProvider from '@/theme/context';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MemUIThemeProvider>
			<GoogleAnalytics trackPageViews />
			<Component {...pageProps} />
		</MemUIThemeProvider>
	);
}
