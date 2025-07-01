
import { TargetCLientDataType } from "@/app/(user)/home/_components/targetCustomer/TargetClient";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface SpotlightCardProps {
  mousePosition: { x: number | null; y: number | null };
  data : TargetCLientDataType
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ mousePosition, data }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const updateSpotlightPosition = () => {
    if (!cardRef.current || !mousePosition.x || !mousePosition.y) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = mousePosition.x - rect.left;
    const y = mousePosition.y - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    updateSpotlightPosition();
  });

  return (
    <div
      ref={cardRef}
      className='relative overflow-hidden bg-gray-100 h-full w-full  rounded-md shadow-sm p-4  pb-12
        before:content-[""] before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(0,128,255,0.15),transparent_70%)]
        after:content-[""] after:absolute after:inset-0 after:bg-[radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.4),transparent_60%)]
        group transition-all duration-300'
    >
      <div className="flex flex-col gap-2 ">
        <div className="h-[20rem] w-full overflow-hidden rounded-lg">
          <Image
            src={data.image}
            alt="image"
            className="w-full h-full object-cover rounded-lg transition-all 
              saturate-[0.2] group-hover:saturate-[1.2] duration-500"
          />
        </div>
        <h1 className="text-2xl text-blue-950 font-semibold">{data.title}</h1>
        <p className="text-gray-600">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default SpotlightCard;
