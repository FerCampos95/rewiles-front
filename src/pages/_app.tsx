import MemUIThemeProvider from '@/theme/context'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MemUIThemeProvider>
      <Component {...pageProps} />
    </MemUIThemeProvider>
  )
}
