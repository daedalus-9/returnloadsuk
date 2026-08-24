import { CallToAction } from "@/components/content/CallToAction";
import { PageHero } from "@/components/content/PageHero";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import { SITE } from "@/lib/site";
import {
  IconBuildingWarehouse,
  IconNetwork,
  IconRoute,
} from "@tabler/icons-react";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Logic Freight | Return Loads UK"
        description="Learn how Logic Freight operates Return Loads UK as a freight intermediary connecting customer demand with suitable available haulage capacity."
        path="/about/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <main id="main-content">
        <PageHero
          eyebrow="About Logic Freight"
          title="Connecting freight demand with available road capacity"
          lead="Return Loads UK is operated by Logic Freight Limited. Our role is to bring together businesses that need goods moved and independent hauliers or subcontractors that may have suitable capacity."
          breadcrumbs={breadcrumbs}
          primary={{ label: "How it works", href: "/how-it-works/" }}
          secondary={{ label: "Contact the team", href: "/contact/" }}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                The positioning
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A freight intermediary, explained plainly.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Customers use the site to describe a road-freight requirement.
                Hauliers use it to share an available vehicle or introduce their
                operation for possible subcontract work. Logic Freight reviews
                those details and follows up where there may be an operational
                fit.
              </p>
              <p>
                The website is not a public exchange showing live inventory. It
                does not guarantee that a load, vehicle, rate or contract is
                available. Each potential movement must be discussed and agreed
                with the relevant parties before work begins.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: IconBuildingWarehouse,
                  title: "For customers",
                  text: "A structured way to share collection, delivery, timing, freight and handling requirements for review.",
                },
                {
                  icon: IconRoute,
                  title: "For hauliers",
                  text: "A route to share real vehicle availability, location, body type, capacity and preferred direction.",
                },
                {
                  icon: IconNetwork,
                  title: "For subcontractors",
                  text: "An initial expression of interest for owner-drivers and haulage companies, followed by operational and compliance checks where relevant.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7 text-slate-950"
                    />
                    <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Business details
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                {SITE.legalName}
                <br />
                {SITE.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Speak to the transport team
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Telephone:{" "}
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="font-bold text-slate-950 underline"
                >
                  {SITE.phoneDisplay}
                </a>
                <br />
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-bold text-slate-950 underline"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        </section>

        <CallToAction journey="load" />
      </main>
    </>
  );
}
