"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SplashButton } from "../buttons/SplashButton";
import { scrollToForm } from "../utils/scrollToForm";

interface CoverageAreasProps {
  title: string;
  description?: string;
  areas: { title: string; location: string; link?: string }[];
  region?: string;
}

export const CoverageAreas = ({
  title,
  description,
  areas,
  region,
}: CoverageAreasProps) => {
  return (
    <section
      id={`${region?.toLowerCase() || "uk"}-coverage`}
      className="mx-auto max-w-5xl px-4 py-32 text-white"
    >
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-4 text-4xl font-bold text-zinc-50"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
          className="mb-16 max-w-2xl text-lg text-zinc-400"
        >
          {description}
        </motion.p>
      )}

      <div className="space-y-9">
        {areas.map((area, index) => (
          <ScheduleItem
            key={index}
            title={area.title}
            location={area.location}
            link={area.link}
          />
        ))}
      </div>
    </section>
  );
};

const ScheduleItem = ({
  title,
  location,
  link,
}: {
  title: string;
  location: string;
  link?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex flex-col gap-6 border-b border-zinc-800 pb-9 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="text-xl font-medium text-zinc-50">{title}</p>
        <div className="flex items-center gap-1.5 text-sm uppercase text-zinc-500">
          <FiMapPin />
          <p>{location}</p>
        </div>
      </div>

      <SplashButton
        onClick={() => {
          scrollToForm();
        }}
        className="flex items-center justify-center gap-2 whitespace-nowrap"
      >
        Get a quote <FiArrowRight />
      </SplashButton>
    </motion.div>
  );
};
