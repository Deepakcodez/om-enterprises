import React from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoMdCheckbox } from "react-icons/io";

import AboutButton from "./AboutButton";

const AboutContentSection: React.FC = () => {
  return (
    <div className="relative w-full flex  flex-col  gap-4">
      <h1 className=" absolute -top-10 -left-2 text-6xl font-bold text-Omblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent -z-30">
        ABOUT US
      </h1>
      <div>
        <div className="flex  items-center justify-start gap-5 text-primary">
          <HiOutlineViewGridAdd size={25} />
          <h1 className="font-semibold md:text-base text-xs">
            ABOUT OM ENTERPRISES GROUP
          </h1>
        </div>
        <h1 className="text-blue-950 md:text-[3vw] sm:text-[6vw] 3xl:text-5xl text-[6.5vw] leading-[1.1] 3xl:leading-[1.3] font-bold ">
          Preparing For Your Business <br /> Provide Best{" "}
          <span className="text-primary font-normal">SMS Services</span>
        </h1>
      </div>

      <p className="text-violet-950/50 md:text-base text-sm">
        Om Enterprises Group is a leading company in A2P and P2P bulk SMS and
        digital marketing. We provide bulk SMS service in all over India.We
        provide highly reliable and innovative APIs to send various bulk email,
        bulk voice SMS and internet marketing for promotion.
      </p>

      <div className="flex flex-col justify- gap-4">
        <h1 className="flex items-center justify-start gap-2">
          <IoMdCheckbox size={22} className="text-OMblue" />
          <span className="text-blue-950/50 text-base font-semibold">
            We are ISO 9001:2015 certified
          </span>
        </h1>
        <h1 className="flex items-center gap-2 justify-start text-wrap">
          <IoMdCheckbox size={22} className="text-OMblue" />
          <span className="text-blue-950/50 text-base font-semibold">
            Website & Mobile application design & Development
          </span>
        </h1>
        <h1 className="flex items-center gap-2 justify-start">
          <IoMdCheckbox size={22} className="text-OMblue" />
          <span className="text-blue-950/50 text-base font-semibold">
            Professional User Experince & Interface researching
          </span>
        </h1>
      </div>
         <AboutButton />
    </div>
  );
};

export default AboutContentSection;
