import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import React from "react";
import Content from "../return-loads-wales/hero/Content";
import GradientGrid from "../return-loads-wales/hero/GradientGrid";

export const metadata = {
  title: "Wales Haulage & Return Loads | Logic Freight Subcontractor Network",
  description:
    "Logic Freight connects hauliers and subcontractors across Wales with verified return loads and full or part haulage work. From Cardiff and Swansea to Wrexham and Bangor, our tautliner, flatbed, and curtainsider network keeps your trucks loaded and earning across the UK.",
  keywords: [
    "Wales haulage",
    "return loads Wales",
    "Wales subcontractor haulage",
    "Wales logistics",
    "Cardiff haulage",
    "Swansea haulage",
    "Wrexham haulage",
    "Bangor haulage",
    "return loads UK",
    "return loads Scotland",
    "flatbed haulage Wales",
    "tautliner haulage Wales",
    "curtainsider transport Wales",
    "subcontract haulage work",
    "owner drivers Wales",
    "haulage jobs Wales",
    "backloads Wales",
    "road freight Wales",
    "general haulage Wales",
    "freight exchange Wales",
    "UK haulage network",
  ],
  openGraph: {
    title: "Wales Haulage & Return Loads | Logic Freight",
    description:
      "Haulage work and subcontract opportunities across Wales. Logic Freight connects you with return loads from Cardiff, Swansea, and Wrexham to major UK cities.",
    url: "https://www.logic-freight.co.uk/subcontractors/wales",
    siteName: "Logic Freight",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logic Freight Wales Haulage Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wales Haulage & Return Loads | Logic Freight",
    description:
      "Find subcontract haulage work and return loads across Wales with Logic Freight - connecting hauliers to full and part load opportunities across the UK.",
    images: ["/assets/images/logo.png"],
  },
};

export default function Wales() {
  const walesRoutes = [
    // 🚛 High-demand Wales internal routes
    { title: "Cardiff to Swansea", location: "South Wales" },
    { title: "Wrexham to Cardiff", location: "Wales" },
    { title: "Swansea to Newport", location: "South Wales" },
    { title: "Aberystwyth to Bangor", location: "North Wales" },
    { title: "Wrexham to Swansea", location: "Wales" },

    // 🚛 Wales to England/Scotland
    { title: "Cardiff to London", location: "Wales / England" },
    { title: "Swansea to Birmingham", location: "Wales / England" },
    { title: "Bangor to Edinburgh", location: "Wales / Scotland" },
  ];

  return (
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
  );
}
