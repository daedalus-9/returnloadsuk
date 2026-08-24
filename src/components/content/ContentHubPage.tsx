import { JourneyCards } from "@/components/content/JourneyCards";
import { PageHero } from "@/components/content/PageHero";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import {
  type ContentGroup,
  getPagesByGroup,
  hubConfigs,
  passesPublicationGate,
} from "@/content/freight-pages";
import { absoluteUrl } from "@/lib/site";
import { IconArrowRight, IconChecks } from "@tabler/icons-react";
import Link from "next/link";

const groupEyebrows: Record<ContentGroup, string> = {
  services: "Choose the right freight service",
  vehicles: "Match equipment to the load",
  industries: "Plan for sector-specific constraints",
  locations: "Curated regional guidance",
  routes: "Motorway and corridor planning",
  "seasonal-transport": "Recurring demand planning",
  resources: "Practical road-freight guidance",
};

export function ContentHubPage({ group }: { group: ContentGroup }) {
  const config = hubConfigs[group];
  const pages = getPagesByGroup(group).filter(passesPublicationGate);
  const path = `/${group}/`;
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: config.title, href: path },
  ];

  return (
    <>
      <Seo
        title={config.metadata.title}
        description={config.metadata.description}
        path={path}
        schemas={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: config.title,
            numberOfItems: pages.length,
            itemListElement: pages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: page.navTitle,
              url: absoluteUrl(`/${page.group}/${page.slug}/`),
            })),
          },
        ]}
      />
      <main id="main-content">
        <PageHero
          eyebrow={groupEyebrows[group]}
          title={config.title}
          lead={config.lead}
          breadcrumbs={breadcrumbs}
          primary={{ label: "Submit a load", href: "/submit-a-load/" }}
          secondary={{
            label: "Place an available truck",
            href: "/place-an-available-truck/",
          }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex max-w-4xl items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
              <IconChecks
                aria-hidden="true"
                className="mt-0.5 h-6 w-6 shrink-0 text-slate-950"
              />
              <p>
                Only curated records that pass the documented publication gate
                are shown here. These guides explain stable operational
                considerations; they are not live load or vehicle listings, and
                availability is confirmed for each real enquiry.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {pages.map((page) => (
                <article
                  key={page.slug}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
                    {page.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {page.navTitle}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                    {page.lead}
                  </p>
                  <Link
                    href={`/${page.group}/${page.slug}/`}
                    className="mt-6 inline-flex items-center gap-2 font-extrabold text-slate-950 underline decoration-lime-400 decoration-4 underline-offset-4"
                  >
                    Read the guide
                    <IconArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Turn planning into an enquiry
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Choose what you have, then provide the real details.
              </h2>
            </div>
            <div className="mt-10">
              <JourneyCards />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
