'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const accounts = [
  {
    name: 'Checking',
    desc: 'Everyday AUD transaction account with zero fees, PayID support, and unlimited Osko transfers.',
    bar: 'bg-primary-500',
    img: 'Checking Account Dashboard',
  },
  {
    name: 'Savings',
    desc: 'High-yield AUD savings account with competitive interest rates and flexible deposit terms.',
    bar: 'bg-emerald-600',
    img: 'Savings Growth Chart',
  },
  {
    name: 'Fixed Deposit',
    desc: 'Australian dollar term deposits offering guaranteed returns at competitive rates.',
    bar: 'bg-primary-500',
    img: 'Fixed Deposit Term Sheet',
  },
  {
    name: 'Business',
    desc: 'Corporate AUD account with multi-user access, ABN verification, and integrated treasury tools.',
    bar: 'bg-navy-900',
    img: 'Business Treasury Console',
  },
];

export default function WhyChooseUs() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prev => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const topIdx = page === 0 ? 0 : 2;
  const bottomIdx = page === 0 ? 1 : 3;

  return (
    <section className="flex flex-col lg:flex-row min-h-[560px]">
      <div className="w-full lg:w-[35%] bg-secondary-500 px-8 py-16 lg:px-14 lg:py-20 flex flex-col justify-center">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/50 mb-6">
          Account Portfolio
        </span>
        <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-3">
          Customised Financial Solutions
        </h2>
        <p className="text-sm font-semibold text-white/70 mb-5">
          Tailored Account Types
        </p>
        <p className="text-sm leading-relaxed text-white/60 mb-10">
          Every client financial landscape is unique. Nexus designs account structures that align with your goals — whether personal wealth preservation, corporate treasury, or international diversification.
        </p>
        <Link
          href="/signup"
          className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-white px-8 py-4 border-2 border-white/60 hover:border-white hover:bg-white/10 transition-colors w-fit"
        >
          View All Accounts
        </Link>
      </div>

      <div className="w-full lg:w-[65%] bg-white px-8 py-16 lg:px-14 lg:py-20 flex flex-col justify-center">
        {/* Mobile: 2 rows, swipe animation */}
        <div className="lg:hidden space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`top-${page}`}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="border border-muted-400 overflow-hidden"
            >
              <ImagePlaceholder label={accounts[topIdx].img} aspectRatio="aspect-[3/2]" />
              <div className="px-5 pt-3 pb-4">
                <h3 className="text-sm font-bold text-navy-900 tracking-wide mb-2">{accounts[topIdx].name}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{accounts[topIdx].desc}</p>
                <div className={`h-1 mt-4 ${accounts[topIdx].bar}`} />
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`bot-${page}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
              className="border border-muted-400 overflow-hidden"
            >
              <ImagePlaceholder label={accounts[bottomIdx].img} aspectRatio="aspect-[3/2]" />
              <div className="px-5 pt-3 pb-4">
                <h3 className="text-sm font-bold text-navy-900 tracking-wide mb-2">{accounts[bottomIdx].name}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{accounts[bottomIdx].desc}</p>
                <div className={`h-1 mt-4 ${accounts[bottomIdx].bar}`} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {accounts.map((a) => (
            <div key={a.name} className="border border-muted-400 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all">
              <ImagePlaceholder label={a.img} aspectRatio="aspect-[3/2]" />
              <div className="px-5 pt-3 pb-4">
                <h3 className="text-sm font-bold text-navy-900 tracking-wide mb-2">{a.name}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{a.desc}</p>
                <div className={`h-1 mt-4 ${a.bar}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
