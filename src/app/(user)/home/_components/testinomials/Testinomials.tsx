"use client";
import React, { useRef, useEffect, useState } from "react";

import TestinomialCard from "./TestinomialCard";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import airtel from "../../../../../assets/images/airtel.png";
import vodafone from "../../../../../assets/images/vodafone.png";
import pgi from "../../../../../assets/images/pimerc.png";
import wwics from "../../../../../assets/images/wwics.png";

import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import { StaticImageData } from "next/image";

export interface TestinomialTypes {
  image: string | StaticImageData;
  rating: number;
  comment: string;
  from: string;
}

const Testinomials: React.FC = () => {
  const [testinomials] = useState<TestinomialTypes[]>([
    {
      image: airtel,
      rating: 5,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "Airtel Broadband"
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      comment:
        "Om Enterprises stands out as one of the best teams I’ve ever worked with.",
      from: "Alpha Academy"
    },
    {
      image: vodafone,
      rating: 5,
      comment:
        "They don’t just do what they’re told to do; they really think about the product, code, and solution",
      from: "Vodafone"
    },
    {
      image: pgi,
      rating: 5,
      comment:
        "Great Job! You exceeded our expectations and delivered more than you promised. Great company to do business.",
      from: "PGI"
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 5,
      comment:
        "A great self-service SMS platform that works. We integrated into our products in less than an hour. Great support too!",
      from: "Akal Hospital"
    },
    {
      image: wwics,
      rating: 5,
      comment:
        "The services and support provided are highly professional. We are very pleased to have Om Enterprises as our SMS partner!",
      from: "WWICS"
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 5,
      comment:
        "Om Enterprises is a good website for bulk SMS service India which sends our SMS in real-time. Response from the support team is very encouraging and prompt all the time.",
      from: "RG Global"
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 5,
      comment:
        "Om Enterprises stands out as one of the best teams I’ve ever worked with.",
      from: "Alpha Academy"
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 5,
      comment:
        "Picking OM ENTERPRISES is one of the best decisions I took ever to speed up our marketing efforts.",
      from: "Bulk SMS Client"
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 5,
      comment:
        "Their experience in the field and the speed at which they work impressed us.",
      from: "Grover Shoes"
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 5,
      comment:
        "Om Enterprises did really excellent work under a time crunch.I really appreciated the extra effort they put in. I highly recommend.",
      from: "Lall's Orthocare"
    }
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const duplicatedTestimonials = [...testinomials, ...testinomials];

  // Scroll to the left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth"
      });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth"
      });
    }
  };

  // Auto-scroll cards in a loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoScroll && containerRef.current) {
      interval = setInterval(() => {
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

          // If the scroll reaches the end of the duplicated cards, reset to the start
          if (scrollLeft + clientWidth >= scrollWidth) {
            containerRef.current.scrollTo({ left: 0, behavior: "instant" });
          } else {
            // Scroll to the right
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 3000); // Adjust interval duration as needed
    }
    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <WideScreenHandler className="h-[45rem]">
      <div className="relative py-12 w-full bg-gray-100  h-[25rem] pt-16">
        <h1 className="absolute left-0 right-0 top-7 sm:text-6xl text-5xl font-bold text-center bg-gradient-to-b from-blue-950/80 via-blue-950/20 to-transparent bg-clip-text text-transparent">
          TESTINOMIALS
        </h1>

        <div className="flex items-center justify-center gap-5 text-OMblue">
          <HiOutlineViewGridAdd size={25} />
          <h1 className="font-semibold md:text-base text-xs">
            Client Feedback
          </h1>
        </div>
        <h1 className="text-center text-4xl font-bold mt-3 text-gray-600">
          What Happy Clients Says
        </h1>

        <FaChevronLeft
          className="mt-12 absolute z-10 lg:bottom-0 -bottom-56 left-12 hidden md:block cursor-pointer  bg-OMblue hover:bg-OMblue/90 hover:scale-110 duration-300 rounded-full p-2"
          onClick={scrollLeft}
          size={25}
          color="white"
        />
        <FaChevronRight
          className="mt-12 absolute z-10 lg:bottom-0 -bottom-56 right-12 cursor-pointer  hidden md:block bg-OMblue  hover:bg-OMblue/90 hover:scale-110 duration-300  rounded-full p-2"
          size={25}
          color="white"
          onClick={scrollRight}
        />
        <XpaddingWrapper>
          <div
            ref={containerRef}
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
            className="absolute z-10 pb-12 h-[28rem] -bottom-64 lg:left-24 lg:right-24 left-4 right-4 flex justify-start gap-5 overflow-x-scroll scrollbar-hide pt-14 px-4"
          >
            {duplicatedTestimonials?.map(
              (testinomial: TestinomialTypes, index: number) => (
                <TestinomialCard
                  key={`TESTINOMIAL_${index}`}
                  {...testinomial}
                />
              )
            )}
          </div>
        </XpaddingWrapper>
      </div>
    </WideScreenHandler>
  );
};

export default Testinomials;
