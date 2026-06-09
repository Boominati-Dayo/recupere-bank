'use client';

import dynamic from 'next/dynamic';
import PublicRoute from '@/components/PublicRoute';

const BankingHero = dynamic(() => import('@/components/BankingHero'), {
  loading: () => <div className="h-[90vh] bg-[#0a0f1a] animate-pulse" />
});

const ReportScamSection = dynamic(() => import('@/components/ReportScamSection'), {
  loading: () => <div className="h-[500px] bg-navy-900 animate-pulse" />
});

const ServiceSplit = dynamic(() => import('@/components/ServiceSplit'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const ProcessSteps = dynamic(() => import('@/components/ProcessSteps'), {
  loading: () => <div className="h-96 bg-muted-100 animate-pulse" />
});

const AssetRecoverySection = dynamic(() => import('@/components/AssetRecoverySection'), {
  loading: () => <div className="h-96 bg-navy-900 animate-pulse" />
});

const RecentCases = dynamic(() => import('@/components/RecentCases'), {
  loading: () => <div className="h-96 bg-navy-900 animate-pulse" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const SecurityCompliance = dynamic(() => import('@/components/SecurityCompliance'), {
  loading: () => <div className="h-24 bg-white animate-pulse" />
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="h-96 bg-navy-900 animate-pulse" />
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
