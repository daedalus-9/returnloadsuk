import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { Stats } from "@/components/features/stats/Stats";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import Head from "next/head";
import React from "react";
import Content from "../return-loads-england/hero/Content";
import GradientGrid from "../return-loads-england/hero/GradientGrid";

export const metadata = {
  title:
    "Return Loads & Reloads England | Available Loads Near Me – Get Your Loads Now",
  description:
    "Grab return loads, reloads, and part/full loads across England instantly. Available near you from London, Manchester, Birmingham, Leeds, and beyond. Keep your trucks full and reduce empty miles today.",
  keywords: [
    "return loads England",
    "reloads England",
    "available loads England",
    "return loads near me",
    "reloads near me",
    "available loads near me",
    "get loads now England",
    "recurring loads England",
    "full load transport England",
    "part load transport England",
    "UK backloads",
    "HGV haulage England",
    "tautliner loads England",
    "flatbed loads England",
    "curtainsider loads England",
  ],
  openGraph: {
    title: "Return Loads & Reloads England | Get Your Loads Now",
    description:
      "Claim return loads, reloads, and available loads near you. Keep your trucks full and move freight across England efficiently. Don’t miss out on high-demand loads today.",
    url: "https://www.returnloadsuk.co.uk/return-loads-england",
    siteName: "Return Loads UK",
    images: [
      {
        url: "/assets/truck_bg.webp",
        width: 1200,
        height: 630,
        alt: "Return Loads England – Get Your Loads Now",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads & Reloads England | Get Your Loads Now",
    description:
      "Return loads, reloads, and available loads near you in England. Claim them instantly and keep your trucks full.",
    images: ["/assets/truck_bg.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Logic Freight",
  url: "https://www.returnloadsuk.co.uk",
  email: "traffic@logic-freight.co.uk",
  telephone: "01633 441457",
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

export default function England() {
  const englandRoutes = [
    // High-demand England internal routes
    { title: "London to Birmingham", location: "England" },
    { title: "Manchester to Leeds", location: "England" },
    { title: "Liverpool to Nottingham", location: "England" },
    { title: "Bristol to Sheffield", location: "England" },
    { title: "Southampton to Leicester", location: "England" },
    { title: "Newcastle to Nottingham", location: "England" },
    { title: "Derby to Manchester", location: "England" },

    // England to Scotland/Wales
    { title: "London to Edinburgh", location: "England / Scotland" },
    { title: "Birmingham to Glasgow", location: "England / Scotland" },
    { title: "Leeds to Cardiff", location: "England / Wales" },
    { title: "Liverpool to Swansea", location: "England / Wales" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
        {/* Hero / Content */}
        <Content />

        {/* Coverage Areas */}
        <CoverageAreas
          title="High-Demand England Haulage"
          description="Claim available return loads, reloads, and part/full loads across England’s busiest logistics hubs. From London to Manchester, Birmingham to Leeds, keep your trucks moving and maximise profits."
          areas={englandRoutes}
          region="England"
        />

        {/* Place Truck / Claim Loads Form */}
        <PlaceTruckForm region="England" />

        {/* Gradient Grid / Visual Feature Section */}
        <GradientGrid />
      </main>
    </>
  );
}
