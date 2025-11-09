import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";

export const metadata = {
  title: "Privacy Policy | Logic Freight",
  description:
    "Learn how Logic Freight collects, uses, and protects your information. We value your privacy and comply with UK GDPR regulations.",
  openGraph: {
    title: "Privacy Policy | Logic Freight",
    description:
      "Learn how Logic Freight collects, uses, and protects your information. We value your privacy and comply with UK GDPR regulations.",
    images: ["/assets/images/logo.png"],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-zinc-950 py-24 text-zinc-50">
      <MaxWidthWrapper className="max-w-4xl px-6">
        <h1 className="mb-6 text-4xl font-extrabold text-amber-400">
          Privacy Policy
        </h1>
        <p className="mb-10 text-zinc-400">
          <strong>Last updated:</strong>{" "}
          {new Date().toLocaleDateString("en-GB")}
        </p>

        <section className="mb-12 space-y-6">
          <p className="leading-relaxed text-zinc-300">
            Logic Freight (“we”, “us”, or “our”) respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect and use your information when you use our
            website or contact us.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            Information We Collect
          </h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-300">
            <li>
              Information you provide through our online forms, such as your
              name, email address, phone number, and company details.
            </li>
            <li>
              Basic website usage data (such as page visits) collected through
              standard analytics tools.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            How We Use Your Information
          </h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-300">
            <li>
              To respond to your enquiries and process your haulage requests.
            </li>
            <li>To manage and improve our services and website performance.</li>
            <li>
              To contact you with relevant updates or marketing (if you have
              opted in).
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            Mailing Lists & Marketing
          </h2>
          <p className="leading-relaxed text-zinc-300">
            If you sign up to receive updates, your details may be stored
            securely with an email marketing service such as Mailchimp. You can
            unsubscribe from these communications at any time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            Data Storage & Protection
          </h2>
          <p className="leading-relaxed text-zinc-300">
            We store personal information securely and only retain it for as
            long as necessary for legitimate business purposes. We do not sell,
            rent, or share your data with third parties for their own marketing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            Your Rights
          </h2>
          <p className="leading-relaxed text-zinc-300">
            Under UK GDPR, you have the right to access, correct, or delete your
            personal information. To make a request, please contact us at{" "}
            <a
              href="mailto:traffic@logicfreight.co.uk"
              className="text-amber-400 underline transition hover:text-amber-300"
            >
              traffic@logicfreight.co.uk
            </a>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            Contact Us
          </h2>
          <p className="leading-relaxed text-zinc-300">
            For any questions about this Privacy Policy, contact:
            <br />
            <strong className="text-zinc-200">Logic Freight</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:traffic@logicfreight.co.uk"
              className="text-amber-400 underline transition hover:text-amber-300"
            >
              traffic@logicfreight.co.uk
            </a>
          </p>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
