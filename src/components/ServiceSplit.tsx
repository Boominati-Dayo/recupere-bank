'use client';

import React from 'react';
import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';

const services = [
  {
    num: '01',
    title: 'Digital Private Banking',
    desc: 'Full-spectrum private banking entirely online. Secure, compliant, and built for high-net-worth individuals.',
    href: '/banking',
  },
  {
    num: '02',
    title: 'Commercial Property & Investment',
    desc: 'Access institutional-grade property financing and structured investment vehicles for portfolio growth.',
    href: '/banking',
  },
  {
    num: '03',
    title: 'Nexus Safe Vault',
    desc: 'Encrypted digital vault for sensitive assets, documents, and high-value holdings with multi-layer authentication.',
    href: '/banking',
  },
  {
    num: '04',
    title: 'Multi-Currency Accounts',
    desc: 'Hold, convert and transact in 40+ currencies with competitive FX rates and real-time global settlements.',
    href: '/banking',
  },
  {
    num: '05',
    title: 'Wealth Management',
    desc: 'Dedicated advisors delivering bespoke investment strategies, estate planning, and long-term capital preservation.',
    href: '/contact',
  },
  {
    num: '06',
    title: 'Bank-Grade Cyber Security',
    desc: 'AES-256 encryption, biometric authentication, real-time fraud detection, and 24/7 threat monitoring.',
    href: '/banking',
  },
];

const ServiceSplit = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-0.5 bg-primary-500" />
          <span className="text-primary-500 text-xs font-bold tracking-[0.22em] uppercase">Our Capabilities</span>
        </div>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-navy-900 mb-8 max-w-2xl leading-tight">
            Institutional Grade Banking Services
          </h2>

        <div className="mb-12 max-w-4xl">
          <ImagePlaceholder label="Private Banking Suite" aspectRatio="aspect-[21/7]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-muted-400">
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group bg-white p-10 lg:p-12 relative overflow-hidden hover:bg-gray-50 transition-colors"
            >
              <span className="font-playfair text-7xl font-black text-muted-200 absolute top-4 right-6 leading-none select-none group-hover:text-muted-300 transition-colors">
                {s.num}
              </span>
              <h3 className="text-lg font-bold text-navy-900 mb-3 relative z-10 mt-8">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">{s.desc}</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSplit;
