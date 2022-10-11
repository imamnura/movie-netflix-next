import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../utils/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix-MUI</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="shortcut icon" href="/nficon2016.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
