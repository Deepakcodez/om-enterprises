
import React from "react";
import ServiceTitle from "./ServiceTitle";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Client from "@/app/(user)/home/_components/clientSection/Client";
import WebDesignfeatures from "../../components/WebDesignfeatures";
import WideScreenHandler from "@/components/WideScreenHandler";



const WebDesigning: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl mt-28">
        <ServiceTitle
          title="WEB DESIGNING"
          uoperTitle="Our Web Designing Service"
        />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12 text-center">
              A website today powers your business and serves as the common
              platform for interaction between staff, customers, vendors and
              members of the general public. Underlying a visually stimulating
              interface is the programming aspect responsible for a variety of
              features and functions. Get Web Development Services From Us
              Today.
            </h1>
          </div>
          <WebDesignfeatures />
        </XpaddingWrapper>
      </div>
      <Client />
    </WideScreenHandler>
  );
};

export default WebDesigning;
