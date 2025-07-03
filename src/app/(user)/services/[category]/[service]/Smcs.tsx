import  WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import WhoNeed from "./WhoNeed";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import smcs from "@/assets/images/services/smcs.png";
import { globe, network, sms, telecome } from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Telecome Service Provider",
    icon: telecome,
  },
  {
    title: "VAS Provider",
    icon: globe,
  },
  {
    title: "Captive Network Providers",
    icon: network,
  },
  {
    title: "Bulk SMS aggregators",
    icon: sms,
  },
];

const Smcs: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle title="SMCS" uoperTitle="Our SMCS Service" />
          <XpaddingWrapper>
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              A short message service center (SMSC) is the portion of a wireless
              network that handles SMS operations, such as routing, forwarding
              and storing incoming text messages on their way to desired
              endpoints.
            </h1>
        </div>
          </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <Image src={smcs} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Smcs;
