import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("vehicles");
export const getStaticProps = buildContentProps("vehicles");

export default function VehiclePage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
