import React from "react";
import XpaddingWrapper from "../../../../../components/XpaddingWrapper";
// import ThreeD from "./ThreeD";
// import FloatingBalls from "../../../../../components/animation/FloatingBalls";
import HoverGlowingButton from "@/components/ui/hoverGLowingBtn/HoverGlowingButton";

import WorldAnimation from "@/components/animation/World";
import HeroContent from "./HeroContent";
import WideScreenHandler from "@/components/WideScreenHandler";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    // <WideScreenHandler>
      <div className="grid grid-cols-12 lg:h-[48rem] h-auto w-full relative overflow-hidden bg-OMlightBlu ">
        {/* <div className="absolute w-full  md:h-[48rem] z-10 ">
        <FloatingBalls/>
      </div> */}
        <div className="absolute w-full  lg:h-[48rem] -z-10 blur-">
          {/* <FloatingBalls /> */}
        </div>

        {/* Hero Content */}
        <div className="col-span-12 h-full lg:col-span-6  py-12 md:py-0">
          <XpaddingWrapper className="lg:pe-0 h-full">
            <HeroContent />
          </XpaddingWrapper>
        </div>

        {/* Hero Image */}
        {/* <div className="col-span-12 md:col-span-6 xl:h-[50rem] flex items-center justify-center order-1 md:order-2 pt-12 md:pt-0"> */}
        <div className="col-span-12 lg:col-span-6  h-[40rem] lg:h-full pb-12   flex  flex-1 relative  justify-center">
          <div className="absolute  bottom-16 right-0 left-0 mx-auto lg:right-4 z-50 flex justify-center rounded-md lg:hidden ">
            <Link href={"/services"}>
              <HoverGlowingButton title={"Explore"} />
            </Link>
          </div>
          {/* <HeroImage />  */}
          {/* <ThreeD /> */}
          {/* <GlobeDemo/> */}
          <WorldAnimation />
        </div>

        {/* Background Overlay */}
        <div className="bg-primary/10 h-[40rem] w-[150%] absolute -bottom-[35rem]  translate-x-[12rem] -rotate-[25deg] -z-10 overflow-hidden" />
        <div className="bg-primary/10 h-[40rem] w-[250%] absolute -bottom-[85rem] -right-[70rem] translate-x-[12rem] -rotate-[25deg] -z-10 overflow-hidden" />
      </div>
    // </WideScreenHandler>
  );
};

export default Hero;
