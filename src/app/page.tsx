import dynamic from 'next/dynamic';
import PublicRoute from '@/components/PublicRoute';

// Each section is its own lazy chunk with a colored (never-white) skeleton block.
// This mirrors the architecture of recoverlytrustbank.com that loads fast on phones:
// the first paint is a navy/white/gray skeleton that fills the screen, then each
// section hydrates in as its chunk arrives — no blank white below the hero.

const BankingHero = dynamic(() => import('@/components/BankingHero'), {
  loading: () => <div className="h-[90vh] bg-[#0d1b2e] animate-pulse" />
});

const ReportScamSection = dynamic(() => import('@/components/ReportScamSection'), {
  loading: () => <div className="h-[600px] bg-[#0d1b2e] animate-pulse" />
});

const ServiceSplit = dynamic(() => import('@/components/ServiceSplit'), {
  loading: () => <div className="h-[600px] bg-white animate-pulse" />
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="h-[700px] bg-[#0d1b2e] animate-pulse" />
});

const ProcessSteps = dynamic(() => import('@/components/ProcessSteps'), {
  loading: () => <div className="h-[560px] bg-muted-100 animate-pulse" />
});

const AssetRecoverySection = dynamic(() => import('@/components/AssetRecoverySection'), {
  loading: () => <div className="h-[640px] bg-[#0d1b2e] animate-pulse" />
});

const RecentCases = dynamic(() => import('@/components/RecentCases'), {
  loading: () => <div className="h-[600px] bg-[#0d1b2e] animate-pulse" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="h-[600px] bg-gray-50 animate-pulse" />
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="h-[700px] bg-white animate-pulse" />
});

const SecurityCompliance = dynamic(() => import('@/components/SecurityCompliance'), {
  loading: () => <div className="h-[480px] bg-white animate-pulse" />
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="h-[520px] bg-[#0d1b2e] animate-pulse" />
});

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
