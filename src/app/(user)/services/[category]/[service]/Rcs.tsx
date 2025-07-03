import React from "react";
import ServiceTitle from "./ServiceTitle";
import  WideScreenHandler  from "@/components/WideScreenHandler";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import rcs from "@/assets/images/services/rcs.png";
import WhoNeed from "./WhoNeed";
import {
  airlines,
  banking,
  ecommerce,
  insurance,
  tourism,
  transportaion,
} from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Airlines",
    icon: airlines,
  },
  {
    title: "E-commerce Portals",
    icon: ecommerce,
  },
  {
    title: "Tourism & Travel",
    icon: tourism,
  },
  {
    title: "Transportion",
    icon: transportaion,
  },
  {
    title: "Banks",
    icon: banking,
  },
  {
    title: "Insurance",
    icon: insurance,
  },
];

const Rcs: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle title="RCS" uoperTitle="Our RCS Service" />
        <XpaddingWrapper>
          <div className="flex flex-col  items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              Everything from transactional messages and fraud alerts to
              appointment scheduling and promotional messages – all sent daily
              via SMS. With the same ubiquitous reach as SMS, Google RCS (Rich
              Communications Services) now enables businesses to engage their
              mobile customers with branded, interactive rich media messages.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center py-12 justify-center  xl:w-9/12">
            <Image src={rcs} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Rcs;
