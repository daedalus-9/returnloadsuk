"use client";

import { GhostButton } from "@/components/buttons/GhostButton";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { scrollToForm } from "@/components/utils/scrollToForm";
import { useRouter } from "next/router";

const GradientGrid = () => {
  const router = useRouter();

  return (
    <section className="relative border-t border-zinc-800 bg-zinc-900/20 py-24">
      <MaxWidthWrapper className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Join Our Scotland Return Loads Haulier Network
        </h2>
        <p className="mb-10 text-zinc-400 sm:text-lg">
          Are you a haulier in Scotland? Join Logic Freight’s trusted network
          and access verified <strong>return loads Scotland</strong>, reloads,
          and available part/full loads across Glasgow, Edinburgh, Aberdeen,
          Inverness, and beyond. Reduce empty miles, keep your trucks full, and
          earn more by connecting with high-demand routes across Scotland.
        </p>
        <GhostButton
          onClick={scrollToForm}
          className="rounded-md px-4 py-2 text-lg text-zinc-100"
        >
          Join the Network
        </GhostButton>
      </MaxWidthWrapper>
    </section>
  );
};

export default GradientGrid;
