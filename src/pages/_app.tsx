import background from '@/public/background.png';
import CustomHead from '@/src/components/common/Head';
import { Responsive } from '@/src/components/common/Responsive';
import GlobalStyle from '@/src/styles/Global.styled';
import { theme } from '@/src/styles/theme';
import { StBackgroundImage } from '@/src/styles/common/Background.styled';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CustomHead />
        <Responsive>
          <div>
            <StBackgroundImage src={background} alt='' />
          </div>

          <Component {...pageProps} />
        </Responsive>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
