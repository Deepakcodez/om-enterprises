import React from "react";
import ServiceTitle from "./ServiceTitle";
import acculync from "@/assets/images/services/acculync.png";
import { banking, entertainment, fmcg, media } from "./logos";
import WhoNeed from "./WhoNeed";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import Image, { StaticImageData } from "next/image";
import WideScreenHandler from "@/components/WideScreenHandler";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}

const whoNeed: whoNeedTypes[] = [
  {
    title: "FMCG",
    icon: fmcg,
  },
  {
    title: "Social Media",
    icon: media,
  },
  {
    title: "BFSI",
    icon: banking,
  },

  {
    title: "Entertainment",
    icon: entertainment,
  },
];

const Acculync: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle
          title="ACCULYNC"
          uoperTitle="Our Whatsapp Buisiness Service"
        />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              Acculync is a service that lets you trim your URL and provides you
              with analytics within Om Enterprises’s messaging platform.
              Additionally, it allows you to send unique hyperlinks embedded
              within messages to your customers. Truncate your lengthy and wordy
              links with our URL shortening service.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center py-12 xl:w-9/12">
            <Image src={acculync} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Acculync;
