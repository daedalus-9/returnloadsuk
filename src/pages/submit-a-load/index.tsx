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
  IconCalendarEvent,
  IconChecklist,
  IconMapPin,
  IconPackage,
  IconRepeat,
  IconTruckDelivery,
} from "@tabler/icons-react";

const path = "/submit-a-load/";

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Submit a load", href: path },
];

const informationItems = [
  {
    title: "Collection and delivery",
    text: "Postcodes, the requested date and any time or site-access constraints.",
    icon: IconMapPin,
  },
  {
    title: "Goods and quantity",
    text: "A clear goods description plus weight, pallet quantity or useful dimensions.",
    icon: IconPackage,
  },
  {
    title: "Vehicle and handling",
    text: "The required vehicle or trailer body and equipment such as a tail lift or temperature control.",
    icon: IconTruckDelivery,
  },
  {
    title: "Timing",
    text: "The collection date, delivery expectations and whether the need is one-off or recurring.",
    icon: IconCalendarEvent,
  },
];

const faqItems = [
  {
    question: "Can I submit a one-off transport requirement?",
    answer:
      "Yes. Use the form for an individual road-freight movement and provide as much accurate collection, delivery, goods and timing information as you can.",
  },
  {
    question: "Can I discuss recurring loads?",
    answer:
      "Yes. Describe the likely frequency, typical route, goods and vehicle requirement in the notes. Each movement and its commercial terms still need to be agreed.",
  },
  {
    question: "What if I am unsure which vehicle is needed?",
    answer:
      "Select the option asking for advice and include the weight, dimensions, loading method and site constraints. Those details help the transport team discuss an appropriate vehicle with you.",
  },
  {
    question: "Does submitting the form confirm transport?",
    answer:
      "No. It creates an enquiry for review. Vehicle suitability, capacity, price, timings and commercial terms must be confirmed before a movement is agreed.",
  },
];

export default function SubmitALoadPage() {
  return (
    <>
      <Seo
        title="Submit a Load | Request UK Road Freight"
        description="Send Logic Freight the collection, delivery, goods and vehicle details for a one-off or recurring UK road-freight requirement."
        path={path}
        schemas={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Road-freight enquiry and capacity matching",
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
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Businesses with goods to transport",
            },
          },
        ]}
      />

      <main id="main-content">
        <PageHero
          eyebrow="For businesses with freight to move"
          title="Submit a load for road-freight review."
          lead="Tell Logic Freight what needs moving, where it is going and when. Accurate operational details help the transport team assess the requirement and discuss suitable haulage capacity with you."
          breadcrumbs={breadcrumbs}
          primary={{ label: "Send load details", href: "#load-enquiry-form" }}
          secondary={{ label: "Explore freight services", href: "/services/" }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                The requirement
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                One-off movements and recurring transport need different
                context.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                A single urgent collection may depend on a precise time window,
                while recurring freight needs a clear picture of frequency,
                typical volume and route. The form captures the core details;
                use the notes for the operational differences that matter.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <IconChecklist
                  aria-hidden="true"
                  className="h-7 w-7 text-lime-600"
                />
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                  One-off loads
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Provide the specific collection and delivery points, date,
                  goods, quantity, handling needs and any access restrictions.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <IconRepeat
                  aria-hidden="true"
                  className="h-7 w-7 text-lime-600"
                />
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                  Recurring requirements
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Add expected frequency, typical volumes, route variation and
                  the vehicle or trailer normally required.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Information to have ready
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                The details that shape a transport enquiry.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Complete information reduces avoidable follow-up and makes it
                easier to understand the vehicle, timing and handling required.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {informationItems.map((item) => {
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

        <section className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime-300">
                What happens next
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                An enquiry first, then an operational conversation.
              </h2>
            </div>
            <ol className="grid gap-6 sm:grid-cols-3">
              {[
                [
                  "01",
                  "Review",
                  "Logic Freight reviews the route, goods, timing and vehicle information supplied.",
                ],
                [
                  "02",
                  "Clarify",
                  "The transport team may contact you to confirm missing details or practical constraints.",
                ],
                [
                  "03",
                  "Agree",
                  "Any suitable capacity, scope, price, timings and terms are confirmed before transport is arranged.",
                ],
              ].map(([number, title, text]) => (
                <li key={number} className="border-t border-white/20 pt-5">
                  <span className="text-sm font-black text-lime-300">
                    {number}
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="load-enquiry-form"
          className="scroll-mt-24 bg-[#07111f] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <LeadForm journey="load" context="submit-a-load" />
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Before you submit
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Load enquiry questions
              </h2>
            </div>
            <FaqList items={faqItems} />
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                A different reason for visiting?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Choose the journey that matches your role.
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
