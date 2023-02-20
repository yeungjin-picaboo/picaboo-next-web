import type { AppProps } from 'next/app';
import { Ubuntu } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/src/styles/global.style';
import { theme } from '@/src/styles/theme';
import CustomHead from '@/src/components/common/Head';
import { Responsive } from '../components/common/Responsive';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={ubuntu.className}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <CustomHead />
          <Responsive>
            <Component {...pageProps} />
          </Responsive>
        </ThemeProvider>
      </div>
    </QueryClientProvider>
  );
}
