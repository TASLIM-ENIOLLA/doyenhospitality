import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from "next/head";
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Doyen Hospitality / Consultancy</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
