
import { scrollToTop } from "@/components/functionality/ScrollToTop";
import Button from "@/components/ui/Button";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
}) => {
  return (
    <div 
    className=" bg-gradient-to-br from-OMblue2/5 to-OMblue/20 flex flex-col justify-between w-full sm:w-[19rem] h-full border rounded-md border-black/10  duration-700  hover:shadow-2xl hover:shadow-OMblue/10 p-8 Perspective-child relative overflow-hidden  group">
      {/* shimmer */}
      <div className=" h-[42rem] w-[12rem]  absolute -left-32 group-hover:left-[34rem] group-hover:-top-[12rem] duration-500 -rotate-45 bg-gradient-to-r from-transparent via-white/50 to-transparent "/>
      {/* shimmer */}
      <div className="  flex flex-col gap-2  cursor-pointer ">
        <h1 className="text-2xl font-normal text-black">{title}</h1>
        <h1 className="text-3xl text-black/70 font-serif">{price.toLocaleString("en-IN", {  maximumFractionDigits: 2, style:"currency" , currency:"INR"})} /-</h1>

        {
         features?.map((feature, index) =>{ 
          return(
            // <p className="text-black">khfdkjfhk</p>
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-shrink-0 min-w-[20px] min-h-[20px]">
              <MdCheckCircle color="#9b59b6" size={20} className="w-5 h-5" />
            </div>
            <p className="text-black/60">{feature} </p>
          </div>
        )})}
      </div>
      <div onClick={scrollToTop}>
        <Button
          title="ENQUIRY NOW"
          shimmer={false}
          className="w-full rounded-md hover:shadow-lg hover:shadow-OMblue/50 duration-300 cursor-pointer px-4 mt-12 "
        />
      </div>
    </div>
  );
};

export default PricingCard;
