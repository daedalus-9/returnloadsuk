"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface PlaceTruckFormProps {
  region?: string;
  className?: string;
}

export function PlaceTruckForm({
  region = "the UK",
  className,
}: PlaceTruckFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const data = {
      fullname: (form.fullname as HTMLInputElement).value,
      companyname: (form.companyname as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      phone: (form.phoneNumber as HTMLInputElement).value,
      location: (form.location as HTMLInputElement).value,
      availableFrom: (form.availableFrom as HTMLInputElement).value,
      availableUntil: (form.availableUntil as HTMLInputElement).value,
      message: (form.message as HTMLInputElement).value,
      optOutEmails: (form.optOut as HTMLInputElement).checked, // true if they tick to NOT receive updates
      region,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/place-load`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmittedName(data.fullname);
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="form"
      className={cn(
        "shadow-input m-auto mx-auto w-full max-w-lg rounded-none bg-white p-6 sm:max-w-xl md:max-w-2xl md:rounded-2xl md:p-10 lg:max-w-3xl lg:p-12 dark:bg-black",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-neutral-800 sm:text-3xl md:text-4xl dark:text-neutral-200">
        Place a Truck in {region}
      </h2>

      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <a
          href="tel:01633441457"
          className="mt-3 text-base text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-800 hover:underline sm:text-lg md:text-xl dark:text-neutral-300 dark:hover:text-white"
        >
          01633 441457
        </a>
        <a
          href="mailto:traffic@logic-freight.co.uk"
          className="mt-3 text-base text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-800 hover:underline sm:text-lg md:text-xl dark:text-neutral-300 dark:hover:text-white"
        >
          traffic@logic-freight.co.uk
        </a>
      </div>

      <form className="my-10 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="region" value={region} />

        {/* Name & Company */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <LabelInputContainer>
            <Label htmlFor="fullname" className="text-base md:text-lg">
              Full name
            </Label>
            <Input id="fullname" placeholder="John Smith" required />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="companyname" className="text-base md:text-lg">
              Company name
            </Label>
            <Input id="companyname" placeholder="John's Logistics" />
          </LabelInputContainer>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <LabelInputContainer>
            <Label htmlFor="email" className="text-base md:text-lg">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="johnsmith@gmail.com"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="phoneNumber" className="text-base md:text-lg">
              Phone Number
            </Label>
            <Input id="phoneNumber" placeholder="+44 7123 456 789" required />
          </LabelInputContainer>
        </div>

        {/* Truck Placement Details */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <LabelInputContainer>
            <Label htmlFor="location" className="text-base md:text-lg">
              Truck location
            </Label>
            <Input
              id="location"
              placeholder={`Location in ${region}`}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="availableFrom" className="text-base md:text-lg">
              Available from
            </Label>
            <Input id="availableFrom" type="date" required />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="availableUntil" className="text-base md:text-lg">
              Available until
            </Label>
            <Input id="availableUntil" type="date" />
          </LabelInputContainer>
        </div>

        {/* Notes */}
        <LabelInputContainer>
          <Label htmlFor="message" className="text-base md:text-lg">
            Additional info
          </Label>
          <Input
            id="message"
            placeholder={`Any extra details about your truck placement in ${region}...`}
          />
        </LabelInputContainer>

        {/* ✅ Opt-out Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <Input
            id="optOut"
            name="optOut"
            type="checkbox"
            defaultChecked={false}
            className="mt-1 h-5 w-5 rounded border-neutral-300 text-black focus:ring-2 focus:ring-black dark:border-neutral-600 dark:text-white"
          />
          <Label
            htmlFor="optOut"
            className="text-sm leading-snug text-neutral-700 dark:text-neutral-300"
          >
            You may receive occasional updates and partner information from
            Logic Freight. Tick this box if you <strong>do not</strong> wish to
            receive these communications.
          </Label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg font-medium text-white transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 md:h-14 md:text-xl"
        >
          {loading ? "Submitting..." : "Submit"}
          <BottomGradient />
        </button>

        {/* ✅ Feedback Messages */}
        {success && (
          <p className="text-center font-medium text-green-600">
            Thank you {submittedName}, your form has been submitted
            successfully.
          </p>
        )}
        {error && (
          <p className="text-center font-medium text-red-600">{error}</p>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
