import { CountryLinksSection } from "@/components/countryLinksSection/CountryLinksSection";
import { CTA } from "@/components/cta/CTA";
import { Customers } from "@/components/customers/Customers";
import Carousel from "@/components/features/carousel/Carousel";
import { CodeDemo } from "@/components/features/code/CodeDemo";
import { FeatureGrid } from "@/components/features/grid/FeatureGrid";
import { Stats } from "@/components/features/stats/Stats";
import { FiftyFiftyCard } from "@/components/fiftyFiftyCard/fiftyFiftyCard";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { TrustedAcrossUK } from "@/components/trustedAcrossUK/TrustedAcrossUK";
import { Barlow } from "next/font/google";
import Head from "next/head";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Return Loads UK | Get Your Return Loads Now – Available Loads Near You Instantly",
  description:
    "Find UK return loads, backloads, and available loads near you instantly. Connect with verified loads across England, Scotland, and Wales with Logic Freight.",
  keywords: [
    "return loads UK",
    "UK return loads",
    "return loads near me",
    "available loads near me",
    "backloads UK",
    "reloads UK",
    "haulage return loads",
    "HGV return loads",
    "freight loads near me",
    "return loads England",
    "return loads Scotland",
    "return loads Wales",
  ],
  openGraph: {
    title: "Return Loads UK | Get Your Return Loads Now",
    description:
      "Claim verified return loads, backloads, and available loads across England, Scotland, and Wales instantly with Logic Freight.",
    url: "https://www.returnloadsuk.co.uk",
    siteName: "Return Loads UK",
    images: [
      {
        url: "/assets/truck_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Return Loads UK – Trucks on the Road",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads UK | Get Your Return Loads Now",
    description:
      "Claim return loads, backloads, and available loads near you instantly across the UK.",
    images: ["/assets/truck_bg.jpg"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Return Loads UK",
    url: "https://www.returnloadsuk.co.uk",
    description:
      "Return Loads UK lets hauliers find return loads, backloads, and available loads across England, Scotland, and Wales instantly.",
    email: "traffic@logic-freight.co.uk",
    telephone: "+44 1633 441457",
    image: "/assets/truck_bg.jpg",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <main className={barlowFont.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <link rel="canonical" href="https://www.returnloadsuk.co.uk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Hero />
      <PlaceTruckForm />
      <TrustedAcrossUK />
      <CountryLinksSection />
      <FeatureGrid />
      <CodeDemo />
      <Carousel />
      <Customers />
      <Stats />
      <FiftyFiftyCard />
      <CTA />

      <Footer />
    </main>
  );
}
