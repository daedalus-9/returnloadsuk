"use client";

import { GhostButton } from "@/components/buttons/GhostButton";
import { SplashButton } from "@/components/buttons/SplashButton";
import { Stats } from "@/components/features/stats/Stats";
import { FiftyFiftyCard } from "@/components/fiftyFiftyCard/fiftyFiftyCard";
import Footer from "@/components/footer/Footer";
import { PartnerJoinForm } from "@/components/partnerJoinForm/PartnerJoinForm";
import { TrustedAcrossUK } from "@/components/trustedAcrossUK/TrustedAcrossUK";

import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { scrollToForm } from "@/components/utils/scrollToForm";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
export const metadata = {
  title:
    "Join Logic Freight Partner Network | UK Haulage Subcontractors & Owner Drivers",
  description:
    "Join the Logic Freight Partner Network and access consistent UK subcontract haulage and return load opportunities. Keep your trucks earning with verified backloads and national freight work across England, Scotland, and Wales.",
  keywords: [
    "join haulage network",
    "UK haulage subcontractors",
    "owner drivers wanted UK",
    "subcontract haulage work",
    "return loads UK",
    "backloads UK",
    "haulage jobs for owner drivers",
    "lorry subcontractor work",
    "freight subcontractor opportunities",
    "UK logistics partnerships",
    "HGV subcontractors",
    "haulage work England",
    "haulage work Scotland",
    "haulage work Wales",
    "tautliner subcontractors",
    "flatbed haulage work",
    "curtainsider subcontractor jobs",
    "freight exchange alternative UK",
    "UK transport partnerships",
  ],
  openGraph: {
    title:
      "Join Logic Freight Partner Network | UK Haulage Subcontractors & Owner Drivers",
    description:
      "Partner with Logic Freight and start receiving verified UK return loads and subcontract haulage opportunities. Join a trusted nationwide haulier network today.",
    url: "https://www.logicfreight.co.uk/subcontractors/join",
    siteName: "Logic Freight",
    images: [
      {
        url: "/assets/images/truck_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Join Logic Freight Haulage Partner Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Join Logic Freight Partner Network | UK Haulage Subcontractors & Owner Drivers",
    description:
      "Connect with verified haulage work, return loads, and backloads across the UK. Keep your trucks moving and earning as part of the Logic Freight Partner Network.",
    images: ["/assets/images/truck_bg.jpg"],
  },
};

export default function JoinPartner() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section
        className="relative flex h-screen items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/assets/images/truck_bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <MaxWidthWrapper className="relative z-10 flex flex-col items-center gap-6">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            Join the Logic Freight Partner Network
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl text-zinc-300 sm:text-lg md:text-xl"
          >
            Get regular subcontract haulage work and verified return loads
            across the UK. Keep your trucks full, reduce empty miles, and grow
            within a trusted national network.
          </motion.p>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:01633441457"
              className="mx-auto inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-lg font-semibold text-black transition hover:bg-emerald-600"
            >
              Call Us
              <FiArrowRight />
            </a>

            <SplashButton
              onClick={scrollToForm}
              className="rounded-md px-4 py-2 text-lg text-zinc-100"
            >
              Join as a Partner
            </SplashButton>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Form Section */}
      <div ref={formRef} id="join-form" className="px-6 py-24">
        <PartnerJoinForm />
        <TrustedAcrossUK />
      </div>
      <Stats />
      <FiftyFiftyCard />
    </main>
  );
}
