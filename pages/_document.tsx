/* eslint-disable react/display-name */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />

          <meta name='title' content='La Casa de mi Padre' />
          <meta name='description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
          <meta name='keywords' content='La Casa de mi Padre, lcp caracas, iglesia cristiana, predicas cristianas' />
          <meta name='author' content='La Casa de mi Padre' />
          <meta name='copyright' content='La Casa de mi Padre' />
          <meta name='robots' content='index' />
          <meta name='robots' content='follow' />

          <meta name='application-name' content='La Casa de mi Padre' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='La Casa de mi Padre' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#1e478d' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#1e478d' />

          <link rel='apple-touch-icon' href='/static/icons/touch-icon-iphone.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/static/icons/touch-icon-ipad.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/touch-icon-iphone-retina.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/static/icons/touch-icon-ipad-retina.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#1e478d' />
          <link rel='shortcut icon' href='/static/icons/favicon.ico' />

          <meta name='twitter:image:alt' content='La Casa de mi Padre - Donde todos tienen un lugar' />
          <meta name='twitter:creator' content='@ScriptKev' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://lcpcaracas.org/' />
          <meta property='twitter:title' content='La Casa de mi Padre' />
          <meta property='twitter:description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
          <meta property='twitter:image:alt' content='La Casa de mi Padre' />
          <meta property='twitter:image' content='https://lcpcaracas.org/img/lcp-public.png' />

          <meta property='og:site_name' content='La Casa de mi Padre' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://lcpcaracas.org/' />
          <meta property='og:title' content='La Casa de mi Padre' />
          <meta property='og:description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
          <meta property='og:image' content='https://lcpcaracas.org/img/lcp-public.png' />

          <link rel='preload' href='/static/fonts/helvetica_neue/helveticaNeue_light.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/static/fonts/helvetica_neue/helveticaNeue_regular.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/static/fonts/helvetica_neue/helveticaNeue_bold.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/static/fonts/helvetica_neue/helveticaNeue_blackCond.otf' as='font' crossOrigin='' />
          <link rel='preload' href='/static/fonts/Impossible.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/static/fonts/pacifico.ttf' as='font' crossOrigin='' />

          {/* <!-- apple splash screen images --> */}
          {/* <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' /> */}

          <link rel='icon' href='/static/icons/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
