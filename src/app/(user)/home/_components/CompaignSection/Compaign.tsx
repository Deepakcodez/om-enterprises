import React from "react";
import StrategyCard from "./CompaignCard";

import { CiLink, } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { VscRobot } from "react-icons/vsc";
import { MdOutlineLeaderboard } from "react-icons/md";
import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";

const CompaignSection: React.FC = () => {
  // const strategyData = [
  //   {
  //     title: "Researching",
  //     description:
  //       "Conducting in-depth market research to identify trends and opportunities.",
  //     icon: <LuScanSearch />,
  //   },
  //   {
  //     title: "Internet Business Analysis",
  //     description:
  //       "Evaluating online business performance through key metrics and analytics.",
  //     icon: <HiOutlineComputerDesktop />,
  //   },
  //   {
  //     title: "Build",
  //     description:
  //       "Developing robust digital platforms and campaigns for seamless user experiences.",
  //     icon: <IoBuildOutline />,
  //   },
  //   {
  //     title: "Implement",
  //     description:
  //       "Executing marketing strategies across multiple channels for maximum reach.",
  //     icon: <PiArrowsInCardinalDuotone />,
  //   },
  //   {
  //     title: "Manage Result",
  //     description:
  //       "Monitoring campaign performance and analyzing ROI for continuous improvement.",
  //     icon: <CiTrophy />,
  //   },
  // ];
  const compaignData = [
    {
      title: "Short URL",
      description:
        " We provide Unique and tiny URL for your every recipient. You can also track your audience with our easy tracking solutions.",
      icon:<CiLink />,
    },
    {
      title: "Drip SMS Marketing",
      description:
        "Set up a series of messages in advance and send them to your prospects or customers according to any schedule you prefer.Consult Best Bulk sms Service Provider in india, Bulk email service provider in india",
      icon: <TiMessages />,
    },
    {
      title: "Auto Reply",
      description:
        "Stay connected to your target audience to determine their requirements and  decide your marketing strategy for success.Best Bulk sms Service Provider in india, Bulk email service provider in india",
      icon:<VscRobot />,
    },
    {
      title: "Lead Generation",
      description:
        "We provide solutions to track your tiny URL and convert prospect into clients,know who are interested.",
      icon: <MdOutlineLeaderboard />,
    },
  ];
  return (
    <WideScreenHandler className="py-24">
      <XpaddingWrapper className="relative ">
        <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
          COMPAIGN
        </h1>
        <h1 className=" text-4xl font-bold text-center text-blue-950">
          Our Compaign Management{" "}
        </h1>

        <div className="grid grid-cols-12 ld:gap-12 gap-4 h-full my-12">
          {compaignData.map((item, index) => (
            <div key={`COMPAIGN_DATA_${index}`} className="lg:col-span-3 sm:col-span-6 col-span-12 h-full">
              <StrategyCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default CompaignSection;
