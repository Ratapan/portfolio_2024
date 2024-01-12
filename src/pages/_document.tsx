import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html className='coffe'>
      <Head>
        <link rel="shortcut icon" href="/coffeIcons/RTP.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}