import ServiceDetail from "./ServiceDetail";
import { slugToIdMap } from "./slug-to-id";

const  ServiceDetailPage = async ({
  params,
}: {
  params: Promise<{ category: string , service:string}>
}) => {
  const  param = await params;
  const { service } = param;
  const serviceId = slugToIdMap[service];

  if (!serviceId) {
    return <h1>not found</h1>;
  }

  return <ServiceDetail serviceId={serviceId} />;
}

export default ServiceDetailPage;