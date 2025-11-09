import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import React from "react";
import Content from "../england/hero/Content";
import GradientGrid from "../england/hero/GradientGrid";

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
