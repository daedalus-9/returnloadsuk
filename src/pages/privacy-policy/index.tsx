import { PageHero } from "@/components/content/PageHero";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import { SITE } from "@/lib/site";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy policy", href: "/privacy-policy/" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Logic Freight"
        description="How Logic Freight Limited handles personal information submitted through Return Loads UK, including freight, available truck and subcontractor enquiries."
        path="/privacy-policy/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <main id="main-content">
        <PageHero
          eyebrow="Privacy"
          title="How Logic Freight handles personal information"
          lead="This policy explains the information collected through Return Loads UK, why it is used and the choices available to you."
          breadcrumbs={breadcrumbs}
        />

        <article className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
              <strong className="text-slate-950">Last updated:</strong> 24
              August 2026. Logic Freight should review this notice whenever its
              forms, processors, retention practices or analytics setup change.
            </p>

            <div className="mt-12 space-y-12 leading-7 text-slate-700">
              <section aria-labelledby="controller">
                <h2
                  id="controller"
                  className="text-2xl font-black text-slate-950"
                >
                  Who is responsible for your information
                </h2>
                <p className="mt-4">
                  {SITE.legalName} operates Return Loads UK and is the
                  controller of personal information submitted through this
                  website. You can contact us at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-bold underline"
                  >
                    {SITE.email}
                  </a>{" "}
                  or write to {SITE.address.join(", ")}.
                </p>
              </section>

              <section aria-labelledby="collection">
                <h2
                  id="collection"
                  className="text-2xl font-black text-slate-950"
                >
                  Information we collect
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    Contact and business details, including your name, company
                    or trading name, telephone number and email address.
                  </li>
                  <li>
                    Freight-enquiry details such as collection and delivery
                    locations, dates, goods, quantities, equipment and handling
                    requirements.
                  </li>
                  <li>
                    Vehicle and subcontractor details such as operating base,
                    vehicle types, available capacity, coverage and work
                    preferences.
                  </li>
                  <li>
                    Limited technical and analytics information if you choose to
                    accept analytics cookies.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="use">
                <h2 id="use" className="text-2xl font-black text-slate-950">
                  Why we use it
                </h2>
                <p className="mt-4">
                  We use enquiry information to review and respond to requests,
                  explore potential freight and capacity matches, administer
                  working relationships, maintain records and protect the
                  service from misuse. Depending on the context, this is
                  necessary to take steps at your request before a contract, to
                  perform a contract, to meet legal obligations or for our
                  legitimate interests in operating a freight-intermediary
                  business.
                </p>
                <p className="mt-4">
                  Optional marketing is based on consent. Leaving the marketing
                  box unticked does not affect an operational enquiry, and
                  consent can be withdrawn at any time.
                </p>
              </section>

              <section aria-labelledby="sharing">
                <h2 id="sharing" className="text-2xl font-black text-slate-950">
                  When information may be shared
                </h2>
                <p className="mt-4">
                  Information may be shared with relevant customers, hauliers or
                  subcontractors where needed to assess or arrange a movement,
                  and with service providers that support hosting,
                  communications, analytics or business administration. We may
                  also disclose information where required by law or to
                  establish or defend legal rights. We do not sell personal
                  information for third-party marketing.
                </p>
              </section>

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-2xl font-black text-slate-950">
                  Cookies and analytics
                </h2>
                <p className="mt-4">
                  The site stores your cookie choice. Analytics tags are loaded
                  only after you select “Accept analytics”. Analytics helps us
                  understand page use and conversion journeys; form event
                  tracking is designed not to include names, contact details or
                  freight data. Use the “Cookie settings” control in the site
                  footer to review or change your choice.
                </p>
              </section>

              <section aria-labelledby="retention">
                <h2
                  id="retention"
                  className="text-2xl font-black text-slate-950"
                >
                  Retention and international processing
                </h2>
                <p className="mt-4">
                  We retain personal information only for as long as it is
                  needed for the enquiry, working relationship, legal
                  obligations and appropriate business records. Exact periods
                  depend on the type and outcome of the contact. If a service
                  provider processes data outside the UK, we use the safeguards
                  required by applicable data protection law.
                </p>
              </section>

              <section aria-labelledby="rights">
                <h2 id="rights" className="text-2xl font-black text-slate-950">
                  Your rights
                </h2>
                <p className="mt-4">
                  Depending on the circumstances, you may ask for access,
                  correction, deletion, restriction, objection or portability of
                  your personal information, and you may withdraw consent.
                  Contact{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-bold underline"
                  >
                    {SITE.email}
                  </a>{" "}
                  to make a request.
                </p>
                <p className="mt-4">
                  You can also raise a concern with the UK Information
                  Commissioner’s Office. Visit{" "}
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold underline"
                  >
                    the ICO complaints page
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
