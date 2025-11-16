import { Beams } from "../utils/Beams";
import Content from "./Content";
import GradientGrid from "./GradientGrid";

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen flex-col text-zinc-50">
      <section
        className="relative flex h-screen items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/assets/images/truck_bg.webp')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-900/80 to-zinc-950/80" />

        {/* Content above overlay */}
        <div className="relative z-10">
          <Content />
        </div>

        {/* Optional animated elements */}
        {/* <Beams /> */}
        {/* <GradientGrid /> */}
      </section>
    </div>
  );
};
