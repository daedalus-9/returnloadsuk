import { Card } from "@/components/utils/Card";
import { CornerBlur } from "@/components/utils/CornerBlur";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiPhone,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (features.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => pv + CARD_SIZE);
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => pv - CARD_SIZE);
  };

  return (
    <section
      className="relative overflow-hidden border-b border-zinc-700 bg-zinc-900/30 py-12"
      ref={ref}
    >
      <div className="relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              <SectionHeading>Why Logic Freight</SectionHeading>
              <SectionSubheading>
                See the features that make our freight matching and delivery
                service fast, reliable, and secure.
              </SectionSubheading>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                &larr;
              </button>
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                &rarr;
              </button>
            </div>
          </div>
          <motion.div
            animate={{ x: offset }}
            transition={{ ease: "easeInOut" }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${features.length}, 1fr)`,
            }}
          >
            {features.map((post) => (
              <Feature key={post.id} {...post} />
            ))}
          </motion.div>
        </div>
      </div>
            
      <CornerBlur />
    </section>
  );
};

const Feature = ({ title, description, Icon }: FeatureType) => {
  return (
    <Card
      className="shrink-0"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <Icon className="size-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 p-3 text-blue-50" />
      <p className="mb-1.5 mt-3 text-lg font-medium">{title}</p>
      <p className="text-sm text-zinc-400">{description}</p>
    </Card>
  );
};

export default Carousel;

type FeatureType = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    Icon: FiMapPin,
    title: "Smart Load Matching",
    description:
      "Instantly match your freight with the right drivers in your area.",
  },
  {
    id: 2,
    Icon: FiTruck,
    title: "Reliable Hauliers",
    description:
      "Work with vetted drivers who know the routes and respect schedules.",
  },
  {
    id: 3,
    Icon: FiClock,
    title: "Real-Time Tracking",
    description:
      "Track your deliveries in real time so you always know where your load is.",
  },
  {
    id: 4,
    Icon: FiCheckCircle,
    title: "Verified Deliveries",
    description:
      "Confirm successful delivery with proof-of-service updates from drivers.",
  },
  {
    id: 5,
    Icon: FiUsers,
    title: "Expert Support",
    description:
      "Our logistics team is ready to help whenever you need assistance.",
  }
];
