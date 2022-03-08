import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Header } from 'components';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Job Listings</title>
      <meta
        name='description'
        content='Get your dream job, abroad and remote'
      />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

export default App;
