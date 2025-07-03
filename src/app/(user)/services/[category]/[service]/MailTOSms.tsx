import React from "react";

import ServiceTitle from "./ServiceTitle";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import mailtosms from "@/assets/images/services/mail2sms.png";
import WhoNeed from "./WhoNeed";
import { ecommerce, event, manufacturing, tourism } from "./logos";
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
    title: "Event Management",
    icon: event,
  },
  {
    title: "Manufacturing",
    icon: manufacturing,
  },

  {
    title: "E-Commerce",
    icon: ecommerce,
  },
];

const MailTOSms: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle title="Mail 2 SMS" uoperTitle="Our Mail 2 SMS Service" />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              Send an email and have it received as an SMS with our Email to SMS
              gateway. Compatible with Outlook, Gmail, Hotmail, Yahoo and many
              more, our email to SMS gateway is designed to make life easier.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center py-12  xl:w-9/12">
            <Image src={mailtosms} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default MailTOSms;
