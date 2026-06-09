import Image from 'next/image';
import Link from 'next/link';
import { Shield, Landmark, ArrowRight, Zap, Globe, Lock, TrendingUp, CheckCircle } from 'lucide-react';
import HeroBg from '@/assets/images_for_pages/homeHero.png';

const stats = [
  { label: 'Assets Under Management', value: '$2.8B+' },
  { label: 'Active Accounts', value: '14,200+' },
  { label: 'Recovery Rate', value: '94%' },
];

const portfolioItems = [
  { label: 'Australian Equities', val: 'AUD $840,000', pct: 65, color: 'bg-primary-500' },
  { label: 'Fixed Income', val: 'AUD $412,000', pct: 28, color: 'bg-blue-500' },
  { label: 'Property REITS', val: 'AUD $230,900', pct: 45, color: 'bg-emerald-500' },
];

const BankingHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-navy-950">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src={HeroBg}
          alt="Nexus Banking Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/60 to-navy-950" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-xs font-black uppercase tracking-widest mb-8">
              <Zap className="w-3.5 h-3.5" />
              APRA Regulated • Sydney, Australia
            </div>

            <h1 className="text-4xl mobile:text-5xl lg:text-7xl font-['Playfair_Display'] font-black text-white leading-[1.1] tracking-tight mb-8">
              Secure Your{' '}
              <span className="text-primary-500 italic">Wealth</span>.<br />
              Master Your{' '}
              <span className="underline decoration-primary-500/30 underline-offset-8">Future</span>.
            </h1>

            <p className="text-lg mobile:text-xl text-white/60 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Australia&apos;s premier private banking platform. Combine Swiss-level security with
              forensic asset protection — all from our Sydney headquarters.
            </p>

            <div className="flex flex-col mobile:flex-row items-center justify-center lg:justify-start gap-5">
              <Link
                href="/signup"
                className="group relative w-full mobile:w-auto px-10 py-5 bg-primary-500 text-navy-950 rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(238,39,55,0.4)] active:scale-95"
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

            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-black text-white uppercase tracking-tighter">PCI-DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-black text-white uppercase tracking-tighter">256-bit AES Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-black text-white uppercase tracking-tighter">Global Liquidity</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative z-10">
              {/* Wealth Dashboard Card */}
              <div className="relative z-20 bg-[#111827] border border-white/10 rounded-3xl p-6 mobile:p-10 shadow-2xl shadow-black/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-500/50" />

                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Wealth Overview</p>
                    <h3 className="text-3xl mobile:text-4xl font-black text-white tracking-tighter">AUD $1,482,900</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-6">
                  {portfolioItems.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white">{item.val}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color}`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Market Status: Bullish</span>
                  </div>
                  <span className="text-[10px] font-black text-primary-500 uppercase tracking-widest">ASX updated 2m ago</span>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Stats Bar */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-lg font-black text-white">{stat.value}</p>
                  <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingHero;
