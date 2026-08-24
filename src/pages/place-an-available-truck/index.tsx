import { FaqList } from "@/components/content/FaqList";
import { JourneyCards } from "@/components/content/JourneyCards";
import { PageHero } from "@/components/content/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import {
  breadcrumbSchema,
  type BreadcrumbItem,
  Seo,
} from "@/components/seo/Seo";
import { SITE } from "@/lib/site";
import {
  IconCalendarTime,
  IconMapPin,
  IconRoute,
  IconScale,
  IconTruck,
} from "@tabler/icons-react";
import Link from "next/link";

const path = "/place-an-available-truck/";

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Place an available truck", href: path },
];

const capacityDetails = [
  {
    title: "Current location",
    text: "Give a useful town, postcode or service area rather than a broad region alone.",
    icon: IconMapPin,
  },
  {
    title: "Availability window",
    text: "State when the vehicle becomes free and, if relevant, when that availability ends.",
    icon: IconCalendarTime,
  },
  {
    title: "Vehicle and body",
    text: "Identify the vehicle class and trailer or body type, including specialist equipment where relevant.",
    icon: IconTruck,
  },
  {
    title: "Usable capacity",
    text: "Share the weight, pallet spaces or other practical capacity that remains available.",
    icon: IconScale,
  },
  {
    title: "Direction or radius",
    text: "Explain a preferred destination, regular route or the distance you are willing to reposition.",
    icon: IconRoute,
  },
];

const faqItems = [
  {
    question: "Does placing a truck guarantee a return load?",
    answer:
      "No. Sharing availability lets Logic Freight assess the vehicle against genuine freight enquiries. A suitable load may not be available, and nothing is agreed until the operational and commercial terms are confirmed.",
  },
  {
    question: "Can an owner-driver place a vehicle?",
    answer:
      "Yes. Owner-drivers and haulage companies can share available capacity. If you are looking for a broader working relationship, use the separate subcontractor application pathway.",
  },
  {
    question: "What location should I enter?",
    answer:
      "Use the expected location when the truck becomes available, such as the delivery town or postcode. Add a preferred onward direction or operating radius where possible.",
  },
  {
    question: "Should I include part-load capacity?",
    answer:
      "Yes, if the vehicle has usable space. Describe the available weight, pallet spaces, deck dimensions and any limitations so the capacity is not mistaken for an empty full vehicle.",
  },
];

export default function PlaceAnAvailableTruckPage() {
  return (
    <>
      <Seo
        title="Place an Available Truck | Share UK Haulage Capacity"
        description="Tell Logic Freight where and when your truck is available, its body type, usable capacity and preferred direction for case-by-case matching."
        path={path}
        schemas={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Available truck capacity matching",
            serviceType: "Managed road-freight capacity matching",
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
              audienceType: "Owner-drivers and haulage companies",
            },
          },
        ]}
      />

      <main id="main-content">
        <PageHero
          eyebrow="For available HGV and road-freight capacity"
          title="Tell us where your truck is free next."
          lead="Share the vehicle, body type, usable capacity, location and timing. Logic Freight reviews each truck against relevant freight enquiries on a case-by-case basis; placing a vehicle does not guarantee a load."
          breadcrumbs={breadcrumbs}
          primary={{
            label: "Share truck availability",
            href: "#truck-availability-form",
          }}
          secondary={{
            label: "How managed matching works",
            href: "/find-return-loads/",
          }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Useful capacity details
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Describe the vehicle that will actually be available.
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  A location and date are a starting point. Body type, practical
                  capacity, loading restrictions and preferred direction all
                  affect whether a freight enquiry is a sensible fit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {capacityDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm last:sm:col-span-2"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-lime-600"
                      />
                      <h3 className="mt-4 text-lg font-extrabold text-slate-950">
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
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Managed, case-by-case review
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                This is capacity matching, not a promise of freight.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Return Loads UK is operated by Logic Freight. It is not a public
                feed of live jobs. The transport team compares submitted vehicle
                details with genuine enquiries and contacts a haulier where
                there may be an operational fit.
              </p>
              <p className="mt-5 leading-7 text-slate-600">
                Availability can change quickly. If the truck is allocated
                elsewhere, tell the team rather than leaving stale capacity on
                record.
              </p>
              <Link
                href="/find-return-loads/"
                className="mt-6 inline-flex font-extrabold text-slate-950 underline decoration-lime-500 decoration-4 underline-offset-4"
              >
                Read how return-load matching works
              </Link>
            </div>

            <ol className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              {[
                [
                  "01",
                  "Share",
                  "Provide the expected position, timing, equipment and usable capacity.",
                ],
                [
                  "02",
                  "Compare",
                  "Logic Freight assesses those details against relevant freight enquiries.",
                ],
                [
                  "03",
                  "Confirm",
                  "If there is a potential fit, scope and commercial terms are discussed before anything is agreed.",
                ],
              ].map(([number, title, text], index) => (
                <li
                  key={number}
                  className={`grid grid-cols-[auto_1fr] gap-5 py-6 ${index ? "border-t border-white/15" : "pt-0"}`}
                >
                  <span className="font-black text-lime-300">{number}</span>
                  <div>
                    <h3 className="text-xl font-extrabold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="truck-availability-form"
          className="scroll-mt-24 bg-[#07111f] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <LeadForm journey="truck" context="place-an-available-truck" />
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Before placing a vehicle
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Available truck questions
              </h2>
            </div>
            <FaqList items={faqItems} />
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Looking for a different pathway?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Choose a journey built for the information you have.
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
