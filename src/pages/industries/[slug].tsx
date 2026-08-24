import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("industries");
export const getStaticProps = buildContentProps("industries");

export default function IndustryPage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
