import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import React from "react";
import Content from "../england/hero/Content";
import GradientGrid from "../england/hero/GradientGrid";

export const metadata = {
  title: "England Haulage & Return Loads | Logic Freight Subcontractor Network",
  description:
    "Logic Freight connects hauliers and subcontractors across England with verified return loads and nationwide haulage work. From London and Manchester to Birmingham and Leeds, our tautliner, flatbed, and curtainsider network keeps your trucks full and moving across the UK.",
  keywords: [
    "England haulage",
    "return loads England",
    "English subcontractor haulage",
    "haulage work England",
    "London haulage",
    "Manchester haulage",
    "Birmingham haulage",
    "Leeds haulage",
    "Liverpool haulage",
    "Bristol haulage",
    "tautliner haulage England",
    "flatbed haulage England",
    "curtainsider transport England",
    "backloads England",
    "owner drivers England",
    "subcontract haulage UK",
    "return loads UK",
    "UK haulage network",
    "English logistics",
    "HGV haulage England",
    "freight exchange England",
    "general haulage England",
  ],
  openGraph: {
    title: "England Haulage & Return Loads | Logic Freight",
    description:
      "Join Logic Freight’s trusted subcontractor network. We connect English hauliers with consistent return loads and UK-wide haulage work.",
    url: "https://www.logicfreight.co.uk/england",
    siteName: "Logic Freight",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logic Freight England Haulage Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "England Haulage & Return Loads | Logic Freight",
    description:
      "Haulage and subcontract opportunities across England. Logic Freight connects you with return loads from London, Manchester, and Birmingham to major UK cities.",
    images: ["/assets/images/logo.png"],
  },
};

export default function England() {
  const englandRoutes = [
    // 🚛 High-demand England internal routes
    { title: "London to Birmingham", location: "England" },
    { title: "Manchester to Leeds", location: "England" },
    { title: "Liverpool to Nottingham", location: "England" },
    { title: "Bristol to Sheffield", location: "England" },
    { title: "Southampton to Leicester", location: "England" },
    { title: "Newcastle to Nottingham", location: "England" },
    { title: "Derby to Manchester", location: "England" },

    // 🚛 England to Scotland/Wales
    { title: "London to Edinburgh", location: "England / Scotland" },
    { title: "Birmingham to Glasgow", location: "England / Scotland" },
    { title: "Leeds to Cardiff", location: "England / Wales" },
    { title: "Liverpool to Swansea", location: "England / Wales" },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <Content />
      <Stats />

      <CoverageAreas
        title="England Haulage"
        description="Logic Freight connects England’s busiest logistics hubs — from London to Manchester — to key cities across Scotland and Wales. Our flatbed and curtain-sider fleet ensures full and part loads move efficiently, reducing empty miles and improving turnaround times."
        areas={englandRoutes}
        region="England"
      />

      <PlaceTruckForm region="England" />
      <GradientGrid />
    </main>
  );
}
