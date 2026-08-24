import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { IconMail, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Hauliers",
    links: [
      ["Find return loads", "/find-return-loads/"],
      ["Place an available truck", "/place-an-available-truck/"],
      ["Subcontractor work", "/haulage-subcontractor-work/"],
      ["European hauliers", "/european-hauliers/"],
    ],
  },
  {
    title: "Freight services",
    links: [
      ["Submit a load", "/submit-a-load/"],
      ["Services", "/services/"],
      ["Vehicle types", "/vehicles/"],
      ["Industries", "/industries/"],
    ],
  },
  {
    title: "Coverage",
    links: [
      ["Locations", "/locations/"],
      ["Routes", "/routes/"],
      ["Seasonal transport", "/seasonal-transport/"],
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          <div className="max-w-sm">
            <Image
              src={SITE.logoPath}
              alt="Logic Freight"
              width={200}
              height={50}
              className="mb-6 h-auto w-[190px]"
            />
            <p className="text-sm leading-6 text-slate-400">
              Logic Freight connects businesses that need goods moved with
              hauliers and subcontractors that have suitable UK road-freight
              capacity. Availability and terms are confirmed for each enquiry.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`tel:${SITE.phoneHref}`}
                onClick={() =>
                  trackEvent("phone_click", { location: "footer" })
                }
                className="flex items-center gap-3 font-semibold text-white hover:text-lime-300"
              >
                <IconPhone aria-hidden="true" className="h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                onClick={() =>
                  trackEvent("email_click", { location: "footer" })
                }
                className="flex items-center gap-3 font-semibold text-white hover:text-lime-300"
              >
                <IconMail aria-hidden="true" className="h-5 w-5" />
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white">
                  {column.title}
                </h2>
                <ul className="space-y-3 text-sm">
                  {column.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="hover:text-white hover:underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 text-xs leading-5 text-slate-500 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-semibold text-slate-300">{SITE.legalName}</p>
            <address className="mt-1 not-italic">
              {SITE.address.join(", ")}
            </address>
            <p className="mt-3 max-w-3xl">
              Return Loads UK is operated by Logic Freight. This website is an
              enquiry and capacity-matching service, not a public live-load
              board. A movement is not booked until scope, capacity, price and
              terms have been agreed with the relevant parties.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            <Link href="/about/" className="hover:text-white">
              About
            </Link>
            <Link href="/contact/" className="hover:text-white">
              Contact
            </Link>
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy
            </Link>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("open-cookie-settings"))
              }
              className="text-left hover:text-white"
            >
              Cookie settings
            </button>
          </div>
        </div>
        <p suppressHydrationWarning className="mt-6 text-xs text-slate-600">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
