import { Html, Head, Main, NextScript } from "next/document";
import { config } from "dotenv";
import Script from "next/script";


config();

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
  });
`,
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
