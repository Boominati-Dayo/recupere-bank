import ImagePlaceholder from './ImagePlaceholder';

export default function SecurityCompliance() {
  const badges = [
    { title: 'APRA Regulated', desc: 'Authorised Deposit-taking Institution' },
    { title: 'AES-256 Encryption', desc: 'Bank-grade data security' },
    { title: 'PCI-DSS Compliant', desc: 'Payment industry standards' },
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
          <ImagePlaceholder label="Security Operations Centre" aspectRatio="aspect-[21/4]" dark={false} />
        </div>
      </div>
    </section>
  );
}
