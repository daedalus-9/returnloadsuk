import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import React from "react";
import { LongCard } from "./LongCard";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { SimpleGrid } from "./SimpleGrid";
import { Tower } from "./Tower";
import { BubbleButton } from "@/components/buttons/BubbleButton";
import { scrollToForm } from "@/components/utils/scrollToForm";

export const Content = () => {
  return (
    <section className="relative bg-gradient-to-b from-zinc-950 to-zinc-900">
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            Return loads made smarter
            <br />
            <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
              haulage connections built on trust
            </span>
          </SectionHeading>
          <SectionSubheading>
            Logic Freight connects available trucks with verified return loads
            across the UK — cutting empty miles, saving fuel, and improving
            profits for hauliers and subcontractors.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />

        {/* Divider */}
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-blue-400/50 to-blue-800/0 md:my-20" />

        <SimpleGrid />

        <div className="mt-16 flex justify-center">
          <BubbleButton onClick={() => scrollToForm()}>
            Join the Logic Freight Return Loads Network
          </BubbleButton>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
