import MemUIThemeProvider from '@/theme/context';
import createEmotionCache from '@/utils/emotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const clientSideEmotionCache = createEmotionCache();

type ExtendedAppProps = AppProps & {
	emotionCache: EmotionCache;
}

export default function App(props: ExtendedAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<MemUIThemeProvider>
				<GoogleAnalytics trackPageViews />
				<Component {...pageProps} />
			</MemUIThemeProvider>
		</CacheProvider>
	);
}
