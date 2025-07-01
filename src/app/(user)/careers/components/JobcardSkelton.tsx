import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

const JobCardSkeleton: React.FC = () => {
  const jobcardarr = [1, 1, 1, 1]; // Array to create multiple skeleton loaders

  return (
    <>
      {jobcardarr.map((_, indx) => (
        <div key={indx} className="w-full flex flex-col border border-gray-200 px-4 py-8 rounded-md shadow-md animate-pulse">
          <div className="flex gap-2 items-start">
            <div className="bg-gray-300 shadow-lg p-4 rounded-lg">
              <MdOutlineWorkOutline size={20} className="text-gray-400" />
            </div>
            <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="w-full flex flex-col cursor-pointer mt-4 space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex justify-between gap-4 text-gray-500">
                <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
          <div className="w-full h-10 bg-gray-300 rounded-lg mt-7"></div>
        </div>
      ))}
    </>
  );
};

export default JobCardSkeleton;
