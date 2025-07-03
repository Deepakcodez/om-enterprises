import  WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import virtualnumber from "@/assets/images/services/virtualnumber.png";
import {
  ecommerce,
  entertainment,
  manufacturing,
  telecome,
  tourism,
} from "./logos";
import WhoNeed from "./WhoNeed";
import Client from "@/app/(user)/home/_components/clientSection/Client";
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
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "Telecom & IT",
    icon: telecome,
  },
  {
    title: "Manufacturing",
    icon: manufacturing,
  },
  {
    title: "Entertainment",
    icon: entertainment,
  },
];

const VirtualNumber: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle
          title="Virtual Number"
          uoperTitle="Our Instant Virtual Number Service"
        />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              virtual number which is configured virtually on the top of your
              existing primary mobile number. It not only certifies safety but
              at the same time lets the consumer control its privacy.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <Image src={virtualnumber} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default VirtualNumber;
