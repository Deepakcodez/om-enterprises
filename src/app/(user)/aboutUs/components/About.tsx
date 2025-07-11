"use client";
import React from "react";
import AboutHero from "./AboutHero";
import shape from "../../../../assets/images/shape1.png"
import Head from "next/head";
import WideScreenHandler from "@/components/WideScreenHandler";
import { getAllBlogs } from "@/services/services";

const AboutUs: React.FC = () => {
  const fetch = async()=>{
   const data =  await getAllBlogs();

  }

  React.useEffect(()=>{
    fetch()
  },[])
  return (
    <div className="">
      <Head>
        <title>
          About us | Digital marketing jobs | career opportunities at Om
          enterprises
        </title>
        <meta
          name="description"
          content="Digital marketing blog, sms marketing, email marketing, social media marketing, content marketing, paid media marketing, search engine marketing, web development, app development, bulk sms"
        />
      </Head>

      <WideScreenHandler>
        <div
          style={{
            backgroundImage: `url(${shape.src})`, // Use shape.src for StaticImageData
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            minHeight: "50rem"
          }}
          className="relative"
        >
          <AboutHero />
        </div>
      </WideScreenHandler>
    </div>
  );
};

export default AboutUs;
