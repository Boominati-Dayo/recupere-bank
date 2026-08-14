'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Digital Private Banking',
    desc: 'Internationally regulated private banking entirely online. Secure, compliant, and built for high-net-worth individuals worldwide.',
    href: '/banking',
  },
  {
    num: '02',
    title: 'Commercial Property & Investment',
    desc: 'Access institutional-grade global property financing and structured investment vehicles for portfolio growth.',
    href: '/banking',
  },
  {
    num: '03',
    title: 'RecupereBank Safe Vault',
    desc: 'Encrypted digital vault for sensitive assets, documents, and high-value holdings with multi-layer authentication — globally distributed security operations.',
    href: '/banking',
  },
  {
    num: '04',
    title: 'USD & Multi-Currency Accounts',
    desc: 'Hold USD and transact in 40+ currencies with competitive FX rates and real-time settlements via international clearing systems.',
    href: '/banking',
  },
  {
    num: '05',
    title: 'Wealth Management',
    desc: 'Global advisory team delivering bespoke investment strategies, estate planning, and long-term capital preservation.',
    href: '/contact',
  },
  {
    num: '06',
    title: 'Bank-Grade Cyber Security',
    desc: 'AES-256 encryption, biometric authentication, real-time fraud detection, and 24/7 threat monitoring from our global SOC.',
    href: '/banking',
  },
];

const ServiceSplit = () => {
  return (
    <section className="py-24 bg-white">

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
    </section>
  );
};

export default ServiceSplit;
