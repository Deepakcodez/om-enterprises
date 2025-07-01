import PricingCardSkeleton from "@/app/(user)/pricing/components/PricingCardSkelton";
import { getInstantCallBackQuery } from "@/services/services";
import { queryOptions, useQuery } from "@tanstack/react-query";
import QueryCard from "./QueryCard";

const InstantCallbacks: React.FC = () => {
  const { data, isPending, isError } = useQuery(
    queryOptions(getInstantCallBackQuery())
  );

  return (
    <div>
      {isError && (
        <div className="text-red-500 text-center">Something went wrong!</div>
      )}
      {isPending ? (
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12">
          <PricingCardSkeleton />
        </div>
      ) : (
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12">
          {data
            ?.slice()
            .reverse()
            .map((query: any) => (
              <QueryCard key={query._id} {...query} />
            ))}
        </div>
      )}
    </div>
  );
};

export default InstantCallbacks;
