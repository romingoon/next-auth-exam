import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function app({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
