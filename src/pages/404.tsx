import { Seo } from "@/components/seo/Seo";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Return Loads UK"
        description="The requested Return Loads UK page could not be found."
        path="/404/"
        noindex
      />
      <main
        id="main-content"
        className="bg-[#07111f] py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
            Error 404
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            This freight page has moved-or never existed.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Use the main journeys below instead of an empty or unsupported
            route.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-md bg-lime-300 px-6 py-3 font-extrabold text-slate-950"
            >
              Return home
            </Link>
            <Link
              href="/submit-a-load/"
              className="rounded-md border border-white/30 px-6 py-3 font-extrabold"
            >
              Submit a load
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
