"use client";
import React from "react";
import airtel from "../../../../../assets/images/airtel.png";
import vodafone from "../../../../../assets/images/vodafone.png";
import pimer from "../../../../../assets/images/pimerc.png";
import bmw from "../../../../../assets/images/bmw.png";
import benz from "../../../../../assets/images/benz.png";
import audi from "../../../../../assets/images/audi.png";
import wwics from "../../../../../assets/images/wwics.png";
import ess from "../../../../../assets/images/ess.png";
import usha from "../../../../../assets/images/usha.png";
import acc from "../../../../../assets/images/acc.png";
import daviet from "../../../../../assets/images/daviet.png";
import meg from "../../../../../assets/images/meg.png";
import gadps from "../../../../../assets/images/gadps.png";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import { motion } from "motion/react";
import { getClientsQuery } from "@/services/services";
import { useQuery } from "@tanstack/react-query";
import WideScreenHandler from "@/components/WideScreenHandler";
import Image, { StaticImageData } from "next/image";

interface Client {
  id: string;
  img: string | StaticImageData;
  // Add other client properties if needed
}

type LogoType = string | StaticImageData[];

const Client: React.FC = () => {
  const [clientLogos, setClientLogos] = React.useState<LogoType>([
    airtel,
    vodafone,
    pimer,
    bmw,
    benz,
    audi,
    wwics,
    ess,
    usha,
    acc,
    daviet,
    meg,
    gadps
  ]);
  const { data } = useQuery(getClientsQuery());

   React.useEffect(() => {
    if (data) {
      // Extract all logos at once to prevent multiple state updates
      const apiLogos = data.map((client: Client) => client.img);
      setClientLogos(prev => [...prev, ...apiLogos]);
    }
  }, [data]);

  return (
    <WideScreenHandler>
      <XpaddingWrapper className="py-32">
        <div className=" relative">
          <h1 className="absolute -top-10 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center">
            CLIENTS
          </h1>
          <h1 className="text-4xl font-bold text-center text-blue-950">
            Happy Clients We Serve
          </h1>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex  items-center   md:mx-24 mx-4 overflow-x-hidden mt-12 ">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0  md:gap-24 gap-5"
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <Image
                  width={100}
                  height={100}
                  key={index}
                  src={logo}
                  alt={`Partner logo ${index}`}
                  className="h-24 "
                />
              )
            )}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="flex  flex-shrink-0   md:gap-24 gap-5"
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <Image
                  width={100}
                  height={100}
                  key={index}
                  src={logo}
                  alt={`Partner logo ${index}`}
                  className="h-24  flex flex-shrink-0"
                />
              )
            )}
          </motion.div>
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Client;
