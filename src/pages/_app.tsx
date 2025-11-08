import Footer from "@/components/footer/Footer";
import FlyoutNav from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FlyoutNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
