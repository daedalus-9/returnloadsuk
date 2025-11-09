"use client";

import { useRouter } from "next/router";
import { GhostButton } from "@/components/buttons/GhostButton";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";

const GradientGrid = () => {
  const router = useRouter();

  return (
    <section className="relative border-t border-zinc-800 bg-zinc-900/20 py-24">
      <MaxWidthWrapper className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Supporting Logistics Across Scotland
        </h2>
        <p className="mb-10 text-zinc-400 sm:text-lg">
          From the Highlands to the Central Belt, our network of vetted carriers
          ensures reliable coverage throughout Scotland. We help minimise empty
          miles and maximise efficiency by connecting loads to trusted hauliers
          already on route.
        </p>
        <GhostButton
          onClick={() => router.push("/subcontractors")}
          className="rounded-md px-4 py-2 text-lg text-zinc-100"
        >
          Explore Other Areas
        </GhostButton>
      </MaxWidthWrapper>
    </section>
  );
};

export default GradientGrid;