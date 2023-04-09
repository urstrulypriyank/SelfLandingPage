import { Html, Head, Main, NextScript } from "next/document";
import { config } from "dotenv";
import Script from "next/script";
import ss from "../../public/ss.png";

config();

// Some specific configuration
let title = "Priyank&apos;s Portfolio";
let description =
  "Hi, I'm Priyank Rai, a 23-year-old full-stack web developer and DevOps enthusiast based in India. I hold a degree in Computer Science Engineering and I'm actively seeking software development opportunities. Explore my portfolio to see my skills and projects";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags for SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="author" content="Priyank Rai" />
        <meta
          name="keywords"
          content="Priyank rai, Developer Portfolio, Software Engineer"
        />
        <meta name="robots" content="index, follow" />
        {/* Replace the example below with your actual website title */}
        {/* <title>My Next.js Website</title> */}

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        {/* Replace the example below with your actual website URL */}
        <meta property="og:url" content="https://priyankrai.live" />
        {/* Replace the example below with your actual website title */}
        <meta property="og:title" content={title} />
        {/* Replace the example below with your actual website description */}
        <meta property="og:description" content={description} />
        {/* Replace the example below with the URL of your website's logo image */}
        <meta property="og:image" content="https://priyankrai.live/ss.png" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content={description} />
        {/* Replace the example below with your Twitter handle */}
        {/* <meta name="twitter:site" content="@example" /> */}
        {/* Replace the example below with your actual website title */}
        <meta name="twitter:title" content={title} />
        {/* Replace the example below with your actual website description */}
        <meta name="twitter:description" content={description} />
        {/* Replace the example below with the URL of your website's logo image */}
        <meta name="twitter:image" content="https://priyankrai.live/ss.png" />

        {/* Additional meta tags */}

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
