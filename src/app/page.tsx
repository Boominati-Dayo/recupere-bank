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