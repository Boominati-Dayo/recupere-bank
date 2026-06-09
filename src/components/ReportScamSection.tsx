'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const urgencyItems = [
  { label: 'Funds Traced', value: '$1.2B+' },
  { label: 'Active Cases', value: '2,400+' },
  { label: 'Avg. Recovery Time', value: '38 Days' },
];

export default function ReportScamSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Urgent Action Required
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-black text-white leading-[1.1] tracking-tight mb-5">
                Report a Scam.<br />
                <span className="text-primary-500">Start Recovery Today.</span>
              </h2>

              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-[560px] mx-auto lg:mx-0 mb-8">
                Scammers move funds within <span className="text-white font-bold">72 hours</span>. Every second counts.
                Our forensic team can freeze and trace assets — but only if you act now.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <Link
                  href="/asset-recovery/report"
                  className="group relative w-full sm:w-auto px-10 py-5 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(238,39,55,0.35)] active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Report a Scam Now
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/asset-recovery"
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white/80 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all text-center"
                >
                  Learn How It Works
                </Link>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/40 justify-center lg:justify-start">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-500 shrink-0">
                  <path d="M7 1L2 4v5c0 3.5 2.5 6.7 5 7.5 2.5-.8 5-4 5-7.5V4L7 1z" fill="currentColor" opacity="0.2" />
                  <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                No upfront fees. Pay only on successful recovery.
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {urgencyItems.map((item, i) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 text-center hover:bg-white/10 transition-colors">
                  <p className="text-xl lg:text-2xl font-black text-primary-500 mb-1">{item.value}</p>
                  <p className="text-[9px] lg:text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-500">
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white tracking-wider">What happens after you report</span>
              </div>
              <div className="space-y-2.5">
                {[
                  'Case intake & evidence review within 24 hours',
                  'Blockchain tracing & jurisdictional mapping',
                  'Legal demand letters & bank freezing orders',
                  'Recovered funds returned to your account',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-emerald-500">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-white/60">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
