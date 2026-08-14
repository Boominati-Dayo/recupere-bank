import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowRight, Globe, Lock } from 'lucide-react';
import FinanceHeroImg from '@/assets/images_for_pages/finance-hero.jpg';

const BankingHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-36 pb-28 mobile:pt-44 mobile:pb-32 overflow-hidden bg-[#0d1b2e]">
      {/* Finance background image */}
      <Image
        src={FinanceHeroImg}
        alt="Global finance and wealth"
        fill
        priority
        className="object-cover object-center opacity-60"
        sizes="100vw"
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e]/70 via-[#0d1b2e]/50 to-[#0d1b2e]/70" />
        <div className="absolute inset-0 bg-[#0d1b2e]/30" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />

        {/* Geometric grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent rotate-12 translate-y-32" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -rotate-12 -translate-y-32" />

        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2e]/80 via-transparent to-[#0d1b2e]/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-4xl mobile:text-5xl lg:text-7xl font-['Playfair_Display'] font-black text-white leading-[1.1] tracking-tight mb-8">
              Fortify Your{' '}
              <span className="relative">
                <span className="text-primary-500 italic">Fortune</span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
              </span>
              .<br />
              Forge Your{' '}
              <span className="relative">
                <span className="text-white underline decoration-primary-500/40 underline-offset-8">Future</span>
              </span>
              .
            </h1>

            <p className="text-lg mobile:text-xl text-white/60 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              The world&apos;s premier private banking platform. Combine Swiss-level security with
              forensic asset protection — serving clients globally.
            </p>

            <div className="flex flex-col mobile:flex-row items-center justify-center gap-5">
              <Link
                href="/signup"
                className="group relative w-full mobile:w-auto px-10 py-5 bg-primary-500 text-[#0d1b2e] rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(238,39,55,0.4)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Open Private Account{' '}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/login"
                className="w-full mobile:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Secure Client Portal
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BankingHero;
