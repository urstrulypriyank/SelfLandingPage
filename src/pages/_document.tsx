import { Html, Head, Main, NextScript } from "next/document";
import { config } from "dotenv";
import Script from "next/script";

config();
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hi, I'm Priyank Rai, a 23-year-old full-stack web developer and DevOps enthusiast based in India. I hold a degree in Computer Science Engineering and I'm actively seeking software development opportunities. Explore my portfolio to see my skills and projects"
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        ></Script>
        <Script
          id="myScript"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.GA_MEASUREMENT_ID});
            `,
          }}
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
