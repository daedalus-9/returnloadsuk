import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import { GhostButton } from "../buttons/GhostButton";
import { SplashButton } from "../buttons/SplashButton";
import { GlowingChip } from "../utils/GlowingChip";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { scrollToForm } from "../utils/scrollToForm";

const Content = () => {
  const router = useRouter();

  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-12 pt-24 text-center md:pb-36 md:pt-36">
      {/* Keyword-supporting tagline */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
      >
        <GlowingChip>Reliable Return Loads & Smarter UK Haulage</GlowingChip>
      </motion.div>

      {/* Primary H1 with keyword first */}
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className="mb-4 text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Return Loads Across the UK – Logic Freight Haulage Network
      </motion.h1>

      {/* Supporting paragraph (SEO-rich but natural) */}
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className="mb-9 max-w-xl text-base text-zinc-400 sm:text-lg md:text-xl"
      >
        <strong>Logic Freight</strong> connects shippers and hauliers with
        verified <strong>UK return loads</strong> and backloads — helping reduce
        empty miles, cut fuel costs, and maximise efficiency. With a network of
        over <strong>2,500 trusted drivers and fleet partners</strong> across
        England, Scotland, and Wales, we keep your freight moving nationwide, on
        time and on budget.
      </motion.p>

      {/* CTA buttons */}
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
          Get started
          <FiArrowRight />
        </SplashButton>

        {/* Optional secondary CTA */}
        {/* <GhostButton
          onClick={() => router.push("/#why-logic-freight")}
          className="rounded-md px-4 py-2 text-lg text-zinc-100"
        >
          Why Choose Logic Freight
        </GhostButton> */}
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Content;
