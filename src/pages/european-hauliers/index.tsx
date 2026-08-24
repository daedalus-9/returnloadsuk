import { FaqList } from "@/components/content/FaqList";
import { PageHero } from "@/components/content/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import {
  IconFileDescription,
  IconRoute,
  IconTruckDelivery,
} from "@tabler/icons-react";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "European hauliers", href: "/european-hauliers/" },
];

const faq = [
  {
    question: "Does placing a European truck guarantee a UK return load?",
    answer:
      "No. Sharing availability gives Logic Freight details to review. Any suitable movement depends on real demand, route, timing, equipment, remaining legal operating scope and terms agreed with the parties.",
  },
  {
    question: "Can an EU operator carry domestic loads within the UK?",
    answer:
      "UK cabotage rules limit when and how EU operators can carry domestic UK movements. The current government guidance should be checked for the exact eligibility, journey limit and timing rules that apply to the vehicle and arrival movement.",
  },
  {
    question: "What information should a European haulier provide?",
    answer:
      "Provide the current UK location, date and time available, vehicle and trailer body, usable capacity, preferred direction, planned exit route and confirmation that the operator can undertake the proposed movement lawfully.",
  },
];

export default function EuropeanHauliersPage() {
  return (
    <>
      <Seo
        title="European Haulier Return-Load Enquiries | Logic Freight"
        description="European hauliers entering the UK can share truck details for case-by-case return-load enquiries, subject to route, capacity and current operating rules."
        path="/european-hauliers/"
        schemas={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "UK capacity matching for European road hauliers",
            serviceType: "Road-freight capacity matching",
            areaServed: "United Kingdom",
          },
        ]}
      />
      <main id="main-content">
        <PageHero
          eyebrow="Europe to UK capacity"
          title="UK return-load enquiries for European hauliers"
          lead="If your HGV enters the UK laden and will have suitable available capacity, share the vehicle, location, timing and planned direction. Logic Freight reviews each enquiry individually; work is not guaranteed."
          breadcrumbs={breadcrumbs}
          primary={{
            label: "Share an available truck",
            href: "#european-truck-form",
          }}
          secondary={{ label: "Submit a load", href: "/submit-a-load/" }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: IconTruckDelivery,
                  title: "Describe the capacity",
                  text: "Give the tractor and trailer type, available payload or pallet spaces, current location and time window.",
                },
                {
                  icon: IconRoute,
                  title: "Explain the onward route",
                  text: "Include preferred direction, intended ferry or tunnel crossing and any fixed collection or exit timing.",
                },
                {
                  icon: IconFileDescription,
                  title: "Check operating eligibility",
                  text: "The operator remains responsible for licences, customs, insurance, cabotage and other rules applying to the movement.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl bg-slate-50 p-7"
                  >
                    <Icon aria-hidden="true" className="h-7 w-7" />
                    <h2 className="mt-6 text-xl font-extrabold">
                      {item.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.8fr]">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-950">
                  Cabotage and cross-border rules change the available options
                </h2>
                <div className="mt-6 space-y-5 leading-7 text-slate-600">
                  <p>
                    Reviewed 24 August 2026: UK government guidance states that
                    eligible EU operators may carry up to two cabotage movements
                    within seven days after arriving laden and unloading in the
                    UK. Conditions apply, and the official guidance takes
                    precedence.
                  </p>
                  <p>
                    A matching enquiry is not legal or customs advice. Before
                    accepting work, confirm operator licensing, cabotage scope,
                    customs records, insurance, driver requirements and the
                    documents needed for the planned crossing.
                  </p>
                </div>
              </div>
              <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
                <h2 className="text-xl font-extrabold text-slate-950">
                  Check the current official guidance
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Use the UK government page for current rules affecting EU
                  operators transporting goods into and within the UK.
                </p>
                <a
                  href="https://www.gov.uk/guidance/eu-operators-transporting-goods-into-the-uk"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex font-extrabold text-slate-950 underline"
                >
                  Open GOV.UK operator guidance
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="european-truck-form"
          className="bg-slate-950 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <LeadForm journey="truck" context="European haulier in the UK" />
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Common questions
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                UK work after an inbound European load
              </h2>
            </div>
            <FaqList items={faq} />
          </div>
        </section>
      </main>
    </>
  );
}
