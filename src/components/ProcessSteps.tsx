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
    desc: 'Our compliance team conducts fast, thorough identity verification in line with international AML standards.',
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
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 font-playfair leading-tight">
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
      </div>
    </section>
  );
};

export default ProcessSteps;
