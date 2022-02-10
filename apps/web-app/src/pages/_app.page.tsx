import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ PRIMARY_COLOR: '#4185f3' }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
