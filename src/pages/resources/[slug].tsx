import { FreightContentPage } from "@/components/content/FreightContentPage";
import {
  buildContentPaths,
  buildContentProps,
  type FreightPageProps,
} from "@/lib/content-routing";

export const getStaticPaths = buildContentPaths("resources");
export const getStaticProps = buildContentProps("resources");

export default function ResourcePage({ page }: FreightPageProps) {
  return <FreightContentPage page={page} />;
}
