export default function SecurityCompliance() {
  const badges = [
    { title: 'APRA Regulated', desc: 'Authorised Deposit-taking Institution' },
    { title: 'AUSTRAC Compliant', desc: 'Anti-Money Laundering / CTF' },
    { title: 'ASIC Licensed', desc: 'Australian financial services' },
  ];

  return (
    <section className="py-12 bg-white border-y border-muted-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-navy-900 mb-1">Security & Compliance</h2>
            <p className="text-xs text-gray-500">Operating at the highest standards of international banking security.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
            {badges.map((b) => (
              <div key={b.title} className="flex items-center gap-3 bg-muted-100 px-4 py-3">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-primary-500 flex-shrink-0">
                  <path d="M9 1L2 4v5c0 4.63 3.04 8.94 7 10 3.96-1.06 7-5.37 7-10V4L9 1z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-xs font-bold text-navy-900 whitespace-nowrap">{b.title}</p>
                  <p className="text-[10px] text-gray-400 whitespace-nowrap">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <svg
            viewBox="0 0 2100 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2100" height="400" fill="#f3f4f6" rx="8" />

            <defs>
              <pattern id="socGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d1d5db" strokeWidth="0.5" />
              </pattern>
              <pattern id="socGridDark" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0d1b2e" strokeWidth="0.3" opacity="0.4" />
              </pattern>
            </defs>

            <rect width="2100" height="400" fill="url(#socGrid)" />
            <rect width="2100" height="400" fill="url(#socGridDark)" />

            <line x1="0" y1="40" x2="2100" y2="40" stroke="#0d1b2e" strokeWidth="1.5" />
            <line x1="0" y1="360" x2="2100" y2="360" stroke="#ee2737" strokeWidth="2" />

            <text x="1050" y="28" textAnchor="middle" fill="#0d1b2e" fontSize="13" fontWeight="800" letterSpacing="4">SECURITY OPERATIONS CENTRE</text>

            <rect x="40" y="60" width="480" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="40" y="60" width="480" height="24" rx="4" fill="#0d1b2e" />
            <rect x="40" y="78" width="480" height="6" fill="#0d1b2e" />
            <circle cx="56" cy="72" r="4" fill="#ee2737" />
            <text x="180" y="76" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">THREAT MONITOR</text>
            <text x="75" y="104" fill="#0d1b2e" fontSize="9" fontWeight="600">ALERTS</text>
            <rect x="75" y="108" width="80" height="16" rx="2" fill="#fee2e2" />
            <text x="115" y="120" textAnchor="middle" fill="#ee2737" fontSize="9" fontWeight="700">12 CRITICAL</text>
            <rect x="165" y="108" width="80" height="16" rx="2" fill="#fef3c7" />
            <text x="205" y="120" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="600">8 WARNING</text>
            <rect x="255" y="108" width="80" height="16" rx="2" fill="#ecfdf5" />
            <text x="295" y="120" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="600">23 INFO</text>
            <line x1="75" y1="136" x2="490" y2="136" stroke="#e5e7eb" strokeWidth="1" />
            <text x="75" y="150" fill="#0d1b2e" fontSize="9" fontWeight="600">THREAT LEVEL</text>
            <rect x="155" y="139" width="200" height="10" rx="5" fill="#e5e7eb" />
            <rect x="155" y="139" width="120" height="10" rx="5" fill="#ee2737" />

            <rect x="550" y="60" width="480" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="550" y="60" width="480" height="24" rx="4" fill="#0d1b2e" />
            <rect x="550" y="78" width="480" height="6" fill="#0d1b2e" />
            <circle cx="566" cy="72" r="4" fill="#10b981" />
            <text x="690" y="76" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">DATA STREAMS</text>

            <polyline
              points="570,150 610,120 650,145 690,90 730,135 770,100 810,130 850,75 890,120 930,95 970,130 1010,85"
              fill="none" stroke="#0d1b2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <polyline
              points="570,170 620,160 670,175 720,140 770,165 820,150 870,170 920,145 970,160 1020,140"
              fill="none" stroke="#ee2737" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"
            />
            <circle cx="610" cy="120" r="3" fill="#ee2737" />
            <circle cx="690" cy="90" r="3" fill="#ee2737" />
            <circle cx="850" cy="75" r="3" fill="#ee2737" />
            <circle cx="1010" cy="85" r="3" fill="#ee2737" />
            <text x="575" y="188" fill="#6b7280" fontSize="8" fontWeight="500">THROUGHPUT: 1.2 GB/s</text>

            <rect x="1060" y="60" width="280" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="1060" y="60" width="280" height="24" rx="4" fill="#0d1b2e" />
            <rect x="1060" y="78" width="280" height="6" fill="#0d1b2e" />
            <circle cx="1076" cy="72" r="4" fill="#3b82f6" />
            <text x="1180" y="76" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">CONNECTION NODES</text>

            <circle cx="1160" cy="125" r="18" fill="none" stroke="#0d1b2e" strokeWidth="1.5" />
            <circle cx="1160" cy="125" r="6" fill="#ee2737" />
            <circle cx="1240" cy="110" r="12" fill="none" stroke="#0d1b2e" strokeWidth="1.2" />
            <circle cx="1240" cy="110" r="4" fill="#10b981" />
            <circle cx="1100" cy="150" r="10" fill="none" stroke="#0d1b2e" strokeWidth="1" />
            <circle cx="1100" cy="150" r="3" fill="#3b82f6" />
            <circle cx="1280" cy="155" r="14" fill="none" stroke="#0d1b2e" strokeWidth="1.2" />
            <circle cx="1280" cy="155" r="5" fill="#f59e0b" />
            <line x1="1160" y1="107" x2="1240" y2="98" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1148" y1="140" x2="1100" y2="140" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1178" y1="125" x2="1266" y2="155" stroke="#6b7280" strokeWidth="0.8" />

            <rect x="1370" y="60" width="200" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="1370" y="60" width="200" height="24" rx="4" fill="#0d1b2e" />
            <rect x="1370" y="78" width="200" height="6" fill="#0d1b2e" />
            <circle cx="1386" cy="72" r="4" fill="#8b5cf6" />
            <text x="1470" y="76" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">SHIELD STATUS</text>

            <path d="M1440 100 L1470 88 L1500 100 L1500 132 C1500 148 1470 160 1470 160 C1470 160 1440 148 1440 132 Z" fill="none" stroke="#0d1b2e" strokeWidth="1.5" />
            <path d="M1455 128 L1465 138 L1485 118" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="1470" y="178" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="700">ACTIVE</text>

            <rect x="1600" y="60" width="460" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="1600" y="60" width="460" height="24" rx="4" fill="#0d1b2e" />
            <rect x="1600" y="78" width="460" height="6" fill="#0d1b2e" />
            <circle cx="1616" cy="72" r="4" fill="#f59e0b" />
            <text x="1730" y="76" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">PULSE WAVEFORM</text>

            <path d="M1620 150 L1660 150 L1680 100 L1700 140 L1720 120 L1740 150 L1760 80 L1780 145 L1800 110 L1820 150 L1840 135 L1860 150 L1880 95 L1900 150 L1940 150" fill="none" stroke="#ee2737" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1620 165 L1660 165 L1680 140 L1700 160 L1720 150 L1740 165 L1760 130 L1780 160 L1800 145 L1820 165 L1840 155 L1860 165 L1880 125 L1900 165 L1940 165" fill="none" stroke="#0d1b2e" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />

            <rect x="40" y="210" width="860" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="40" y="210" width="860" height="24" rx="4" fill="#0d1b2e" />
            <rect x="40" y="228" width="860" height="6" fill="#0d1b2e" />
            <circle cx="56" cy="222" r="4" fill="#ee2737" />
            <text x="220" y="226" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">INCIDENT LOG</text>

            <rect x="60" y="242" width="820" height="18" rx="2" fill="#f9fafb" />
            <circle cx="74" cy="251" r="3" fill="#ee2737" />
            <text x="84" y="254" fill="#0d1b2e" fontSize="9" fontWeight="600">CRIT</text>
            <text x="115" y="254" fill="#374151" fontSize="8">Unauthorized access attempt — 203.0.113.42</text>
            <text x="700" y="254" fill="#6b7280" fontSize="8">2s ago</text>

            <rect x="60" y="264" width="820" height="18" rx="2" fill="#f9fafb" />
            <circle cx="74" cy="273" r="3" fill="#f59e0b" />
            <text x="84" y="276" fill="#0d1b2e" fontSize="9" fontWeight="600">WARN</text>
            <text x="115" y="276" fill="#374151" fontSize="8">Suspicious outbound data transfer detected — 10.0.1.45</text>
            <text x="700" y="276" fill="#6b7280" fontSize="8">15s ago</text>

            <rect x="60" y="286" width="820" height="18" rx="2" fill="#f9fafb" />
            <circle cx="74" cy="295" r="3" fill="#3b82f6" />
            <text x="84" y="298" fill="#0d1b2e" fontSize="9" fontWeight="600">INFO</text>
            <text x="115" y="298" fill="#374151" fontSize="8">Certificate rotation completed — *.bankingapp.com</text>
            <text x="700" y="298" fill="#6b7280" fontSize="8">42s ago</text>

            <rect x="60" y="308" width="820" height="18" rx="2" fill="#f9fafb" />
            <circle cx="74" cy="317" r="3" fill="#10b981" />
            <text x="84" y="320" fill="#0d1b2e" fontSize="9" fontWeight="600">OK</text>
            <text x="115" y="320" fill="#374151" fontSize="8">All nodes passed health check — 24/24 online</text>
            <text x="700" y="320" fill="#6b7280" fontSize="8">1m ago</text>

            <rect x="930" y="210" width="530" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="930" y="210" width="530" height="24" rx="4" fill="#0d1b2e" />
            <rect x="930" y="228" width="530" height="6" fill="#0d1b2e" />
            <circle cx="946" cy="222" r="4" fill="#10b981" />
            <text x="1130" y="226" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">NETWORK TOPOLOGY</text>

            <circle cx="1120" cy="290" r="22" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="1.5" />
            <circle cx="1120" cy="290" r="8" fill="#ee2737" />
            <circle cx="1240" cy="260" r="14" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="1" />
            <circle cx="1240" cy="260" r="5" fill="#3b82f6" />
            <circle cx="1240" cy="318" r="14" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="1" />
            <circle cx="1240" cy="318" r="5" fill="#10b981" />
            <circle cx="1320" cy="290" r="18" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="1.2" />
            <circle cx="1320" cy="290" r="6" fill="#f59e0b" />
            <circle cx="1030" cy="260" r="10" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="0.8" />
            <circle cx="1030" cy="260" r="3.5" fill="#8b5cf6" />
            <circle cx="1030" cy="318" r="10" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="0.8" />
            <circle cx="1030" cy="318" r="3.5" fill="#ec4899" />
            <line x1="1120" y1="268" x2="1240" y2="246" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1120" y1="312" x2="1240" y2="304" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1120" y1="280" x2="1030" y2="252" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1120" y1="300" x2="1030" y2="310" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1254" y1="260" x2="1302" y2="290" stroke="#6b7280" strokeWidth="0.8" />
            <line x1="1254" y1="318" x2="1302" y2="290" stroke="#6b7280" strokeWidth="0.8" />

            <rect x="1490" y="210" width="570" height="130" rx="4" fill="#ffffff" stroke="#0d1b2e" strokeWidth="1" />
            <rect x="1490" y="210" width="570" height="24" rx="4" fill="#0d1b2e" />
            <rect x="1490" y="228" width="570" height="6" fill="#0d1b2e" />
            <circle cx="1506" cy="222" r="4" fill="#ee2737" />
            <text x="1680" y="226" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1.5">THREAT ANALYSIS</text>

            <rect x="1510" y="244" width="130" height="80" rx="3" fill="#fee2e2" stroke="#ee2737" strokeWidth="0.8" />
            <text x="1575" y="262" textAnchor="middle" fill="#ee2737" fontSize="9" fontWeight="700">MALWARE</text>
            <text x="1575" y="290" textAnchor="middle" fill="#0d1b2e" fontSize="20" fontWeight="800">6</text>
            <text x="1575" y="308" textAnchor="middle" fill="#6b7280" fontSize="8">detected</text>

            <rect x="1650" y="244" width="130" height="80" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.8" />
            <text x="1715" y="262" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="700">PHISHING</text>
            <text x="1715" y="290" textAnchor="middle" fill="#0d1b2e" fontSize="20" fontWeight="800">23</text>
            <text x="1715" y="308" textAnchor="middle" fill="#6b7280" fontSize="8">blocked</text>

            <rect x="1790" y="244" width="130" height="80" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="0.8" />
            <text x="1855" y="262" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="700">DDoS</text>
            <text x="1855" y="290" textAnchor="middle" fill="#0d1b2e" fontSize="20" fontWeight="800">0</text>
            <text x="1855" y="308" textAnchor="middle" fill="#6b7280" fontSize="8">mitigated</text>

            <rect x="1930" y="244" width="110" height="80" rx="3" fill="#f3f4f6" stroke="#0d1b2e" strokeWidth="0.8" />
            <text x="1985" y="262" textAnchor="middle" fill="#0d1b2e" fontSize="9" fontWeight="700">TOTAL</text>
            <text x="1985" y="290" textAnchor="middle" fill="#0d1b2e" fontSize="20" fontWeight="800">29</text>
            <text x="1985" y="308" textAnchor="middle" fill="#6b7280" fontSize="8">threats</text>

            <text x="1050" y="385" textAnchor="middle" fill="#6b7280" fontSize="8" fontWeight="500">REAL-TIME MONITORING ACTIVE — ALL SYSTEMS OPERATIONAL</text>
            <circle cx="980" cy="382" r="3" fill="#10b981" />
            <circle cx="1120" cy="382" r="3" fill="#10b981" />
          </svg>
        </div>
      </div>
    </section>
  );
}
