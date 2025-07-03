import { IoCheckmarkDone } from "react-icons/io5";

const FeatureContent = ({ emailFeatures }: { emailFeatures: string[] }) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-start text-blue-950">Features</h1>
      <div className="mt-12 space-y-3">
        {emailFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <IoCheckmarkDone className="w-6 h-6 text-OMblue" />
            </div>
            <p className="font-semibold text-base text-black/60">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent;