import Footer from "@/components/footer/Footer";
import FlyoutNav from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Default meta tags */}
        <title>Return Loads UK | Find Return Loads Near Me</title>
        <meta
          name="description"
          content="Return Loads UK made simple. Find UK return loads, return loads near me, backloads, reloads, and available loads across England, Scotland, and Wales."
        />
        <meta
          name="keywords"
          content="return loads UK, return loads near me, backloads, reloads, available loads, UK freight"
        />
        <meta name="robots" content="index, follow" />

        {/* Fallback Open Graph */}
        <meta
          property="og:title"
          content="Return Loads UK | Get Your Return Loads Now"
        />
        <meta
          property="og:description"
          content="Find verified return loads across the UK instantly. Connect with trusted hauliers and reduce empty miles."
        />
        <meta property="og:image" content="/assets/truck_bg.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.returnloadsuk.co.uk" />
      </Head>

      <FlyoutNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
