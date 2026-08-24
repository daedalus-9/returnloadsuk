import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("locations");
export const getStaticProps = buildContentProps("locations");

export default function LocationPage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
