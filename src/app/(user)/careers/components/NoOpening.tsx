import React from "react";
import jobIcon from "@/assets/icons/job.png";
import Image from "next/image";

const NoOpeningsCard:React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 py-12 rounded-2xl shadow-md bg-white flex flex-col items-center text-center space-y-4 border border-gray-200">
      <Image
        src={jobIcon}
        alt="No Jobs"
        className="w-20 h-20"
      />
      <h2 className="text-xl font-semibold text-gray-800">No Job Openings</h2>
      <p className="text-gray-600/50">
        Currently, there are no job openings available. Please check back later!
      </p>
    </div>
  );
};

export default NoOpeningsCard;
