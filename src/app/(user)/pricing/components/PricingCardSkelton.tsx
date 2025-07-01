import React from "react";

const PricingCardSkeleton: React.FC = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      {data?.map((_, index: number) => (
        <div
          key={index}
          className="flex flex-col justify-between w-full sm:w-[19rem] h-full border rounded-md border-black/10 bg-OMblue/5 hover:bg-OMblue/10 duration-700 md:hover:scale-105 hover:shadow-2xl hover:shadow-OMblue/10 p-8 animate-pulse"
        >
          <div className="flex flex-col gap-2 cursor-pointer">
            {/* Skeleton for the title */}
            <div className="bg-gray-300 h-6 w-3/4 rounded-md mb-4"></div>

            {/* Skeleton for the price */}
            <div className="bg-gray-300 h-8 w-1/2 rounded-md mb-4"></div>

            {/* Skeleton for features */}
            <div className="flex gap-4 items-start mb-2">
              <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
            </div>
            <div className="flex gap-4 items-start mb-2">
              <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
            </div>
            <div className="flex gap-4 items-start mb-2">
              <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
            </div>
          </div>

          {/* Skeleton for button */}
          <div className="bg-gray-300 h-10 w-full rounded-md mt-12"></div>
        </div>
      ))}
    </>
  );
};

export default PricingCardSkeleton;
