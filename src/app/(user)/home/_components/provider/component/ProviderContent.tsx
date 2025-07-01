import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { LuMessageCircle } from "react-icons/lu";
import { PiHandTapLight } from "react-icons/pi";
import { RiCustomSize } from "react-icons/ri";
import { RxSpeakerLoud } from "react-icons/rx";

const ProviderContent: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start ">
      <h1 className=" 2xl:text-6xl md:text-4xl sm:text-5xl text-3xl font-bold text-center text-blue-950">
        Bulk SMS Service
        <br />
        Provider in {" "}
        <span className="text-OMblue relative inline-block">
          <span className="absolute inset-0 blur-2xl bg-OMblue opacity-30 rounded-full"></span>
          <span className="relative z-10">INDIA</span>
        </span>{" "}
      </h1>
      <div className="flex flex-col gap-4 items-start justify-start py-6">
        <div className="flex gap-4 items-center">
          <div className="bg-OMblue p-2 aspect-square rounded-full">
            <LuMessageCircle size={20} color="white" />
          </div>
          <p className="text-lg  text-blue-950">
            Send message with your own Brand Id
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-OMblue p-2 aspect-square rounded-full">
            <RxSpeakerLoud size={20} color="white" />
          </div>
          <p className="text-lg  text-blue-950">
            Instant Delivery System with Delivery reports
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-OMblue p-2 aspect-square rounded-full">
            <AiOutlineControl size={20} color="white" />
          </div>
          <p className="text-lg  text-blue-950">Easy to use Control panel</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-OMblue p-2 aspect-square rounded-full">
            <PiHandTapLight size={20} color="white" />
          </div>
          <p className="text-lg  text-blue-950">
            Send thousands SMS with one click
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-OMblue p-2 aspect-square rounded-full">
            <RiCustomSize size={20} color="white" />
          </div>
          <p className="text-lg text-blue-950">Create your own custom API</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderContent;
