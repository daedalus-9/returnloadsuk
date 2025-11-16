import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import Head from "next/head";
import React from "react";
import Content from "../return-loads-wales/hero/Content";
import GradientGrid from "../return-loads-wales/hero/GradientGrid";

export const metadata = {
  title: "Return Loads Wales | Get Your Return Loads Now – Logic Freight",
  description:
    "Find verified return loads, reloads, and available haulage work across Wales. From Cardiff and Swansea to Wrexham and Bangor, Logic Freight helps hauliers reduce empty miles and earn more.",
  keywords: [
    "return loads Wales",
    "Wales haulage",
    "Wales subcontractor haulage",
    "return loads UK",
    "flatbed haulage Wales",
    "tautliner haulage Wales",
    "curtainsider transport Wales",
    "owner drivers Wales",
    "haulage jobs Wales",
    "backloads Wales",
    "road freight Wales",
    "general haulage Wales",
    "freight exchange Wales",
    "UK haulage network",
  ],
  openGraph: {
    title: "Return Loads Wales | Logic Freight",
    description:
      "Access return loads, reloads, and haulage work across Wales. Logic Freight connects hauliers to full and part loads from Cardiff, Swansea, and Wrexham.",
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
    title: "Return Loads Wales | Get Your Return Loads Now",
    description:
      "Verified return loads, reloads, and available haulage across Wales. Reduce empty miles and keep your trucks full with Logic Freight.",
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

export default function Wales() {
  const walesRoutes = [
    // High-demand Wales internal routes
    { title: "Cardiff to Swansea", location: "South Wales" },
    { title: "Wrexham to Cardiff", location: "Wales" },
    { title: "Swansea to Newport", location: "South Wales" },
    { title: "Aberystwyth to Bangor", location: "North Wales" },
    { title: "Wrexham to Swansea", location: "Wales" },

    // Wales to England/Scotland
    { title: "Cardiff to London", location: "Wales / England" },
    { title: "Swansea to Birmingham", location: "Wales / England" },
    { title: "Bangor to Edinburgh", location: "Wales / Scotland" },
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
        <Content />

        <CoverageAreas
          title="Wales Haulage"
          description="Logic Freight connects Wales’ busiest logistics hubs - from Cardiff to Wrexham - to key cities across England and Scotland. Our flatbed and curtain-sider fleet ensures full and part loads move efficiently, reducing empty miles and improving turnaround times."
          areas={walesRoutes}
          region="Wales"
        />

        <PlaceTruckForm region="Wales" />
        <GradientGrid />
      </main>
    </>
  );
}
