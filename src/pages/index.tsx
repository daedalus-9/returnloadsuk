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

export default function Home() {
  const title = "Return Loads UK";
  const description =
    "Find verified return loads, backloads, and available haulage loads across the UK. Connect instantly with trusted freight from England, Scotland, and Wales and reduce empty running with Logic Freight.";

  const keywords = [
    "return loads UK",
    "UK return loads",
    "backloads UK",
    "available loads UK",
    "return loads near me",
    "haulage loads UK",
    "HGV return loads",
    "find loads UK",
    "load matching UK",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Return Loads UK",
    url: "https://www.returnloadsuk.co.uk",
    description:
      "Return Loads UK helps hauliers find verified return loads, backloads, and available haulage work across the UK.",
    email: "traffic@logic-freight.co.uk",
    telephone: "+44 1633 441457",
    logo: "https://www.returnloadsuk.co.uk/assets/logo.png",
    image: "https://www.returnloadsuk.co.uk/assets/truck_bg.webp",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.returnloadsuk.co.uk",
      },
    ],
  };

  return (
    <main className={barlowFont.className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://www.returnloadsuk.co.uk" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://www.returnloadsuk.co.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Return Loads UK" />
        <meta
          property="og:image"
          content="https://www.returnloadsuk.co.uk/assets/truck_bg.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.returnloadsuk.co.uk/assets/truck_bg.webp"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
    </main>
  );
}
