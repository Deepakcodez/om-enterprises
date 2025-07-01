
import React from "react";
import career from "@/assets/svg/interview.svg";
import Companies from "../../contact/components/Companies";
import Image from "next/image";
import Navigator from "@/utills/Navigator";


const CareerHero: React.FC = async() => {
   
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 py-12">
      <div className="flex flex-col justify-center gap-5">
        <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold text-black">
          Your Career Begins <span className="text-OMblue">Here!</span>
        </h1>
        <p className="text-black/60  xl:w-8/12 lg:w-9/12 md:w-10/12 w-11/12 text-base font-semibold">
          Om Enterprises Group values connectivity, innovation, and growth,
          empowering passionate teams through training, freedom, and engagement
          to deliver exceptional results.
        </p>
        <p className="sm:text-lg sm:font-semibold text-black/40">
          Get Your Dream Job Now!{" "}
          <Navigator to={"/#"} className="text-OMblue cursor-pointer">
            Sign Up For Free
          </Navigator>
        </p>
        <Companies />
      </div>

      <div className="w-full h-full p-12">
        <Image src={career} alt="interview" width={800} height={800} />
      </div>
    </div>
  );
};

export default CareerHero;
