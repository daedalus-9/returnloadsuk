import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { IconArrowRight, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

type Journey = "load" | "truck" | "subcontractor";

const content = {
  load: {
    eyebrow: "Freight to move?",
    title: "Give the transport team the details that matter.",
    text: "Share the collection, delivery, timing and freight information. Logic Freight will review the requirement and contact you about the next step.",
    href: "/submit-a-load/",
    label: "Submit a load",
  },
  truck: {
    eyebrow: "Capacity available?",
    title: "Tell us where and when your truck is free.",
    text: "Share the vehicle body, usable capacity and preferred direction so we can assess relevant enquiries with you.",
    href: "/place-an-available-truck/",
    label: "Place an available truck",
  },
  subcontractor: {
    eyebrow: "Looking for haulage work?",
    title: "Introduce your operation to Logic Freight.",
    text: "Tell us about your base, vehicles, coverage and work preferences. Registration is an expression of interest, not a promise of work.",
    href: "/haulage-subcontractor-work/",
    label: "Register your interest",
  },
} as const;

export function CallToAction({ journey = "load" }: { journey?: Journey }) {
  const item = content[journey];

  return (
    <section className="bg-lime-300 py-14 text-slate-950 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
            {item.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {item.title}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-800">{item.text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href={item.href}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-3 font-extrabold text-white hover:bg-slate-800"
          >
            {item.label}
            <IconArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${SITE.phoneHref}`}
            onClick={() =>
              trackEvent("phone_click", { location: "call_to_action", journey })
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-slate-950 px-6 py-3 font-extrabold hover:bg-white/50"
          >
            <IconPhone aria-hidden="true" className="h-5 w-5" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
