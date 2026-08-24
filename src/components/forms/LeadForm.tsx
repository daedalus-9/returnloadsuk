"use client";

import { trackEvent } from "@/lib/analytics";
import Link from "next/link";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

export type LeadJourney = "load" | "truck" | "subcontractor";

type LeadFormProps = {
  journey: LeadJourney;
  context?: string;
};

type SubmissionStatus =
  | { kind: "idle"; message: "" }
  | { kind: "submitting"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error" | "unavailable"; message: string; mailto: string };

const LOGIC_FREIGHT_EMAIL = "traffic@logic-freight.co.uk";
const LOGIC_FREIGHT_PHONE_DISPLAY = "01633 441457";
const LOGIC_FREIGHT_PHONE_HREF = "tel:01633441457";
const REQUEST_TIMEOUT_MS = 12_000;

const journeyContent: Record<
  LeadJourney,
  {
    audience: string;
    title: string;
    description: string;
    submitLabel: string;
    endpoint: string;
    emailSubject: string;
  }
> = {
  load: {
    audience: "For shippers and businesses",
    title: "Tell us about your load",
    description:
      "Share the collection, delivery and freight details Logic Freight needs to review your transport enquiry.",
    submitLabel: "Send load details",
    endpoint: "submit-load",
    emailSubject: "Transport enquiry",
  },
  truck: {
    audience: "For hauliers with available capacity",
    title: "Place an available truck",
    description:
      "Tell us where and when your vehicle is available so the Logic Freight team can review suitable work.",
    submitLabel: "Share truck availability",
    endpoint: "place-truck",
    emailSubject: "Available truck",
  },
  subcontractor: {
    audience: "For owner-drivers and haulage companies",
    title: "Apply for subcontract haulage work",
    description:
      "Introduce your business and operating preferences. If the application progresses, Logic Freight will agree how supporting documents should be provided.",
    submitLabel: "Send subcontractor application",
    endpoint: "partner-join",
    emailSubject: "Subcontractor application",
  },
};

const fieldLabels: Record<string, string> = {
  contactName: "Contact name",
  companyName: "Company or trading name",
  phone: "Telephone",
  email: "Email",
  collectionPostcode: "Collection postcode",
  deliveryPostcode: "Delivery postcode",
  collectionDate: "Collection date",
  goodsDescription: "Goods",
  weightOrPallets: "Weight or pallet quantity",
  vehicleRequirement: "Vehicle requirement",
  handlingRequirements: "Handling requirements",
  currentLocation: "Current vehicle location",
  availableFrom: "Available from",
  availableUntil: "Available until",
  vehicleType: "Vehicle type",
  bodyType: "Body or trailer type",
  availableCapacity: "Available capacity",
  preferredDirectionRadius: "Preferred direction or operating radius",
  operatorType: "Business type",
  operatingBase: "Operating base",
  operatingAreas: "Operating areas",
  vehicleTypes: "Vehicle types",
  workPreferences: "Work preferences",
  documentsConfirmation: "Operator licence and insurance confirmation",
  notes: "Additional notes",
  marketingConsent: "Optional marketing consent",
};

const inputClassName =
  "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-base text-slate-50 shadow-sm outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 disabled:cursor-not-allowed disabled:opacity-60";
const labelClassName = "block text-sm font-semibold text-slate-100";
const fieldsetClassName =
  "rounded-2xl border border-slate-800 bg-slate-950/30 p-5 sm:p-6";

export function LeadForm({ journey, context }: LeadFormProps) {
  const content = journeyContent[journey];
  const formStarted = useRef(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<SubmissionStatus>({
    kind: "idle",
    message: "",
  });

  const analyticsProperties = context ? { journey, context } : { journey };

  useEffect(() => {
    if (
      status.kind === "success" ||
      status.kind === "error" ||
      status.kind === "unavailable"
    ) {
      statusRef.current?.focus();
    }
  }, [status.kind]);

  const recordFormStart = () => {
    if (formStarted.current) return;

    formStarted.current = true;
    trackEvent("lead_form_start", analyticsProperties);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    recordFormStart();

    const form = event.currentTarget;
    if (journey === "truck" && !validateTruckDateRange(form, true)) return;

    const formData = new FormData(form);
    const mailto = buildMailto(journey, context, formData);
    const apiBase = process.env.NEXT_PUBLIC_API_URL?.trim();

    if (!apiBase) {
      setStatus({
        kind: "unavailable",
        message:
          "Online submission is not configured on this site yet. Nothing has been submitted, but you can email the completed details or contact Logic Freight directly.",
        mailto,
      });
      trackEvent("lead_submit_unavailable", analyticsProperties);
      return;
    }

    setStatus({ kind: "submitting", message: "Sending your details…" });

    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS
    );

    try {
      const response = await fetch(
        `${apiBase.replace(/\/$/, "")}/${content.endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formDataToPayload(formData),
            journey,
            ...(context ? { context } : {}),
            marketingConsent: formData.get("marketingConsent") === "yes",
            ...(journey === "subcontractor"
              ? {
                  documentsConfirmation:
                    formData.get("documentsConfirmation") === "confirmed",
                }
              : {}),
          }),
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Lead endpoint returned ${response.status}`);
      }

      form.reset();
      setStatus({
        kind: "success",
        message:
          "Thank you - your details have been received. A member of the Logic Freight team will review them and contact you using the information provided.",
      });
      trackEvent("lead_submit_success", analyticsProperties);
    } catch (error) {
      const timedOut =
        error instanceof DOMException && error.name === "AbortError";

      setStatus({
        kind: "error",
        message: timedOut
          ? "The online request timed out and has not been confirmed. Please try again, email the completed details or contact Logic Freight directly."
          : "We could not confirm that your details were submitted online. Please try again, email the completed details or contact Logic Freight directly.",
        mailto,
      });
      trackEvent("lead_submit_error", analyticsProperties);
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  const handleTruckDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const form = event.currentTarget.form;
    if (form) validateTruckDateRange(form, false);
  };

  return (
    <section
      aria-labelledby={`${journey}-lead-form-title`}
      className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-slate-950/30 sm:p-8"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
          {content.audience}
        </p>
        <h2
          id={`${journey}-lead-form-title`}
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {content.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          {content.description}
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Fields marked <span aria-hidden="true">*</span> are required.
        </p>
      </div>

      <form
        className="mt-8 space-y-6"
        onFocusCapture={recordFormStart}
        onSubmit={handleSubmit}
        aria-busy={status.kind === "submitting"}
      >
        <ContactFields
          journey={journey}
          disabled={status.kind === "submitting"}
        />

        {journey === "load" && (
          <LoadFields disabled={status.kind === "submitting"} />
        )}
        {journey === "truck" && (
          <TruckFields
            disabled={status.kind === "submitting"}
            onDateChange={handleTruckDateChange}
          />
        )}
        {journey === "subcontractor" && (
          <SubcontractorFields disabled={status.kind === "submitting"} />
        )}

        <fieldset className={fieldsetClassName}>
          <legend className="px-2 text-lg font-bold text-white">
            Keeping in touch
          </legend>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-300">
            <input
              type="checkbox"
              name="marketingConsent"
              value="yes"
              disabled={status.kind === "submitting"}
              className="mt-1 size-5 shrink-0 rounded border-slate-600 bg-slate-950 text-lime-400 accent-lime-400 focus:ring-2 focus:ring-lime-400/30"
            />
            <span>
              I would like to receive occasional relevant updates from Logic
              Freight. This is optional and does not affect this enquiry.
            </span>
          </label>
        </fieldset>

        <p className="text-sm leading-6 text-slate-400">
          Logic Freight will use these details to handle your enquiry. Read the{" "}
          <Link
            href="/privacy-policy/"
            className="font-semibold text-lime-400 underline decoration-lime-400/40 underline-offset-4 hover:text-lime-300"
          >
            privacy policy
          </Link>
          .
        </p>

        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-lime-400 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-wait disabled:bg-slate-600 disabled:text-slate-300 sm:w-auto"
        >
          {status.kind === "submitting" ? "Sending…" : content.submitLabel}
        </button>

        <SubmissionMessage status={status} statusRef={statusRef} />
      </form>
    </section>
  );
}

function ContactFields({
  journey,
  disabled,
}: {
  journey: LeadJourney;
  disabled: boolean;
}) {
  const businessRequired = journey !== "truck";

  return (
    <fieldset className={fieldsetClassName} disabled={disabled}>
      <legend className="px-2 text-lg font-bold text-white">
        Your contact details
      </legend>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClassName} htmlFor={`${journey}-contact-name`}>
          Full name <RequiredMark />
          <input
            id={`${journey}-contact-name`}
            name="contactName"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            className={inputClassName}
          />
        </label>

        <label className={labelClassName} htmlFor={`${journey}-company-name`}>
          {journey === "subcontractor"
            ? "Business or trading name"
            : "Company or trading name"}
          {businessRequired && (
            <>
              {" "}
              <RequiredMark />
            </>
          )}
          <input
            id={`${journey}-company-name`}
            name="companyName"
            type="text"
            autoComplete="organization"
            minLength={2}
            maxLength={120}
            required={businessRequired}
            className={inputClassName}
          />
        </label>

        <label className={labelClassName} htmlFor={`${journey}-phone`}>
          Telephone <RequiredMark />
          <input
            id={`${journey}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+() -]{7,20}"
            title="Enter a telephone number using numbers, spaces, brackets, plus or hyphen."
            maxLength={20}
            required
            className={inputClassName}
          />
        </label>

        <label className={labelClassName} htmlFor={`${journey}-email`}>
          Email address <RequiredMark />
          <input
            id={`${journey}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={160}
            required
            className={inputClassName}
          />
        </label>
      </div>
    </fieldset>
  );
}

function LoadFields({ disabled }: { disabled: boolean }) {
  return (
    <>
      <fieldset className={fieldsetClassName} disabled={disabled}>
        <legend className="px-2 text-lg font-bold text-white">
          Collection and delivery
        </legend>
        <div className="grid gap-5 sm:grid-cols-3">
          <label className={labelClassName} htmlFor="load-collection-postcode">
            Collection postcode <RequiredMark />
            <input
              id="load-collection-postcode"
              name="collectionPostcode"
              type="text"
              autoComplete="section-collection postal-code"
              minLength={3}
              maxLength={12}
              required
              className={`${inputClassName} uppercase`}
            />
          </label>

          <label className={labelClassName} htmlFor="load-delivery-postcode">
            Delivery postcode <RequiredMark />
            <input
              id="load-delivery-postcode"
              name="deliveryPostcode"
              type="text"
              autoComplete="section-delivery postal-code"
              minLength={3}
              maxLength={12}
              required
              className={`${inputClassName} uppercase`}
            />
          </label>

          <label className={labelClassName} htmlFor="load-collection-date">
            Collection date <RequiredMark />
            <input
              id="load-collection-date"
              name="collectionDate"
              type="date"
              required
              className={inputClassName}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className={fieldsetClassName} disabled={disabled}>
        <legend className="px-2 text-lg font-bold text-white">
          Freight details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClassName} htmlFor="load-goods">
            What are the goods? <RequiredMark />
            <input
              id="load-goods"
              name="goodsDescription"
              type="text"
              minLength={3}
              maxLength={160}
              placeholder="For example, palletised packaged goods"
              required
              className={inputClassName}
            />
          </label>

          <label className={labelClassName} htmlFor="load-weight-pallets">
            Weight or pallet quantity <RequiredMark />
            <input
              id="load-weight-pallets"
              name="weightOrPallets"
              type="text"
              minLength={2}
              maxLength={100}
              placeholder="For example, 12 pallets or 8 tonnes"
              required
              className={inputClassName}
            />
          </label>

          <label className={labelClassName} htmlFor="load-vehicle">
            Vehicle requirement <RequiredMark />
            <select
              id="load-vehicle"
              name="vehicleRequirement"
              defaultValue=""
              required
              className={inputClassName}
            >
              <option value="" disabled>
                Select a vehicle requirement
              </option>
              <option value="not-sure">Not sure - please advise</option>
              <option value="articulated-lorry">Articulated lorry</option>
              <option value="rigid-lorry">Rigid lorry</option>
              <option value="curtain-sider">Curtain-sider</option>
              <option value="flatbed">Flatbed</option>
              <option value="box-vehicle">Box vehicle or trailer</option>
              <option value="refrigerated">Refrigerated vehicle</option>
              <option value="low-loader">Low loader</option>
              <option value="van">Van</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className={labelClassName} htmlFor="load-handling">
            Handling requirements
            <input
              id="load-handling"
              name="handlingRequirements"
              type="text"
              maxLength={180}
              placeholder="For example, tail lift or temperature control"
              className={inputClassName}
            />
          </label>
        </div>

        <label className={`${labelClassName} mt-5`} htmlFor="load-notes">
          Additional notes
          <textarea
            id="load-notes"
            name="notes"
            rows={4}
            maxLength={1_000}
            placeholder="Include dimensions, access restrictions or other useful details."
            className={`${inputClassName} resize-y`}
          />
        </label>
      </fieldset>
    </>
  );
}

function TruckFields({
  disabled,
  onDateChange,
}: {
  disabled: boolean;
  onDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <fieldset className={fieldsetClassName} disabled={disabled}>
        <legend className="px-2 text-lg font-bold text-white">
          Availability
        </legend>
        <div className="grid gap-5 sm:grid-cols-3">
          <label className={labelClassName} htmlFor="truck-current-location">
            Current location <RequiredMark />
            <input
              id="truck-current-location"
              name="currentLocation"
              type="text"
              autoComplete="section-vehicle address-level2"
              minLength={2}
              maxLength={120}
              placeholder="Town, postcode or service area"
              required
              className={inputClassName}
            />
          </label>

          <label className={labelClassName} htmlFor="truck-available-from">
            Available from <RequiredMark />
            <input
              id="truck-available-from"
              name="availableFrom"
              type="date"
              required
              onChange={onDateChange}
              className={inputClassName}
            />
          </label>

          <label className={labelClassName} htmlFor="truck-available-until">
            Available until
            <input
              id="truck-available-until"
              name="availableUntil"
              type="date"
              onChange={onDateChange}
              className={inputClassName}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className={fieldsetClassName} disabled={disabled}>
        <legend className="px-2 text-lg font-bold text-white">
          Vehicle and capacity
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClassName} htmlFor="truck-vehicle-type">
            Vehicle type <RequiredMark />
            <select
              id="truck-vehicle-type"
              name="vehicleType"
              defaultValue=""
              required
              className={inputClassName}
            >
              <option value="" disabled>
                Select vehicle type
              </option>
              <option value="articulated-lorry">Articulated lorry</option>
              <option value="rigid-lorry">Rigid lorry</option>
              <option value="van">Van</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className={labelClassName} htmlFor="truck-body-type">
            Body or trailer type <RequiredMark />
            <select
              id="truck-body-type"
              name="bodyType"
              defaultValue=""
              required
              className={inputClassName}
            >
              <option value="" disabled>
                Select body or trailer
              </option>
              <option value="curtain-sider">Curtain-sider</option>
              <option value="flatbed">Flatbed</option>
              <option value="box">Box</option>
              <option value="refrigerated">Refrigerated</option>
              <option value="low-loader">Low loader</option>
              <option value="tipper">Tipper</option>
              <option value="tanker">Tanker</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className={labelClassName} htmlFor="truck-capacity">
            Available capacity <RequiredMark />
            <input
              id="truck-capacity"
              name="availableCapacity"
              type="text"
              minLength={2}
              maxLength={120}
              placeholder="For example, 18 tonnes or 20 pallet spaces"
              required
              className={inputClassName}
            />
          </label>

          <label className={labelClassName} htmlFor="truck-direction-radius">
            Preferred direction or operating radius
            <input
              id="truck-direction-radius"
              name="preferredDirectionRadius"
              type="text"
              maxLength={180}
              placeholder="For example, towards the Midlands or within 100 miles"
              className={inputClassName}
            />
          </label>
        </div>

        <label className={`${labelClassName} mt-5`} htmlFor="truck-notes">
          Additional notes
          <textarea
            id="truck-notes"
            name="notes"
            rows={4}
            maxLength={1_000}
            placeholder="Share any loading restrictions, equipment or other useful details."
            className={`${inputClassName} resize-y`}
          />
        </label>
      </fieldset>
    </>
  );
}

function SubcontractorFields({ disabled }: { disabled: boolean }) {
  return (
    <fieldset className={fieldsetClassName} disabled={disabled}>
      <legend className="px-2 text-lg font-bold text-white">
        Your haulage operation
      </legend>

      <fieldset>
        <legend className={labelClassName}>
          Are you an owner-driver or a haulage company? <RequiredMark />
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <RadioChoice
            id="subcontractor-owner-driver"
            name="operatorType"
            value="owner-driver"
            label="Owner-driver"
            required
          />
          <RadioChoice
            id="subcontractor-haulage-company"
            name="operatorType"
            value="haulage-company"
            label="Haulage company"
            required
          />
        </div>
      </fieldset>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className={labelClassName} htmlFor="subcontractor-base">
          Operating base <RequiredMark />
          <input
            id="subcontractor-base"
            name="operatingBase"
            type="text"
            autoComplete="section-business address-level2"
            minLength={2}
            maxLength={120}
            placeholder="Town, county or postcode"
            required
            className={inputClassName}
          />
        </label>

        <label className={labelClassName} htmlFor="subcontractor-preferences">
          Preferred work <RequiredMark />
          <select
            id="subcontractor-preferences"
            name="workPreferences"
            defaultValue=""
            required
            className={inputClassName}
          >
            <option value="" disabled>
              Select a work preference
            </option>
            <option value="return-loads">Return loads and one-off work</option>
            <option value="regular-subcontracting">
              Regular subcontract work
            </option>
            <option value="traction">Traction work</option>
            <option value="seasonal-overflow">Seasonal or overflow work</option>
            <option value="open">Open to suitable opportunities</option>
          </select>
        </label>

        <label className={labelClassName} htmlFor="subcontractor-areas">
          Operating areas <RequiredMark />
          <textarea
            id="subcontractor-areas"
            name="operatingAreas"
            rows={4}
            minLength={3}
            maxLength={500}
            placeholder="Regions or regular routes you cover"
            required
            className={`${inputClassName} resize-y`}
          />
        </label>

        <label className={labelClassName} htmlFor="subcontractor-vehicles">
          Vehicle types <RequiredMark />
          <textarea
            id="subcontractor-vehicles"
            name="vehicleTypes"
            rows={4}
            minLength={3}
            maxLength={500}
            placeholder="Vehicles, bodies and trailers you operate"
            required
            className={`${inputClassName} resize-y`}
          />
        </label>
      </div>

      <label className={`${labelClassName} mt-5`} htmlFor="subcontractor-notes">
        Additional notes
        <textarea
          id="subcontractor-notes"
          name="notes"
          rows={4}
          maxLength={1_000}
          placeholder="Anything else the Logic Freight team should know"
          className={`${inputClassName} resize-y`}
        />
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-700 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200">
        <input
          type="checkbox"
          name="documentsConfirmation"
          value="confirmed"
          required
          className="mt-1 size-5 shrink-0 rounded border-slate-600 bg-slate-950 text-lime-400 accent-lime-400 focus:ring-2 focus:ring-lime-400/30"
        />
        <span>
          I confirm that a valid operator licence and relevant insurance can be
          provided later if Logic Freight requests them. <RequiredMark />
        </span>
      </label>
    </fieldset>
  );
}

function RadioChoice({
  id,
  name,
  value,
  label,
  required,
}: {
  id: string;
  name: string;
  value: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/60 p-4 text-sm font-semibold text-slate-100 transition hover:border-slate-600 has-[:focus-visible]:border-lime-400 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-lime-400/20"
    >
      <input
        id={id}
        name={name}
        value={value}
        type="radio"
        required={required}
        className="size-5 border-slate-600 bg-slate-950 text-lime-400 accent-lime-400 focus:ring-lime-400/30"
      />
      {label}
    </label>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-lime-400">
      *
    </span>
  );
}

function SubmissionMessage({
  status,
  statusRef,
}: {
  status: SubmissionStatus;
  statusRef: React.RefObject<HTMLDivElement>;
}) {
  if (status.kind === "idle") {
    return <div className="sr-only" aria-live="polite" />;
  }

  const isFailure = status.kind === "error" || status.kind === "unavailable";

  return (
    <div
      ref={statusRef}
      tabIndex={-1}
      role={status.kind === "error" ? "alert" : "status"}
      aria-live={status.kind === "error" ? "assertive" : "polite"}
      className={`rounded-2xl border p-5 text-sm leading-6 outline-none focus:ring-2 focus:ring-lime-400/40 ${
        status.kind === "success"
          ? "border-lime-400/30 bg-lime-400/10 text-lime-100"
          : status.kind === "submitting"
            ? "border-slate-700 bg-slate-950/60 text-slate-300"
            : "border-amber-400/30 bg-amber-400/10 text-amber-100"
      }`}
    >
      <p>{status.message}</p>
      {isFailure && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={status.mailto}
            className="font-bold text-lime-300 underline decoration-lime-300/40 underline-offset-4 hover:text-lime-200"
          >
            Email these completed details
          </a>
          <a
            href={LOGIC_FREIGHT_PHONE_HREF}
            className="font-bold text-lime-300 underline decoration-lime-300/40 underline-offset-4 hover:text-lime-200"
          >
            Call {LOGIC_FREIGHT_PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${LOGIC_FREIGHT_EMAIL}`}
            className="font-bold text-lime-300 underline decoration-lime-300/40 underline-offset-4 hover:text-lime-200"
          >
            Email Logic Freight
          </a>
        </div>
      )}
    </div>
  );
}

function validateTruckDateRange(
  form: HTMLFormElement,
  reportValidity: boolean
) {
  const availableFrom = form.elements.namedItem(
    "availableFrom"
  ) as HTMLInputElement | null;
  const availableUntil = form.elements.namedItem(
    "availableUntil"
  ) as HTMLInputElement | null;

  if (!availableFrom || !availableUntil) return true;

  const hasInvalidRange = Boolean(
    availableFrom.value &&
      availableUntil.value &&
      availableUntil.value < availableFrom.value
  );

  availableUntil.setCustomValidity(
    hasInvalidRange
      ? "Available until must be the same as or later than available from."
      : ""
  );

  if (hasInvalidRange && reportValidity) availableUntil.reportValidity();
  return !hasInvalidRange;
}

function formDataToPayload(formData: FormData) {
  const payload: Record<string, string | string[]> = {};

  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string") continue;

    const existingValue = payload[key];
    if (existingValue === undefined) {
      payload[key] = value;
    } else if (Array.isArray(existingValue)) {
      existingValue.push(value);
    } else {
      payload[key] = [existingValue, value];
    }
  }

  return payload;
}

function buildMailto(
  journey: LeadJourney,
  context: string | undefined,
  formData: FormData
) {
  const content = journeyContent[journey];
  const lines = [
    `${content.title}`,
    ...(context ? [`Page context: ${context}`] : []),
    "",
  ];

  for (const [key, rawValue] of formData.entries()) {
    if (typeof rawValue !== "string" || !rawValue.trim()) continue;

    const label = fieldLabels[key] ?? humaniseFieldName(key);
    const value =
      rawValue === "yes" || rawValue === "confirmed" ? "Yes" : rawValue;
    lines.push(`${label}: ${value}`);
  }

  lines.push(
    "",
    "This email was prepared from the Return Loads UK enquiry form because online submission was unavailable or could not be confirmed."
  );

  const subject = context
    ? `${content.emailSubject} - ${context}`
    : content.emailSubject;

  return `mailto:${LOGIC_FREIGHT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function humaniseFieldName(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (character) => character.toUpperCase());
}
