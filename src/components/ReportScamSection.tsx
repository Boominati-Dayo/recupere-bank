'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-black text-white leading-[1.1] tracking-tight mb-5">
                Report a Scam.<br />
                <span className="text-primary-500">Start Recovery Today.</span>
              </h2>

              <div className="w-10 h-0.5 bg-primary-500 mb-6" />

              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-[560px] mx-auto lg:mx-0 mb-8">
                 Scammers move funds within <span className="text-white font-bold">72 hours</span>. Every second counts.
                 Our forensic team can freeze and trace assets — but only if you act now. Report to ACCC Scamwatch and Nexus simultaneously.
               </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                <Link
                  href="/asset-recovery/report"
                  className="w-full sm:w-auto px-10 py-5 bg-primary-500 text-white font-black text-sm uppercase tracking-widest hover:bg-primary-400 transition-all text-center"
                >
                  Report a Scam Now
                </Link>
                <Link
                  href="/asset-recovery"
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white/80 font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all text-center"
                >
                  Learn How It Works
                </Link>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/40 justify-center lg:justify-start">
                <span className="w-1 h-1 bg-emerald-500" />
                No upfront fees. Pay only on successful recovery.
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-white/10 bg-white/5"
            >
              <div className="px-6 py-5 border-b border-white/10">
                <span className="text-xs font-bold text-white tracking-wider">What happens after you report</span>
              </div>
              <div className="px-6 py-5 space-y-4">
                {[
                  'Case intake & evidence review within 24 hours (Sydney)',
                  'Blockchain tracing & jurisdictional mapping via AUSTRAC',
                  'Legal demand letters & Australian court freezing orders',
                  'Recovered funds returned to your AUD account',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-primary-500/20 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-primary-500">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-white/60">{step}</span>
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
