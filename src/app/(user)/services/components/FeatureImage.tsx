import React from "react";
import FeatureAnimation from "@/components/animation/FeatureAnimation";

const FeatureImage: React.FC = () => {
  return (
    <>
      <div className="flex items-start gap-2 md:ps-4 ps-0">
        <div className="md:h-4 h-2 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="md:h-4 h-2 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="md:h-4 h-2 aspect-square bg-amber-500 border border-black/5  rounded-full" />
      </div>
      <div className=" rounded-lg w-full flex items-center justify-center    ">
        <FeatureAnimation/>
      </div>
    </>
  );
};

export default FeatureImage;
