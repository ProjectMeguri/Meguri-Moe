import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'
import i18nextConfig from '../next-i18next.config.js'
import Script from 'next/script'

type Props = DocumentProps & {
  // add custom document props
}

class MyDocument extends Document<Props> {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700&display=swap' />
        </Head>
        <body>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y6BGS89WT5" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y6BGS89WT5');
          `}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )

  }
}

export default MyDocument