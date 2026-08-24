import { getIndexablePages } from "@/content/freight-pages";
import { absoluteUrl, CORE_ROUTES } from "@/lib/site";
import type { GetServerSideProps } from "next";

const CORE_LAST_MODIFIED = "2026-08-24";

type SitemapEntry = {
  url: string;
  lastModified: string;
};

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };

    return entities[character];
  });
}

function getSitemapEntries(): SitemapEntry[] {
  const entries = new Map<string, SitemapEntry>();

  for (const route of CORE_ROUTES) {
    const url = absoluteUrl(route);
    entries.set(url, { url, lastModified: CORE_LAST_MODIFIED });
  }

  for (const page of getIndexablePages()) {
    const url = absoluteUrl(`/${page.group}/${page.slug}/`);
    const existing = entries.get(url);

    if (!existing || page.reviewedOn > existing.lastModified) {
      entries.set(url, { url, lastModified: page.reviewedOn });
    }
  }

  return Array.from(entries.values());
}

function buildSitemap(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      ({ url, lastModified }) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${escapeXml(lastModified)}</lastmod>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = buildSitemap(getSitemapEntries());

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
