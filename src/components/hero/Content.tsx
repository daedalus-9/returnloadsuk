import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import { GhostButton } from "../buttons/GhostButton";
import { SplashButton } from "../buttons/SplashButton";
import { GlowingChip } from "../utils/GlowingChip";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";

const Content = () => {
  const router = useRouter();
  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-12 pt-24 text-center md:pb-36 md:pt-36">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
      >
        <GlowingChip>Smarter haulage. Simplified logistics.</GlowingChip>
      </motion.div>

      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className="mb-4 text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-7xl"
      >
        Connecting loads with the right hauliers
      </motion.h1>

      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className="mb-9 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl"
      >
        At <strong>Logic Freight</strong>, we connect customers with vetted
        haulage partners — identifying return loads to save fuel, reduce costs,
        and minimise empty miles. Your freight, delivered on time, on budget, on
        demand.
      </motion.p>

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <SplashButton
          onClick={() => router.push("/get-started")}
          className="flex items-center gap-2"
        >
          Get started
          <FiArrowRight />
        </SplashButton>
        <GhostButton
          onClick={() => router.push("/#why-logic-freight")}
          className="rounded-md px-4 py-2 text-lg text-zinc-100"
        >
          Why Logic Freight
        </GhostButton>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Content;