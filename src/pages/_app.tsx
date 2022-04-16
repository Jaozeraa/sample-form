import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import RootProvider from '@/providers';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </RootProvider>
    </>
  );
}

export default MyApp;
