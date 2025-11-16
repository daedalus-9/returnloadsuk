import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CXLD6HDGHJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CXLD6HDGHJ', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Site-wide Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Return Loads UK",
              url: "https://www.returnloadsuk.co.uk",
              logo: "https://www.returnloadsuk.co.uk/public/assets/images/logo.png",
              description:
                "Return Loads UK helps hauliers find verified return loads, backloads, and available haulage work across the UK.",
              telephone: "+44 1633 441457",
              email: "traffic@logic-freight.co.uk",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </Head>
      <body className="bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
