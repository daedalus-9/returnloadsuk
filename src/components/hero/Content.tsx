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
          Return Loads UK • Backloads • Reloads • Available Loads Near Me
        </GlowingChip>
      </motion.div>

      {/* Primary H1 */}
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className="mb-4 max-w-[38rem] text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Get Your Return Loads Now – Available Loads Near You Instantly
      </motion.h1>

      {/* SEO & conversion-focused paragraph */}
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className="mb-9 max-w-xl text-base text-zinc-400 sm:text-lg md:text-xl"
      >
        Secure verified <strong>return loads UK</strong>,{" "}
        <strong>available loads near me</strong>, backloads, and reloads across
        England, Scotland, and Wales. Don’t let empty trucks slow you down – get
        instant loads, reduce empty miles, and keep your vehicles moving with
        full and profitable hauls.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4 sm:flex-row md:space-x-6"
      >
        {/* Primary CTA: phone link */}
        <SplashButton
          as="a"
          href="tel:01633441457"
          className="mx-auto inline-flex items-center gap-2"
        >
          📞 Get Loads Now!
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
  );
};

export default Content;
