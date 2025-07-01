
import PricingPage, { PricingPlanTypes } from "./components/PricingPage";

async function getPlans() {
  try {
    const baseUrl = process.env.BASE_URL;
    
    // Fetch both types of plans simultaneously
    const [transactionalRes, promotionalRes] = await Promise.all([
      fetch(`${baseUrl}/api/v1/admin/plan/get/transactional`, {
        next: { revalidate: 3600 }
      }),
      fetch(`${baseUrl}/api/v1/admin/plan/get/promotional`, {
        next: { revalidate: 3600 }
      })
    ]);
    
    if (!transactionalRes.ok || !promotionalRes.ok) {
      throw new Error("Failed to fetch plans");
    }
    
    const transactionalData = await transactionalRes.json();
    const promotionalData = await promotionalRes.json();
    
    // Combine both types of plans
    return {
      plans: [
        ...(transactionalData.plans || []),
        ...(promotionalData.plans || [])
      ]
    };
    
  } catch (error) {
    console.error(error);
    return { plans: [] };
  }
}

export default async function Pricing() {
  const { plans } = await getPlans();

  return (
    <main>
      {/* SEO content */}
      <div className="hidden" aria-hidden="true">
        {plans.map((plan: PricingPlanTypes) => (
          <div key={plan._id}>
            <h2>{plan.title}</h2>
            <p>{plan.category}</p>
            <p>{plan.price}</p>
            <span>{plan.descriptions.join(', ')}</span>
          </div>
        ))}
      </div>

      {/* Client component with all plans */}
      <PricingPage plans={plans} />
    </main>
  );
}