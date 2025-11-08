import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BubbleButton } from "../buttons/BubbleButton";
import { Card } from "../utils/Card";
import { CornerGrid } from "../utils/CornerGrid";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";
import { SectionSubheading } from "../utils/SectionSubheading";
import { useWindowSize } from "../utils/useWindowSize";

export const Customers = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const shouldCollapseColumns = width ? width <= 768 : false;

  return (
    <section id="testimonials" className="relative overflow-hidden">
      <MaxWidthWrapper className="relative z-10 py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading>Appreciated by our partners</SectionHeading>
          <SectionSubheading>
            People trust people. Here’s what some of our freight partners and
            drivers say about working with Logic Freight.
          </SectionSubheading>
        </SectionHeadingSpacing>

        {/* First row always visible */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {REVIEWS.all.slice(0, 3).map((r) => (
            <Card
              style={{ padding: "20px", minHeight: 180 }}
              key={r.name + r.handle}
            >
              <ReviewContent review={r} />
            </Card>
          ))}
        </div>

        {/* Expandable extra reviews */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3"
            >
              {REVIEWS.all.slice(3).map((r) => (
                <Card
                  style={{ padding: "20px", minHeight: 180 }}
                  key={r.name + r.handle}
                >
                  <ReviewContent review={r} />
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <BubbleButton
          onClick={() => setOpen((pv) => !pv)}
          className="mx-auto mt-6"
        >
          {open ? "View less" : "View more"}
        </BubbleButton>
      </MaxWidthWrapper>
      <CornerGrid />
    </section>
  );
};

const ReviewContent = ({ review }: { review: (typeof REVIEWS.all)[0] }) => (
  <>
    <div className="mb-1.5 flex items-center gap-2 py-2 text-xs">
      <img
        src={review.src}
        alt={`Avatar for ${review.name}`}
        className="size-8 rounded-full"
      />
      <div>
        <span className="block font-medium text-zinc-300">{review.name}</span>
        <span className="block text-zinc-500">{review.handle}</span>
      </div>
    </div>
    <p className="mb-1 font-semibold text-yellow-400">Rating: ★★★★★</p>
    <p>{review.review}</p>
  </>
);

const REVIEWS = {
  all: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Barry",
      name: "Barry",
     
      review: "Great team to work with. Good communication and efficient.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin",
      name: "Kevin",
     
      review:
        "Collected and delivered as per requests, special instructions followed with accuracy, excellent comms - Would recommend.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Owen",
      name: "Owen",
    
      review: "Thank you, excellent service.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adam",
      name: "Adam",
      
      review: "Good work and paid on time.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      name: "David",
      
      review: "EXCELLENT TO WORK FOR, highly recommend.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Keith",
      name: "Keith",
      
      review: "Excellent, very professional.",
    },
  ],
};
