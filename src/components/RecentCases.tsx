'use client';

import Link from 'next/link';

const cases = [
  {
    type: 'Regulatory Referral & Bank Freeze',
    scam: 'Crypto Investment Scam',
    amount: '$1.2M',
    timeframe: '45 Days',
    location: 'New York, USA',
    description: 'Successfully froze and repatriated funds from a fraudulent offshore trading platform targeting investors via social media.',
  },
  {
    type: 'Blockchain Tracing & Regulatory Order',
    scam: 'Pig-Butchering Crypto Scam',
    amount: '$850,000',
    timeframe: '60 Days',
    location: 'London, UK',
    description: 'Collaborated with international authorities and AML/CTF regulators to track illicit token movements and force settlement via wallet blacklisting.',
  },
  {
    type: 'Wire Recall & Legal Demand',
    scam: 'Romance Investment Fraud',
    amount: '$450,000',
    timeframe: '30 Days',
    location: 'Singapore',
    description: 'Intercepted SWIFT transfers early and issued immediate legal demands via the receiving banking institution under international banking regulations.',
  },
];

const CaseCardSvg = (
  <svg viewBox="0 0 400 250" className="w-full h-auto mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="250" fill="#0f1b2d" />
    <line x1="0" y1="40" x2="400" y2="40" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="0" y1="80" x2="400" y2="80" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="0" y1="120" x2="400" y2="120" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="0" y1="160" x2="400" y2="160" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="0" y1="200" x2="400" y2="200" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="50" y1="0" x2="50" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="100" y1="0" x2="100" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="150" y1="0" x2="150" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="200" y1="0" x2="200" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="250" y1="0" x2="250" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="300" y1="0" x2="300" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <line x1="350" y1="0" x2="350" y2="250" stroke="#1a2d4a" strokeWidth="0.5" />
    <path d="M50 50 L120 85 L200 45" stroke="#235ba8" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
    <path d="M200 45 L275 100 L350 60" stroke="#235ba8" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
    <path d="M80 130 L155 185 L230 140" stroke="#ee2737" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
    <path d="M230 140 L310 200" stroke="#ee2737" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
    <circle cx="50" cy="50" r="6" fill="#235ba8" fillOpacity="0.8" />
    <circle cx="120" cy="85" r="4" fill="#235ba8" fillOpacity="0.6" />
    <circle cx="200" cy="45" r="5" fill="#235ba8" fillOpacity="0.9" />
    <circle cx="275" cy="100" r="3" fill="#235ba8" fillOpacity="0.5" />
    <circle cx="350" cy="60" r="4" fill="#235ba8" fillOpacity="0.7" />
    <circle cx="80" cy="130" r="3" fill="#ee2737" fillOpacity="0.6" />
    <circle cx="155" cy="185" r="5" fill="#ee2737" fillOpacity="0.8" />
    <circle cx="230" cy="140" r="4" fill="#ee2737" fillOpacity="0.7" />
    <circle cx="310" cy="200" r="3" fill="#ee2737" fillOpacity="0.5" />
    <circle cx="300" cy="150" r="25" stroke="#235ba8" strokeWidth="2" strokeOpacity="0.4" fill="none" />
    <line x1="318" y1="168" x2="335" y2="185" stroke="#235ba8" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
    <circle cx="300" cy="150" r="8" stroke="#ee2737" strokeWidth="1" strokeOpacity="0.5" fill="none" />
    <line x1="292" y1="150" x2="308" y2="150" stroke="#ee2737" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="300" y1="142" x2="300" y2="158" stroke="#ee2737" strokeWidth="1" strokeOpacity="0.5" />
    <rect width="400" height="3" fill="#ee2737" />
    <polygon points="50,160 70,150 90,160 90,180 70,190 50,180" stroke="#235ba8" strokeWidth="1" strokeOpacity="0.3" fill="none" />
    <circle cx="110" cy="155" r="2" fill="#235ba8" fillOpacity="0.4" />
    <circle cx="130" cy="165" r="2" fill="#235ba8" fillOpacity="0.4" />
    <circle cx="150" cy="150" r="2" fill="#235ba8" fillOpacity="0.4" />
    <line x1="30" y1="80" x2="60" y2="80" stroke="#ee2737" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="25" y1="90" x2="55" y2="90" stroke="#ee2737" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="35" y1="100" x2="65" y2="100" stroke="#ee2737" strokeWidth="0.5" strokeOpacity="0.25" />
  </svg>
);

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
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4">Recent Success Cases</h2>
            <p className="text-white/60 leading-relaxed">
              Our legal and forensic team routinely handles complex international financial fraud. Here are some of our recently closed cases.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-navy-800 border border-navy-700/50 hover:bg-navy-800/80 transition-colors">
              <div className="px-8 pt-9 pb-0">
                {CaseCardSvg}
                <span className="inline-block text-[10px] font-bold text-primary-400 uppercase tracking-wider bg-primary-400/10 px-3 py-1">
                  {c.type}
                </span>
              </div>
              <div className="px-8 pb-9 pt-6">
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
