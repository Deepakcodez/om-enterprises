import React from "react";
import CareerHero from "./CareerHero";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import { Job } from "./Job";
import WideScreenHandler from "@/components/WideScreenHandler";
import Head from "next/head";
import { createUserAction, getUserAction } from "@/utills/actions/User";

type UserT = {
  id: number;
  name: string;
  email: string;
};
const Career = async () => {

  const user: UserT[] = await getUserAction();
  return (
    <>
      <Head>
        <title>
          {
            "Careers | Digital marketing jobs | career opportunities at Om enterprises"
          }
        </title>
        <meta
          name="Digital marketing blogs"
          content="Digital marketing blog, sms marketing, email marketing, social media marketing, content marketing, paid media marketing, search engine marketing, web development, app development, bulk sms."
        />
      </Head>
      <WideScreenHandler>
        <XpaddingWrapper>
          <div className="flex gap-12 flex-wrap">
            {user.map((user) => (
              <p key={user.id} className="text-black">
                {user.id} {user.name}
              </p>
            ))}
          </div>
          <CareerHero />
          <Job />
        </XpaddingWrapper>
      </WideScreenHandler>
    </>
  );
};

export default Career;
