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
  title: "Logic Freight | UK Haulage & Return Loads Specialists",
  description:
    "Logic Freight connects customers with trusted UK hauliers offering efficient return loads, full and part loads, and nationwide transport solutions. Specialists in tautliner, flatbed, and curtainsider haulage — serving England, Scotland, and Wales with on-time, cost-effective logistics.",
  keywords: [
    "UK haulage",
    "return loads",
    "return loads UK",
    "return loads Scotland",
    "return loads England",
    "return loads Wales",
    "tautliner haulage",
    "flatbed haulage",
    "curtainsider transport",
    "pallet delivery",
    "backloads",
    "freight exchange",
    "road haulage services",
    "UK logistics",
    "general haulage",
    "nationwide transport",
    "haulage company UK",
    "same day haulage",
    "full load transport",
    "part load delivery",
    "haulage contractors",
    "return haulage",
    "HGV transport",
    "logistics solutions UK",
    "haulier network",
  ],
  openGraph: {
    title: "Logic Freight | UK Haulage & Return Loads Specialists",
    description:
      "Smarter haulage, simplified logistics. Logic Freight connects loads with trusted hauliers across the UK — reducing empty miles and cutting transport costs.",
    url: "https://www.logicfreight.co.uk",
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
    title: "Logic Freight | Smarter UK Haulage",
    description:
      "Connecting loads with the right hauliers across the UK — specialists in return loads, tautliner, flatbed, and curtainsider transport.",
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
