import { CTA } from "@/components/cta/CTA";
import { Customers } from "@/components/customers/Customers";
import Carousel from "@/components/features/carousel/Carousel";
import { CodeDemo } from "@/components/features/code/CodeDemo";
import { FeatureGrid } from "@/components/features/grid/FeatureGrid";
import { Stats } from "@/components/features/stats/Stats";
import { FiftyFiftyCard } from "@/components/fiftyFiftyCard/fiftyFiftyCard";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { PartnerJoinForm } from "@/components/partnerJoinForm/PartnerJoinForm";
import { Pricing } from "@/components/pricing/Pricing";
import { TrustedAcrossUK } from "@/components/trustedAcrossUK/TrustedAcrossUK";
import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Return Loads | Logic Freight UK Haulage",
  description:
    "Find reliable UK return loads with Logic Freight — specialists in backloads, full and part loads, and nationwide haulage. Connect with trusted hauliers across England, Scotland, and Wales for cost-effective, on-time transport solutions.",
  keywords: [
    "return loads",
    "UK return loads",
    "return loads UK",
    "return loads Scotland",
    "return loads England",
    "return loads Wales",
    "backloads",
    "freight exchange",
    "UK haulage",
    "haulage company UK",
    "tautliner haulage",
    "flatbed haulage",
    "curtainsider transport",
    "general haulage",
    "road haulage services",
    "pallet delivery",
    "full load transport",
    "part load delivery",
    "haulage contractors",
    "return haulage",
    "HGV transport",
    "logistics solutions UK",
    "haulier network",
    "nationwide transport",
  ],
  openGraph: {
    title: "Return Loads | Logic Freight UK Haulage",
    description:
      "Logic Freight connects UK return loads with trusted hauliers — reducing empty miles, cutting costs, and delivering reliable nationwide transport solutions.",
    url: "https://www.logic-freight.co.uk",
    siteName: "Logic Freight",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logic Freight UK Haulage Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads | Logic Freight UK Haulage",
    description:
      "Connecting UK return loads with the right hauliers — specialists in tautliner, flatbed, and curtainsider transport across England, Scotland, and Wales.",
    images: ["/assets/images/logo.png"],
  },
};

export default function Home() {
  return (
    <main className={barlowFont.className}>
      <Hero />
      <PartnerJoinForm />
      <TrustedAcrossUK />
      <FeatureGrid />
      <CodeDemo />
      <Carousel />
      <Customers />
      <Stats />
      <FiftyFiftyCard />
      <CTA />
    </main>
  );
}
