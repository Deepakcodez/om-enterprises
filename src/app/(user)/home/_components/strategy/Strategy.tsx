import React from "react";

import StrategyCard from "./StrategyCard";
import { PiGlobeHemisphereWestLight } from "react-icons/pi";
import { IoBuildOutline, IoTrophyOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { LuScanSearch } from "react-icons/lu";
import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";


const Strategy: React.FC = () => {
  return (
    <WideScreenHandler className="h-auto pt-12 pb-[5rem] w-full overflow-hidden bg-gray-100 ">
      <XpaddingWrapper>
        <div className="py-12 relative">
          <h1 className=" absolute top-2 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center ">
            STRATEGY
          </h1>

          <h1 className="text-4xl font-bold text-center text-blue-950">
            Effective Digital Marketing Strategy
          </h1>
        </div>
        {/* </XpaddingWrapper>
        <img src={pipe} alt="pipe" className="hidden md:block " />
        <XpaddingWrapper> */}
        <div className=" flex md:flex-row flex-col justify-center items-center xl:gap-12 gap-7 h-full">
          <StrategyCard
            title="Researching"
            index={1}
            icon={<LuScanSearch size={50} color="gray" />}
          />
          <StrategyCard
            title="Internet Business Analysis"
            index={2}
            icon={<PiGlobeHemisphereWestLight size={50} color="gray" />}
          />
          <StrategyCard
            title="Build"
            index={3}
            icon={<IoBuildOutline size={50} color="gray" />}
          />
          <StrategyCard
            title="Implement"
            index={4}
            icon={<BsCardChecklist size={50} color="gray" />}
          />
          <StrategyCard
            title="Manage Result"
            index={5}
            icon={<IoTrophyOutline size={50} color="gray" />}
          />
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Strategy;
