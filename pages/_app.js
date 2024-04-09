import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Conclave 2024</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      <link rel="icon" type="image/x-icon" href="/conc.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
