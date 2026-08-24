import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-GB" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-slate-900 selection:bg-lime-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
