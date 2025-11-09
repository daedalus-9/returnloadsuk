import { GhostButton } from "@/components/buttons/GhostButton";
import { SplashButton } from "@/components/buttons/SplashButton";
import { PlaceTruckForm } from "@/components/placeTruckForm/PlaceTruckForm";
import { Stats } from "@/components/features/stats/Stats";
import Footer from "@/components/footer/Footer";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function SubcontractorsLanding() {
  const router = useRouter();

  const countries = [
    { name: "Scotland", href: "/subcontractors/scotland" },
    { name: "England", href: "/subcontractors/england" },
    { name: "Wales", href: "/subcontractors/wales" },
  ];

  const handleScrollToForm = () => {
    const formSection = document.getElementById("quote-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <MaxWidthWrapper>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Join Our Subcontractor Network
          </h1>
          <p className="mb-12 text-zinc-400 sm:text-lg md:text-xl">
            Logic Freight partners with vetted hauliers across the UK. Select
            your country to view opportunities and routes specific to your
            region.
          </p>

          {/* Country Buttons */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {countries.map((country) => (
              <GhostButton
                key={country.name}
                onClick={() => router.push(country.href)}
                className="rounded-md px-6 py-4 text-lg sm:text-xl"
              >
                {country.name}
              </GhostButton>
            ))}
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <SplashButton
              onClick={handleScrollToForm}
              className="flex items-center gap-2 px-6 py-3 text-lg sm:text-xl"
            >
              Place a Truck
              <FiArrowRight />
            </SplashButton>

            <GhostButton
              onClick={() => router.push("/subcontractors/join")}
              className="rounded-md px-6 py-3 text-lg sm:text-xl"
            >
              Join as a Haulier
            </GhostButton>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <Stats />
      </section>

      {/* Place a Truck / Enquiry Form Section */}
      <section id="quote-form" className="py-24">
        <PlaceTruckForm region="UK" />
      </section>
    </main>
  );
}
