import React from 'react';
import type { Metadata } from 'next';
import PublicRoute from '@/components/PublicRoute';
import Link from 'next/link';
import Image from 'next/image';
import FraudInvestigationImg from '@/assets/images_for_pages/financialfraudinvestigation.png';

export const metadata: Metadata = {
    title: 'Private Digital Banking | Nexus Banking',
    description: 'A modern, digital-only bank designed to support sustainable growth, commercial property investment, and secure asset recovery.',
};

const services = [
    { number: '01', title: 'Digital Private Banking', description: 'Full-spectrum private banking entirely online. Secure, compliant, and built for high-net-worth individuals.' },
    { number: '02', title: 'Commercial Property & Investment', description: 'Access institutional-grade property financing and structured investment vehicles for portfolio growth.' },
    { number: '03', title: 'Nexus Safe Vault', description: 'Encrypted digital vault for sensitive assets, documents, and high-value holdings with multi-layer authentication.' },
    { number: '04', title: 'Multi-Currency Accounts', description: 'Hold, convert and transact in 40+ currencies with competitive FX rates and real-time global settlements.' },
    { number: '05', title: 'Wealth Management', description: 'Dedicated advisors delivering bespoke investment strategies, estate planning, and long-term capital preservation.' },
    { number: '06', title: 'Bank-Grade Cyber Security', description: 'AES-256 encryption, biometric authentication, real-time fraud detection, and 24/7 threat monitoring.' },
];

const accounts = [
    { name: 'Checking', desc: 'Day-to-day transactional account with zero fees and unlimited transfers.', bar: 'bg-secondary-500' },
    { name: 'Savings', desc: 'High-yield interest account with flexible deposit and withdrawal terms.', bar: 'bg-emerald-600' },
    { name: 'Fixed Deposit', desc: 'Locked-term deposits offering guaranteed returns at competitive rates.', bar: 'bg-primary-500' },
    { name: 'Business', desc: 'Corporate-grade account with multi-user access and integrated treasury tools.', bar: 'bg-black' },
];

const features = [
    { title: 'Forensic Crypto Tracing', desc: 'Blockchain-level transaction analysis to identify and trace stolen or lost digital assets.' },
    { title: 'Offshore Legal Recovery', desc: 'International legal frameworks deployed to recover assets held across jurisdictions.' },
    { title: 'Safe Vault Protection', desc: 'Military-grade encrypted storage for digital assets, credentials, and sensitive documentation.' },
    { title: 'No Upfront Fees', desc: 'Our recovery division operates on a success-based model. You pay only when we deliver results.' },
];

export default function BankingServicesPage() {
    return (
        <PublicRoute>
            <div>
                {/* ─── SECTION 1: HERO SPLIT ─── */}
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 lg:px-20 xl:px-24 py-24 lg:py-0 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-8 h-0.5 bg-secondary-500" />
                            <span className="text-[11px] font-bold tracking-[0.22em] text-secondary-500 uppercase">Private Banking</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-['Playfair_Display'] font-black leading-[1.05] tracking-tight text-black mb-3">
                            Welcome to<br />Nexus Finance
                        </h1>
                        <p className="text-2xl md:text-3xl font-['Playfair_Display'] italic text-black/65 leading-tight mb-7">
                            A Modern, Digital-Only Private Bank.
                        </p>
                        <p className="text-[15px] leading-relaxed text-gray-600 max-w-[480px] mb-11">
                            Built for sustainable commercial growth, secure wealth management, and recovery of funds lost to financial crime.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-[52px]">
                            <Link
                                href="/signup"
                                className="bg-secondary-500 hover:bg-[#1a4a8a] text-white text-[13px] font-semibold tracking-wider uppercase px-9 py-4 border-2 border-secondary-500 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(35,91,168,0.25)]"
                            >
                                Open An Account
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent text-black text-[13px] font-semibold tracking-wider uppercase px-9 py-4 border-2 border-black transition-all hover:bg-black hover:text-white hover:-translate-y-0.5"
                            >
                                Contact Private Advisor
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 border-t border-l border-muted-400 max-w-[460px]">
                            {['Licensed Financial Services', 'AES-256 Security', 'Multi-Currency Banking', 'Wealth Management Experts'].map((item, i) => (
                                <div key={i} className="text-[11.5px] font-semibold tracking-wide text-gray-600 uppercase px-[18px] py-3.5 border-r border-b border-muted-400">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 bg-secondary-500 flex items-center justify-center relative overflow-hidden px-8 py-16 lg:py-0 min-h-[480px]">
                        <div className="absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-[280px] h-[280px] rounded-full bg-white/5 pointer-events-none" />

                        <div className="phone-wrap relative z-10">
                            <div className="absolute top-[60px] -right-[30px] min-w-[200px] bg-[#1a1d22] border border-white/10 rounded-xl px-[18px] py-3 backdrop-blur z-10 hidden lg:block">
                                <div className="text-[9px] font-semibold tracking-widest uppercase text-white/40 mb-1">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 align-middle" />
                                    FX Transfer Complete
                                </div>
                                <div className="text-[13px] font-bold text-white">+$12,400.00</div>
                            </div>

                            <div className="w-[280px] bg-[#0d1117] rounded-[36px] border-2 border-[#2a2a2a] px-[22px] pt-7 pb-7 shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_6px_#1a1d22] relative mx-auto">
                                <div className="w-20 h-2.5 bg-[#1a1d22] rounded-[10px] mx-auto mb-6" />
                                <div className="text-[10px] font-medium tracking-widest text-white/45 uppercase mb-1">Total Portfolio Balance</div>
                                <div className="text-[36px] font-bold text-white tracking-tight mb-1">$2,847,300</div>
                                <div className="text-[11px] text-white/40 mb-5">+$48,220 this month</div>

                                <svg className="w-full h-[60px] mb-[22px]" viewBox="0 0 236 60" fill="none">
                                    <defs>
                                        <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#ee2737" stopOpacity="0.25" />
                                            <stop offset="100%" stopColor="#ee2737" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 50 L28 44 L52 38 L72 42 L96 30 L118 22 L140 28 L160 14 L186 10 L210 6 L236 2" stroke="#ee2737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M0 50 L28 44 L52 38 L72 42 L96 30 L118 22 L140 28 L160 14 L186 10 L210 6 L236 2 L236 60 L0 60 Z" fill="url(#graphGrad)" />
                                </svg>

                                <div className="h-px bg-white/10 mb-3.5" />

                                {[
                                    { name: 'Private Savings', type: 'Wealth Account', amount: '$1,240,000', change: '+2.3%' },
                                    { name: 'Fixed Deposit', type: 'Term Account', amount: '$800,000', change: '+1.8%' },
                                    { name: 'FX Multi-Currency', type: 'Business Account', amount: '$807,300', change: '+3.7%' },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center py-[9px] border-b border-white/5 last:border-none">
                                        <div>
                                            <div className="text-[11px] font-medium text-white/70">{row.name}</div>
                                            <div className="text-[9.5px] text-white/35">{row.type}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-semibold text-white">{row.amount}</div>
                                            <div className="text-[9.5px] text-emerald-400">{row.change}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-[80px] -left-[40px] min-w-[180px] bg-[#1a1d22] border border-white/10 rounded-xl px-[18px] py-3 backdrop-blur z-10 hidden lg:block">
                                <div className="text-[9px] font-semibold tracking-widest uppercase text-white/40 mb-1">Weekly Performance</div>
                                <div className="text-[13px] font-bold text-emerald-400">Portfolio +4.2% This Week</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 2: SERVICES ─── */}
                <section className="py-28 px-8 md:px-16 lg:px-20 xl:px-24">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-7 h-0.5 bg-primary-500" />
                        <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-500 uppercase">Our Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-[46px] font-['Playfair_Display'] font-bold tracking-tight max-w-[600px] mb-16">
                        Institutional Grade Banking Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-muted-400 border-2 border-muted-400">
                        {services.map(svc => (
                            <div
                                key={svc.number}
                                className="bg-white p-11 relative overflow-hidden transition-all hover:bg-[#fafafa] group"
                            >
                                <span className="text-[72px] font-['Playfair_Display'] font-black text-muted-400 leading-none absolute top-5 right-7 select-none transition-colors group-hover:text-[#e8ebef]">
                                    {svc.number}
                                </span>
                                <div className="mt-9 relative z-10">
                                    <h3 className="text-base font-bold text-black mb-3 tracking-tight">{svc.title}</h3>
                                    <p className="text-[13.5px] leading-relaxed text-gray-500">{svc.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary-500 transition-all group-hover:w-full" />
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-500 transition-all first:w-full" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── SECTION 3: ACCOUNT TYPES ─── */}
                <section className="flex flex-col lg:flex-row min-h-[560px]">
                    <div className="w-full lg:w-[35%] bg-secondary-500 px-8 md:px-12 lg:px-16 py-20 flex flex-col justify-center">
                        <div className="text-[10px] font-semibold tracking-[0.22em] text-white/50 uppercase mb-6">Account Portfolio</div>
                        <h2 className="text-3xl md:text-[40px] font-['Playfair_Display'] font-bold text-white leading-tight tracking-tight mb-3">
                            Customised Financial Solutions
                        </h2>
                        <div className="text-[15px] font-semibold text-white/70 mb-5">Tailored Account Types</div>
                        <p className="text-[13.5px] leading-relaxed text-white/60 mb-10">
                            Every client&apos;s financial landscape is unique. Nexus Banking designs account structures that align with your goals — whether personal wealth preservation, corporate treasury, or international diversification.
                        </p>
                        <Link
                            href="/signup"
                            className="bg-transparent text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 border-2 border-white/60 w-fit transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
                        >
                            View All Accounts
                        </Link>
                    </div>
                    <div className="w-full lg:w-[65%] bg-white px-8 md:px-12 lg:px-16 py-20 flex flex-col justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {accounts.map(acc => (
                                <div key={acc.name} className="border border-muted-400 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
                                    <div className="relative overflow-hidden flex items-center justify-center aspect-[3/2] bg-navy-800">
                                        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                                        <div className="relative z-10 text-center px-4">
                                            <div className="w-8 h-0.5 bg-primary-500 mx-auto mb-3" />
                                            <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/50">{acc.name} Account</p>
                                        </div>
                                    </div>
                                    <div className="bg-white px-[22px] pt-[18px] pb-0">
                                        <p className="text-xs leading-relaxed text-gray-500">{acc.desc}</p>
                                        <div className={`h-1 mt-[22px] ${acc.bar}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 4: PROCESS ─── */}
                <section className="py-28 px-8 md:px-16 lg:px-20 xl:px-24 bg-[#f8f9fb]">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 justify-center mb-4">
                            <span className="w-7 h-0.5 bg-primary-500" />
                            <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-500 uppercase">How It Works</span>
                        </div>
                        <h2 className="text-3xl md:text-[44px] font-['Playfair_Display'] font-bold text-center tracking-tight mb-[72px]">
                            Open an Account in 5 Minutes
                        </h2>
                        <div className="flex flex-col lg:flex-row items-stretch gap-0">
                            {[
                                { num: '01', title: 'Submit Documents', desc: 'Upload government-issued identification and proof of address securely through our encrypted client portal.' },
                                { num: '02', title: 'KYC Verification', desc: 'Our compliance team conducts fast, thorough identity verification in line with international AML standards.' },
                                { num: '03', title: 'Deposit & Grow', desc: 'Fund your account and immediately access the full suite of Nexus banking, investment, and security services.' },
                            ].map((step, i) => (
                                <React.Fragment key={step.num}>
                                    <div className="flex-1 bg-white border-l-4 border-secondary-500 px-9 py-11 transition-all hover:shadow-[0_12px_40px_rgba(35,91,168,0.12)] hover:-translate-y-1">
                                        <div className="text-5xl font-['Playfair_Display'] font-black text-muted-400 leading-none mb-4">{step.num}</div>
                                        <div className="text-[17px] font-bold text-black mb-3 tracking-tight">{step.title}</div>
                                        <p className="text-[13.5px] leading-relaxed text-gray-500">{step.desc}</p>
                                    </div>
                                    {i < 2 && (
                                        <div className="hidden lg:flex items-center px-1 shrink-0">
                                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                                                <path d="M2 12H30M20 4L30 12L20 20" stroke="#ee2737" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 5: CONVERGENCE ─── */}
                <section className="flex flex-col lg:flex-row min-h-[580px]">
                    <div className="w-full lg:w-[55%] bg-black px-8 md:px-16 lg:px-20 py-24 flex flex-col justify-center relative overflow-hidden">
                        <Image
                            src={FraudInvestigationImg}
                            alt=""
                            fill
                            className="object-cover opacity-[0.08] pointer-events-none"
                        />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2.5 mb-7">
                                <span className="w-6 h-px bg-white/30" />
                                <span className="text-[10px] font-semibold tracking-[0.22em] text-white/30 uppercase">Unique Proposition</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl xl:text-[52px] font-['Playfair_Display'] font-black text-white leading-[1.1] tracking-tight mb-6">
                                Banking Meets<br />Cyber Recovery.
                            </h2>
                            <p className="text-[15px] leading-relaxed text-white/55 max-w-[500px] mb-11">
                                Nexus uniquely combines private banking infrastructure with a forensic recovery division — protecting your wealth and restoring it if compromised. No other institution offers this convergence of financial security and digital forensics.
                            </p>
                            <Link
                                href="/asset-recovery"
                                className="inline-block bg-primary-500 hover:bg-[#cc1e2c] text-white text-xs font-semibold tracking-widest uppercase px-9 py-4 border-2 border-primary-500 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(238,39,55,0.3)]"
                            >
                                Explore Recovery Services
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-[45%] bg-muted-400 px-8 md:px-16 py-24 flex items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 w-full bg-[#bcc5d3]">
                            {features.map(f => (
                                <div key={f.title} className="bg-muted-400 px-8 py-9 transition-all hover:bg-[#dde2ea]">
                                    <div className="text-[15px] font-bold text-black mb-2.5 tracking-tight">{f.title}</div>
                                    <p className="text-xs leading-relaxed text-gray-600">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 6: FINAL CTA ─── */}
                <section className="bg-primary-500 py-24 px-8 md:px-16 lg:px-20 xl:px-24 text-center">
                    <h2 className="text-4xl md:text-[52px] font-['Playfair_Display'] font-black text-white tracking-tight mb-[14px]">
                        Protect Your Capital Today.
                    </h2>
                    <p className="text-base font-light text-white/80 tracking-wide mb-12">
                        Join thousands of clients who trust Nexus Banking with their most valuable financial assets.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center">
                        <Link
                            href="/signup"
                            className="bg-white text-primary-500 text-[13px] font-bold tracking-wider uppercase px-11 py-[18px] border-2 border-white transition-all hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
                        >
                            Open a Secure Account
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-transparent text-white text-[13px] font-semibold tracking-wider uppercase px-11 py-[18px] border-2 border-white/70 transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
                        >
                            Speak With an Advisor
                        </Link>
                    </div>
                </section>
            </div>
        </PublicRoute>
    );
}
