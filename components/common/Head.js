import Head from "next/head";
import Script from "next/script";

export default function PageHead() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>

        <title>Prem Mistry</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Hi, I'm Prem. A Frontend Developer."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Prem Mistry's Personal Website"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Hi, I'm Prem. A Frontend Developer. Have a look at some of my projects and find out more about me."
        />
        <meta name="og:url" property="og:url" content="https://lesgoo.in/" />
        <meta name="og:site_name" property="og:site_name" content="lesgoo.in" />
        <meta
          name="og:image"
          property="og:image"
          content="/link-preview-image.jpg"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
        defer={true}
      ></Script>
    </div>
  );
}
