'use client';

const steps = [
  {
    num: '01',
    title: 'Submit Documents',
    desc: 'Upload government-issued identification and proof of address securely through our encrypted client portal.',
  },
  {
    num: '02',
    title: 'KYC Verification',
    desc: 'AUSTRAC-compliant identity verification conducted by our Australian compliance team in line with local AML/CTF regulations.',
  },
  {
    num: '03',
    title: 'Deposit & Grow',
    desc: 'Fund your account and immediately access the full suite of Nexus banking, investment, and security services.',
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-muted-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-0.5 bg-primary-500" />
            <span className="text-primary-500 text-xs font-bold tracking-[0.22em] uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-navy-900 leading-tight">
            Open an Account in 5 Minutes
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-0 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-stretch flex-1">
              <div className="flex-1 bg-white border-l-4 border-secondary-500 px-8 lg:px-9 py-10 lg:py-11 hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="font-playfair text-5xl font-black text-muted-300 leading-none block mb-4">
                  {s.num}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center px-1 flex-shrink-0">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-primary-500">
                    <path d="M2 12H30M20 4L30 12L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <svg viewBox="0 0 2100 600" className="w-full h-auto rounded-lg" xmlns="http://www.w3.org/2000/svg">
            <rect width="2100" height="600" fill="#f9fafb" rx="12" />
            {/* Grid pattern */}
            <g stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5">
              {Array.from({ length: 22 }, (_, i) => <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />)}
              {Array.from({ length: 7 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 100} x2="2100" y2={i * 100} />)}
            </g>
            {/* Top accent bar */}
            <rect x="0" y="0" width="2100" height="4" fill="#ee2737" />
            {/* Header bar */}
            <rect x="0" y="0" width="2100" height="64" fill="#0d1b2e" />
            <text x="48" y="40" fill="#ffffff" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="1">VERIFICATION DASHBOARD</text>
            {/* Header decorative line */}
            <line x1="310" y1="26" x2="310" y2="38" stroke="#ee2737" strokeWidth="3" />
            <circle cx="310" cy="32" r="4" fill="#ee2737" />
            {/* Stats cards */}
            {[
              { label: 'TOTAL VERIFIED', value: '12,847', x: 48, color: '#0d1b2e' },
              { label: 'PENDING REVIEW', value: '234', x: 328, color: '#ee2737' },
              { label: 'APPROVAL RATE', value: '98.2%', x: 608, color: '#0d1b2e' },
            ].map((stat, i) => (
              <g key={i}>
                <rect x={stat.x} y="88" width="240" height="80" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                <text x={stat.x + 16} y="118" fill="#9ca3af" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="1.5">{stat.label}</text>
                <text x={stat.x + 16} y="150" fill={stat.color} fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="800">{stat.value}</text>
              </g>
            ))}
            {/* ID Card representation */}
            <g transform="translate(48, 200)">
              <rect width="340" height="200" rx="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              {/* Card header */}
              <rect width="340" height="40" rx="10" fill="#0d1b2e" />
              <rect y="30" width="340" height="10" fill="#0d1b2e" />
              <text x="170" y="26" fill="#ffffff" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="2">GOVERNMENT ID</text>
              {/* Photo placeholder */}
              <rect x="20" y="56" width="64" height="80" rx="6" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
              <circle cx="52" cy="88" r="16" fill="#d1d5db" />
              <rect x="36" y="115" width="32" height="6" rx="3" fill="#d1d5db" />
              {/* ID details */}
              <rect x="96" y="60" width="160" height="8" rx="4" fill="#e5e7eb" />
              <rect x="96" y="78" width="120" height="8" rx="4" fill="#e5e7eb" />
              <rect x="96" y="96" width="200" height="8" rx="4" fill="#e5e7eb" />
              <rect x="96" y="114" width="90" height="8" rx="4" fill="#e5e7eb" />
              <rect x="20" y="156" width="300" height="1" fill="#e5e7eb" />
              {/* Barcode */}
              {[6, 10, 6, 14, 8, 12, 6, 18, 10, 8, 14, 6, 10, 8, 12, 6].map((w, j) => (
                <rect key={j} x={20 + j * 19} y="168" width={w} height="20" fill="#0d1b2e" opacity="0.8" />
              ))}
              {/* Stamp */}
              <rect x="264" y="56" width="60" height="60" rx="30" fill="none" stroke="#ee2737" strokeWidth="2" opacity="0.5" />
              <text x="294" y="86" fill="#ee2737" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="700" opacity="0.5" textAnchor="middle">VERIFIED</text>
            </g>
            {/* Second ID Card */}
            <g transform="translate(420, 200)">
              <rect width="340" height="200" rx="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              <rect width="340" height="40" rx="10" fill="#0d1b2e" />
              <rect y="30" width="340" height="10" fill="#0d1b2e" />
              <text x="170" y="26" fill="#ffffff" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="2">PROOF OF ADDRESS</text>
              <text x="170" y="78" fill="#0d1b2e" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">123 George Street</text>
              <text x="170" y="100" fill="#6b7280" fontSize="13" fontFamily="system-ui, sans-serif" textAnchor="middle">Sydney NSW 2000, Australia</text>
              <rect x="170" y="120" width="140" height="8" rx="4" fill="#e5e7eb" />
              <rect x="170" y="140" width="100" height="8" rx="4" fill="#e5e7eb" />
              {/* Checkmark overlay */}
              <g transform="translate(270, 130)">
                <rect x="-20" y="-20" width="40" height="40" rx="20" fill="#10b981" />
                <polyline points="-8,0 -3,6 8,-6" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            {/* Progress / Timeline panel */}
            <g transform="translate(800, 200)">
              <rect width="420" height="200" rx="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              <text x="20" y="28" fill="#0d1b2e" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="1">VERIFICATION PROGRESS</text>
              {[
                { label: 'Document Upload', pct: 100, i: 0 },
                { label: 'Identity Check', pct: 100, i: 1 },
                { label: 'Address Verification', pct: 100, i: 2 },
                { label: 'Compliance Review', pct: 65, i: 3 },
              ].map((item, idx) => (
                <g key={idx}>
                  <text x="20" y={60 + idx * 34} fill="#374151" fontSize="12" fontFamily="system-ui, sans-serif">{item.label}</text>
                  <rect x="200" y={52 + idx * 34} width="180" height="10" rx="5" fill="#f3f4f6" />
                  <rect x="200" y={52 + idx * 34} width={180 * item.pct / 100} height="10" rx="5" fill={item.pct === 100 ? '#10b981' : '#ee2737'} />
                  <text x="392" y={60 + idx * 34} fill={item.pct === 100 ? '#10b981' : '#ee2737'} fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">{item.pct}%</text>
                </g>
              ))}
            </g>
            {/* Verification Badges area */}
            <g transform="translate(1260, 200)">
              <rect width="340" height="200" rx="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              <text x="20" y="28" fill="#0d1b2e" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="1">SECURITY BADGES</text>
              {[
                { label: 'AUSTRAC Compliant', icon: '✓' },
                { label: 'AML/CTF Verified', icon: '✓' },
                { label: 'Encrypted Channel', icon: '✓' },
                { label: 'Identity Guaranteed', icon: '✓' },
              ].map((badge, idx) => (
                <g key={idx} transform={`translate(20, ${48 + idx * 34})`}>
                  <rect width="300" height="26" rx="6" fill={idx < 2 ? '#fef2f2' : '#f9fafb'} />
                  <rect x="6" y="6" width="14" height="14" rx="7" fill={idx === 1 ? '#ee2737' : '#0d1b2e'} />
                  <text x="13" y="16" fill="#ffffff" fontSize="10" fontWeight="700" textAnchor="middle">✓</text>
                  <text x="30" y="17" fill={idx < 2 ? '#ee2737' : '#374151'} fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600">{badge.label}</text>
                </g>
              ))}
            </g>
            {/* Bottom: Inline verification status bar */}
            <g transform="translate(48, 440)">
              <rect width="1552" height="100" rx="10" fill="#0d1b2e" />
              {/* Live indicator */}
              <circle cx="36" cy="50" r="6" fill="#10b981" />
              <circle cx="36" cy="50" r="10" fill="#10b981" opacity="0.3" />
              <text x="56" y="46" fill="#ffffff" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="600">Live Verification In Progress</text>
              <text x="56" y="66" fill="#9ca3af" fontSize="12" fontFamily="system-ui, sans-serif">2,341 identities verified today</text>
              {/* Avatar stack */}
              {[0, 1, 2, 3, 4].map((a, idx) => (
                <circle key={idx} cx={400 + idx * 36} cy="50" r="14" fill="#1e293b" stroke="#0d1b2e" strokeWidth="2" />
              ))}
              <text x="590" y="54" fill="#9ca3af" fontSize="12" fontFamily="system-ui, sans-serif">+842 active sessions</text>
              {/* Action button */}
              <rect x="1350" y="30" width="160" height="40" rx="8" fill="#ee2737" />
              <text x="1430" y="55" fill="#ffffff" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">View Reports</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
