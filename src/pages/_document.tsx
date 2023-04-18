import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionCache from '@/utils/emotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import React from 'react';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;

	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			enhanceApp: (App: any) => function EnhanceApp(props) {
				return <App emotionCache={cache} {...props} />;
			},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			...emotionStyleTags,
		]
	};
};
