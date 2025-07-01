import React from "react";
import logo from "@/assets/logo.png";
import ring from "@/assets/images/ring.jpg";


import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Image from "next/image";
import RippleAnimation from "@/components/animation/RippleAnimation";

const Features: React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <div className="py-12 relative">
          <h1 className=" absolute top-2 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center ">
            FEATURES
          </h1>

          <h1 className="text-4xl font-bold text-center text-blue-950">
            Our Awesome Features
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 lg:mx-24 mx-4 h-auto md:h-[50rem]">
          {/* Top Row */}
          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                SMS Scheduling
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                No Matter what you doing right now, just schedule your sms
                according to your preferable time, SMS auto blast according to
                schedule time. Consult Best Bulk sms Service Provider in india,
                Bulk email service provider in india
              </p>
            </div>
          </div>

          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                API Support
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                We Provide Standard HTTP-API, who best for any ERP, Software and
                online application, for using it you can sent sms from your own
                apps.For More Detail Consult Best Bulk sms Service Provider in
                india, Bulk email service provider in india
              </p>
            </div>
          </div>

          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                Customized Sender ID’s
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                it provides you with Own Sender ID. It comprises of 6 alpha
                character for Transactional Message & 6 Numeric Character for
                Promotional Message. For More Information Visit Best Bulk sms
                Service Provider in india
              </p>
            </div>
          </div>

          {/* Middle Row with Side Items and Center Logo */}
          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                Language Application
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                You can send SMS in more than 15 languages by using our
                transliteration application. In a single SMS you can use 70
                unicode characters and style them in best possible way. So Why
                Are You Waiting Contact Best Bulk sms Service Provider in india
              </p>
            </div>
          </div>

          {/* Center Logo */}
          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full ">
            <div className="w-full h-full md:absolute">
              <Image
                src={ring}
                alt="background"
                className="w-full h-full scale-110 hover:scale-125 duration-500 object-cover blur-sm group-hover:scale-125 group-hover:blur-lg saturate-[0] group-hover:saturate-[0.8]"
              />
              <div className="absolute inset-0 flex items-center justify-center ">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-24  aspect-square object-cover z-10 "
                />
                <RippleAnimation className="absolute z-0 group-hover:scale-150 duration-700" />
              </div>
            </div>
          </div>

          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                Tracking and Reporting
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                You can pull timely reports from the server by using your
                Account. Tracking of SMS is enabled for live reports and
                Scheduled Reports.Best Bulk sms Service Provider in india, Bulk
                email service provider in india
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                Load Balance SMPP
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                The auto shwicher functions manage SMPP from backend, when any
                SMPP have heavy load/Down then its auto switch to another one.
                Consult Best Bulk sms Service Provider in india
              </p>
            </div>
          </div>

          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                Crystal Clear Delivery Report
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                You can check individual sms report with live status, DLR give
                you assurity that your sms delivered according to TRAI
                Guidelines.Consult Best Bulk sms Service Provider in india
              </p>
            </div>
          </div>

          <div className="group rounded-xl bg-gray-100 overflow-hidden motion-preset-expand relative h-full w-full pb-6 md:pb-0">
            <div className="flex flex-col items-center justify-start gap-4 p-4 lg:px-12">
              <h1 className="2xl:text-3xl text-xl font-bold text-blue-950">
                10 Services in One Panel
              </h1>
              <p className="text-black/80 text-center 2xl:text-sm text-xs">
                You can manage 10 services from one web panel likes: Promo sms,
                Trans. SMS, Voice Call, MissCall, IVR and more.. Consult Best
                Bulk sms Service Provider in india, Bulk email service provider
                in india
              </p>
            </div>
          </div>
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Features;
