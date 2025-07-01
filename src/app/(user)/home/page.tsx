import About from "./_components/about/About";
import AwardSection from "./_components/award/AwardSection";
import Client from "./_components/clientSection/Client";
import CompaignSection from "./_components/CompaignSection/Compaign";
import Faq from "./_components/faq/Faq";
import Features from "./_components/features/Features";
import Hero from "./_components/hero/Hero";
import Provider from "./_components/provider/Provider";
import Strategy from "./_components/strategy/Strategy";
import TargetClient from "./_components/targetCustomer/TargetClient";
import Testinomials from "./_components/testinomials/Testinomials";
import Why from "./_components/why/contactSection/why";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <AwardSection />
      <Why />
      <CompaignSection />
      <Provider />
      <Strategy />
      <Testinomials />
      <Features />
      <TargetClient />
      <Client />
      <Faq />
    </div>
  );
};

export default HomePage;
