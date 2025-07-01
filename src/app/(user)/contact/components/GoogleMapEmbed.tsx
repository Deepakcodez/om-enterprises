import React from "react";

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full  flex flex-col gap-12 mt-12">
      <div className="relative ">
        <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
          BRANCHES
        </h1>
        <h1 className=" text-4xl font-bold text-center text-blue-950">
          Meet us at our Branches{" "}
        </h1>
      </div>

      <div className="w-full  overflow-hidden flex md:flex-row flex-col justify-between gap-[0.5px] bg-OMblue ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.06394706706465!2d75.5830288802579!3d31.30310519117594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b3b79997171%3A0x2a17d9f210b903a!2sOm%20Enterprises%20Group!5e0!3m2!1sen!2sin!4v1737978149270!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Leo Vinyls Location"
        />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.728443137695!2d75.58767747626854!3d31.311249857442995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a4cc0ad9285%3A0x17f4ce0cd780878a!2sAirtel-%20Om%20Enterprises(Bulk%20SMS%20Group)%20(Best%20Bulk%20SMS%20Provider%20)!5e0!3m2!1sen!2sin!4v1737979041002!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Leo Vinyls Location"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
