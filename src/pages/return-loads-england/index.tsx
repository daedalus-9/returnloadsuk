import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { Stats } from "@/components/features/stats/Stats";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import Head from "next/head";
import React from "react";
import Content from "../return-loads-england/hero/Content";
import GradientGrid from "../return-loads-england/hero/GradientGrid";

export const metadata = {
  title: "Return Loads England | Reloads & Backloads Near Me – Logic Freight",
  description:
    "Secure England return loads, reloads, and available backloads fast. Covering London, Manchester, Birmingham, Leeds, Liverpool, Bristol, and all major English routes. Maximise truck earnings and cut empty running.",
  keywords: [
    "return loads England",
    "England return loads",
    "reloads England",
    "backloads England",
    "available loads England",
    "England loads near me",
    "return loads near me",
    "HGV loads England",
    "UK backloads",
    "haulage England",
    "English transport jobs",
    "full loads England",
    "part loads England",
    "curtainsider loads England",
    "flatbed loads England",
    "tautliner loads England",
    "Logic Freight",
    "return loads UK",
  ],
  openGraph: {
    title: "Return Loads England | Reloads & Backloads Near You",
    description:
      "Find and secure return loads, reloads, and available backloads across England. Keep your fleet earning with loads from London, Manchester, Birmingham, Leeds, Liverpool, and more.",
    url: "https://www.returnloadsuk.co.uk/return-loads-england",
    siteName: "Return Loads UK",
    images: [
      {
        url: "/assets/truck_bg.webp",
        width: 1200,
        height: 630,
        alt: "Return Loads England – Logic Freight",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads England | Reloads & Backloads",
    description:
      "Find England return loads, reloads, and available loads near you. Keep your trucks earning every mile.",
    images: ["/assets/truck_bg.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Logic Freight",
  url: "https://www.returnloadsuk.co.uk",
  logo: "https://www.returnloadsuk.co.uk/public/assets/images/logo.png",
  email: "traffic@logic-freight.co.uk",
  telephone: "01633 441457",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "traffic@logic-freight.co.uk",
    telephone: "01633 441457",
    areaServed: "GB",
    availableLanguage: "en",
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
      name: "England",
      item: "https://www.returnloadsuk.co.uk/return-loads-england",
    },
  ],
};

export default function England() {
  const englandRoutes = [
    { title: "London to Birmingham – Return Loads", location: "England" },
    { title: "Manchester to Leeds – Reloads", location: "England" },
    { title: "Liverpool to Nottingham – Backloads", location: "England" },
    { title: "Bristol to Sheffield – Return Loads", location: "England" },
    {
      title: "Southampton to Leicester – Available Loads",
      location: "England",
    },
    { title: "Newcastle to Nottingham – Return Loads", location: "England" },
    {
      title: "Derby to Manchester – Reload Opportunities",
      location: "England",
    },
    {
      title: "London to Edinburgh – UK Backloads",
      location: "England / Scotland",
    },
    {
      title: "Birmingham to Glasgow – Return Loads UK",
      location: "England / Scotland",
    },
    { title: "Leeds to Cardiff – Reloads", location: "England / Wales" },
    { title: "Liverpool to Swansea – Backloads", location: "England / Wales" },
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
          title="Return Loads England – High-Demand Routes"
          description="Find return loads, reloads, and available part or full loads across England. From London to Manchester, Liverpool to Leeds, Bristol to Birmingham, keep your fleet moving and reduce empty miles."
          areas={englandRoutes}
          region="England"
        />

        <PlaceTruckForm region="England" />
        <GradientGrid />
      </main>
    </>
  );
}
