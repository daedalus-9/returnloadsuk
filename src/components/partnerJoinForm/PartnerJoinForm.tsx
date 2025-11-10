"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface PartnerJoinFormProps {
  region?: string;
  className?: string;
}

export function PartnerJoinForm({
  region = "UK",
  className,
}: PartnerJoinFormProps) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    optOut: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/partner-join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            region,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      setSubmittedName(formData.fullname);
      setStatus("success");
      setFormData({
        fullname: "",
        email: "",
        phoneNumber: "",
        optOut: false,
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="form"
      className={cn(
        "shadow-input m-auto w-full max-w-lg rounded-none bg-white p-6 md:rounded-2xl md:p-10 dark:bg-black",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-neutral-800 sm:text-3xl md:text-4xl dark:text-neutral-200">
        Join the Logic Freight Partner Network
      </h2>

      <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
        Join Logic Freight’s trusted UK haulage network. Match and get matched with{" "}
        <strong>return loads</strong> and transport opportunities across
        England, Scotland, and Wales.
      </p>

      <form className="my-10 space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Label htmlFor="fullname" className="text-base md:text-lg">
            Full Name
          </Label>
          <Input
            id="fullname"
            placeholder="John Smith"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            className="h-12 text-base md:h-14 md:text-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="email" className="text-base md:text-lg">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="john@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 text-base md:h-14 md:text-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="phoneNumber" className="text-base md:text-lg">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            placeholder="+44 7123 456 789"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="h-12 text-base md:h-14 md:text-lg"
            required
          />
        </div>

        {/* ✅ Opt-out Checkbox */}
        <div className="flex items-start gap-3">
          <Input
            id="optOut"
            type="checkbox"
            checked={formData.optOut}
            onChange={handleChange}
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

        <button
          type="submit"
          disabled={loading}
          className={cn(
            "group relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg font-medium text-white transition-transform duration-200 hover:scale-[1.02] md:h-14 md:text-xl",
            loading && "cursor-not-allowed opacity-70"
          )}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-center font-medium text-green-600">
            ✅ Thank you {submittedName || "for your enquiry"}. We’ll be in
            touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center font-medium text-red-600">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
