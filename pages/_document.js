import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCountryCode, getGTMid } from '../utils/helpers'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  


  render() {
    const isProduction = process.env.NODE_ENV === 'production';
    return (
      <Html lang="es">
        <Head>
        {isProduction && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-5RL6VQ6D');`,
              }}
            />
          )}
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {isProduction && (
            <>
              {/* Google Tag Manager (noscript) */}
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-5RL6VQ6D"
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
              </noscript>
              {/* End Google Tag Manager (noscript) */}
            </>
          )}
          <Main />
          <NextScript />
        </body>
        {/* script chat 
            <Script defer type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
        */}
        <Script defer type="text/javascript" id="hs-script-loader" src="//js.hs-scripts.com/8886399.js"></Script>

      </Html>
    )
  }
}

export default MyDocument
