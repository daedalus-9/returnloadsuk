import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { EnquiryForm } from "@/components/enquiryForm/EnquiryForm";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import React from "react";
import { Content } from "./hero/Content";
import { GradientGrid } from "./hero/GradientGrid";

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
        title="Scotland Haulage & Tautliner Coverage"
        description="Logic Freight connects Scotland’s busiest logistics hubs — from Aberdeen to the Central Belt — to key cities across England and Wales. Our tautliner and curtain-sider fleet ensures full and part loads move efficiently, reducing empty miles and improving turnaround times."
        areas={scotlandRoutes}
        region="Scotland"
      />
      <EnquiryForm region="Scotland" />

      <GradientGrid />
      <Footer />
    </main>
  );
}
