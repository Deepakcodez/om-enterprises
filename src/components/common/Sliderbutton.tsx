import React from "react";
import { motion } from "motion/react";


interface SliderbuttonProps {
    isSectionA  : boolean;
    setSectionA :React.Dispatch<React.SetStateAction<boolean>>;
}
const SlidingButton: React.FC<SliderbuttonProps> = ({isSectionA, setSectionA}) => {

  const handleToggle = () => {
    setSectionA(!isSectionA);
  };

  return (
    
      <div className="relative w-[16.5rem] h-12 bg-gray-200 rounded-full p-1">
        {/* Slider */}
        <motion.div
          className="absolute w-32 h-10 bg-OMblue shadow-lg shadow-OMblue/80 rounded-full "
          animate={{
            x: isSectionA ? 0 : "100%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />

        {/* Buttons */}
        <div className="relative flex justify-between items-center h-full">
          <button
            onClick={handleToggle}
            className={`flex-1 text-center z-10 ${
              isSectionA ? "text-white" : "text-gray-700"
            }`}
          >
            Add Job
          </button>
          <button
            onClick={handleToggle}
            className={`flex-1 text-center z-10 ${
              !isSectionA ? "text-white" : "text-gray-700"
            }`}
          >
            Job Queries
          </button>
        </div>
      </div>
  );
};

export default SlidingButton;