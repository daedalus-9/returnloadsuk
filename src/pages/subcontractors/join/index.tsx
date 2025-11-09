"use client";

import { GhostButton } from "@/components/buttons/GhostButton";
import Footer from "@/components/footer/Footer";
import { PartnerJoinForm } from "@/components/partnerJoinForm/PartnerJoinForm";

import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function JoinPartner() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="flex h-screen items-center justify-center px-6 text-center">
        <MaxWidthWrapper className="flex flex-col items-center gap-6">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            Join Our Subcontractor Network
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl text-zinc-400 sm:text-lg md:text-xl"
          >
            Logic Freight partners with vetted Partners across the UK. Fill out
            your details to join our network and start getting haulage
            opportunities.
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

            <GhostButton
              onClick={scrollToForm}
              className="rounded-md px-4 py-2 text-lg text-zinc-100"
            >
              Join as a Partner
            </GhostButton>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Form Section */}
      <div ref={formRef} id="join-form" className="px-6 pb-24">
        <PartnerJoinForm />
      </div>
    </main>
  );
}
