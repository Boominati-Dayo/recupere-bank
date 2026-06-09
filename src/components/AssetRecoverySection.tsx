'use client';

import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'Forensic Crypto Tracing',
    desc: 'Blockchain-level transaction analysis to identify and trace stolen or lost digital assets.',
  },
  {
    title: 'Offshore Legal Recovery',
    desc: 'International legal frameworks deployed to recover assets held across jurisdictions.',
  },
  {
    title: 'Safe Vault Protection',
    desc: 'Military-grade encrypted storage for digital assets, credentials, and sensitive documentation.',
  },
  {
    title: 'No Upfront Fees',
    desc: 'Our recovery division operates on a success-based model. You pay only when we deliver results.',
  },
];

const AssetRecoverySection = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[580px]">
      <div className="w-full lg:w-[55%] bg-navy-900 px-8 py-16 lg:px-20 lg:py-24 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-7">
          <span className="w-6 h-px bg-white/30" />
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">Unique Proposition</span>
        </div>
        <h2 className="font-playfair text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
          Banking Meets<br />Cyber Recovery.
        </h2>
        <p className="text-sm leading-relaxed text-white/55 max-w-md mb-11">
          Nexus uniquely combines private banking infrastructure with a forensic recovery division — protecting your wealth and restoring it if compromised. No other institution offers this convergence of financial security and digital forensics.
        </p>
        <Link
          href="/asset-recovery/report"
          className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-white px-9 py-4 bg-primary-500 hover:bg-primary-600 transition-all w-fit"
        >
          Explore Recovery Services
        </Link>
      </div>

      <div className="w-full lg:w-[45%] bg-muted-400 px-8 py-16 lg:px-16 lg:py-24 flex items-center">
        <div className="grid grid-cols-2 gap-px bg-muted-300 w-full">
          {features.map((f) => (
            <div key={f.title} className="bg-muted-400 p-7 lg:p-9 hover:bg-muted-200 transition-colors">
              <h3 className="text-sm font-bold text-navy-900 mb-2 tracking-tight">{f.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetRecoverySection;
