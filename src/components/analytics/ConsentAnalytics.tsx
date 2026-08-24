import { trackEvent } from "@/lib/analytics";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = "analytics" | "essential";

const STORAGE_KEY = "logic-freight-cookie-consent";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PG3779NZ";

export function ConsentAnalytics() {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setConsent(
        stored === "analytics" || stored === "essential" ? stored : null
      );
    } catch {
      setConsent(null);
    }

    const openSettings = () => setConsent(null);
    window.addEventListener("open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const choose = (choice: Consent) => {
    const shouldReloadWithoutAnalytics =
      consent === "analytics" && choice === "essential";
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // The choice still applies for this page view if storage is unavailable.
    }
    setConsent(choice);
    trackEvent("cookie_consent_update", { analytics_storage: choice });
    if (shouldReloadWithoutAnalytics) window.location.reload();
  };

  return (
    <>
      {consent === "analytics" && (
        <>
          <Script id="gtm-data-layer" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
          </Script>
          <Script
            id="gtm-loader"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {consent === null && (
        <aside
          role="dialog"
          aria-label="Analytics cookie choice"
          className="fixed bottom-20 left-3 right-3 z-[60] mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 text-slate-800 shadow-2xl md:bottom-5 md:left-5 md:right-auto"
        >
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="text-sm leading-6">
              We use essential storage to remember this choice. With your
              permission, analytics helps us understand which freight journeys
              are useful. See our{" "}
              <Link href="/privacy-policy/" className="font-semibold underline">
                privacy policy
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => choose("essential")}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold hover:bg-slate-100"
              >
                Essential only
              </button>
              <button
                type="button"
                onClick={() => choose("analytics")}
                className="rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
