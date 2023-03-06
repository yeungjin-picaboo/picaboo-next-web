import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/src/styles/global.style';
import { theme } from '@/src/styles/theme';
import CustomHead from '@/src/components/common/Head';
import { Responsive } from '../components/common/Responsive';
import { QueryClient, QueryClientProvider } from 'react-query';
import background from '../../public/background.png';
import { BackgroundImage } from '../styles/common/background.style';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CustomHead />
        <Responsive>
          <div>
            <BackgroundImage src={background} alt='' />
          </div>

          <Component {...pageProps} />
        </Responsive>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
