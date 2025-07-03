import WideScreenHandler  from "@/components/WideScreenHandler";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import WhoNeed from "./WhoNeed";  
import Client from "@/app/(user)/home/_components/clientSection/Client";
import { ecommerce, manufacturing, marketing, media, tourism } from "./logos";
import WebDevelopmentFeatures from "./WebDevelopmentFeatures";
import { StaticImageData } from "next/image";


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
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "Manufacturing",
    icon: manufacturing,
  },

  {
    title: "Media Agency",
    icon: media,
  },
  {
    title: "Immigration Agencies",
    icon: tourism,
  },
];

const WebDevelopment: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="w-full text-4xl mt-28">
        <ServiceTitle
          title="WEB DEVELOPMENT"
          uoperTitle="Our Web Development Service"
        />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              Your website is a reflection of your company’s brand. It’s
              therefore important to invest proper effort into portraying a
              positive image online. Our web design company stands ready to help
              you accomplish this goal. As one of the most widely respected web
              design firms, our design expertise spans a wide spectrum ranging
              from on-page layout to custom logo creation. The quality and
              presentation of our designs will emphasize your brand and also
              increase engagement to drive more leads and deliver a greater
              return on investment.Consult To Website Designing Company in india
              & Best Web Design Services in india
            </h1>
          </div>
          <WebDevelopmentFeatures />
        </XpaddingWrapper>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} who="Website Development" />
      <Client />
    </WideScreenHandler>
  );
};

export default WebDevelopment;      
