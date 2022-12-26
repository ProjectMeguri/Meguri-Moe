import '@arco-themes/react-mengtu/css/arco.css';
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>「夢野巡璃」参考資料</title>
        <meta property="og:title" content="「夢野巡璃」参考資料" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
