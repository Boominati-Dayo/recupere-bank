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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-0.5 bg-primary-500" />
          <span className="text-primary-500 text-xs font-bold tracking-[0.22em] uppercase">Our Capabilities</span>
        </div>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-navy-900 mb-8 max-w-2xl leading-tight">
            Institutional Grade Banking Services
          </h2>

        <div className="mb-12 max-w-4xl">
          <svg
            className="w-full h-auto rounded-lg"
            viewBox="0 0 2100 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2100" height="700" fill="#0d1b2e" />

            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1b2d4a" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid-faint" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#14233e" strokeWidth="0.3" />
              </pattern>
              <linearGradient id="bar1" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#ee2737" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ee2737" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="bar2" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#235ba8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#235ba8" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="glow" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#ee2737" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ee2737" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="2100" height="700" fill="url(#grid)" />
            <rect width="2100" height="700" fill="url(#grid-faint)" />

            <line x1="0" y1="80" x2="2100" y2="80" stroke="#ee2737" strokeWidth="2" opacity="0.6" />
            <line x1="0" y1="82" x2="2100" y2="82" stroke="#235ba8" strokeWidth="1" opacity="0.4" />

            <line x1="0" y1="620" x2="2100" y2="620" stroke="#235ba8" strokeWidth="2" opacity="0.6" />
            <line x1="0" y1="618" x2="2100" y2="618" stroke="#ee2737" strokeWidth="1" opacity="0.4" />

            <line x1="120" y1="0" x2="120" y2="700" stroke="#ee2737" strokeWidth="1" opacity="0.15" />
            <line x1="1980" y1="0" x2="1980" y2="700" stroke="#ee2737" strokeWidth="1" opacity="0.15" />

            <rect x="60" y="80" width="2" height="540" fill="#ee2737" opacity="0.3" />
            <rect x="2038" y="80" width="2" height="540" fill="#ee2737" opacity="0.3" />

            <rect x="2040" y="80" width="60" height="540" fill="#ee2737" opacity="0.05" />
            <rect x="0" y="80" width="60" height="540" fill="#ee2737" opacity="0.05" />

            <circle cx="1050" cy="350" r="160" fill="url(#glow)" opacity="0.4" />

            <text
              x="1050"
              y="335"
              textAnchor="middle"
              fill="white"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="48"
              fontWeight="700"
              letterSpacing="8"
            >
              PRIVATE
            </text>
            <text
              x="1050"
              y="390"
              textAnchor="middle"
              fill="white"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="48"
              fontWeight="700"
              letterSpacing="8"
            >
              BANKING SUITE
            </text>

            <line x1="730" y1="360" x2="860" y2="360" stroke="#ee2737" strokeWidth="1.5" opacity="0.7" />
            <line x1="1240" y1="360" x2="1370" y2="360" stroke="#ee2737" strokeWidth="1.5" opacity="0.7" />
            <circle cx="720" cy="360" r="2" fill="#ee2737" opacity="0.9" />
            <circle cx="1380" cy="360" r="2" fill="#ee2737" opacity="0.9" />
            <circle cx="850" cy="360" r="1.5" fill="#235ba8" opacity="0.8" />
            <circle cx="1250" cy="360" r="1.5" fill="#235ba8" opacity="0.8" />

            <rect x="770" y="358" width="80" height="1" fill="#235ba8" opacity="0.5" />
            <rect x="1250" y="358" width="80" height="1" fill="#235ba8" opacity="0.5" />

            <line x1="1050" y1="295" x2="1050" y2="305" stroke="white" strokeWidth="1" opacity="0.3" />
            <line x1="1050" y1="400" x2="1050" y2="410" stroke="white" strokeWidth="1" opacity="0.3" />

            <rect x="340" y="555" width="40" height="65" fill="url(#bar2)" rx="2" />
            <rect x="400" y="520" width="40" height="100" fill="url(#bar1)" rx="2" />
            <rect x="460" y="480" width="40" height="140" fill="url(#bar2)" rx="2" />
            <rect x="520" y="510" width="40" height="110" fill="url(#bar1)" rx="2" />
            <rect x="580" y="440" width="40" height="180" fill="url(#bar2)" rx="2" />
            <rect x="640" y="530" width="40" height="90" fill="url(#bar1)" rx="2" />

            <rect x="1460" y="500" width="40" height="120" fill="url(#bar1)" rx="2" />
            <rect x="1520" y="460" width="40" height="160" fill="url(#bar2)" rx="2" />
            <rect x="1580" y="530" width="40" height="90" fill="url(#bar1)" rx="2" />
            <rect x="1640" y="420" width="40" height="200" fill="url(#bar2)" rx="2" />
            <rect x="1700" y="485" width="40" height="135" fill="url(#bar1)" rx="2" />
            <rect x="1760" y="545" width="40" height="75" fill="url(#bar2)" rx="2" />

            <path
              d="M340 460 L400 440 L460 390 L520 420 L580 350 L640 415"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M1460 440 L1520 380 L1580 410 L1640 340 L1700 400 L1760 450"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />

            <circle cx="340" cy="460" r="3" fill="#ee2737" opacity="0.7" />
            <circle cx="400" cy="440" r="3" fill="#235ba8" opacity="0.7" />
            <circle cx="460" cy="390" r="3" fill="#ee2737" opacity="0.7" />
            <circle cx="520" cy="420" r="3" fill="#235ba8" opacity="0.7" />
            <circle cx="580" cy="350" r="3" fill="#ee2737" opacity="0.7" />
            <circle cx="640" cy="415" r="3" fill="#235ba8" opacity="0.7" />
            <circle cx="1460" cy="440" r="3" fill="#ee2737" opacity="0.7" />
            <circle cx="1520" cy="380" r="3" fill="#235ba8" opacity="0.7" />
            <circle cx="1580" cy="410" r="3" fill="#ee2737" opacity="0.7" />
            <circle cx="1640" cy="340" r="3" fill="#235ba8" opacity="0.7" />
            <circle cx="1700" cy="400" r="3" fill="#ee2737" opacity="0.7" />
            <circle cx="1760" cy="450" r="3" fill="#235ba8" opacity="0.7" />

            <path
              d="M340 460 L400 440 L460 390 L520 420 L580 350 L640 415"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
              strokeDasharray="4 4"
            />
            <path
              d="M1460 440 L1520 380 L1580 410 L1640 340 L1700 400 L1760 450"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
              strokeDasharray="4 4"
            />

            <rect x="1955" y="155" width="25" height="35" fill="none" stroke="#235ba8" strokeWidth="1.5" rx="2" />
            <rect x="1958" y="158" width="19" height="8" fill="#235ba8" opacity="0.3" rx="1" />
            <line x1="1965" y1="172" x2="1965" y2="178" stroke="#235ba8" strokeWidth="1.5" />
            <circle cx="1965" cy="181" r="1.5" fill="#ee2737" />

            <rect x="120" y="155" width="25" height="35" fill="none" stroke="#235ba8" strokeWidth="1.5" rx="2" />
            <rect x="123" y="158" width="19" height="8" fill="#235ba8" opacity="0.3" rx="1" />
            <line x1="130" y1="172" x2="130" y2="178" stroke="#235ba8" strokeWidth="1.5" />
            <circle cx="130" cy="181" r="1.5" fill="#ee2737" />

            <circle cx="1050" cy="160" r="4" fill="none" stroke="#ee2737" strokeWidth="1.5" opacity="0.5" />
            <circle cx="1050" cy="160" r="8" fill="none" stroke="#ee2737" strokeWidth="0.5" opacity="0.3" />
            <line x1="1046" y1="160" x2="1054" y2="160" stroke="#ee2737" strokeWidth="1" opacity="0.5" />
            <line x1="1050" y1="156" x2="1050" y2="164" stroke="#ee2737" strokeWidth="1" opacity="0.5" />

            <circle cx="1050" cy="540" r="4" fill="none" stroke="#235ba8" strokeWidth="1.5" opacity="0.5" />
            <circle cx="1050" cy="540" r="8" fill="none" stroke="#235ba8" strokeWidth="0.5" opacity="0.3" />
            <line x1="1046" y1="540" x2="1054" y2="540" stroke="#235ba8" strokeWidth="1" opacity="0.5" />
            <line x1="1050" y1="536" x2="1050" y2="544" stroke="#235ba8" strokeWidth="1" opacity="0.5" />

            <text
              x="1050"
              y="685"
              textAnchor="middle"
              fill="#235ba8"
              fontFamily="'Inter', sans-serif"
              fontSize="10"
              fontWeight="400"
              letterSpacing="6"
              opacity="0.5"
            >
              SECURED · ENCRYPTED · INSTITUTIONAL
            </text>

            <rect x="340" y="470" width="340" height="1" fill="#ee2737" opacity="0.08" />
            <rect x="1460" y="470" width="340" height="1" fill="#ee2737" opacity="0.08" />

            <rect x="1955" y="620" width="25" height="25" fill="none" stroke="#ee2737" strokeWidth="1" rx="1" opacity="0.4" />
            <rect x="120" y="620" width="25" height="25" fill="none" stroke="#ee2737" strokeWidth="1" rx="1" opacity="0.4" />
          </svg>
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
