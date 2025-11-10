import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import React from "react";
import { FiArrowRight, FiTruck } from "react-icons/fi";
import { Minigrid } from "../../utils/Minigrid";
import { CodeCard } from "./CodeCard";
import { Stepper } from "./Stepper";
import { SplashButton } from "@/components/buttons/SplashButton";
import { scrollToForm } from "@/components/utils/scrollToForm";

export const CodeDemo = () => {
  return (
    <section className="relative overflow-hidden border-y border-zinc-700 bg-zinc-950">
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span
          className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-amber-600/20 to-yellow-900/20 p-3 text-3xl shadow-md shadow-amber-900"
          aria-label="Truck carrying loads"
        >
          <FiTruck />
        </span>

        <SectionHeadingSpacing>
          <SectionHeading persistCenter>
            Keep your trucks and loads moving across the UK
          </SectionHeading>
          <SectionSubheading persistCenter>
            Logic Freight connects hauliers and customers seamlessly — helping you reduce empty miles, save fuel, and maximise efficiency.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <CodeCard />
        <Stepper />
        <SplashButton
          onClick={() => scrollToForm()}
          className="mx-auto mt-10 flex items-center gap-2"
        >
          Get started
          <FiArrowRight />
        </SplashButton>
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};

