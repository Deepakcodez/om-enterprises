"use client";
import React from "react";
import ServiceHero from "./ServiceHero";

import Head from "next/head";
import ServiceDetail from "../[category]/[service]/ServiceDetail";
import useServicesStore from "@/store/ServiceStore";

const ServicePage: React.FC = () => {
  const { selectedServiceId} = useServicesStore()
  return (
    <>
      <Head>
        <title>
          {
            "Services | Digital marketing jobs |  career opportunities at Om enterprises  "
          }{" "}
        </title>
        <meta
          name={"Digital marketing "}
          content={
            "Digital marketing blog, sms marketing, email marketing, social media marketing, content marketing, paid media marketing, search engine marketing, web development, app development, bulk sms ."
          }
        />
      </Head>
      <ServiceHero />
      <ServiceDetail serviceId={selectedServiceId} />
    </>
  );
};

export default ServicePage;
