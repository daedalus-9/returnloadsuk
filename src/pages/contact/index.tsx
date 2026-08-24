import { JourneyCards } from "@/components/content/JourneyCards";
import { PageHero } from "@/components/content/PageHero";
import { Seo, breadcrumbSchema } from "@/components/seo/Seo";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Logic Freight | Return Loads UK"
        description="Contact Logic Freight about a UK road-freight load, available truck or haulage subcontractor enquiry by telephone, email or the correct online journey."
        path="/contact/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <main id="main-content">
        <PageHero
          eyebrow="Contact Logic Freight"
          title="Start with the route that matches your enquiry"
          lead="Use a structured form for a load, free vehicle or subcontractor application, or contact the transport team directly using the details below."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <JourneyCards compact />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <a
                href={`tel:${SITE.phoneHref}`}
                onClick={() =>
                  trackEvent("phone_click", { location: "contact_page" })
                }
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-slate-400"
              >
                <IconPhone aria-hidden="true" className="h-7 w-7" />
                <h2 className="mt-5 text-xl font-extrabold">Telephone</h2>
                <p className="mt-2 font-bold underline">{SITE.phoneDisplay}</p>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                onClick={() =>
                  trackEvent("email_click", { location: "contact_page" })
                }
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-slate-400"
              >
                <IconMail aria-hidden="true" className="h-7 w-7" />
                <h2 className="mt-5 text-xl font-extrabold">Email</h2>
                <p className="mt-2 break-all font-bold underline">
                  {SITE.email}
                </p>
              </a>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <IconMapPin aria-hidden="true" className="h-7 w-7" />
                <h2 className="mt-5 text-xl font-extrabold">Address</h2>
                <address className="mt-2 not-italic leading-7 text-slate-600">
                  {SITE.legalName}
                  {SITE.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
              Sending an enquiry does not create a booking or guarantee
              capacity. Do not dispatch a vehicle or goods until the scope and
              terms have been confirmed through the appropriate operational
              process.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
