import { CallToAction } from "@/components/content/CallToAction";
import { FaqList } from "@/components/content/FaqList";
import { PageHero } from "@/components/content/PageHero";
import {
  breadcrumbSchema,
  Seo,
  type BreadcrumbItem,
} from "@/components/seo/Seo";
import { absoluteUrl, SITE } from "@/lib/site";
import {
  IconArrowRight,
  IconCheck,
  IconMapPin,
  IconRoute,
} from "@tabler/icons-react";
import Link from "next/link";

interface RegionContentItem {
  readonly title: string;
  readonly text: string;
}

interface RegionFaq {
  readonly question: string;
  readonly answer: string;
}

interface RegionRelatedLink {
  readonly title: string;
  readonly text: string;
  readonly href: string;
}

interface RegionSource {
  readonly label: string;
  readonly url: string;
  readonly text: string;
}

export interface RegionPageData {
  readonly regionName: string;
  readonly path: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly introHeading: string;
  readonly intro: readonly [string, string, ...string[]];
  readonly considerations: readonly [
    RegionContentItem,
    RegionContentItem,
    RegionContentItem,
  ];
  readonly corridors: readonly [
    RegionContentItem,
    RegionContentItem,
    RegionContentItem,
    ...RegionContentItem[],
  ];
  readonly checklist: readonly [string, string, string, ...string[]];
  readonly faqs: readonly [RegionFaq, RegionFaq, RegionFaq];
  readonly relatedLinks: readonly [
    RegionRelatedLink,
    RegionRelatedLink,
    ...RegionRelatedLink[],
  ];
  readonly sources?: readonly RegionSource[];
}

export function RegionPage({ data }: { data: RegionPageData }) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations/" },
    { name: data.regionName, href: data.path },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Road freight capacity matching enquiries in ${data.regionName}`,
    description: data.metaDescription,
    url: absoluteUrl(data.path),
    serviceType: "Road freight capacity matching and enquiry handling",
    provider: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: data.regionName,
    },
  };

  return (
    <>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        path={data.path}
        schemas={[serviceSchema, breadcrumbSchema(breadcrumbs)]}
      />

      <main id="main-content" className="bg-white text-slate-950">
        <PageHero
          eyebrow={data.eyebrow}
          title={data.title}
          lead={data.lead}
          breadcrumbs={breadcrumbs}
          primary={{
            label: "Place an available truck",
            href: "/place-an-available-truck/",
          }}
          secondary={{ label: "Submit a load", href: "/submit-a-load/" }}
        />

        <section
          aria-labelledby="regional-overview"
          className="py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Regional overview
              </p>
              <h2
                id="regional-overview"
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              >
                {data.introHeading}
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              {data.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="rounded-xl border-l-4 border-lime-400 bg-slate-50 px-5 py-4 text-base font-semibold leading-7 text-slate-800">
                This page is a planning guide, not a live-load board. Freight,
                vehicle suitability, timing, price and availability are
                confirmed case by case.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="operational-considerations"
          className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Before a match is considered
              </p>
              <h2
                id="operational-considerations"
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              >
                Operational considerations in {data.regionName}
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {data.considerations.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-sm font-black">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="freight-geography"
          className="bg-[#07111f] py-16 text-white sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime-300">
                Descriptive freight geography
              </p>
              <h2
                id="freight-geography"
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              >
                Key areas and corridors to describe accurately
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                These are planning contexts, not advertised jobs. Exact
                collection, delivery and empty-vehicle positions are needed
                before the traffic team can assess an enquiry.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {data.corridors.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"
                >
                  <div className="flex items-start gap-4">
                    <IconRoute
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 shrink-0 text-lime-300"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="planning-checklist"
          className="py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Useful information first
              </p>
              <h2
                id="planning-checklist"
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              >
                Planning checklist
              </h2>
              <ul className="mt-8 space-y-4">
                {data.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-slate-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-300">
                      <IconCheck aria-hidden="true" className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6 sm:p-8">
              <IconMapPin aria-hidden="true" className="h-8 w-8" />
              <h2 className="mt-5 text-2xl font-black">
                Why precise locations matter
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A broad county or country does not show the approach road,
                likely detour, remaining driving time or next sensible
                direction. Supply collection and delivery postcodes for a load,
                or the expected empty postcode for a truck, together with the
                relevant time window.
              </p>
              {data.sources && data.sources.length > 0 && (
                <div className="mt-8 border-t border-slate-300 pt-6">
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.14em]">
                    Current official guidance
                  </h3>
                  <ul className="mt-4 space-y-5">
                    {data.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          className="font-extrabold text-slate-950 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-slate-600"
                        >
                          {source.label}
                        </a>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {source.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="region-faqs"
          className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Straight answers
              </p>
              <h2
                id="region-faqs"
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              >
                Return loads {data.regionName}: frequently asked questions
              </h2>
            </div>
            <FaqList
              items={data.faqs.map((item) => ({
                question: item.question,
                answer: item.answer,
              }))}
            />
          </div>
        </section>

        <section aria-labelledby="related-guides" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Continue planning
              </p>
              <h2
                id="related-guides"
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              >
                Related freight guides
              </h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {data.relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-slate-400 hover:shadow-lg"
                >
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">
                    Read the guide
                    <IconArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallToAction journey="truck" />
      </main>
    </>
  );
}
