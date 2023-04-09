import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// import ss from "../../public/ss.png";

// Some specific configuration
let title = "Priyank&apos;s Portfolio";
let description =
  "Hi, I'm Priyank Rai, a 23-year-old full-stack web developer and DevOps enthusiast based in India. I hold a degree in Computer Science Engineering and I'm actively seeking software development opportunities. Explore my portfolio to see my skills and projects";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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

        {/*  actual website title */}
        {/* <title>My Next.js Website</title> */}

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        {/*  actual website URL */}
        <meta property="og:url" content="https://priyankrai.live" />
        {/*  actual website title */}
        <meta property="og:title" content={title} />
        {/*  actual website description */}
        <meta property="og:description" content={description} />
        {/*  URL of your website's logo image */}
        <meta property="og:image" content="https://priyankrai.live/ss.png" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content={description} />
        {/*  your Twitter handle */}
        {/* <meta name="twitter:site" content="@example" /> */}
        {/*  actual website title */}
        <meta name="twitter:title" content={title} />
        {/*  actual website description */}
        <meta name="twitter:description" content={description} />
        {/* Replace the example below with the URL of your website's logo image */}
        <meta name="twitter:image" content="https://priyankrai.live/ss.png" />

        {/* Additional meta tags */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
