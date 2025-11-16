"use client";

import { GhostButton } from "@/components/buttons/GhostButton";
import { SplashButton } from "@/components/buttons/SplashButton";
import { GlowingChip } from "@/components/utils/GlowingChip";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { scrollToForm } from "@/components/utils/scrollToForm";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Content = () => {
  return (
    <section className="relative border-b border-zinc-800">
      <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-16 pt-28 text-center md:pb-36 md:pt-36">
        {/* Hero chip */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
        >
          <GlowingChip>
            Return Loads • Reloads • Available Loads Near Me
          </GlowingChip>
        </motion.div>

        {/* Hero title */}
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
          className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Return Loads Scotland
        </motion.h1>

        {/* Hero subtext */}
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
          className="mb-10 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl"
        >
          Don’t let your trucks run empty — submit your available truck or claim
          verified return loads, reloads, and available loads across Scotland
          from Glasgow to Edinburgh, Aberdeen to Inverness. Loads are moving
          fast, so get yours now!
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary CTA: phone link */}
          <SplashButton className="mx-auto inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-lg transition hover:bg-emerald-600">
            <a href="tel:01633441457">📞 Get Loads Now!</a>
            <FiArrowRight />
          </SplashButton>

          {/* Secondary CTA: scroll to PlaceTruckForm */}
          <GhostButton
            onClick={() => scrollToForm()}
            className="rounded-md px-4 py-2 text-lg text-zinc-100"
          >
            🚛 Place Empty Truck
          </GhostButton>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Content;
