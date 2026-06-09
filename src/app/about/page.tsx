import React from 'react';
import type { Metadata } from 'next';
import PublicRoute from '@/components/PublicRoute';
import Image from 'next/image';
import Link from 'next/link';
import JonathanSterlingImg from '@/assets/images_for_pages/leaders/jonathanSterling.jpg';
import ElenaRostovaImg from '@/assets/images_for_pages/leaders/Elena Rostova.png';
import MarcusChenImg from '@/assets/images_for_pages/leaders/Marcus Chen.jpg';
import LegalOfficeImg from '@/assets/images_for_pages/legalOffice600-800.png';


export const metadata: Metadata = {
    title: 'About Us | Nexus Banking',
    description: 'Founded by ex-prosecutors and forensic accountants to bridge the gap between law enforcement and banking.',
};

const team = [
    { name: 'Jonathan Sterling', role: 'CEO', bio: 'Former federal prosecutor with the Commonwealth Director of Public Prosecutions and 20 years prosecuting complex financial crime. Sterling architected Nexus Banking\'s legal strategy framework and drives the firm\'s international expansion from Sydney.', title: 'Jonathan<br>Sterling' },
    { name: 'Elena Rostova', role: 'Head of Forensic Accounting', bio: 'Previously a Senior Director at a Big Four forensic practice in Sydney, Elena has led asset-tracing engagements across 30+ jurisdictions involving cumulative losses exceeding AUD $4 billion.', title: 'Elena<br>Rostova' },
    { name: 'Marcus Chen', role: 'Chief Legal Officer', bio: 'An expert in cross-border banking litigation and international arbitration admitted in Australia, Marcus has represented sovereign wealth funds and high-net-worth individuals before leading financial dispute tribunals.', title: 'Marcus<br>Chen' },
];

const values = [
    { number: '01', title: 'Precision', desc: 'Forensic evidence anchors every dispute we pursue. We do not act on assumption — every claim is substantiated by verifiable documentation, chain-of-custody records, and expert forensic analysis before we engage any counterparty.' },
    { number: '02', title: 'Authority', desc: 'International banking regulations serve as our leverage. Our team command fluency in SWIFT protocols, cross-border compliance frameworks, and regulatory instruments that compel financial institutions to act — regardless of jurisdiction.' },
    { number: '03', title: 'Justice', desc: 'Our success is tied directly to client outcomes. We operate on a recovery-first model — our incentives align completely with yours, ensuring we pursue every avenue with the same urgency and commitment as if it were our own funds at stake.' },
];

const timelinePhases = [
    { label: 'Phase I', title: 'Australian Fraud Gap Identified' },
    { label: 'Phase II', title: 'Sydney Legal Team Assembled' },
    { label: 'Phase III', title: 'APRA Banking Infrastructure Built' },
    { label: 'Phase IV', title: 'Global Network Created' },
    { label: 'Phase V', title: 'Nexus Banking Australia Launch' },
];

const networkStats = [
    { num: '40+', label: 'Jurisdictions' },
    { num: '6', label: 'Continents' },
    { num: '120+', label: 'Banking Partners' },
    { num: '15+', label: 'Legal Offices' },
];

export default function AboutPage() {
    return (
        <PublicRoute>
            <div>
                {/* ─── SECTION 1: HERO SPLIT ─── */}
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[60%] bg-white px-8 md:px-16 lg:px-20 xl:px-24 py-24 lg:py-0 flex flex-col justify-center">
                        <div className="text-[11px] font-bold tracking-[0.25em] text-primary-500 uppercase mb-7">About Nexus</div>
                        <h1 className="text-6xl md:text-7xl xl:text-[120px] font-['Playfair_Display'] font-black leading-[0.95] tracking-tight text-black mb-7">
                            Our Mission.
                        </h1>
                        <div className="w-30 h-[3px] bg-primary-500 mb-7" />
                        <p className="text-base leading-relaxed text-gray-500 max-w-[500px] mb-10">
                            We bridge the gap between Australian law enforcement and global banking systems to recover what rightfully belongs to you.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-11">
                            <Link
                                href="/contact"
                                className="bg-secondary-500 hover:bg-[#1a4a8f] text-white text-[13px] font-bold tracking-wide uppercase px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(35,91,168,0.3)]"
                            >
                                Contact Our Team
                            </Link>
                            <Link
                                href="/asset-recovery"
                                className="bg-transparent text-black text-[13px] font-bold tracking-wide uppercase px-8 py-3.5 border-2 border-black transition-all hover:bg-black hover:text-white hover:-translate-y-0.5"
                            >
                                View Recovery Services
                            </Link>
                        </div>
                        <div className="flex items-center gap-0">
                            {['Global Legal Network', 'Licensed Banking Operations', 'Forensic Intelligence Experts'].map((item, i) => (
                                <React.Fragment key={item}>
                                    <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">{item}</span>
                                    {i < 2 && <span className="w-px h-3.5 bg-muted-400 mx-[18px]" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] bg-navy-900 flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0">
                        <p className="text-xl md:text-2xl xl:text-[32px] font-light italic text-white leading-[1.4] mb-16 border-l-[3px] border-primary-500 pl-7">
                            &ldquo;Built by investigators.<br />Trusted by clients.&rdquo;
                        </p>
                        {[
                            { value: '$2.8B+ Recovered' },
                            { value: '14,200+ Clients Served' },
                            { value: '94% Success Rate' },
                        ].map((metric, i) => (
                            <div key={metric.value} className={`flex items-center gap-5 py-[22px] ${i === 0 ? 'border-t border-b' : 'border-b'} border-white/10`}>
                                <div className="w-1 h-10 bg-primary-500 shrink-0" />
                                <div className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-white tracking-tight">{metric.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── SECTION 2: ORIGIN STORY ─── */}
                <section className="flex flex-col lg:flex-row min-h-[600px]">
                    <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 lg:px-20 xl:px-24 py-24 flex flex-col justify-center relative overflow-hidden">
                        <span className="absolute top-10 left-16 text-[200px] font-black text-muted-200 leading-none tracking-tight pointer-events-none select-none">01</span>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-['Playfair_Display'] font-black tracking-tight text-black mb-4">The Origin</h2>
                            <p className="text-xl font-bold text-secondary-500 mb-7 tracking-tight">Built by Investigators.</p>
                            <p className="text-[15px] leading-relaxed text-gray-600 max-w-[440px]">
                                Nexus Banking was founded in Sydney by a coalition of former prosecutors, forensic accountants, and senior banking compliance officers who recognised a critical gap in Australian financial dispute resolution. Frustrated by siloed systems that allowed bad actors to exploit the seams between ASIC jurisdiction and international banking protocol, our founders built a firm that operates fluently across both worlds — combining investigative rigour with institutional-grade financial authority to recover assets where others simply cannot reach.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-muted-400 flex items-center justify-center px-8 py-16">
                        <div className="relative w-full max-w-[520px] aspect-[4/3] overflow-hidden bg-navy-800">
                            <Image src={LegalOfficeImg} alt="Nexus Banking legal office" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 3: TIMELINE ─── */}
                <section className="py-24 px-8 md:px-16 lg:px-20 xl:px-24 border-t border-muted-400 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-[11px] font-bold tracking-[0.25em] text-primary-500 uppercase mb-10 md:mb-[60px]">Our Journey</div>
                        {/* Mobile: vertical list */}
                        <div className="flex md:hidden flex-col gap-0">
                            {timelinePhases.map((phase, i) => (
                                <div key={i} className="flex items-start gap-4 pb-8 relative">
                                    <div className="flex flex-col items-center">
                                        <div className="w-[18px] h-[18px] bg-secondary-500 rounded-full border-[3px] border-white shadow-[0_0_0_2px_#235ba8] shrink-0 z-10" />
                                        {i < timelinePhases.length - 1 && <div className="w-[2px] flex-1 bg-primary-500 mt-1" />}
                                    </div>
                                    <div className="pt-0.5">
                                        <div className="text-[11px] font-bold text-secondary-500 tracking-wide mb-1">{phase.label}</div>
                                        <div className="text-[13px] font-bold text-black tracking-tight">{phase.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Desktop: horizontal */}
                        <div className="hidden md:flex relative items-center justify-between">
                            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-primary-500 z-0 -translate-y-1/2" />
                            {timelinePhases.map((phase, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center flex-1 transition-all hover:-translate-y-1">
                                    <div className="text-[11px] font-bold text-secondary-500 tracking-wide mb-4">{phase.label}</div>
                                    <div className="w-[18px] h-[18px] bg-secondary-500 rounded-full border-[3px] border-white shadow-[0_0_0_2px_#235ba8] mb-4 transition-all hover:scale-125 hover:shadow-[0_0_0_3px_#235ba8]" />
                                    <div className="text-[13px] font-bold text-black text-center tracking-tight max-w-[120px] leading-[1.4]">{phase.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 4: CORE VALUES ─── */}
                <section className="py-24 px-8 md:px-16 lg:px-20 xl:px-24 border-t border-muted-400 bg-white">
                    <h2 className="text-4xl md:text-5xl xl:text-[56px] font-['Playfair_Display'] font-black tracking-tight text-black mb-[60px]">Our Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {values.map((val, i) => (
                            <div
                                key={val.number}
                                className={`py-12 ${i < values.length - 1 ? 'md:border-r border-muted-400 md:pr-12' : ''} ${i > 0 ? 'md:pl-12' : ''} relative`}
                            >
                                <div className="absolute top-0 left-0 w-12 h-[3px] bg-primary-500" />
                                <span className="text-[13px] font-bold text-primary-500 tracking-wide mb-3 block">{val.number}</span>
                                <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-black tracking-tight mb-5 leading-[1.1]">{val.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── SECTION 5: LEADERSHIP ─── */}
                <section className="flex flex-col lg:flex-row min-h-[580px] border-t border-muted-400">
                    <div className="w-full lg:w-[40%] bg-secondary-500 px-8 md:px-16 lg:px-[72px] py-24 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl xl:text-[56px] font-['Playfair_Display'] font-black text-white tracking-tight leading-[1.05] mb-6">Leadership Team</h2>
                        <p className="text-base font-light text-white/75 leading-relaxed mb-7">Professionals from law, finance, and forensic intelligence.</p>
                        <p className="text-sm leading-relaxed text-white/60">
                            Each member of the Nexus Banking leadership team brings decades of frontline experience — drawn from Australian regulatory agencies, tier-one investment banks, and forensic consultancies — to bear on the most complex financial recovery mandates in the world.
                        </p>
                    </div>
                    <div className="w-full lg:w-[60%] bg-white px-8 md:px-16 lg:px-[72px] py-24 flex items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
                            {team.map((member, i) => (
                                <div
                                    key={member.name}
                                    className={`pb-10 border-b-[3px] border-transparent transition-all hover:border-primary-500 ${i < team.length - 1 ? 'md:border-r border-muted-400 md:pr-8' : ''} ${i > 0 ? 'md:pl-8' : ''}`}
                                >
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-navy-900 mb-6">
                                        <Image src={member.name === 'Jonathan Sterling' ? JonathanSterlingImg : member.name === 'Elena Rostova' ? ElenaRostovaImg : MarcusChenImg} alt={member.name} fill className="object-cover opacity-90" />
                                    </div>
                                    <h3 className="text-lg md:text-xl xl:text-[26px] font-black text-black tracking-tight leading-[1.2] mb-2.5" dangerouslySetInnerHTML={{ __html: member.title }} />
                                    <div className="text-[11px] font-bold tracking-widest text-primary-500 uppercase mb-4">{member.role}</div>
                                    <p className="text-[13px] leading-relaxed text-gray-500">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 6: GLOBAL NETWORK ─── */}
                <section className="py-24 px-8 md:px-16 lg:px-20 xl:px-24 border-t border-muted-400 bg-white">
                    <h2 className="text-4xl md:text-5xl xl:text-[52px] font-['Playfair_Display'] font-black tracking-tight text-black mb-[60px]">Our International Reach</h2>
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
                        <div className="w-full lg:w-[45%]">
                            <svg viewBox="0 0 800 440" className="w-full h-auto">
                                <path d="M 60 80 L 100 70 L 130 72 L 160 68 L 180 75 L 195 90 L 200 110 L 195 130 L 185 145 L 190 165 L 180 180 L 170 195 L 155 200 L 140 210 L 125 215 L 110 205 L 95 195 L 80 185 L 65 175 L 55 160 L 50 140 L 45 120 L 48 100 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 140 215 L 145 230 L 135 240 L 125 238 L 120 228 L 128 218 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 140 245 L 165 238 L 185 240 L 200 255 L 210 275 L 215 300 L 210 330 L 200 355 L 185 375 L 168 385 L 150 382 L 135 370 L 120 350 L 112 325 L 110 295 L 115 270 L 125 255 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 355 50 L 375 45 L 390 50 L 405 48 L 415 55 L 420 68 L 415 80 L 405 88 L 395 92 L 380 95 L 368 88 L 358 78 L 352 65 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 340 55 L 348 52 L 352 60 L 348 68 L 340 66 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 375 28 L 390 22 L 400 30 L 395 45 L 383 42 L 375 35 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 355 110 L 375 105 L 395 108 L 410 118 L 415 135 L 418 155 L 415 180 L 408 205 L 395 230 L 380 250 L 365 258 L 350 252 L 336 238 L 325 215 L 318 190 L 316 165 L 318 140 L 325 120 L 338 112 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 420 90 L 445 88 L 460 95 L 462 110 L 450 118 L 435 115 L 422 108 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 420 30 L 480 20 L 560 22 L 610 28 L 625 40 L 620 55 L 590 62 L 540 60 L 490 58 L 455 60 L 435 68 L 422 62 L 418 48 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 490 95 L 510 90 L 525 98 L 528 115 L 520 135 L 508 148 L 498 145 L 488 130 L 485 112 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 555 45 L 600 40 L 635 45 L 650 58 L 655 75 L 645 90 L 625 98 L 600 100 L 575 95 L 555 80 L 548 62 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 600 108 L 625 105 L 640 115 L 635 130 L 618 135 L 600 125 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 658 60 L 668 56 L 672 65 L 666 74 L 658 70 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 600 245 L 640 235 L 680 240 L 710 255 L 720 275 L 715 298 L 700 315 L 678 322 L 655 318 L 632 308 L 615 290 L 605 270 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <path d="M 732 300 L 740 295 L 744 308 L 738 318 L 730 312 Z" fill="none" stroke="#cfd6e0" strokeWidth="1.5" />
                                <circle cx="345" cy="64" r="7" fill="#235ba8" />
                                <text x="345" y="52" textAnchor="middle" fontSize="11" fill="#235ba8" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.05em">London</text>
                                <circle cx="378" cy="74" r="7" fill="#235ba8" />
                                <text x="393" y="68" textAnchor="start" fontSize="11" fill="#235ba8" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.05em">Zurich</text>
                                <circle cx="163" cy="108" r="7" fill="#235ba8" />
                                <text x="163" y="96" textAnchor="middle" fontSize="11" fill="#235ba8" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.05em">New York</text>
                                <circle cx="617" cy="132" r="7" fill="#235ba8" />
                                <text x="617" y="120" textAnchor="middle" fontSize="11" fill="#235ba8" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.05em">Singapore</text>
                                <circle cx="672" cy="285" r="7" fill="#235ba8" />
                                <text x="672" y="273" textAnchor="middle" fontSize="11" fill="#235ba8" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.05em">Sydney</text>
                            </svg>
                        </div>
                        <div className="w-full lg:flex-1 flex flex-col gap-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-muted-400">
                                {networkStats.map(stat => (
                                    <div key={stat.label} className="py-8 px-7 border-r border-muted-400 last:border-r-0 transition-all hover:bg-[#f8f9fb]">
                                        <div className="text-2xl md:text-3xl xl:text-[38px] font-black text-black tracking-tight mb-2">{stat.num}</div>
                                        <div className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[15px] leading-relaxed text-gray-600 max-w-[540px]">
                                The Nexus Banking network spans six continents and more than forty legal jurisdictions, anchored by our headquarters in Sydney and permanent offices in the world&apos;s five most critical financial centres. Our banking relationships cover every major correspondent banking corridor, and our legal affiliates are qualified practitioners under Australian law and international legal systems — enabling seamless, enforceable recovery operations wherever your assets reside.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 7: FINAL CTA ─── */}
                <section className="flex flex-col lg:flex-row min-h-[400px]">
                    <div className="w-full lg:w-1/2 bg-black px-8 md:px-16 lg:px-20 py-24 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-[440px] mb-12">
                            Trusted By Clients Seeking Financial Justice.
                        </h2>
                        <Link
                            href="/contact"
                            className="bg-primary-500 hover:bg-[#cc1f2d] text-white text-[13px] font-bold tracking-wider uppercase px-9 py-4 w-fit transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(238,39,55,0.35)]"
                        >
                            Speak With An Advisor
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 bg-primary-500 px-8 md:px-16 lg:px-20 py-24 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.15] mb-12 flex items-center gap-5 max-w-[520px]">
                            <span>&mdash; Start A Recovery Case</span>
                            <span className="text-6xl font-extralight leading-none shrink-0 mt-1">&rarr;</span>
                        </h2>
                        <Link
                            href="/asset-recovery/report"
                            className="bg-transparent text-white text-[13px] font-bold tracking-wider uppercase px-9 py-3.5 border-2 border-white w-fit transition-all hover:bg-white hover:text-primary-500 hover:-translate-y-0.5"
                        >
                            Begin Your Case
                        </Link>
                    </div>
                </section>
            </div>
        </PublicRoute>
    );
}
