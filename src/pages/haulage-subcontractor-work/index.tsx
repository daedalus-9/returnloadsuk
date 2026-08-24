import { FaqList } from "@/components/content/FaqList";
import { JourneyCards } from "@/components/content/JourneyCards";
import { PageHero } from "@/components/content/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import {
  breadcrumbSchema,
  type BreadcrumbItem,
  Seo,
} from "@/components/seo/Seo";
import {
  IconBuildingWarehouse,
  IconFileCheck,
  IconIdBadge2,
  IconRoad,
  IconSteeringWheel,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";

const path = "/haulage-subcontractor-work/";

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Haulage subcontractor work", href: path },
];

const faqItems = [
  {
    question: "Can owner-drivers register their interest?",
    answer:
      "Yes. The form is suitable for owner-drivers as well as haulage companies. Explain your operating base, vehicle, regular coverage and preferred type of work.",
  },
  {
    question: "Does an application guarantee subcontractor work?",
    answer:
      "No. It is an expression of interest. Work depends on customer requirements, operational fit, capacity, compliance checks and agreement of the relevant commercial terms.",
  },
  {
    question: "Do I need to upload compliance documents now?",
    answer:
      "No. The first form does not request uploads. If the application progresses, Logic Freight will explain which documents are needed and agree how they should be provided.",
  },
  {
    question: "Is this the same as placing one available truck?",
    answer:
      "No. Placing a truck is for specific short-term capacity. A subcontractor application introduces your wider operation, equipment, coverage and work preferences for possible future requirements.",
  },
];

const documentExamples = [
  "Operator licence details where required for the work",
  "Relevant motor, goods-in-transit and public-liability insurance evidence",
  "Business and contact information needed for onboarding",
  "Vehicle, driver or specialist compliance information relevant to a movement",
];

export default function HaulageSubcontractorWorkPage() {
  return (
    <>
      <Seo
        title="Haulage Subcontractor Work | Owner-Drivers & Companies"
        description="Owner-drivers and UK haulage companies can register interest in subcontract freight work with Logic Freight. Application does not guarantee work."
        path={path}
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />

      <main id="main-content">
        <PageHero
          eyebrow="For owner-drivers and haulage companies"
          title="Register interest in haulage subcontractor work."
          lead="Introduce your operation, vehicles, coverage and work preferences to Logic Freight. Registration begins an application review; it does not promise loads, regular work or acceptance into a network."
          breadcrumbs={breadcrumbs}
          primary={{
            label: "Start the application",
            href: "#subcontractor-form",
          }}
          secondary={{
            label: "Place one available truck",
            href: "/place-an-available-truck/",
          }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Two types of operator
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Tell us how your haulage operation is set up.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The first application is deliberately concise, but the context
                differs for an individual operator and a transport company with
                several vehicles.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-lime-300">
                  <IconSteeringWheel aria-hidden="true" className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  Owner-drivers
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Share your operating base, vehicle and trailer, the areas or
                  routes you cover and whether you prefer return loads,
                  traction, ad-hoc or regular work.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-lime-300">
                  <IconBuildingWarehouse
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </span>
                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  Haulage companies
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Describe the vehicle types you operate, geographic coverage,
                  specialist capability and the kinds of subcontract
                  requirements your team is equipped to consider.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime-300">
                  Application stages
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  A staged process keeps the first step proportionate.
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  No compliance documents are uploaded through the initial form.
                  They are requested later only if there is a reason to progress
                  the application.
                </p>
              </div>

              <ol className="grid gap-5 sm:grid-cols-2">
                {[
                  [
                    IconIdBadge2,
                    "01",
                    "Introduce",
                    "Provide business type, base, operating areas, equipment and work preferences.",
                  ],
                  [
                    IconRoad,
                    "02",
                    "Review",
                    "Logic Freight considers whether the operation may fit the types of requirements it handles.",
                  ],
                  [
                    IconFileCheck,
                    "03",
                    "Check",
                    "If progressed, Logic Freight explains what business, licence and insurance evidence is needed and agrees how it should be provided.",
                  ],
                  [
                    IconTruckDelivery,
                    "04",
                    "Discuss",
                    "Any specific opportunity, capacity, rate and terms are considered separately.",
                  ],
                ].map(([Icon, number, title, text]) => {
                  const StageIcon = Icon as typeof IconIdBadge2;
                  return (
                    <li
                      key={number as string}
                      className="rounded-2xl border border-white/15 p-6"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <StageIcon
                          aria-hidden="true"
                          className="h-6 w-6 text-lime-300"
                        />
                        <span className="text-sm font-black text-slate-500">
                          {number as string}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-extrabold">
                        {title as string}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {text as string}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Compliance information later
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Be ready to provide documents if the application progresses.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                The precise evidence depends on the operator and the proposed
                work. Logic Freight will specify what is relevant and how it
                should be supplied; do not email sensitive documents before
                being asked.
              </p>
            </div>

            <ul className="space-y-3">
              {documentExamples.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700"
                >
                  <IconFileCheck
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-lime-700"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="subcontractor-form"
          className="scroll-mt-24 bg-[#07111f] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <LeadForm
              journey="subcontractor"
              context="haulage-subcontractor-work"
            />
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Before applying
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Subcontractor questions
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Looking only to share short-term capacity? Use the{" "}
                <Link
                  href="/place-an-available-truck/"
                  className="font-bold text-slate-950 underline decoration-lime-500 decoration-2 underline-offset-4"
                >
                  available truck form
                </Link>
                .
              </p>
            </div>
            <FaqList items={faqItems} />
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Other freight journeys
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Start with the information relevant to today.
              </h2>
            </div>
            <div className="mt-9">
              <JourneyCards compact />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
