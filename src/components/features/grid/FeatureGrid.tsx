import React from "react";
import { Content } from "./Content";
import { CornerBlur } from "@/components/utils/CornerBlur";
import { CornerGrid } from "@/components/utils/CornerGrid";
import { SplashButton } from "@/components/buttons/SplashButton";
import { scrollToForm } from "@/components/utils/scrollToForm";
import { FiArrowRight } from "react-icons/fi";

export const FeatureGrid = () => {
  return (
    <div id="features" className="relative overflow-hidden">
      <Content />
      <CornerBlur />
      <CornerGrid />
      <SplashButton
        onClick={() => scrollToForm()}
        className="mx-auto my-10 flex items-center gap-2"
      >
        Get started
        <FiArrowRight />
      </SplashButton>
    </div>
  );
};
