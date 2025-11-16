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
        <GlowingChip>
          Return Loads UK • Backloads • Available Loads Near Me
        </GlowingChip>
      </motion.div>

      {/* Primary H1 with main keyword first */}
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className="max-w-[38rem] mb-4 text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Return Loads UK – Find Return Loads Near You Fast
      </motion.h1>

      {/* SEO supporting paragraph */}
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className="mb-9 max-w-xl text-base text-zinc-400 sm:text-lg md:text-xl"
      >
        Access verified <strong>return loads UK</strong>,{" "}
        <strong>return loads near me</strong>, backloads, reloads, and available
        loads across England, Scotland, and Wales. Reduce empty miles, secure
        better rates, and keep vehicles moving with reliable nationwide load
        opportunities.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <SplashButton className="gap-2 mx-auto inline-flex  items-center rounded-md bg-emerald-500 px-4 py-2 text-lg   transition hover:bg-emerald-600">
          <a href="tel:01633441457" className="">
            📞 Get Loads!
          </a>
          <FiArrowRight />
        </SplashButton>
        <SplashButton
          onClick={() => scrollToForm()}
          className="flex items-center gap-2"
        >
          Register!
          <FiArrowRight />
        </SplashButton>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Content;
