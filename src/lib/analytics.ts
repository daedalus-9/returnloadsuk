export type AnalyticsProperties = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: string,
  properties: AnalyticsProperties = {}
) {
  if (typeof window === "undefined") return;

  try {
    if (
      window.localStorage.getItem("logic-freight-cookie-consent") !==
      "analytics"
    ) {
      return;
    }
  } catch {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });
}
