
import React from "react";
import ServiceTitle from "./ServiceTitle";
import WhoNeed from "./WhoNeed";
import Client from "@/app/(user)/home/_components/clientSection/Client";
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
import { StaticImageData } from "next/image";
import Features from "../../components/Features";

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
const EmailMarketing: React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <div className="  w-full text-4xl mt-28">
          <ServiceTitle
            title="EMAIL MARKETING"
            uoperTitle="Our Email Marketing Service"
          />
          <XpaddingWrapper>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
                A bulk email is a marketing message sent by a brand to multiple
                recipients at once. It aims to promote a business, sell goods,
                and develop relationships. Sending thousands or tens of
                thousands of messages to even just a couple of email addresses
                would be draining due to the amount of time and effort required.
                Moreover, the cost of running such a campaign would not be
                sustainable for any business. Using a bulk email service is
                cheaper, faster, and much more convenient.Consult For Best Bulk
                Email Service Provider in india & Leading Bulk Email Service
                Provider in india.
              </h1>
            </div>
          </XpaddingWrapper>
          <Features />
        </div>
        {/* <Benifits/> */}
        <WhoNeed whoNeed={whoNeed} />
        <Client />
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default EmailMarketing;
