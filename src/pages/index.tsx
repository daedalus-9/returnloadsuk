import { FaqList } from "@/components/content/FaqList";
import { JourneyCards } from "@/components/content/JourneyCards";
import { Seo } from "@/components/seo/Seo";
import { trackEvent } from "@/lib/analytics";
import { organisationSchema, SITE, websiteSchema } from "@/lib/site";
import {
  IconArrowRight,
  IconArrowsExchange,
  IconChecklist,
  IconMap2,
  IconRoute,
  IconShieldCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const faqItems = [
  {
    question: "What is a return load?",
    answer:
      "A return load is freight carried on a vehicle that would otherwise travel back empty, or with spare capacity, after another delivery. The collection, delivery, timing, vehicle and commercial terms still need to be agreed for each movement.",
  },
  {
    question: "Is Return Loads UK a public load board?",
    answer:
      "No. Return Loads UK is an enquiry and capacity-matching website operated by Logic Freight. Share a load, an available vehicle or your interest in subcontractor work; the transport team then reviews the details and contacts relevant parties.",
  },
  {
    question: "Can owner-drivers register an available vehicle?",
    answer:
      "Yes. Owner-drivers and transport companies can share vehicle availability or register interest in subcontractor work. Registration does not guarantee a load or ongoing work, and operational and compliance details will be checked before any movement is agreed.",
  },
  {
    question: "Can a business submit a one-off or recurring load?",
    answer:
      "Yes. The load form supports both individual movements and recurring requirements. Include accurate collection and delivery points, dates, goods, weight or pallet details and any handling constraints so the enquiry can be assessed properly.",
  },
];

const explore = [
  {
    title: "Road-freight services",
    text: "Full loads, part loads, pallet transport, groupage, dedicated movements and time-sensitive freight.",
    href: "/services/",
    icon: IconTruckDelivery,
  },
  {
    title: "Vehicles and trailer bodies",
    text: "Understand what to provide when enquiring about curtain-siders, boxes, flatbeds, rigids, artics and refrigerated capacity.",
    href: "/vehicles/",
    icon: IconChecklist,
  },
  {
    title: "Locations and corridors",
    text: "Curated regional, port and motorway guidance built around genuine operational differences-not hundreds of copied town pages.",
    href: "/locations/",
    icon: IconMap2,
  },
  {
    title: "UK and European movements",
    text: "Information for European operators entering the UK and for businesses planning cross-border road freight.",
    href: "/european-hauliers/",
    icon: IconRoute,
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Return Loads UK | Freight & Available Truck Matching"
        description="Logic Freight connects businesses with loads to UK hauliers, owner-drivers and subcontractors with suitable available road-freight capacity."
        path="/"
        schemas={[
          organisationSchema,
          websiteSchema,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "UK road-freight capacity matching",
            serviceType: "Freight brokerage and haulage capacity matching",
            provider: {
              "@type": "Organization",
              name: SITE.legalName,
              url: SITE.url,
            },
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
          },
        ]}
      />

      <main id="main-content">
        <section className="relative overflow-hidden bg-[#07111f] text-white">
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,#84cc16_0,transparent_35%),radial-gradient(circle_at_80%_70%,#0ea5e9_0,transparent_32%)]" />
          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
            <div className="relative z-10">
              <p className="inline-flex rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-lime-200">
                Return loads · available trucks · subcontractor work
              </p>
              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                Match UK freight with available haulage capacity.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Return Loads UK is operated by Logic Freight. We connect
                businesses that need goods moved with owner-drivers, transport
                companies and subcontractors that have suitable vehicles and
                space.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/submit-a-load/"
                  onClick={() =>
                    trackEvent("journey_selected", {
                      journey: "load",
                      component: "home_hero",
                    })
                  }
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-300 px-6 py-3.5 font-extrabold text-slate-950 hover:bg-lime-200"
                >
                  I have a load
                  <IconArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
                <Link
                  href="/place-an-available-truck/"
                  onClick={() =>
                    trackEvent("journey_selected", {
                      journey: "truck",
                      component: "home_hero",
                    })
                  }
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 font-extrabold text-white hover:bg-white/10"
                >
                  I have an available truck
                </Link>
              </div>
              <p className="mt-5 text-sm text-slate-400">
                Looking for regular or ad-hoc work?{" "}
                <Link
                  href="/haulage-subcontractor-work/"
                  className="font-bold text-white underline decoration-lime-300 decoration-2 underline-offset-4"
                >
                  Register as a haulage subcontractor
                </Link>
                .
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-800 shadow-2xl lg:aspect-[5/6]">
                <Image
                  src={SITE.ogImagePath}
                  alt="Articulated road-freight vehicle travelling on a motorway"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/85 p-5 backdrop-blur">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-300 text-slate-950">
                        <IconArrowsExchange
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      </span>
                      <div>
                        <p className="font-extrabold">
                          A managed matching service
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          Share the real operational details. Logic Freight
                          reviews fit and confirms the next step-without fake
                          public load listings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-7">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 text-sm font-bold text-slate-700 sm:grid-cols-3">
            <p className="flex items-center gap-3">
              <IconShieldCheck
                aria-hidden="true"
                className="h-5 w-5 text-slate-950"
              />
              Clear intermediary role
            </p>
            <p className="flex items-center gap-3">
              <IconChecklist
                aria-hidden="true"
                className="h-5 w-5 text-slate-950"
              />
              Requirements reviewed by the transport team
            </p>
            <p className="flex items-center gap-3">
              <IconRoute
                aria-hidden="true"
                className="h-5 w-5 text-slate-950"
              />
              UK-wide road-freight enquiries
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Start with the right journey
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                One network. Three clear ways to get started.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The information needed to assess a load is different from the
                information needed to place a truck or qualify a subcontractor.
                Choose the path that matches what you need today.
              </p>
            </div>
            <div className="mt-10">
              <JourneyCards />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime-300">
                Why better matching matters
              </p>
              <p className="mt-4 text-7xl font-black tracking-tight text-white">
                31%
              </p>
              <p className="mt-4 max-w-md text-lg leading-8 text-slate-300">
                of vehicle kilometres run by GB-registered HGVs in 2025 were
                empty, according to the Department for Transport.
              </p>
              <a
                href="https://www.gov.uk/government/statistics/road-freight-statistics-2025/domestic-road-freight-statistics-united-kingdom-2025"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex font-bold text-lime-300 underline underline-offset-4"
              >
                Read the official 2025 statistics
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Useful details create better conversations.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                A town name and a date rarely tell the whole story. Vehicle
                body, usable capacity, load dimensions, access, time windows,
                handling and direction all affect whether freight and an empty
                vehicle are a sensible fit.
              </p>
              <ol className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["01", "Share", "Provide accurate load or vehicle details."],
                  [
                    "02",
                    "Review",
                    "Logic Freight assesses the operational fit.",
                  ],
                  [
                    "03",
                    "Confirm",
                    "Scope, price, capacity and terms are agreed.",
                  ],
                ].map(([number, title, text]) => (
                  <li key={number} className="border-t border-white/20 pt-5">
                    <span className="text-sm font-black text-lime-300">
                      {number}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Plan the movement
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Explore freight by the factor that changes the job.
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  Our curated pages explain operational differences and the
                  information to provide. We do not manufacture thousands of
                  thin town-and-keyword combinations.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {explore.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-lg"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-slate-950"
                      />
                      <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-slate-950">
                        Explore
                        <IconArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Straight answers
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Return loads UK: frequently asked questions
                </h2>
              </div>
              <FaqList items={faqItems} />
            </div>
          </div>
        </section>

        <section className="bg-lime-300 py-14 text-slate-950 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
                Ready to start?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Share the load or the capacity-not just a keyword.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-800">
                The more accurate the operational detail, the more useful the
                transport conversation can be.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/submit-a-load/"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-6 py-3 font-extrabold text-white hover:bg-slate-800"
              >
                Submit a load
              </Link>
              <Link
                href="/place-an-available-truck/"
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-slate-950 px-6 py-3 font-extrabold hover:bg-white/50"
              >
                Place a truck
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
