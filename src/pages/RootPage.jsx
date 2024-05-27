import RootTemplate from "../templates/RootTemplate";
import HomeContainer from "../components/organisms/container/home-container";
import AboutContainer from "../components/organisms/container/about-container";
import PricingContainer from "../components/organisms/container/pricing-container";
import ContactContainer from "../components/organisms/container/contact-container";

export default function RootPage() {
  return (
    <RootTemplate>
      <HomeContainer />
      <AboutContainer />
      <PricingContainer />
      <ContactContainer />
    </RootTemplate>
  );
}
