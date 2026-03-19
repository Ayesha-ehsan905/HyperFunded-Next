import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection/HowItWorksSection";
import { LogoAndContactSection } from "./sections/LogoAndContactSection";
import { PerformanceAndAccountSummarySection } from "./sections/PerformanceAndAccountSummarySection/PerformanceAndAccountSummarySection";
import { PricingPlansSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TrustedPartnersSection } from "./sections/TrustedPartnersSection/TrustedPartnersSection";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <HeroSection />
      <LogoAndContactSection />
      <TrustedPartnersSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingPlansSection />
      <PerformanceAndAccountSummarySection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};
