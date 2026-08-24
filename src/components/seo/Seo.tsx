import { absoluteUrl, SITE } from "@/lib/site";
import Head from "next/head";

type JsonLd = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  schemas?: JsonLd[];
}

function safeJson(value: JsonLd) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function Seo({
  title,
  description,
  path,
  image = SITE.ogImagePath,
  noindex = false,
  schemas = [],
}: SeoProps) {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content={socialImage} />
      <meta
        property="og:image:alt"
        content="A road freight vehicle in transit"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />

      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(schema) }}
        />
      ))}
    </Head>
  );
}
