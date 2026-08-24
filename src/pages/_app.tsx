import { ConsentAnalytics } from "@/components/analytics/ConsentAnalytics";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07111f" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
      <MobileActionBar />
      <ConsentAnalytics />
    </>
  );
}
