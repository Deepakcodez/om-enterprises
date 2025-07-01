import React from "react";

interface StrategyCardProps {
  title: string;
  index: number;
  icon?: React.ReactNode;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ title, icon, index }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div
        className="relative lg:w-[12rem] w-[9rem] aspect-square rounded-full py-12 flex items-center justify-center glassmorphic-box hover:scale-110 duration-700
        "
        data-index={index} // Pass the index as a data attribute
      >
        {icon}
      </div>
      <h1 className="text-xl font-semibold text-blue-950/50">{title}</h1>
    </div>
  );
};

export default StrategyCard;