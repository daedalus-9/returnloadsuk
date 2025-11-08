import { Beams } from "../utils/Beams";
import Content from "./Content";
import GradientGrid from "./GradientGrid";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};
