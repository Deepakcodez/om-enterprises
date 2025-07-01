"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

interface PageHeroSectionProps {
  title: string;
}

const UpSideSlider: React.FC<PageHeroSectionProps> = ({ title }) => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      className=" h-[12rem] md:h-[32rem] relative overflow-hidden"
    >
      <h1 className="text-white md:text-[3vw] text-2xl z-10 font-bold motion-preset-focus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-jakarta">
        {title}
      </h1>

      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <Image
          src="https://static.vecteezy.com/system/resources/previews/003/482/595/non_2x/abstract-digital-technology-background-purple-circuit-board-pattern-microchip-power-line-vector.jpg"
          alt="image"
          className="h-full w-full object-cover"
          width={800} height={800} 
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <Image
          src="https://static.vecteezy.com/system/resources/previews/006/970/888/non_2x/digital-cyberspace-futuristic-purple-color-particles-wave-flowing-with-lines-and-dots-connection-technology-network-abstract-background-3d-rendering-free-photo.jpg"
          alt="image"
          className="h-full w-full object-cover"
          width={800} height={800} 
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <Image
          src="https://cdn.vectorstock.com/i/500p/68/78/purple-tech-city-background-abstract-building-bg-vector-53936878.jpg"
          alt="image"
          className="h-full w-full object-cover"
          width={800} height={800} 
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <Image
          src="https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150521668.jpg"
          alt="image"
          className="h-full w-full object-cover"
          width={800} height={800} 
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default UpSideSlider;