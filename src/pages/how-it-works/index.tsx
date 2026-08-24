import { CallToAction } from "@/components/content/CallToAction";
import { JourneyCards } from "@/components/content/JourneyCards";
import { PageHero } from "@/components/content/PageHero";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import {
  IconChecklist,
  IconMessages,
  IconRoute,
  IconShieldCheck,
} from "@tabler/icons-react";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "How it works", href: "/how-it-works/" },
];

const steps = [
  {
    title: "Share the operational details",
    text: "Use the correct journey to provide locations, timing, freight or vehicle information and contact details. Accurate inputs make the review more useful.",
    icon: IconChecklist,
  },
  {
    title: "Logic Freight reviews the requirement",
    text: "The transport team considers route, equipment, timing, capacity and relevant constraints. An enquiry or truck placement is not an automatic booking.",
    icon: IconMessages,
  },
  {
    title: "Relevant parties discuss fit",
    text: "Where there may be a workable match, Logic Freight follows up to clarify any missing information and discuss the movement with the relevant customer and haulier.",
    icon: IconRoute,
  },
  {
    title: "Scope and terms are confirmed",
    text: "A job only proceeds after capacity, collection and delivery requirements, commercial terms and responsibilities have been agreed. Do not dispatch a vehicle from a website submission alone.",
    icon: IconShieldCheck,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How Freight Matching Works | Return Loads UK"
        description="See how Logic Freight reviews load enquiries, available truck details and haulage subcontractor applications before any UK road-freight movement is agreed."
        path="/how-it-works/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <main id="main-content">
        <PageHero
          eyebrow="A managed freight intermediary"
          title="How Return Loads UK works"
          lead="Logic Freight connects transport demand with suitable available haulage capacity. This is a human-led enquiry and matching process-not an automated promise of a load, truck or booking."
          breadcrumbs={breadcrumbs}
          primary={{ label: "Submit a load", href: "/submit-a-load/" }}
          secondary={{
            label: "Place an available truck",
            href: "/place-an-available-truck/",
          }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                From enquiry to agreement
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Four steps, with the important details made clear.
              </h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-slate-400">
                        0{index + 1}
                      </span>
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-slate-950"
                      />
                    </div>
                    <h3 className="mt-8 text-xl font-extrabold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Choose the right starting point
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Loads, free vehicles and subcontractor applications need
                different information.
              </h2>
            </div>
            <div className="mt-10">
              <JourneyCards />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                What an enquiry does
              </h2>
              <ul className="mt-6 space-y-4 leading-7 text-slate-600">
                <li>Gives the transport team a structured brief to review.</li>
                <li>
                  Creates a basis for clarifying route, equipment and timing.
                </li>
                <li>
                  Lets Logic Freight consider potentially relevant capacity.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                What an enquiry does not do
              </h2>
              <ul className="mt-6 space-y-4 leading-7 text-slate-600">
                <li>It does not reserve a truck or publish a live load.</li>
                <li>
                  It does not guarantee work, price, timing or availability.
                </li>
                <li>
                  It is not authority to collect, deliver or subcontract
                  freight.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CallToAction journey="load" />
      </main>
    </>
  );
}
