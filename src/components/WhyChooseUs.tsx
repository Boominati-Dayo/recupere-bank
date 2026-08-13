'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CheckingDashboard() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0d1b2e" rx="4" />
      <rect x="20" y="16" width="232" height="88" rx="8" fill="#235ba8" />
      <rect x="20" y="16" width="232" height="88" rx="8" fill="url(#cd-grad)" />
      <text x="36" y="40" fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="1">AVAILABLE BALANCE</text>
      <text x="36" y="66" fontSize="22" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="700">$12,458.00</text>
      <text x="36" y="86" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="system-ui,sans-serif">USD •••• 4829</text>
      <circle cx="318" cy="36" r="16" fill="rgba(255,255,255,0.06)" />
      <circle cx="336" cy="36" r="10" fill="rgba(255,255,255,0.06)" />
      <rect x="268" y="16" width="112" height="88" rx="6" fill="rgba(255,255,255,0.035)" />
      {[38, 48, 30, 56, 42, 60].map((h, i) => (
        <rect key={i} x={278 + i * 17} y={104 - h} width="11" height={h} rx="2" fill={i % 2 === 0 ? "#ee2737" : "#235ba8"} opacity="0.7" />
      ))}
      <rect x="20" y="116" width="360" height="1" fill="rgba(255,255,255,0.07)" />
      <text x="20" y="138" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="1">RECENT TRANSACTIONS</text>
      {[
        { label: 'Wise Transfer', amount: '-$420.00', color: '#ee2737' },
        { label: 'Salary Deposit', amount: '+$3,400.00', color: '#4ade80' },
        { label: 'Netflix Subscription', amount: '-$18.99', color: '#ee2737' },
        { label: 'Freelance Payment', amount: '+$850.00', color: '#4ade80' },
        { label: 'Amazon Purchase', amount: '-$62.40', color: '#ee2737' },
      ].map((tx, i) => (
        <g key={i}>
          <rect x="20" y={146 + i * 28} width="14" height="14" rx="4" fill={tx.color === '#ee2737' ? 'rgba(238,39,55,0.12)' : 'rgba(74,222,128,0.12)'} />
          <circle cx="27" cy={153 + i * 28} r="3" fill={tx.color} />
          <text x="44" y={156 + i * 28} fontSize="10" fill="#fff" fontFamily="system-ui,sans-serif">{tx.label}</text>
          <text x="370" y={156 + i * 28} fontSize="10" fill={tx.color} fontFamily="system-ui,sans-serif" fontWeight="600" textAnchor="end">{tx.amount}</text>
        </g>
      ))}
      <defs>
        <linearGradient id="cd-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#235ba8" stopOpacity="0" />
          <stop offset="100%" stopColor="#ee2737" stopOpacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SavingsChart() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0d1b2e" rx="4" />
      <rect x="30" y="30" width="340" height="210" rx="4" fill="rgba(255,255,255,0.025)" />
      {[60, 90, 120, 150, 180, 210].map(y => (
        <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4,4" />
      ))}
      <polyline points="50,200 90,175 140,155 190,130 240,100 290,80 340,55" fill="none" stroke="#ee2737" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50,200 L50,200 L90,175 L140,155 L190,130 L240,100 L290,80 L340,55 L340,240 L50,240 Z" fill="url(#sav-grad)" opacity="0.3" />
      {[{ x: 50, y: 200 }, { x: 90, y: 175 }, { x: 140, y: 155 }, { x: 190, y: 130 }, { x: 240, y: 100 }, { x: 290, y: 80 }, { x: 340, y: 55 }].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="5" fill="#0d1b2e" stroke="#ee2737" strokeWidth="2" />
          <circle cx={p.x} cy={p.y} r="2" fill="#ee2737" />
        </g>
      ))}
      <rect x="50" y="210" width="30" height="30" rx="2" fill="#235ba8" opacity="0.5" />
      <rect x="90" y="190" width="30" height="50" rx="2" fill="#ee2737" opacity="0.5" />
      <rect x="140" y="175" width="30" height="65" rx="2" fill="#235ba8" opacity="0.5" />
      <rect x="190" y="155" width="30" height="85" rx="2" fill="#ee2737" opacity="0.5" />
      <rect x="240" y="135" width="30" height="105" rx="2" fill="#235ba8" opacity="0.5" />
      <rect x="290" y="115" width="30" height="125" rx="2" fill="#ee2737" opacity="0.5" />
      <text x="65" y="260" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">J</text>
      <text x="105" y="260" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">F</text>
      <text x="155" y="260" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">M</text>
      <text x="205" y="260" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">A</text>
      <text x="255" y="260" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">M</text>
      <text x="305" y="260" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">J</text>
      <rect x="280" y="34" width="80" height="24" rx="4" fill="rgba(238,39,55,0.15)" />
      <text x="320" y="50" fontSize="10" fill="#ee2737" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle">GROWTH +8.4%</text>
      <defs>
        <linearGradient id="sav-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ee2737" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ee2737" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FixedDeposit() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0d1b2e" rx="4" />
      <rect x="40" y="20" width="320" height="260" rx="8" fill="rgba(255,255,255,0.04)" />
      <rect x="40" y="20" width="320" height="260" rx="8" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="170" y="32" width="60" height="48" rx="6" fill="#235ba8" />
      <path d="M184,32 L184,24 C184,20 186,16 190,16 C194,16 196,20 196,24 L196,32" fill="none" stroke="#ee2737" strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="54" r="4" fill="#ee2737" />
      <rect x="174" y="45" width="52" height="30" rx="4" fill="#ee2737" opacity="0.15" />
      <rect x="80" y="96" width="60" height="48" rx="6" fill="#235ba8" />
      <text x="110" y="116" fontSize="9" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="600" textAnchor="middle">DEC</text>
      <text x="110" y="136" fontSize="16" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle">15</text>
      <text x="160" y="114" fontSize="11" fill="rgba(255,255,255,0.5)" fontFamily="system-ui,sans-serif">Maturity Date</text>
      <text x="160" y="134" fontSize="12" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="600">15 December 2026</text>
      <rect x="80" y="162" width="240" height="1" fill="rgba(255,255,255,0.07)" />
      <text x="80" y="186" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="1">TERM DETAILS</text>
      <rect x="80" y="196" width="100" height="26" rx="4" fill="rgba(35,91,168,0.15)" />
      <text x="130" y="213" fontSize="10" fill="#235ba8" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle">12 MONTHS</text>
      <rect x="200" y="196" width="120" height="26" rx="4" fill="rgba(238,39,55,0.1)" />
      <text x="260" y="213" fontSize="10" fill="#ee2737" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle">GUARANTEED RETURN</text>
      <text x="200" y="258" fontSize="28" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle">5.75% p.a.</text>
      <text x="200" y="272" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif" textAnchor="middle">Fixed interest rate</text>
    </svg>
  );
}

function BusinessConsole() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0d1b2e" rx="4" />
      {[0, 1, 2, 3, 4].map(i => (
        <line key={`v${i}`} x1={80 + i * 80} y1="20" x2={80 + i * 80} y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={`h${i}`} x1="20" y1={60 + i * 55} x2="380" y2={60 + i * 55} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      <rect x="30" y="30" width="160" height="80" rx="6" fill="rgba(255,255,255,0.035)" />
      <rect x="30" y="30" width="160" height="80" rx="6" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="44" y="44" width="12" height="12" rx="2" fill="#235ba8" />
      <text x="64" y="54" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="system-ui,sans-serif">Treasury Balance</text>
      <text x="44" y="82" fontSize="18" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="700">$847,200</text>
      <rect x="210" y="30" width="160" height="80" rx="6" fill="rgba(255,255,255,0.035)" />
      <rect x="210" y="30" width="160" height="80" rx="6" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="224" y="44" width="12" height="12" rx="2" fill="#ee2737" />
      <text x="244" y="54" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="system-ui,sans-serif">Active Users</text>
      <text x="224" y="82" fontSize="18" fill="#fff" fontFamily="system-ui,sans-serif" fontWeight="700">24</text>
      <rect x="30" y="130" width="340" height="74" rx="6" fill="rgba(255,255,255,0.035)" />
      <rect x="30" y="130" width="340" height="74" rx="6" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="44" y="144" width="12" height="12" rx="2" fill="#235ba8" />
      <text x="64" y="154" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="system-ui,sans-serif">Network Status</text>
      <circle cx="80" cy="180" r="10" fill="rgba(35,91,168,0.2)" stroke="#235ba8" strokeWidth="1" />
      <circle cx="130" cy="170" r="8" fill="rgba(238,39,55,0.15)" stroke="#ee2737" strokeWidth="1" />
      <circle cx="180" cy="182" r="6" fill="rgba(35,91,168,0.15)" stroke="#235ba8" strokeWidth="1" />
      <circle cx="220" cy="165" r="7" fill="rgba(238,39,55,0.12)" stroke="#ee2737" strokeWidth="1" />
      <circle cx="250" cy="180" r="9" fill="rgba(35,91,168,0.18)" stroke="#235ba8" strokeWidth="1" />
      <line x1="90" y1="180" x2="122" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="138" y1="170" x2="174" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="186" y1="182" x2="213" y2="165" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="227" y1="165" x2="241" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="310" y="144" width="46" height="20" rx="4" fill="rgba(74,222,128,0.12)" />
      <text x="333" y="157" fontSize="9" fill="#4ade80" fontFamily="system-ui,sans-serif" fontWeight="700" textAnchor="middle">ACTIVE</text>
      <rect x="70" y="220" width="60" height="60" rx="4" fill="#235ba8" />
      <rect x="80" y="228" width="40" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="80" y="242" width="40" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="80" y="250" width="30" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="80" y="258" width="36" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="145" y="220" width="60" height="60" rx="4" fill="#ee2737" />
      <rect x="155" y="228" width="40" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="155" y="242" width="40" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="155" y="250" width="30" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="155" y="258" width="36" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="220" y="220" width="60" height="60" rx="4" fill="#235ba8" opacity="0.6" />
      <rect x="230" y="228" width="40" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="230" y="242" width="40" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="230" y="250" width="30" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="230" y="258" width="36" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="295" y="220" width="60" height="60" rx="4" fill="#ee2737" opacity="0.5" />
      <rect x="305" y="228" width="40" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="305" y="242" width="40" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="305" y="250" width="30" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="305" y="258" width="36" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

function AccountImage({ label }: { label: string }) {
  switch (label) {
    case 'Checking Account Dashboard':
      return <CheckingDashboard />;
    case 'Savings Growth Chart':
      return <SavingsChart />;
    case 'Fixed Deposit Term Sheet':
      return <FixedDeposit />;
    case 'Business Treasury Console':
      return <BusinessConsole />;
    default:
      return null;
  }
}

const accounts = [
  {
    name: 'Checking',
    desc: 'Everyday USD transaction account with zero fees, instant payment support, and unlimited real-time transfers.',
    bar: 'bg-primary-500',
    img: 'Checking Account Dashboard',
  },
  {
    name: 'Savings',
    desc: 'High-yield USD savings account with competitive interest rates and flexible deposit terms.',
    bar: 'bg-emerald-600',
    img: 'Savings Growth Chart',
  },
  {
    name: 'Fixed Deposit',
    desc: 'USD term deposits offering guaranteed returns at competitive rates.',
    bar: 'bg-primary-500',
    img: 'Fixed Deposit Term Sheet',
  },
  {
    name: 'Business',
    desc: 'Corporate USD account with multi-user access, business verification, and integrated treasury tools.',
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
              <AccountImage label={accounts[topIdx].img} />
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
              <AccountImage label={accounts[bottomIdx].img} />
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
              <AccountImage label={a.img} />
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
