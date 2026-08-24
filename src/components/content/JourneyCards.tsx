import { trackEvent } from "@/lib/analytics";
import {
  IconArrowRight,
  IconBriefcase2,
  IconPackageExport,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";

const journeys = [
  {
    label: "I have a load",
    title: "Request road transport",
    text: "Tell us what is moving, where it needs to go and when. We will review the requirement and discuss suitable haulage capacity.",
    href: "/submit-a-load/",
    cta: "Submit load details",
    icon: IconPackageExport,
    event: "load",
  },
  {
    label: "I have an available truck",
    title: "Share available capacity",
    text: "Give us the vehicle, location, availability and preferred direction so the transport team can consider relevant freight enquiries.",
    href: "/place-an-available-truck/",
    cta: "Place an available truck",
    icon: IconTruckDelivery,
    event: "truck",
  },
  {
    label: "I want subcontractor work",
    title: "Register your interest",
    text: "Introduce your haulage business, operating areas and equipment. If the application progresses, Logic Freight will agree how supporting documents should be provided.",
    href: "/haulage-subcontractor-work/",
    cta: "Explore subcontractor work",
    icon: IconBriefcase2,
    event: "subcontractor",
  },
] as const;

export function JourneyCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {journeys.map((journey) => {
        const Icon = journey.icon;
        return (
          <article
            key={journey.href}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-lime-300">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
              {journey.label}
            </p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
              {journey.title}
            </h3>
            {!compact && (
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {journey.text}
              </p>
            )}
            <Link
              href={journey.href}
              onClick={() =>
                trackEvent("journey_selected", {
                  journey: journey.event,
                  component: "journey_cards",
                })
              }
              className="mt-6 inline-flex items-center gap-2 font-extrabold text-slate-950 underline decoration-lime-400 decoration-4 underline-offset-4"
            >
              {journey.cta}
              <IconArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition group-hover:translate-x-1"
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
