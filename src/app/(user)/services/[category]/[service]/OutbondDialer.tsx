import  WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import WhoNeed from "./WhoNeed";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import outbonddialer from "@/assets/images/services/outbonddialer.png";
import { ecommerce, education, media, ngos } from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Media",
    icon: media,
  },
  {
    title: "Education",
    icon: education,
  },
  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "NGOs",
    icon: ngos,
  },
];

const OutbondDialer: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle title="OUTBOND" uoperTitle="Our Outbond Dealer Service" />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              An outbound call is one initiated by a call center agent to a
              customer on behalf of a call center or client. Outbound calls are
              typically made to prospective customers and focus on sales, lead
              generation, telemarketing and fundraising.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <Image src={outbonddialer} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default OutbondDialer;
