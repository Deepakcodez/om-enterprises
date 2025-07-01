import React from "react";

interface StrategyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const StrategyCard: React.FC<StrategyCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="relative z-10 group bg-white rounded-lg shadow-lg p-4 py-12 h-full overflow-hidden hover:text-white ">
      <div className="flex items-center justify-center text-5xl group-hover:text-white text-black">{icon}</div>
      <h3 className="text-xl font-bold text-center mt-4 group-hover:text-white text-black">{title}</h3>
      <p className="text-gray-500 text-center mt-2 group-hover:text-white">{description}</p>
      <div
        className={`bg-OMblue h-[10rem] aspect-square rounded-full absolute -bottom-24 -right-24 group-hover:h-[35rem]  duration-700 ease-in-out transition-all -z-10`}
      />
    </div>
  );
};

export default StrategyCard;
