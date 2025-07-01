
import React from "react";
import CareerHero from "./CareerHero";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import { Job } from "./Job";
import WideScreenHandler from "@/components/WideScreenHandler";
import Head from "next/head";
import { testserver } from "@/utills/action";



const Career = async() => {
    
  const user = await testserver();
  return (
    <>
      <Head>
        <title>
          {"Careers | Digital marketing jobs | career opportunities at Om enterprises"}
        </title>
        <meta
          name="Digital marketing blogs"
          content="Digital marketing blog, sms marketing, email marketing, social media marketing, content marketing, paid media marketing, search engine marketing, web development, app development, bulk sms."
        />
      </Head>
      <p>{user.title}</p>
      <WideScreenHandler>
        <XpaddingWrapper>
          <CareerHero />
          <Job />
        </XpaddingWrapper>
      </WideScreenHandler>
    </>
  );
};

export default Career;