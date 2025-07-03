import  WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import whatsapp from "@/assets/images/services/whatsapp.png";
import WhoNeed from "./WhoNeed";
import {
  ecommerce,
  entertainment,
  manufacturing,
  telecome,
  tourism,
} from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Travel & Hospitality",
    icon: tourism,
  },
  {
    title: "E-commerce ",
    icon: ecommerce,
  },
  {
    title: "Telecome & IT",
    icon: telecome,
  },
  {
    title: "Manufacturing",
    icon: manufacturing,
  },
  {
    title: "entertainment",
    icon: entertainment,
  },
];

const WhatsappBuisiness: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle
          title="Whatsapp "
          uoperTitle="Our Whatsapp Buisiness Service"
        />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              The WhatsApp Business Solution(WBS) empowers a way to connect your
              customers across the globe on WhatsApp platform in a simple,
              secure and reliable manner.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center py-12 justify-center  xl:w-9/12">
            <Image src={whatsapp} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default WhatsappBuisiness;
