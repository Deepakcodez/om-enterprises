"use client"
import React from "react";
import PricingCard from "./PricingCard";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Client from "../../home/_components/clientSection/Client";
import ContactForm from "./ContactForm";
import WideScreenHandler from "@/components/WideScreenHandler";
import Head from "next/head";

// Type for a pricing plan object
export interface PricingPlanTypes {
  _id: string;
  title: string;
  category: "promotional" | "transactional";
  price: number;
  descriptions: string[];
  __v: number;
}

const PricingPage: React.FC<{ plans: PricingPlanTypes[] }> = ({ plans }) => {
  // Filter plans based on category
  const transactionalPlans = plans.filter(
    (plan) => plan.category === "transactional"
  );
  
  const promotionalPlans = plans.filter(
    (plan) => plan.category === "promotional"
  );

  return (
    <WideScreenHandler>
      <Head>
        <title>
          Pricing | Digital marketing jobs | career opportunities at Om
          enterprises
        </title>
        <meta
          name="description"
          content="Digital marketing blog, sms marketing, email marketing, social media marketing, content marketing, paid media marketing, search engine marketing, web development, app development, bulk sms."
        />
      </Head>

      <XpaddingWrapper>
        <ContactForm />
      </XpaddingWrapper>

      {/* Transactional Section */}
      <XpaddingWrapper>
        <div className="relative mt-24">
          <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
            PRICING
          </h1>
          <h1 className="text-4xl font-bold text-center text-blue-950">
            Pricing For Transactional SMS
          </h1>
          <p className="text-xs font-semibold text-center text-OMblue">
            No Hidden Setup Fees. Forever Free To Use Platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-12 mb-24 mt-12 Perspective-parent">
          {transactionalPlans.map((plan) => (
            <PricingCard
              key={plan._id}
              title={plan.title}
              price={plan.price}
              features={plan.descriptions || []}
            />
          ))}
        </div>
      </XpaddingWrapper>

      {/* Promotional Section */}
      <XpaddingWrapper>
        <div className="relative mt-24">
          <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
            PRICING
          </h1>
          <h1 className="text-4xl font-bold text-center text-blue-950">
            Pricing For Promotional SMS
          </h1>
          <p className="text-xs font-semibold text-center text-OMblue">
            No Hidden Setup Fees. Forever Free To Use Platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-12 mb-24 mt-12 Perspective-parent">
          {promotionalPlans.map((plan) => (
            <PricingCard
              key={plan._id}
              title={plan.title}
              price={plan.price}
              features={plan.descriptions || []}
            />
          ))}
        </div>
      </XpaddingWrapper>

      <Client />
    </WideScreenHandler>
  );
};

export default PricingPage;