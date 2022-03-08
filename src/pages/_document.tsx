import Document, { Html, Head, Main, NextScript } from 'next/document';

import { theme } from 'theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap'
            rel='stylesheet'
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              html,
              body {
                padding: 0;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                height: 100%;
                width: 100%;
                overflow-x: hidden;
                background-color: ${theme.colors.lightGrayCyan10};
              }

              *, :after, :before {
                box-sizing: border-box;
              }
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
