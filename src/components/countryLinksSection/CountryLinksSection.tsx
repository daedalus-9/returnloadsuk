import { GhostButton } from "@/components/buttons/GhostButton";
import { useRouter } from "next/router";

const countries = [
  { name: "Return Loads England", href: "/return-loads-england" },
  { name: "Return Loads Scotland", href: "/return-loads-scotland" },
  { name: "Return Loads Wales", href: "/return-loads-wales" },
];

export const CountryLinksSection = () => {
  const router = useRouter();

  return (
    <section className="relative mx-auto max-w-4xl py-16 text-center">
      <h2 className="mb-6 text-2xl font-bold text-zinc-50 sm:text-3xl">
        Find Return Loads in Your Area
      </h2>
      <p className="mb-12 text-zinc-400">
        Quickly navigate to return loads available across England, Scotland, and
        Wales.
      </p>

      {/* Country Buttons */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
    </section>
  );
};
