import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import Head from "next/head";
import React from "react";
import Content from "../return-loads-wales/hero/Content";
import GradientGrid from "../return-loads-wales/hero/GradientGrid";

export const metadata = {
  title: "Return Loads Wales",
  description:
    "Discover verified return loads, reloads, and haulage backloads across Wales. Covering Cardiff, Swansea, Newport, Wrexham, Bangor, and every major Welsh freight corridor. Keep your trucks full and cut empty miles with Logic Freight.",
  keywords: [
    "return loads Wales",
    "Wales return loads",
    "reloads Wales",
    "backloads Wales",
    "available loads Wales",
    "Wales haulage",
    "haulage work Wales",
    "freight loads Wales",
    "owner drivers Wales",
    "HGV loads Wales",
    "flatbed loads Wales",
    "curtainsider loads Wales",
    "tautliner loads Wales",
    "Wales transport jobs",
    "UK return loads",
    "Logic Freight",
    "return loads UK",
  ],
  openGraph: {
    title: "Return Loads Wales",
    description:
      "Find return loads, reloads, and haulage work across Wales. Logic Freight connects hauliers with full and part loads from Cardiff, Swansea, Wrexham, and beyond.",
    url: "https://www.returnloadsuk.co.uk/return-loads-wales",
    siteName: "Return Loads UK",
    images: [
      {
        url: "/assets/truck_bg.webp",
        width: 1200,
        height: 630,
        alt: "Return Loads Wales – Logic Freight",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads Wales",
    description:
      "Secure trusted return loads and reloads across Wales. Keep your fleet earning, reduce empty miles, and move freight efficiently.",
    images: ["/assets/truck_bg.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Logic Freight",
  url: "https://www.returnloadsuk.co.uk",
  logo: "https://www.returnloadsuk.co.uk/assets/logo.png",
  email: "traffic@logic-freight.co.uk",
  telephone: "01633 441457",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "traffic@logic-freight.co.uk",
    telephone: "01633 441457",
    availableLanguage: "en",
    areaServed: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Wales",
      item: "https://www.returnloadsuk.co.uk/return-loads-wales",
    },
  ],
};

export default function Wales() {
  const walesRoutes = [
    { title: "Cardiff to Swansea – Return Loads", location: "South Wales" },
    { title: "Wrexham to Cardiff – Reloads", location: "Wales" },
    { title: "Swansea to Newport – Backloads", location: "South Wales" },
    { title: "Aberystwyth to Bangor – Return Loads", location: "North Wales" },
    { title: "Wrexham to Swansea – Reload Opportunities", location: "Wales" },
    {
      title: "Cardiff to London – Return Loads UK",
      location: "Wales / England",
    },
    { title: "Swansea to Birmingham – Reloads", location: "Wales / England" },
    {
      title: "Bangor to Edinburgh – UK Backloads",
      location: "Wales / Scotland",
    },
  ];

  return (
    <>
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
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

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

      <main className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
        <Content />
        <CoverageAreas
          title="Return Loads Wales – High-Demand Freight Routes"
          description="Logic Freight connects Wales’ busiest logistics hubs to key UK destinations. From Cardiff, Swansea, Newport, and Wrexham to England and Scotland, we provide verified return loads, reloads, and part/full loads to keep your trucks earning every mile."
          areas={walesRoutes}
          region="Wales"
        />
        <PlaceTruckForm region="Wales" />
        <GradientGrid />
      </main>
    </>
  );
}
