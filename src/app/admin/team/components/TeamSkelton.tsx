import React from "react";

const TeamSkeleton: React.FC = () => {
  return (
    <>

      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center rounded-xl m-2 p-2 animate-pulse">
            {/* Image Skeleton */}
            <div className="w-[14rem] aspect-square rounded-full bg-gray-300/50"></div>

            
              <div className="w-full h-2 bg-gray-400/50 rounded-full mb-3"></div>
              <div className="w-7/12 h-2 bg-gray-400/50 rounded-full mb-3"></div>
          </div>
        ))}
    </>
  );
};

export default TeamSkeleton;