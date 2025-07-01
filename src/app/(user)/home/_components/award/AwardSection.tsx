"use client"
import React from "react";

import awardIMage from "../../../../../assets/images/awardImage.jpg"
import bgimage from "../../../../../assets/images/world.png";
import  awardImage2 from "../../../../../assets/images/awardimage2.png"
import  awardImage3 from "../../../../../assets/images/awardimage3.png"

// Import Swiper styles and components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,  } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import Image from "next/image";
import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";



const AwardSection: React.FC = () => {
  // Array of images for the slider
  const sliderImages = [
    awardIMage,
    awardImage2,
    awardImage3,
  ];

  return (
    <WideScreenHandler className="relative pb-12 ">
      <XpaddingWrapper>
        <div className="relative w-full">
          <h1 className="sm:text-5xl text-2xl font-bold absolute sm:-top-7 -top-5 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
            ACHIEVEMENTS
          </h1>
          <h1 className="md:text-4xl text-[5vw] font-bold text-center text-blue-950">
            Marketing Conference Dubai UAE <br /> Best Leadership Award 2022
          </h1>

          {/* Swiper Slider */}
          <div className="lg:w-9/12 w-full aspect-video mx-auto mt-10 rounded-xl overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination,]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </XpaddingWrapper>
      
      <div className="absolute md:w-[22rem] w-[12rem] aspect-square md:bg-OMblue/30 bg-OMblue/20 rounded-full blur-3xl -z-20 md:right-[15rem] md:top-12 top-0"/> 


      {/* Background Image */}
      <Image
        src={bgimage}
        alt="background"
        className="absolute w-full top-0 left-0 -z-10 right-0"
      />
    </WideScreenHandler>
  );
};

export default AwardSection;