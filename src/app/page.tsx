import PublicRoute from '@/components/PublicRoute';
import BankingHero from '@/components/BankingHero';
import ReportScamSection from '@/components/ReportScamSection';
import ServiceSplit from '@/components/ServiceSplit';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import AssetRecoverySection from '@/components/AssetRecoverySection';
import RecentCases from '@/components/RecentCases';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import SecurityCompliance from '@/components/SecurityCompliance';
import FinalCTA from '@/components/FinalCTA';

// All sections below are static, server-rendered content. They ship in the
// initial HTML response so there are no lazy chunks, no skeleton placeholders
// and no post-load hydration burst — the full page paints at once, even on
// slow mobile connections. Only the testimonial carousel and FAQ accordion
// remain client components (small interactive islands).

export default function Home() {
  return (
    <PublicRoute>
      <div className="min-h-screen bg-white">
        <BankingHero />
        <ReportScamSection />
        <ServiceSplit />
        <WhyChooseUs />
        <ProcessSteps />
        <AssetRecoverySection />
        <RecentCases />
        <TestimonialsSection />
        <FAQSection />
        <SecurityCompliance />
        <FinalCTA />
      </div>
    </PublicRoute>
  );
}