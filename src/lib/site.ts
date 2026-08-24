export const SITE = {
  name: "Return Loads UK",
  brandName: "Logic Freight",
  legalName: "Logic Freight Limited",
  url: "https://www.returnloadsuk.co.uk",
  email: "traffic@logic-freight.co.uk",
  phoneDisplay: "01633 441457",
  phoneHref: "+441633441457",
  logoPath: "/assets/images/logo.png",
  ogImagePath: "/assets/images/truck_bg.webp",
  address: [
    "Rising Sun House",
    "Rising Sun Lane",
    "Off Newport Road",
    "Machen",
    "Caerphilly",
    "CF83 8RJ",
  ],
} as const;

export const CORE_ROUTES = [
  "/",
  "/find-return-loads/",
  "/place-an-available-truck/",
  "/submit-a-load/",
  "/haulage-subcontractor-work/",
  "/european-hauliers/",
  "/how-it-works/",
  "/about/",
  "/contact/",
  "/return-loads-england/",
  "/return-loads-scotland/",
  "/return-loads-wales/",
  "/return-loads-northern-ireland/",
  "/services/",
  "/vehicles/",
  "/industries/",
  "/locations/",
  "/routes/",
  "/seasonal-transport/",
  "/resources/",
  "/privacy-policy/",
] as const;

export function normalisePath(path = "/") {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  if (pathname === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(pathname)) {
    return `/${pathname.replace(/^\/+/, "")}`;
  }
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function absoluteUrl(path = "/") {
  return `${SITE.url}${normalisePath(path)}`;
}

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: [SITE.brandName, SITE.name],
  url: SITE.url,
  logo: absoluteUrl(SITE.logoPath),
  email: SITE.email,
  telephone: SITE.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Rising Sun House, Rising Sun Lane, Off Newport Road, Machen",
    addressLocality: "Caerphilly",
    postalCode: "CF83 8RJ",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "freight enquiries",
    telephone: SITE.phoneHref,
    email: SITE.email,
    areaServed: "GB",
    availableLanguage: "en-GB",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  alternateName: SITE.brandName,
  url: SITE.url,
  publisher: {
    "@type": "Organization",
    name: SITE.legalName,
  },
};
