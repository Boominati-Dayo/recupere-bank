'use client';

import Link from 'next/link';

const cases = [
  {
    type: 'Forensic Bank Levy',
    scam: 'Unregulated Forex Broker',
    amount: '$1.2M',
    timeframe: '45 Days',
    location: 'Cyprus',
    description: 'Successfully froze and repatriated funds from a fraudulent overseas trading platform masquerading as a licensed broker.',
  },
  {
    type: 'Blockchain Tracing',
    scam: 'Crypto Liquidity Pool Scam',
    amount: '24.5 BTC',
    timeframe: '60 Days',
    location: 'Dubai',
    description: 'Collaborated with international authorities to track illicit token movements and force settlement via wallet blacklisting.',
  },
  {
    type: 'Wire Recall & Legal Demand',
    scam: 'Romance Investment Fraud',
    amount: '$450,000',
    timeframe: '30 Days',
    location: 'Singapore',
    description: 'Intercepted SWIFT transfers early and issued immediate legal demands to the receiving international banking institution.',
  },
];

export default function RecentCases() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-0.5 bg-primary-400" />
              <span className="text-primary-400 text-xs font-bold tracking-[0.22em] uppercase">Proven Results</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-playfair mb-4">Recent Success Cases</h2>
            <p className="text-white/60 leading-relaxed">
              Our legal and forensic team routinely handles complex international financial fraud. Here are some of our recently closed cases.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-navy-800 border border-navy-700/50 px-8 py-9 hover:bg-navy-800/80 transition-colors">
              <span className="inline-block text-[10px] font-bold text-primary-400 uppercase tracking-wider bg-primary-400/10 px-3 py-1 mb-6">
                {c.type}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{c.scam}</h3>
              <p className="text-xs text-white/40 mb-6">Jurisdiction: {c.location}</p>

              <div className="flex gap-4 mb-6 pb-6 border-b border-navy-700">
                <div>
                  <p className="text-2xl font-bold text-primary-400">{c.amount}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Recovered</p>
                </div>
                <div className="w-px bg-navy-700" />
                <div>
                  <p className="text-2xl font-bold text-white">{c.timeframe}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Resolution</p>
                </div>
              </div>

              <p className="text-sm text-white/60 leading-relaxed font-light">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/track-claim"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            View All Cases
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
