
"use client"
import React from "react";
import buisnessImage from "@/assets/images/buisnessMan.png";
import resellerImage from "@/assets/images/reseller.png";
import userImage from "@/assets/images/users.webp";
import RippleAnimation from "@/components/animation/RippleAnimation";
import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import useMousePosition from "@/hooks/useMousePosition";
import SpotlightCard from "@/components/SpotlightCard";
import { StaticImageData } from "next/image";

export interface TargetCLientDataType {
  title: string;
  description: string;
  image: string | StaticImageData;
} 

const TargetCLientData: TargetCLientDataType[] = [
  {
    title: "BUSINESS",
    description:
      "You can announce a sale, give a temporary discount, reward loyal customers, promote a new product, share news, and more, all from SMS.",
    image: buisnessImage,
  },
  {
    title: "RESELLER",
    description:
      "Become a Reseller and earn large chunk of money with no setup cost.",
    image: resellerImage,
  },
  {
    title: "USER",
    description:
      "Get our premium interface and free REST API with our all features for your software or website.",
    image: userImage,
  },
];

const TargetClient: React.FC = () => {
  const position = useMousePosition();

  return (
    <WideScreenHandler className="relative overflow-hidden ">
      <XpaddingWrapper className="w-full pb-24">
        <div className="py-12 relative">
          <h1 className=" absolute top-2 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center ">
            SOLUTION
          </h1>

          <h1 className="text-4xl font-bold text-center text-blue-950">
            We Provide World Class Solutions For
          </h1>
        </div>
        <div className="w-full grid grid-cols-12 gap-2">
          {TargetCLientData.map((item, index) => (
            <div key={index} className="lg:col-span-4 col-span-12  lg:mx-auto">
              <SpotlightCard mousePosition={position} data={item} />
            </div>
          ))}
        </div>
      </XpaddingWrapper>
      <RippleAnimation className=" absolute top-0 -z-50 opacity-50" />
    </WideScreenHandler>
  );
};

export default TargetClient;
