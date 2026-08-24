import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("routes");
export const getStaticProps = buildContentProps("routes");

export default function RoutePage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
