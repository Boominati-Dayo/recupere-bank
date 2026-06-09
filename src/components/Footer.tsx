import Link from 'next/link';

const ShieldLogoSm = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <clipPath id="footer-shield">
      <path d="M21 2.5L4.5 8.8V19.5C4.5 29.2 11.8 37.8 21 39.8C30.2 37.8 37.5 29.2 37.5 19.5V8.8L21 2.5Z" />
    </clipPath>
    <rect x="4.5" y="2.5" width="16.5" height="38" clipPath="url(#footer-shield)" fill="rgba(238,39,55,0.15)" />
    <rect x="21" y="2.5" width="16.5" height="38" clipPath="url(#footer-shield)" fill="rgba(35,91,168,0.15)" />
    <path d="M21 2.5L4.5 8.8V19.5C4.5 29.2 11.8 37.8 21 39.8" fill="none" stroke="#ee2737" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 2.5L37.5 8.8V19.5C37.5 29.2 30.2 37.8 21 39.8" fill="none" stroke="#235ba8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="21" y1="2.5" x2="21" y2="39.8" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
    <line x1="13" y1="17" x2="29" y2="17" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="21" y1="14" x2="21" y2="28" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="13" y1="17" x2="13" y2="22" stroke="rgba(255,255,255,0.70)" strokeWidth="1" strokeLinecap="round" />
    <line x1="29" y1="17" x2="29" y2="22" stroke="rgba(255,255,255,0.70)" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 22 Q13 25.5 16 22" stroke="rgba(255,255,255,0.70)" strokeWidth="1" fill="none" strokeLinecap="round" />
    <path d="M26 22 Q29 25.5 32 22" stroke="rgba(255,255,255,0.70)" strokeWidth="1" fill="none" strokeLinecap="round" />
    <line x1="18.5" y1="28" x2="23.5" y2="28" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="21" cy="13.5" r="1.2" fill="#ffffff" />
  </svg>
);

const ShieldLogoLg = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <clipPath id="footer-shield-lg">
      <path d="M26 3L5 11.5V24C5 36.8 14.5 47.8 26 50.5C37.5 47.8 47 36.8 47 24V11.5L26 3Z" />
    </clipPath>
    <rect x="5" y="3" width="21" height="48" clipPath="url(#footer-shield-lg)" fill="rgba(238,39,55,0.15)" />
    <rect x="26" y="3" width="21" height="48" clipPath="url(#footer-shield-lg)" fill="rgba(35,91,168,0.15)" />
    <path d="M26 3L5 11.5V24C5 36.8 14.5 47.8 26 50.5" fill="none" stroke="#ee2737" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 3L47 11.5V24C47 36.8 37.5 47.8 26 50.5" fill="none" stroke="#235ba8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="26" y1="3" x2="26" y2="50.5" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
    <line x1="16" y1="22" x2="36" y2="22" stroke="rgba(255,255,255,0.88)" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="26" y1="18.5" x2="26" y2="35" stroke="rgba(255,255,255,0.88)" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="16" y1="22" x2="16" y2="27.5" stroke="rgba(255,255,255,0.70)" strokeWidth="1.1" strokeLinecap="round" />
    <line x1="36" y1="22" x2="36" y2="27.5" stroke="rgba(255,255,255,0.70)" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M12.5 27.5 Q16 31.5 19.5 27.5" stroke="rgba(255,255,255,0.70)" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    <path d="M32.5 27.5 Q36 31.5 39.5 27.5" stroke="rgba(255,255,255,0.70)" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    <line x1="22.5" y1="35" x2="29.5" y2="35" stroke="rgba(255,255,255,0.88)" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="26" cy="18" r="1.4" fill="#ffffff" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const servicesLinks = [
  { name: 'Home', href: '/' },
  { name: 'Asset Recovery', href: '/asset-recovery' },
  { name: 'Banking Services', href: '/banking' },
  { name: 'Track My Case', href: '/track-claim' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="w-full leading-none overflow-hidden">
        <svg viewBox="0 0 1728 80" preserveAspectRatio="none" className="block w-full h-[60px] mobile:h-[80px]">
          <polygon points="0,0 1728,0 1728,80 0,30" fill="#0d1b2e" />
        </svg>
      </div>

      <div className="w-full bg-[#0d1b2e] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] mobile:text-[220px] font-black tracking-[0.08em] text-white/[0.028] uppercase whitespace-nowrap pointer-events-none select-none leading-none z-0"
          aria-hidden="true"
        >
          NEXUS
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 mobile:px-10 pt-12 mobile:pt-16">
          <div className="hidden mobile:grid grid-cols-[2fr_1.3fr_1.5fr_1.5fr] gap-[60px] pb-14">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-5 no-underline" aria-label="Nexus Banking Home">
                <ShieldLogoSm />
                <div className="flex flex-col leading-none gap-[3px]">
                  <span className="text-[18px] font-black tracking-[0.22em] text-white uppercase leading-none">Nexus</span>
                  <span className="text-[9px] font-medium tracking-[0.38em] text-[#cfd6e0] uppercase leading-none">Banking</span>
                </div>
              </Link>
              <p className="text-[13.5px] font-normal leading-[1.78] text-[#cfd6e0]/75 max-w-[295px] mb-7">
                We are the bridge between financial loss and legal recovery. Nexus combines the power of a specialized law firm with the security of a chartered bank to fight for what belongs to you.
              </p>
              <div className="flex gap-[10px]">
                {[
                  { label: 'LinkedIn', href: '#', path: 'M19 3a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H19zm1.5 4h2.5v2.5a3.5 3.5 0 0 1 7 0V7h2.5v3.5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6V7zm1 1.5V10a4.5 4.5 0 0 0 4.5 4.5h1A4.5 4.5 0 0 0 31.5 10V8.5h-1V10a3.5 3.5 0 0 1-7 0V8.5h-1zm0-3h8v1.5h-8V5.5z' },
                  { label: 'X/Twitter', href: '#', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H21.17l-5.214-6.817L11.99 21.75H8.682l7.73-8.835L8.254 2.25h5.286l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  { label: 'Facebook', href: '#', path: 'M24 2.5A21.5 21.5 0 0 0 2.5 24c0 11.92 9.62 21.58 21.5 21.5A21.5 21.5 0 0 0 45.5 24C45.5 12.08 35.88 2.42 24 2.5zm3.5 11.5h-2.5a3 3 0 0 0-3 3v2.5h5.5l-1 5.5H22V40h-6V25h-4v-5.5h4V16a8.5 8.5 0 0 1 8.5-8.5h3.5v6.5z' },
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-[34px] h-[34px] rounded-full bg-white/6 border border-white/12 flex items-center justify-center text-[#cfd6e0]/70 hover:bg-primary-500/12 hover:border-primary-500/50 hover:text-primary-500 hover:-translate-y-[2px] transition-all duration-200"
                    aria-label={social.label}
                  >
                    <svg viewBox="0 0 48 48" className="w-[14px] h-[14px]" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-[10px] font-bold tracking-[0.24em] uppercase text-primary-500 mb-[10px]">Services & Support</h3>
                <div className="w-[28px] h-[2px] bg-gradient-to-r from-primary-500 to-transparent rounded-[2px]" />
              </div>
              <ul className="flex flex-col gap-3 list-none">
                {servicesLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] font-normal text-[#cfd6e0] no-underline tracking-[0.01em] relative inline-block hover:text-white hover:pl-4 transition-all duration-200 before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:h-[4px] before:rounded-full before:bg-primary-500 before:opacity-0 hover:before:opacity-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-[10px] font-bold tracking-[0.24em] uppercase text-primary-500 mb-[10px]">Contact</h3>
                <div className="w-[28px] h-[2px] bg-gradient-to-r from-primary-500 to-transparent rounded-[2px]" />
              </div>

              <div className="flex items-start gap-[14px] mb-5">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-primary-500/10 border border-primary-500/22 flex items-center justify-center shrink-0 mt-[1px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ee2737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[9px] font-bold tracking-[0.20em] uppercase text-[#cfd6e0]/55 leading-none">Email</span>
                  <a href="mailto:admin@nexusbanking.com.au" className="text-[13.5px] font-medium text-white no-underline hover:text-primary-500 transition-colors duration-200">
                    admin@nexusbanking.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-[14px] mb-5">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-primary-500/10 border border-primary-500/22 flex items-center justify-center shrink-0 mt-[1px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ee2737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[9px] font-bold tracking-[0.20em] uppercase text-[#cfd6e0]/55 leading-none">Global Switchboard</span>
                  <a href="tel:+61283106000" className="text-[13.5px] font-medium text-white no-underline hover:text-primary-500 transition-colors duration-200">
                    +61 2 8310 6000
                  </a>
                </div>
              </div>

              <div className="h-[1px] bg-white/7 my-[22px]" />

              <p className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-[#cfd6e0]/55 mb-[14px]">Emergency Services</p>
              <a
                href="#"
                className="inline-flex items-center gap-[9px] rounded-full font-sans text-[11px] font-bold tracking-[0.10em] uppercase px-[22px] h-[38px] cursor-pointer border-[1.5px] border-primary-500/55 bg-primary-500/8 text-primary-500 no-underline whitespace-nowrap hover:bg-primary-500/16 hover:border-primary-500/85 hover:-translate-y-[1px] hover:shadow-[0_4px_18px_rgba(238,39,55,0.20)] active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Urgent Bank Freeze
              </a>
            </div>

            <div>
              <div className="bg-[#235ba8] rounded-[18px] p-[34px] pb-[32px] relative overflow-hidden hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(35,91,168,0.45)] transition-all duration-250 before:content-[''] before:absolute before:top-[-50px] before:right-[-50px] before:w-[160px] before:h-[160px] before:bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,transparent_70%)] before:pointer-events-none after:content-[''] after:absolute after:bottom-[-30px] after:left-[-30px] after:w-[120px] after:h-[120px] after:bg-[radial-gradient(circle,rgba(238,39,55,0.15)_0%,transparent_70%)] after:pointer-events-none">
                <div className="inline-flex items-center gap-[6px] text-[9px] font-bold tracking-[0.20em] uppercase text-white/85 bg-white/12 border border-white/20 rounded-full px-[13px] py-[5px] mb-5 relative z-1">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  Legal & Financial
                </div>
                <h4 className="text-[19px] font-extrabold tracking-[-0.02em] text-white leading-[1.25] mb-[10px] relative z-1">Start Your Recovery Today</h4>
                <p className="text-[13px] font-normal leading-[1.65] text-[#cfd6e0]/85 mb-[26px] relative z-1">Our legal-banking specialists will evaluate your case and begin recovery proceedings within 24 hours of contact.</p>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-[8px] rounded-full font-sans text-[12px] font-bold tracking-[0.10em] uppercase px-[28px] h-[42px] bg-white border-[1.5px] border-white text-[#235ba8] no-underline whitespace-nowrap relative z-1 hover:bg-[#f0f4ff] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.20)] active:translate-y-0 active:shadow-none transition-all duration-180"
                >
                  Open Account
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mobile:hidden flex flex-col items-center pb-12">
            <div className="flex flex-col items-center gap-[14px] mb-[22px]">
              <ShieldLogoLg />
              <div className="flex flex-col items-center leading-none gap-[4px]">
                <span className="text-[24px] font-black tracking-[0.26em] text-white uppercase">Nexus</span>
                <span className="text-[10px] font-semibold tracking-[0.42em] text-[#cfd6e0] uppercase">Banking</span>
              </div>
            </div>

            <p className="text-[12.5px] font-normal leading-[1.75] text-[#cfd6e0] text-center max-w-[340px] mb-7 opacity-82">
              Nexus Banking provides authorised financial services and legal representation for asset recovery, international wire transfers, and institutional banking solutions worldwide.
            </p>

            <div className="w-[60px] h-[2px] bg-primary-500 rounded-full mb-11 shadow-[0_0_10px_rgba(238,39,55,0.45)]" />

            <div className="flex items-center gap-4 mb-9 w-full">
              {[
                { label: 'AFSL Licensed', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                { label: 'Legal Rep.', path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { label: '256-bit', path: 'M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z' },
              ].map(badge => (
                <div key={badge.label} className="flex items-center gap-[6px] bg-white/4 border border-white/9 rounded-[8px] px-3 py-2 flex-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(207,214,224,0.50)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d={badge.path} />
                  </svg>
                  <span className="text-[9.5px] font-semibold text-[#cfd6e0]/45 tracking-[0.08em] leading-[1.3]">{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="w-full mb-10">
              <div className="flex items-center gap-[10px]">
                <span className="text-[9.5px] font-bold tracking-[0.26em] uppercase text-primary-500">Services & Support</span>
                <div className="flex-1 h-[1px] bg-primary-500/22" />
              </div>
            </div>
            <ul className="w-full list-none mb-10" role="list">
              {servicesLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 py-[13px] text-[14px] font-medium text-[#cfd6e0] no-underline border-b border-white/6 hover:text-white hover:pl-[6px] transition-all duration-200"
                  >
                    {link.name}
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="w-full mb-8">
              <div className="flex items-center gap-[10px] mb-2">
                <span className="text-[9.5px] font-bold tracking-[0.26em] uppercase text-primary-500">Contact</span>
                <div className="flex-1 h-[1px] bg-primary-500/22" />
              </div>

              <a href="mailto:admin@nexusbanking.com.au" className="flex items-center gap-[14px] py-[14px] border-b border-white/6 no-underline">
                <div className="w-[40px] h-[40px] rounded-full bg-[#235ba8]/18 border border-[#235ba8]/40 flex items-center justify-center shrink-0 hover:bg-[#235ba8]/30 hover:border-[#235ba8]/70 hover:scale-105 transition-all duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[9.5px] font-bold tracking-[0.16em] uppercase text-[#cfd6e0]/55">Email</span>
                  <span className="text-[14px] font-medium text-[#cfd6e0]">admin@nexusbanking.com.au</span>
                </div>
              </a>

              <a href="tel:+61298765400" className="flex items-center gap-[14px] py-[14px] border-b border-white/6 no-underline">
                <div className="w-[40px] h-[40px] rounded-full bg-[#235ba8]/18 border border-[#235ba8]/40 flex items-center justify-center shrink-0 hover:bg-[#235ba8]/30 hover:border-[#235ba8]/70 hover:scale-105 transition-all duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[9.5px] font-bold tracking-[0.16em] uppercase text-[#cfd6e0]/55">Global Switchboard</span>
                  <span className="text-[14px] font-medium text-[#cfd6e0]">+61 2 9876 5400</span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-[9px] w-full h-[50px] mt-[18px] rounded-full border-[1.5px] border-primary-500/55 bg-primary-500/7 text-[#f87171] font-sans text-[11.5px] font-bold tracking-[0.16em] uppercase cursor-pointer no-underline hover:bg-primary-500/15 hover:border-primary-500/85 hover:-translate-y-[1px] hover:shadow-[0_4px_18px_rgba(238,39,55,0.22)] active:translate-y-0 active:shadow-none transition-all duration-200"
                aria-label="Urgent Bank Freeze — Emergency contact"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Urgent Bank Freeze
              </a>
            </div>

            <div className="w-full bg-gradient-to-br from-[#235ba8] to-[#1a4a8a] rounded-[20px] p-8 flex flex-col items-center gap-2 mb-10 relative overflow-hidden border border-white/10 before:content-[''] before:absolute before:top-[-40px] before:right-[-40px] before:w-[140px] before:h-[140px] before:rounded-full before:bg-white/5 after:content-[''] after:absolute after:bottom-[-30px] after:left-[-20px] after:w-[100px] after:h-[100px] after:rounded-full after:bg-primary-500/10">
              <span className="text-[9.5px] font-bold tracking-[0.24em] uppercase text-white/55 relative z-1">Get Started Today</span>
              <h2 className="text-[20px] font-extrabold text-white text-center leading-[1.2] relative z-1 mb-[6px]">Open Your Account</h2>
              <p className="text-[12px] font-normal text-[#cfd6e0]/75 text-center leading-[1.5] relative z-1 mb-[18px] max-w-[280px]">Secure institutional banking with global reach and dedicated legal support.</p>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-[8px] h-[50px] px-9 rounded-full bg-white border-none text-[#235ba8] font-sans text-[12px] font-bold tracking-[0.14em] uppercase cursor-pointer no-underline relative z-1 hover:bg-[#f0f4ff] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] active:translate-y-0 active:shadow-none transition-all duration-180"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3l5 5-5 5" />
                </svg>
                Open Account
              </Link>
            </div>

            <div className="w-full h-[1px] bg-white/8 mb-7" />

            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-[11px] font-normal text-[#cfd6e0]/45 text-center leading-[1.7] tracking-[0.02em]">
                &copy; {currentYear} Nexus Banking.<br />
                Authorized Financial Institution & Legal Representative.
              </p>
              <nav className="flex items-center gap-0 flex-wrap justify-center" aria-label="Legal links">
                <Link href="/privacy" className="text-[10.5px] font-medium text-[#cfd6e0]/35 no-underline tracking-[0.04em] px-[10px] py-[4px] hover:text-[#cfd6e0]/80 transition-colors duration-200">Privacy Policy</Link>
                <div className="w-[1px] h-[10px] bg-white/12" />
                <Link href="/terms" className="text-[10.5px] font-medium text-[#cfd6e0]/35 no-underline tracking-[0.04em] px-[10px] py-[4px] hover:text-[#cfd6e0]/80 transition-colors duration-200">Terms of Service</Link>
                <div className="w-[1px] h-[10px] bg-white/12" />
                <Link href="/disclaimer" className="text-[10.5px] font-medium text-[#cfd6e0]/35 no-underline tracking-[0.04em] px-[10px] py-[4px] hover:text-[#cfd6e0]/80 transition-colors duration-200">Legal Disclaimer</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="hidden mobile:block h-[1px] bg-[#cfd6e0]/10 max-w-[1400px] mx-auto" />

        <div className="hidden mobile:flex relative z-1 max-w-[1400px] mx-auto px-10 py-5 pb-6 items-center justify-between">
          <p className="text-[12px] font-normal text-[#cfd6e0]/50 tracking-[0.01em]">
            &copy; {currentYear} Nexus Banking. Authorized Financial Institution & Legal Representative.
          </p>
          <ul className="flex items-center gap-0 list-none">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Legal Disclaimer', href: '/disclaimer' },
            ].map((item, i, arr) => (
              <li key={item.name} className="flex items-center">
                <Link href={item.href} className="text-[12px] font-normal text-[#cfd6e0]/50 no-underline tracking-[0.01em] hover:text-white transition-colors duration-200">
                  {item.name}
                </Link>
                {i < arr.length - 1 && <span className="text-[#cfd6e0]/25 mx-3 text-[13px]">·</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
