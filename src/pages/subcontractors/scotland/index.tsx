import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import React from "react";
import Content from "./hero/Content";
import GradientGrid from "./hero/GradientGrid";

export const metadata = {
  title:
    "Scotland Haulage & Return Loads | Logic Freight Subcontractor Network",
  description:
    "Logic Freight connects Scottish hauliers and subcontractors with verified return loads and haulage work across the UK. From Glasgow and Edinburgh to Aberdeen and Inverness, our flatbed, tautliner, and curtainsider fleet keeps your trucks loaded and earning.",
  keywords: [
    "Scotland haulage",
    "return loads Scotland",
    "Scottish subcontractor haulage",
    "haulage work Scotland",
    "Glasgow haulage",
    "Edinburgh haulage",
    "Aberdeen haulage",
    "Inverness haulage",
    "Dundee haulage",
    "Highlands haulage",
    "tautliner haulage Scotland",
    "flatbed haulage Scotland",
    "curtainsider transport Scotland",
    "backloads Scotland",
    "owner drivers Scotland",
    "subcontract haulage UK",
    "return loads UK",
    "UK haulage network",
    "Scottish logistics",
    "HGV haulage Scotland",
    "freight exchange Scotland",
    "general haulage Scotland",
  ],
  openGraph: {
    title: "Scotland Haulage & Return Loads | Logic Freight",
    description:
      "Join Logic Freight’s trusted subcontractor network. We connect Scottish hauliers with consistent return loads and UK-wide haulage work.",
    url: "https://www.logicfreight.co.uk/scotland",
    siteName: "Logic Freight",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logic Freight Scotland Haulage Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scotland Haulage & Return Loads | Logic Freight",
    description:
      "Haulage and subcontract opportunities across Scotland. Logic Freight connects you with return loads from Glasgow, Edinburgh, and Aberdeen to major UK cities.",
    images: ["/assets/images/logo.png"],
  },
};

export default function Scotland() {
  const scotlandRoutes = [
    // 🚛 High-demand UK routes from/to Scotland
    { title: "Inverness to Grimsby", location: "Scotland / England" },
    { title: "Aberdeen to London", location: "Scotland / England" },
    { title: "Glasgow to Birmingham", location: "Scotland / England" },
    { title: "Edinburgh to Manchester", location: "Scotland / England" },
    { title: "Dundee to Bristol", location: "Scotland / England" },
    { title: "Perth to Southampton", location: "Scotland / England" },
    { title: "Stirling to Nottingham", location: "Scotland / England" },
    { title: "Fife to Liverpool", location: "Scotland / England" },
    { title: "Ayrshire to Leeds", location: "Scotland / England" },
    { title: "Highlands to Midlands", location: "Scotland / England" },

    // // 🏴 Internal Scotland routes
    // { title: "Glasgow to Edinburgh", location: "Central Belt, Scotland" },
    // { title: "Aberdeen to Inverness", location: "North Scotland" },
    // { title: "Oban to Dundee", location: "West / East Scotland" },
    // { title: "Fort William to Stirling", location: "Central Scotland" },
    // { title: "Highlands Distribution Network", location: "Northern Scotland" },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <Content />
      <Stats />

      <CoverageAreas
        title="Scotland Haulage"
        description="Logic Freight connects Scotland’s busiest logistics hubs — from Inverness to the Central Belt — to key cities across England and Wales. Our flatbed and curtain-sider fleet ensures full and part loads move efficiently, reducing empty miles and improving turnaround times."
        areas={scotlandRoutes}
        region="Scotland"
      />
      <PlaceTruckForm region="Scotland" />

      <GradientGrid />
    </main>
  );
}
