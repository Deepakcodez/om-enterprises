import React from "react";

import MessageAnimation from "@/components/animation/Message";

import ProviderContent from "./component/ProviderContent";
import Glow from "@/components/ui/Glow";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import WideScreenHandler from "@/components/WideScreenHandler";
import RippleAnimation from "@/components/animation/RippleAnimation";

const Provider: React.FC = () => {
  return (
    <WideScreenHandler className="relative overflow-hidden">
            <Glow
            height={10}
            width={15}
            z={-10}
            blur={50}
            left={12}
            top={5}
            opacity={0.35}
            />
      <RippleAnimation className="absolute opacity-20 left-48 -z-40" />

      <XpaddingWrapper>
        <div className="grid grid-cols-12 w-full py-12 pb-24 overflow-hidden ">
          <div className="col-span-12 md:col-span-6  place-items-center relative ">
            <MessageAnimation />
          </div>
          <div className="col-span-12 md:col-span-6 md:mt-0 mt-12">
            <ProviderContent/>
          </div>
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Provider;
