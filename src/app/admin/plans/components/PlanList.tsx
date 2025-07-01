"use client"
import React from "react";
import PlanCard from "./PlanCard";
import {
  getTransactionalPlans,
  getPromotionalPlans,
} from "@/services/services";
import { useQuery } from "@tanstack/react-query";
import PricingCardSkeleton from "@/app/(user)/pricing/components/PricingCardSkelton";


// Type for individual description in the "descriptions" array
type Description = string;

// Type for a pricing plan object
interface PricingPlanTypes {
  _id: string; // Unique identifier for the pricing plan
  title: string; // Title of the plan
  category: "promotional" | "transactional"; // Category can either be "promotional" or "transactional"
  price: number; // Price for the SMS pack
  descriptions: Description[]; // Array of descriptions for the plan
  __v: number; // Version key (usually used by MongoDB)
}

const PlanList = () => {
  const [refresh, setRefresh] = React.useState(false);
  const {
    data: transactionalData,
    isPending: isPendingTransactional,
    refetch: refetchTransactional,
  } = useQuery(getTransactionalPlans());  
  const {
    data: promotionalData,
    isPending: isPendingPromotional,
    refetch: refetchPromotional,
  } = useQuery(getPromotionalPlans());
  React.useEffect(() => {
    refetchTransactional();
    refetchPromotional();
  }, [refresh]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-950  ps-12 pb-6">
        Transactional Plans
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  place-items-center ">
        {isPendingTransactional && <PricingCardSkeleton/>}
        {transactionalData?.map((plan: PricingPlanTypes) => (
          <PlanCard
            key={plan._id}
            id={plan._id}
            title={plan.title}
            price={plan.price}
            features={plan.descriptions}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-blue-950  ps-12 mt-12 pb-6">
        Promotional Plans
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  place-items-center ">
        {isPendingPromotional && <PricingCardSkeleton />}
        {promotionalData?.map((plan: PricingPlanTypes) => (
          <PlanCard
            key={plan._id}
            id={plan._id}
            title={plan.title}
            price={plan.price}
            features={plan.descriptions}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanList;
