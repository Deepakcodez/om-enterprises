
import React from "react";
import ServiceTitle from "./ServiceTitle";
import cpass from "@/assets/images/services/cpass.png";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import {
  ecommerce,
  entertainment,
  manufacturing,
  telecome,
  tourism,
} from "./logos";
import WhoNeed from "./WhoNeed";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import WideScreenHandler from "@/components/WideScreenHandler";
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
    title: "E-commerce",
    icon: ecommerce,
  },
  {
    title: "Telecome & IT",
    icon: telecome,
  },

  {
    title: "Manufaturing",
    icon: manufacturing,
  },
  {
    title: "Entertainment",
    icon: entertainment,
  },
];

const Cpaas: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle title="CPAAS" uoperTitle="Our Mail 2 SMS Service" />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              It provides input interfaces to customers to send messages,
              collects those messages, and sends them to operators for delivery.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center py-12 xl:w-9/12">
            <Image src={cpass} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Cpaas;
