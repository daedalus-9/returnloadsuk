import { CallToAction } from "@/components/content/CallToAction";
import { FaqList } from "@/components/content/FaqList";
import { JourneyCards } from "@/components/content/JourneyCards";
import { PageHero } from "@/components/content/PageHero";
import {
  breadcrumbSchema,
  type BreadcrumbItem,
  Seo,
} from "@/components/seo/Seo";
import { SITE } from "@/lib/site";
import {
  IconArrowUpRight,
  IconCalendarTime,
  IconMapPin,
  IconRoute,
  IconScale,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";

const path = "/find-return-loads/";

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Find return loads", href: path },
];

const matchingFactors = [
  {
    title: "Expected position",
    text: "The location where the vehicle will finish its current work and become available.",
    icon: IconMapPin,
  },
  {
    title: "Timing",
    text: "The realistic availability window, including driving-time and collection constraints.",
    icon: IconCalendarTime,
  },
  {
    title: "Equipment",
    text: "Vehicle class, body or trailer, loading method and any specialist capability.",
    icon: IconTruckDelivery,
  },
  {
    title: "Usable capacity",
    text: "Available payload, pallet spaces or dimensions rather than vehicle size alone.",
    icon: IconScale,
  },
  {
    title: "Useful direction",
    text: "A preferred destination, regular lane or practical repositioning radius.",
    icon: IconRoute,
  },
];

const faqItems = [
  {
    question: "Can I browse live return loads on this website?",
    answer:
      "No. Return Loads UK is a managed enquiry and capacity-matching service operated by Logic Freight, not a public live-load board. Share your current vehicle availability so the transport team can assess relevant enquiries.",
  },
  {
    question: "What is a return load?",
    answer:
      "A return load is freight carried on a vehicle that would otherwise return empty or with spare capacity after another delivery. Route, timing, equipment, capacity and commercial terms still need to align.",
  },
  {
    question: "Is placing a truck the same as applying for subcontractor work?",
    answer:
      "No. Placing a truck records specific short-term availability. A subcontractor application gives Logic Freight wider information about your business, fleet, coverage and preferred work.",
  },
  {
    question: "Are return loads guaranteed after I share capacity?",
    answer:
      "No. A matching opportunity depends on genuine freight demand and operational fit. Nothing is confirmed until the relevant parties agree capacity, scope, price, timing and terms.",
  },
  {
    question: "Can European hauliers share a truck available in the UK?",
    answer:
      "They can share availability, but the operator remains responsible for ensuring that any proposed movement is lawful and compatible with its permissions, drivers' hours and other current requirements.",
  },
];

export default function FindReturnLoadsPage() {
  return (
    <>
      <Seo
        title="Find Return Loads UK | Managed Haulage Matching"
        description="Understand how Logic Freight reviews available trucks against UK return-load enquiries. Share capacity or register for subcontract haulage work."
        path={path}
        schemas={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Managed UK return-load matching",
            serviceType: "Freight brokerage and available capacity matching",
            provider: {
              "@type": "Organization",
              name: SITE.legalName,
              url: SITE.url,
            },
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Owner-drivers, hauliers and transport companies",
            },
          },
        ]}
      />

      <main id="main-content">
        <PageHero
          eyebrow="Return loads and available HGV capacity"
          title="Find return-load opportunities through managed matching."
          lead="Logic Freight reviews genuine freight enquiries against vehicle location, timing, equipment, capacity and direction. This website does not publish a public feed of live loads or invented listings."
          breadcrumbs={breadcrumbs}
          primary={{
            label: "Place an available truck",
            href: "/place-an-available-truck/",
          }}
          secondary={{
            label: "Explore subcontractor work",
            href: "/haulage-subcontractor-work/",
          }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Managed matching, explained
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A transport conversation, not a public live-load board.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Return Loads UK is operated by Logic Freight, a freight
                intermediary. Hauliers share real vehicle availability and
                businesses submit real transport requirements. The transport
                team assesses whether those details may fit before making
                contact.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              <h3 className="text-2xl font-black">
                What managed matching means
              </h3>
              <ul className="mt-7 space-y-5 text-sm leading-6 text-slate-300">
                <li className="border-t border-white/15 pt-5">
                  Submitted capacity is compared with relevant freight
                  enquiries; it is not displayed as a public job listing.
                </li>
                <li className="border-t border-white/15 pt-5">
                  Logic Freight may contact an operator where route, timing,
                  vehicle and capacity appear potentially compatible.
                </li>
                <li className="border-t border-white/15 pt-5">
                  No load or work is guaranteed, and no movement is agreed until
                  its operational and commercial terms are confirmed.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-lime-300 py-16 text-slate-950 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
                The scale of empty running
              </p>
              <p className="mt-3 text-7xl font-black tracking-tight">31%</p>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Nearly a third of GB HGV vehicle kilometres were empty in 2025.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
                Department for Transport statistics report that GB-registered
                HGVs travelled 5,897 million kilometres empty in 2025, equal to
                31% of their total vehicle kilometres. Matching useful freight
                with genuinely available capacity can help address individual
                empty legs, but every movement still has to work operationally.
              </p>
              <a
                href="https://www.gov.uk/government/statistics/road-freight-statistics-2025/domestic-road-freight-statistics-united-kingdom-2025"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-extrabold underline decoration-slate-950/40 underline-offset-4"
              >
                Read the official DfT road-freight statistics
                <IconArrowUpRight aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                What shapes a potential match
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A nearby truck is not automatically the right truck.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Useful return-load matching depends on the practical details of
                both the freight and the vehicle.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {matchingFactors.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border-t-2 border-slate-950 pt-5"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-lime-700"
                    />
                    <h3 className="mt-4 font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Choose the right route
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Specific availability or a broader working relationship?
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  Place a truck when you know where and when capacity will be
                  free. Apply as a subcontractor when you want to introduce your
                  wider operation and preferred types of work.
                </p>
              </div>
              <JourneyCards compact />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime-300">
                Explore useful detail
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Plan around equipment, geography and direction.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Vehicles and trailer bodies",
                  "/vehicles/",
                  "Describe the equipment and usable capacity accurately.",
                ],
                [
                  "UK locations",
                  "/locations/",
                  "Explore curated regional freight context.",
                ],
                [
                  "Routes and corridors",
                  "/routes/",
                  "Understand the direction and route factors that affect a movement.",
                ],
                [
                  "European hauliers",
                  "/european-hauliers/",
                  "Read UK-focused information for vehicles arriving from Europe.",
                ],
              ].map(([title, href, text]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-white/15 p-6 transition hover:border-lime-300/60 hover:bg-white/5"
                >
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Straight answers
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Finding return loads: questions
              </h2>
            </div>
            <FaqList items={faqItems} />
          </div>
        </section>

        <CallToAction journey="truck" />
      </main>
    </>
  );
}
