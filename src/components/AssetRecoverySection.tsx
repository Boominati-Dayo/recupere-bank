'use client';

import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'Forensic Crypto Tracing',
    desc: 'Blockchain-level transaction analysis compliant with international AML/CTF guidelines to identify and trace stolen or lost digital assets.',
  },
  {
    title: 'Internationally Regulated Legal Recovery',
    desc: 'Global legal frameworks deployed through our internationally regulated practice to recover assets held across jurisdictions.',
  },
  {
    title: 'Safe Vault Protection',
    desc: 'Military-grade encrypted storage for digital assets, credentials, and sensitive documentation — globally distributed data centres.',
  },
  {
    title: 'No Upfront Fees',
    desc: 'Our recovery division operates on a success-based model compliant with international consumer protection law. You pay only when we deliver.',
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
        <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
          Banking Meets<br />Cyber Recovery.
        </h2>
        <p className="text-sm leading-relaxed text-white/55 max-w-md mb-11">
          RecupereBank uniquely combines private banking infrastructure with a forensic recovery division — protecting your wealth and restoring it if compromised. No other institution offers this convergence of financial security and digital forensics.
        </p>
        <Link
          href="/asset-recovery/report"
          className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-white px-9 py-4 bg-primary-500 hover:bg-primary-600 transition-all w-fit"
        >
          Explore Recovery Services
        </Link>
      </div>

      <div className="w-full lg:w-[45%] bg-muted-400 flex flex-col">
        <div className="px-8 py-16 lg:px-16 lg:pt-24 lg:pb-10">
          <div className="grid grid-cols-2 gap-px bg-muted-300 w-full">
            {features.map((f) => (
              <div key={f.title} className="bg-muted-400 p-7 lg:p-9 hover:bg-muted-200 transition-colors">
                <h3 className="text-sm font-bold text-navy-900 mb-2 tracking-tight">{f.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-8 pb-16 lg:px-16 lg:pb-24">
          <svg viewBox="0 0 400 225" className="w-full h-auto rounded">
            <rect width="400" height="225" fill="#f3f4f6" />
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d1d5db" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="225" fill="url(#grid)" />
            <rect x="0" y="0" width="400" height="225" fill="none" stroke="#0d1b2e" strokeWidth="4" />
            <rect x="10" y="10" width="380" height="205" fill="none" stroke="#0d1b2e" strokeWidth="1" rx="2" />
            <text x="200" y="28" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#0d1b2e" letterSpacing="4">FORENSIC ANALYSIS</text>
            <line x1="30" y1="40" x2="370" y2="40" stroke="#ee2737" strokeWidth="2" />
            <g stroke="#0d1b2e" strokeWidth="1.5" fill="none">
              <circle cx="100" cy="110" r="32" />
              <circle cx="100" cy="110" r="18" />
              <line x1="122" y1="132" x2="145" y2="155" />
            </g>
            <circle cx="100" cy="110" r="3" fill="#ee2737" />
            <line x1="80" y1="90" x2="95" y2="105" stroke="#ee2737" strokeWidth="2" />
            <g fill="#0d1b2e" opacity="0.4">
              <rect x="60" y="130" width="8" height="8" rx="1" />
              <rect x="76" y="138" width="8" height="8" rx="1" />
              <rect x="92" y="130" width="8" height="8" rx="1" />
              <rect x="108" y="138" width="8" height="8" rx="1" />
              <rect x="124" y="130" width="8" height="8" rx="1" />
            </g>
            <g fill="#0d1b2e">
              <circle cx="210" cy="90" r="6" />
              <circle cx="250" cy="75" r="6" />
              <circle cx="280" cy="95" r="6" />
              <circle cx="260" cy="125" r="6" />
              <circle cx="220" cy="120" r="6" />
            </g>
            <g stroke="#0d1b2e" strokeWidth="1" opacity="0.5">
              <line x1="216" y1="90" x2="244" y2="75" />
              <line x1="256" y1="75" x2="274" y2="95" />
              <line x1="274" y1="95" x2="260" y2="119" />
              <line x1="254" y1="125" x2="226" y2="120" />
              <line x1="220" y1="120" x2="210" y2="96" />
              <line x1="244" y1="75" x2="210" y2="90" />
            </g>
            <circle cx="210" cy="90" r="2.5" fill="#ee2737" />
            <circle cx="250" cy="75" r="2.5" fill="#ee2737" />
            <circle cx="280" cy="95" r="2.5" fill="#ee2737" />
            <circle cx="260" cy="125" r="2.5" fill="#ee2737" />
            <circle cx="220" cy="120" r="2.5" fill="#ee2737" />
            <g stroke="#0d1b2e" strokeWidth="1.5" opacity="0.7">
              <polyline points="200,160 215,173 230,160 245,173 260,160 275,173 290,160" fill="none" />
              <circle cx="200" cy="160" r="3" fill="#ee2737" />
              <circle cx="215" cy="173" r="3" fill="#0d1b2e" />
              <circle cx="230" cy="160" r="3" fill="#ee2737" />
              <circle cx="245" cy="173" r="3" fill="#0d1b2e" />
              <circle cx="260" cy="160" r="3" fill="#ee2737" />
              <circle cx="275" cy="173" r="3" fill="#0d1b2e" />
              <circle cx="290" cy="160" r="3" fill="#ee2737" />
            </g>
            <path d="M 320 55 L 370 55 L 370 100 L 350 115 L 350 135 L 330 135 L 330 115 L 320 100 Z" fill="none" stroke="#0d1b2e" strokeWidth="1.5" />
            <line x1="330" y1="70" x2="360" y2="70" stroke="#0d1b2e" strokeWidth="1" />
            <line x1="330" y1="80" x2="360" y2="80" stroke="#0d1b2e" strokeWidth="1" />
            <line x1="330" y1="90" x2="360" y2="90" stroke="#0d1b2e" strokeWidth="1" />
            <line x1="340" y1="110" x2="360" y2="110" stroke="#0d1b2e" strokeWidth="1" />
            <line x1="340" y1="120" x2="360" y2="120" stroke="#0d1b2e" strokeWidth="1" />
            <line x1="340" y1="130" x2="352" y2="130" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="325" y="100" width="6" height="15" fill="#ee2737" opacity="0.6" />
            <g fill="#0d1b2e" opacity="0.25">
              <rect x="35" y="168" width="6" height="6" rx="1" />
              <rect x="48" y="180" width="6" height="6" rx="1" />
              <rect x="61" y="168" width="6" height="6" rx="1" />
              <rect x="74" y="180" width="6" height="6" rx="1" />
              <rect x="87" y="168" width="6" height="6" rx="1" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AssetRecoverySection;
