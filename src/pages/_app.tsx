import ThemeConfig from '@/theme/context/ThemeConfig';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeConfig>
			<GoogleAnalytics trackPageViews />
			<Component {...pageProps} />
		</ThemeConfig>
	);
}
