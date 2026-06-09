'use client';

import Link from 'next/link';

const accounts = [
  {
    name: 'Checking',
    desc: 'Day-to-day transactional account with zero fees and unlimited transfers.',
    bar: 'bg-primary-500',
  },
  {
    name: 'Savings',
    desc: 'High-yield interest account with flexible deposit and withdrawal terms.',
    bar: 'bg-emerald-600',
  },
  {
    name: 'Fixed Deposit',
    desc: 'Locked-term deposits offering guaranteed returns at competitive rates.',
    bar: 'bg-primary-500',
  },
  {
    name: 'Business',
    desc: 'Corporate-grade account with multi-user access and integrated treasury tools.',
    bar: 'bg-navy-900',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[560px]">
      <div className="w-full lg:w-[35%] bg-secondary-500 px-8 py-16 lg:px-14 lg:py-20 flex flex-col justify-center">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/50 mb-6">
          Account Portfolio
        </span>
        <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-3">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {accounts.map((a) => (
            <div key={a.name} className="border border-muted-400 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="bg-navy-900 px-5 py-5">
                <h3 className="text-sm font-bold text-white tracking-wide">{a.name}</h3>
              </div>
              <div className="px-5 pt-4 pb-0 bg-white">
                <p className="text-xs leading-relaxed text-gray-400">{a.desc}</p>
                <div className={`h-1 mt-6 ${a.bar}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
