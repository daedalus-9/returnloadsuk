import { CallToAction } from "@/components/content/CallToAction";
import { FaqList } from "@/components/content/FaqList";
import { PageHero } from "@/components/content/PageHero";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import {
  freightPages,
  type FreightPage,
  hubConfigs,
} from "@/content/freight-pages";
import { absoluteUrl, SITE } from "@/lib/site";
import {
  IconArrowRight,
  IconCheck,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";

const journeyLinks = {
  load: { label: "Submit a load", href: "/submit-a-load/" },
  truck: {
    label: "Place an available truck",
    href: "/place-an-available-truck/",
  },
  subcontractor: {
    label: "Register for subcontractor work",
    href: "/haulage-subcontractor-work/",
  },
} as const;

const coreLabels: Record<string, string> = {
  "/": "Return Loads UK",
  "/submit-a-load/": "Submit a load",
  "/place-an-available-truck/": "Place an available truck",
  "/haulage-subcontractor-work/": "Haulage subcontractor work",
  "/find-return-loads/": "Find return loads",
  "/european-hauliers/": "European hauliers",
  "/return-loads-england/": "Return loads England",
  "/return-loads-scotland/": "Return loads Scotland",
  "/return-loads-wales/": "Return loads Wales",
  "/return-loads-northern-ireland/": "Return loads Northern Ireland",
};

function relatedLabel(href: string) {
  if (coreLabels[href]) return coreLabels[href];
  const content = freightPages.find(
    (page) => `/${page.group}/${page.slug}/` === href
  );
  if (content) return content.navTitle;
  return href
    .split("/")
    .filter(Boolean)
    .at(-1)!
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function FreightContentPage({ page }: { page: FreightPage }) {
  const hub = hubConfigs[page.group];
  const path = `/${page.group}/${page.slug}/`;
  const hubPath = `/${page.group}/`;
  const action = journeyLinks[page.journey];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: hub.title, href: hubPath },
    { name: page.navTitle, href: path },
  ];
  const pageSchema =
    page.group === "services"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.title,
          description: page.metaDescription,
          url: absoluteUrl(path),
          provider: {
            "@type": "Organization",
            name: SITE.legalName,
            url: SITE.url,
          },
          areaServed: "United Kingdom",
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: page.title,
          description: page.metaDescription,
          url: absoluteUrl(path),
          dateModified: page.reviewedOn,
          publisher: {
            "@type": "Organization",
            name: SITE.legalName,
          },
        };

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        schemas={[breadcrumbSchema(breadcrumbs), pageSchema]}
      />
      <main id="main-content">
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          lead={page.lead}
          breadcrumbs={breadcrumbs}
          primary={action}
          secondary={{
            label: `Explore ${hub.title.toLowerCase()}`,
            href: hubPath,
          }}
        />

        <article>
          <section className="py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_.9fr]">
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7 lg:sticky lg:top-32 lg:self-start">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
                  Publication status
                </p>
                <p className="mt-3 font-extrabold text-slate-950">
                  Publication-gated planning guide
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Registry content review: {page.reviewedOn}. This page does not
                  claim live load or vehicle availability; current options are
                  checked against a real enquiry.
                </p>
              </aside>
            </div>
          </section>

          <section className="bg-[#f5f4ef] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Operational considerations
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Details that materially affect the movement
                </h2>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {page.highlights.map((highlight) => (
                  <section
                    key={highlight.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <h3 className="text-xl font-extrabold text-slate-950">
                      {highlight.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {highlight.text}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Prepare the brief
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  Information to provide
                </h2>
                <ul className="mt-7 space-y-4">
                  {page.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-7 text-slate-600"
                    >
                      <IconCheck
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-slate-950"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Relevant examples
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  Typical planning scenarios
                </h2>
                <ul className="mt-7 space-y-4">
                  {page.examples.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Examples describe legitimate use cases, not currently
                  available loads, trucks or quoted prices.
                </p>
              </div>
            </div>
          </section>

          {page.sources && page.sources.length > 0 && (
            <section className="border-y border-slate-200 bg-slate-50 py-12">
              <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-xl font-extrabold text-slate-950">
                  Current official sources
                </h2>
                <ul className="mt-5 flex flex-wrap gap-4">
                  {page.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-950 hover:border-slate-500"
                      >
                        {source.label}
                        <IconExternalLink
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Common questions
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  What to establish before moving forward
                </h2>
              </div>
              <FaqList items={page.faqs} />
            </div>
          </section>
        </article>

        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Related freight guidance
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.related.map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:border-slate-500"
                >
                  {relatedLabel(href)}
                  <IconArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallToAction journey={page.journey} />
      </main>
    </>
  );
}
