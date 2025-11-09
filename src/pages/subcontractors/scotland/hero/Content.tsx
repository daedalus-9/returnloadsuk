"use client";

import { GhostButton } from "@/components/buttons/GhostButton";
import { SplashButton } from "@/components/buttons/SplashButton";
import { GlowingChip } from "@/components/utils/GlowingChip";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { scrollToForm } from "@/components/utils/scrollToForm";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

const Content = () => {
  const router = useRouter();

  return (
    <section className="relative border-b border-zinc-800">
      <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-16 pt-28 text-center md:pb-36 md:pt-36">
        {/* Header chip */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
        >
          <GlowingChip>Serving Hauliers Across Scotland</GlowingChip>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
          className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Scotland Freight & Haulage Network
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
          className="mb-10 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl"
        >
          Logic Freight connects shippers and subcontractors across Scotland —
          from Glasgow to Aberdeen. Whether you’re moving pallets, containers,
          or general haulage, we match you with vetted partners ready to move.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <SplashButton
            onClick={scrollToForm}
            className="flex items-center gap-2"
          >
            Place a Truck
            <FiArrowRight />
          </SplashButton>

          <GhostButton
            onClick={() => router.push("/subcontractors/join")}
            className="rounded-md px-4 py-2 text-lg text-zinc-100"
          >
            Join as a Haulier
          </GhostButton>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Content;
