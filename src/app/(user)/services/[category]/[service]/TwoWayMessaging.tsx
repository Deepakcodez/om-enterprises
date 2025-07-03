import  WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import twoway from "@/assets/images/services/twoway.png";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import WhoNeed from "./WhoNeed";
import { airlines, ecommerce, entertainment, media, telecome } from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Airline",
    icon: airlines,
  },
  {
    title: "Media",
    icon: media,
  },
  {
    title: "Telecome & IT",
    icon: telecome,
  },
  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "entertainment",
    icon: entertainment,
  },
];

const TwoWayMessaging: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle
          title="TWO WAY "
          uoperTitle="Our Whatsapp Buisiness Service"
        />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              Our 2-way text messaging service makes it easy to strike up a
              conversation. Every plan comes with unlimited contacts, and all
              incoming SMS messages are free!
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center py-12 justify-center  xl:w-9/12">
            <Image src={twoway} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default TwoWayMessaging;
