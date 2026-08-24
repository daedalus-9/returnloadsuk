import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick enquiry actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden"
    >
      <Link
        href="/submit-a-load/"
        onClick={() =>
          trackEvent("journey_selected", {
            journey: "load",
            component: "mobile_action_bar",
          })
        }
        className="rounded-md bg-slate-950 px-3 py-3 text-center text-sm font-extrabold text-white"
      >
        I have a load
      </Link>
      <Link
        href="/place-an-available-truck/"
        onClick={() =>
          trackEvent("journey_selected", {
            journey: "truck",
            component: "mobile_action_bar",
          })
        }
        className="rounded-md bg-lime-300 px-3 py-3 text-center text-sm font-extrabold text-slate-950"
      >
        I have a truck
      </Link>
    </nav>
  );
}
