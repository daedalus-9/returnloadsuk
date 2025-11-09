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
