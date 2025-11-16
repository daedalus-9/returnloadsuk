import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { Stats } from "@/components/features/stats/Stats";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import React from "react";
import Content from "./hero/Content";
import GradientGrid from "./hero/GradientGrid";

export const metadata = {
  title:
    "Return Loads & Reloads Scotland | Available Loads Near Me – Get Your Loads Now",
  description:
    "Grab return loads, reloads, and part/full loads across Scotland instantly. Available near you from Glasgow, Edinburgh, Aberdeen, Inverness, and beyond. Keep your trucks full and reduce empty miles today.",
  keywords: [
    "return loads Scotland",
    "reloads Scotland",
    "available loads Scotland",
    "return loads near me",
    "reloads near me",
    "available loads near me",
    "get loads now Scotland",
    "recurring loads Scotland",
    "full load transport Scotland",
    "part load transport Scotland",
    "UK backloads",
    "HGV haulage Scotland",
    "tautliner loads Scotland",
    "flatbed loads Scotland",
    "curtainsider loads Scotland",
  ],
  openGraph: {
    title: "Return Loads & Reloads Scotland | Get Your Loads Now",
    description:
      "Claim return loads, reloads, and available loads near you. Keep your trucks full and move freight across Scotland efficiently. Don’t miss out on high-demand loads today.",
    url: "https://www.returnloadsuk.co.uk/return-loads-scotland",
    siteName: "Return Loads UK",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Return Loads Scotland – Get Your Loads Now",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads & Reloads Scotland | Get Your Loads Now",
    description:
      "Return loads, reloads, and available loads near you in Scotland. Claim them instantly and keep your trucks full.",
    images: ["/assets/images/logo.png"],
  },
};

export default function Scotland() {
  const scotlandRoutes = [
    // High-demand Scotland internal routes
    { title: "Glasgow to Edinburgh", location: "Scotland" },
    { title: "Aberdeen to Inverness", location: "Scotland" },
    { title: "Dundee to Stirling", location: "Scotland" },
    { title: "Perth to Inverness", location: "Scotland" },

    // Scotland to England/Wales
    { title: "Glasgow to Birmingham", location: "Scotland / England" },
    { title: "Edinburgh to Manchester", location: "Scotland / England" },
    { title: "Aberdeen to London", location: "Scotland / England" },
    { title: "Inverness to Grimsby", location: "Scotland / England" },
    { title: "Inverness to Penzance", location: "Scotland / England" },
    { title: "Dundee to Bristol", location: "Scotland / England" },
    { title: "Fife to Liverpool", location: "Scotland / England" },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      {/* Hero / Content */}
      <Content />

     

      {/* Coverage Areas */}
      <CoverageAreas
        title="High-Demand Scotland Haulage"
        description="Claim available return loads, reloads, and part/full loads across Scotland’s busiest logistics hubs. From Glasgow to Edinburgh, Aberdeen to Inverness, keep your trucks moving and maximise profits."
        areas={scotlandRoutes}
        region="Scotland"
      />

      {/* Place Truck / Claim Loads Form */}
      <PlaceTruckForm region="Scotland" />

      {/* Gradient Grid / Visual Feature Section */}
      <GradientGrid />
    </main>
  );
}
