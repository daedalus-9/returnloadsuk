import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/seo/Seo";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  breadcrumbs: BreadcrumbItem[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  primary,
  secondary,
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-[#07111f] py-12 text-white sm:py-16 lg:py-20">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="[&_a:hover]:text-white [&_a]:text-slate-300 [&_span]:text-slate-400">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="mt-10 max-w-4xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {lead}
          </p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <Link
                  href={primary.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-300 px-6 py-3 font-extrabold text-slate-950 hover:bg-lime-200"
                >
                  {primary.label}
                  <IconArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 py-3 font-extrabold text-white hover:bg-white/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
