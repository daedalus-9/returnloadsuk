import {
  type ContentGroup,
  type FreightPage,
  getPage,
  getPagesByGroup,
  passesPublicationGate,
} from "@/content/freight-pages";
import type { GetStaticPaths, GetStaticProps } from "next";

export interface FreightPageProps {
  page: FreightPage;
}

export function buildContentPaths(group: ContentGroup): GetStaticPaths {
  return async () => ({
    paths: getPagesByGroup(group)
      .filter(passesPublicationGate)
      .map((page) => ({ params: { slug: page.slug } })),
    fallback: false,
  });
}

export function buildContentProps(
  group: ContentGroup
): GetStaticProps<FreightPageProps> {
  return async ({ params }) => {
    const slug = typeof params?.slug === "string" ? params.slug : "";
    const page = getPage(group, slug);

    if (!page || !passesPublicationGate(page)) {
      return { notFound: true };
    }

    return { props: { page } };
  };
}
