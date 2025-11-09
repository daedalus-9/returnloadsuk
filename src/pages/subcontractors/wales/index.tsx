import { CoverageAreas } from "@/components/coverage/CoverageAreas";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import React from "react";
import Content from "../england/hero/Content";
import GradientGrid from "../england/hero/GradientGrid";

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
      <Stats />

      <CoverageAreas
        title="Wales Haulage"
        description="Logic Freight connects Wales’ busiest logistics hubs — from Cardiff to Wrexham — to key cities across England and Scotland. Our flatbed and curtain-sider fleet ensures full and part loads move efficiently, reducing empty miles and improving turnaround times."
        areas={walesRoutes}
        region="Wales"
      />

      <PlaceTruckForm region="Wales" />
      <GradientGrid />
      <Footer />
    </main>
  );
}
