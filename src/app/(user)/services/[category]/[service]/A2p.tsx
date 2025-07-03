import React from "react";
import ServiceTitle from "./ServiceTitle";
import a2p from "@/assets/images/services/a2p.png";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import WhoNeed from "./WhoNeed";
import {
  banking,
  ecommerce,
  goverment,
  marketing,
  media,
  payment,
} from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import WideScreenHandler from "@/components/WideScreenHandler";
import Image, { StaticImageData } from "next/image";


interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Marketing Agencies",
    icon: marketing,
  },
  {
    title: "Banking",
    icon: banking,
  },
  {
    title: "Paymemt Gateway",
    icon: payment,
  },
  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "Government & NGOs",
    icon: goverment,
  },
  {
    title: "Media",
    icon: media,
  },
];
const A2p: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-24">
        <ServiceTitle title="A2P" uoperTitle="Our A2P Service" />
          <XpaddingWrapper >
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              A2P sms services A2P, or application-to-person messaging,a2p sms
              Services is any kind of traffic in which a person is receiving
              messages from an application. A2P messaging includes (but is not
              limited to) marketing messages, appointment reminders, chat bots
              or virtual assistants, notifications, and one-time passwords
              (OTPs) or PIN codes.Consult Now For a2p sms Services. Call Us :-
              9815300730
            </h1>
        </div>
          </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <Image src={a2p} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default A2p;
