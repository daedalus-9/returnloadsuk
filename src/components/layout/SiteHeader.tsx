import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import {
  IconChevronDown,
  IconMail,
  IconMenu2,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const navigation = [
  {
    label: "For hauliers",
    links: [
      { label: "Find return loads", href: "/find-return-loads/" },
      {
        label: "Place an available truck",
        href: "/place-an-available-truck/",
      },
      {
        label: "Subcontractor work",
        href: "/haulage-subcontractor-work/",
      },
      { label: "European hauliers", href: "/european-hauliers/" },
    ],
  },
  {
    label: "For shippers",
    links: [
      { label: "Submit a load", href: "/submit-a-load/" },
      { label: "Haulage services", href: "/services/" },
      { label: "Industry support", href: "/industries/" },
      { label: "How matching works", href: "/how-it-works/" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "Locations", href: "/locations/" },
      { label: "Routes and corridors", href: "/routes/" },
      { label: "Vehicle types", href: "/vehicles/" },
      { label: "Seasonal transport", href: "/seasonal-transport/" },
      { label: "Guides and resources", href: "/resources/" },
    ],
  },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const closeDesktopMenus = () => {
      headerRef.current
        ?.querySelectorAll<HTMLDetailsElement>("details[open]")
        .forEach((details) => details.removeAttribute("open"));
    };
    const closeAllMenus = () => {
      setMenuOpen(false);
      closeDesktopMenus();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      closeDesktopMenus();
      if (menuOpen) {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeDesktopMenus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnOutsidePointer);
    router.events.on("routeChangeStart", closeAllMenus);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnOutsidePointer);
      router.events.off("routeChangeStart", closeAllMenus);
    };
  }, [menuOpen, router.events]);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-md bg-lime-300 px-4 py-2 font-bold text-slate-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur"
      >
        <div className="hidden border-b border-white/10 bg-slate-950/60 lg:block">
          <div className="mx-auto flex max-w-7xl justify-end gap-6 px-6 py-2 text-sm text-slate-300">
            <a
              href={`tel:${SITE.phoneHref}`}
              onClick={() => trackEvent("phone_click", { location: "header" })}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <IconPhone aria-hidden="true" className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              onClick={() => trackEvent("email_click", { location: "header" })}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <IconMail aria-hidden="true" className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" aria-label="Return Loads UK home" className="shrink-0">
            <Image
              src={SITE.logoPath}
              alt="Logic Freight – Forward Thinking"
              width={200}
              height={50}
              priority
              className="h-auto w-[166px] sm:w-[190px]"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((group) => (
              <details key={group.label} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 rounded-md px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">
                  {group.label}
                  <IconChevronDown
                    aria-hidden="true"
                    className="h-4 w-4 transition group-open:rotate-180"
                  />
                </summary>
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-2xl">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-100 focus-visible:bg-slate-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Link
              href="/submit-a-load/"
              onClick={() =>
                trackEvent("journey_selected", {
                  journey: "load",
                  component: "desktop_header",
                })
              }
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-lime-300 px-4 py-2 text-sm font-extrabold text-slate-950 shadow-sm transition hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Submit a load
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="rounded-md p-3 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-300 lg:hidden"
          >
            {menuOpen ? (
              <IconX aria-hidden="true" className="h-6 w-6" />
            ) : (
              <IconMenu2 aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-[#07111f] px-4 pb-6 lg:hidden"
          >
            {navigation.map((group) => (
              <div key={group.label} className="border-b border-white/10 py-4">
                <p className="px-2 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-300">
                  {group.label}
                </p>
                <div className="grid gap-1">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-md px-2 py-3 font-semibold text-slate-100 hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-5">
              <Link
                href="/submit-a-load/"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-lime-300 px-3 py-3 text-center text-sm font-extrabold text-slate-950"
              >
                Submit a load
              </Link>
              <Link
                href="/place-an-available-truck/"
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-white/30 px-3 py-3 text-center text-sm font-extrabold text-white"
              >
                Place a truck
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
