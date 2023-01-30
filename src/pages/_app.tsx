import type { AppProps } from 'next/app';
import { Ubuntu } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@src/styles/global.style';
import { theme } from '@src/styles/theme';

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
