import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { GhostButton } from "../buttons/GhostButton";
import { SplashButton } from "../buttons/SplashButton";
import { GlowingChip } from "../utils/GlowingChip";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { scrollToForm } from "../utils/scrollToForm";

export const CTA = () => {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden border-t border-zinc-700 bg-gradient-to-b from-zinc-900/30 to-zinc-950 py-20">
      <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          className="relative mb-3"
        >
          <GlowingChip>Get instant return loads 🚛</GlowingChip>
        </motion.div>

        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
          className="mb-9 max-w-xl text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
        >
          Access verified return loads instantly across the UK
        </motion.h1>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <SplashButton
            onClick={() => scrollToForm()}
            className="flex items-center gap-2"
          >
            Get Loads Now
            <FiArrowRight />
          </SplashButton>
          <GhostButton
            onClick={() => router.push("/subcontractors")}
            className="rounded-md px-4 py-2 text-lg text-zinc-100"
          >
            Place a Truck
          </GhostButton>
        </motion.div>
      </MaxWidthWrapper>

      <div className="absolute inset-0 z-0 bg-grid-zinc-700/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 to-zinc-950" />
    </section>
  );
};
