import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("seasonal-transport");
export const getStaticProps = buildContentProps("seasonal-transport");

export default function SeasonalTransportPage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
