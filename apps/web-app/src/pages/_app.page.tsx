import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

// 必须这样导入，不然会报 "Cannot use import statement outside a module", see https://github.com/vercel/next.js/issues/32445#issuecomment-993746962
// TODO 有更好的解决方案后续代替
const ProLayout = dynamic(() => import('@ant-design/pro-layout'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ PRIMARY_COLOR: '#4185f3' }}>
      {Component.fullPage ? (
        <Component {...pageProps} />
      ) : (
        <ProLayout
          menuFooterRender={() => {
            return null;
          }}
          menuItemRender={() => {
            return null;
          }}
          rightContentRender={() => {
            return null;
          }}
        >
          <Component {...pageProps} />
        </ProLayout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
