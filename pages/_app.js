import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../utils/theme';
import '../styles/globals.css';
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// function MyApp({ Component, pageProps }) {

//   return (
//     <>
//       <Head>
//         <title>Netflix-MUI</title>
//         <meta
//           name="viewport"
//           content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
//         />
//       </Head>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </>

//   );
// }

// export default MyApp;


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Netflix-MUI</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>

  );
}

export default MyApp;
