import { CountryLinksSection } from "@/components/countryLinksSection/CountryLinksSection";
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
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { Pricing } from "@/components/pricing/Pricing";
import { TrustedAcrossUK } from "@/components/trustedAcrossUK/TrustedAcrossUK";
import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Return Loads UK | Find Return Loads Near Me",
  description:
    "Return Loads UK made simple. Find UK return loads, return loads near me, backloads, reloads, and available loads across England, Scotland, and Wales. Connect with trusted hauliers for full loads, part loads, and cost-efficient nationwide transport.",
  keywords: [
    // Primary keywords
    "return loads UK",
    "UK return loads",
    "return loads",
    "return loads near me",
    "available loads near me",
    "UK backloads",
    "backloads near me",
    "reloads near me",
    "back loads UK",
    "freight loads near me",

    // Regional targeting
    "return loads England",
    "return loads Scotland",
    "return loads Wales",
    "return loads London",
    "return loads Midlands",
    "return loads South West",
    "return loads Yorkshire",
    "return loads North West",
    "return loads name me",

    // Supporting industry terms
    "haulage return loads",
    "HGV return loads",
    "UK freight exchange",
    "hauliers near me",
    "empty miles reduction",
    "full load transport UK",
    "part load transport UK",
    "tautliner loads",
    "flatbed loads",
    "curtainsider loads",
    "general haulage UK",
    "national haulage network",
  ],
  openGraph: {
    title: "Return Loads UK | Backloads, Reloads & Available Loads Near You",
    description:
      "Find reliable UK return loads, backloads, and available loads near you. Logic Freight connects hauliers across England, Scotland, and Wales with cost-effective nationwide transport solutions.",
    url: "https://www.returnloadsuk.co.uk",
    siteName: "Return Loads UK",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Return Loads UK Haulage Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Loads UK | Backloads & Available Loads Near Me",
    description:
      "Find UK return loads, backloads, and available loads near you. Connect with trusted hauliers for full and part loads nationwide.",
    images: ["/assets/images/logo.png"],
  },
};

export default function Home() {
  return (
    <main className={barlowFont.className}>
      <Hero />
      <PlaceTruckForm />
      <TrustedAcrossUK />
      <CountryLinksSection />
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
