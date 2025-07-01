import { getContactUsQuery } from "@/services/services";
import React from "react";
import { queryOptions, useQuery } from "@tanstack/react-query";

import ContactQueryCard from "./ContactQueryCard";
import PricingCardSkeleton from "@/app/(user)/pricing/components/PricingCardSkelton";

const ContactQuery: React.FC = () => {
  const {
    data: contactData,
    isPending: cIsPending,
    isError: cError
  } = useQuery(queryOptions(getContactUsQuery()));
  return (
    <div>
      {cError && (
        <div className="text-red-500 text-center">Something went wrong!</div>
      )}
      {cIsPending ? (
        <div
          className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12
       "
        >
          <PricingCardSkeleton />
        </div>
      ) : (
        <div
          className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12
        "
        >
          {contactData
            ?.slice()
            .reverse()
            .map((query: any) => (
              <ContactQueryCard key={query._id} {...query} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ContactQuery;
