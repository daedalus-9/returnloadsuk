import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("services");
export const getStaticProps = buildContentProps("services");

export default function ServicePage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
