import  WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import WhoNeed from "./WhoNeed";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import { ecommerce, media, ngos, tourism } from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import verifiedSms from "../../../../../assets/images/verifiedSms.png"
import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "Government & NGOs",
    icon: ngos,
  },
  {
    title: "Retail Seller",
    icon: ecommerce,
  },
  {
    title: "Travel & Tourism",
    icon: tourism,
  },
  {
    title: "Media",
    icon: media,
  },
];

const VerifiedSms: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle
          title="VERIFIED SMS"
          uoperTitle="Our Verified SMS Service"
        />
        <XpaddingWrapper>
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
            <Image src={verifiedSms} alt="how_its_work"  />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default VerifiedSms;
