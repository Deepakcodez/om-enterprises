import Image, { StaticImageData } from "next/image";

interface whoNeedTypes {
  title: string;
  icon: string | StaticImageData;
}

interface WhoNeedProps {
  whoNeed: whoNeedTypes[];
  who?: string;
}

const WhoNeed: React.FC<WhoNeedProps> = ({ whoNeed, who = "Messaging" }) => {
  return (
    <div>
      <h1 className="text-center w-full text-blue-950 text-4xl">
        {` Industry that need ${who}`}
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-12">
        {whoNeed.map((data, i) => (
          <div
            key={i}
            className="bg-red-0 text-xl font-semibold text-center rounded-lg flex justify-center items-center flex-col  md:py-12"
          >
            <Image
              src={data.icon}
              alt="whoneed"
              className="h-28 opacity-70"
              width={100}
              height={10}
            />
            <h1 className="text-black">{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoNeed;
