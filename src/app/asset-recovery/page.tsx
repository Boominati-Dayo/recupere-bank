import React from 'react';
import type { Metadata } from 'next';
import PublicRoute from '@/components/PublicRoute';
import Link from 'next/link';
import Image from 'next/image';
import FraudInvestigationImg from '@/assets/images_for_pages/financialfraudinvestigation.png';

export const metadata: Metadata = {
    title: 'Asset Recovery | Nexus Banking',
    description: 'Specialized forensic analysis and legal recovery for victims of crypto, forex, and romance scams. Get your cashback.',
};

const categories = [
    {
        number: '01',
        title: 'Crypto Wealth Recovery',
        description: 'Tracing lost, stolen, or fraudulently transferred digital assets across Bitcoin, Ethereum, and emerging chain networks — AUSTRAC compliant.',
        redBorder: true,
    },
    {
        number: '02',
        title: 'Forex & Investment Fraud',
        description: 'Recovering capital lost to unlicensed brokers, clone firms, and false trading platforms targeting Australian investors via social media.',
        redBorder: false,
    },
    {
        number: '03',
        title: 'Romance & Social Engineering',
        description: 'Identifying perpetrators and recovering funds extracted through emotionally manipulative schemes, pig-butchering, and trust-based fraud networks targeting Australians.',
        redBorder: false,
    },
    {
        number: '04',
        title: 'Phishing & Bank Hacks',
        description: 'Rapid response to unauthorised account access, credential compromise, and fraudulent wire transfers through coordinated bank-level intervention under the ePayments Code.',
        redBorder: true,
    },
];

const timelineSteps = [
    { number: 1, title: 'Intelligence', subtitle: 'Audit', desc: 'Full case intake & evidence mapping' },
    { number: 2, title: 'Forensic', subtitle: 'Trace', desc: 'On-chain & digital asset tracking' },
    { number: 3, title: 'Legal', subtitle: 'Demand', desc: 'Formal notices & regulatory filings' },
    { number: 4, title: 'Bank', subtitle: 'Freeze', desc: 'Court orders & institutional holds' },
    { number: 5, title: 'Asset', subtitle: 'Release', desc: 'Verified disbursement authorised' },
    { number: 6, title: 'Cashback', subtitle: 'Delivered', desc: 'Funds returned to client account' },
];

const blockchainNodes = [
    { label: 'SRC', sub: 'Origin' },
    { label: 'MX1', sub: 'Mixer' },
    { label: 'WL2', sub: 'Wallet', active: true },
    { label: 'EX3', sub: 'Exchange', flagged: true },
    { label: 'DST', sub: 'Target' },
];

const trustItems = ['24/7 Australian Response Network', 'ASIC & AUSTRAC Compliant', 'Certified Forensic Team'];

export default function AssetRecoveryPage() {
    return (
        <PublicRoute>
            <div>
                {/* ─── SECTION 1: HERO SPLIT ─── */}
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[55%] bg-white px-8 md:px-16 lg:px-20 xl:px-24 py-24 lg:py-0 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-8 h-0.5 bg-primary-500" />
                            <span className="text-[11px] font-bold tracking-[0.18em] text-primary-500 uppercase">Asset Recovery</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-['Playfair_Display'] font-black leading-[1.04] tracking-tight text-black mb-7 max-w-[600px]">
                            We Follow The Money.<br />You Get Your Cashback.
                        </h1>
                        <p className="text-base leading-relaxed text-gray-600 max-w-[480px] mb-11">
                             Cyber fraud leaves a trace. We combine intelligence-grade digital forensics with aggressive litigation under Australian law to secure swift refunds.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/asset-recovery/report"
                                className="bg-primary-500 hover:bg-[#c01e2c] text-white text-[13px] font-bold tracking-widest uppercase px-8 py-4 border-2 border-primary-500 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(238,39,55,0.3)]"
                            >
                                Report a Scam Now
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent text-secondary-500 text-[13px] font-bold tracking-widest uppercase px-8 py-4 border-2 border-secondary-500 transition-all hover:bg-secondary-500 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(35,91,168,0.25)]"
                            >
                                Call Emergency Desk
                            </Link>
                        </div>
                        <div className="flex border-t border-muted-400 pt-6">
                            {trustItems.map((item, i) => (
                                <span
                                    key={item}
                                    className={`text-[11px] font-bold tracking-widest uppercase text-gray-500 ${i < trustItems.length - 1 ? 'pr-7 mr-7 border-r border-muted-400' : ''}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-[45%] bg-navy-900 flex items-center justify-center px-8 md:px-14 py-16 lg:py-0 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full border-[60px] border-secondary-500/15 pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-[280px] h-[280px] rounded-full border-[40px] border-primary-500/10 pointer-events-none" />

                        <div className="w-full max-w-[560px] relative z-10">
                            <div className="flex items-center justify-between mb-7">
                                <div>
                                    <div className="text-[11px] font-bold tracking-widest text-white/50 uppercase">Active Case</div>
                                    <div className="text-[22px] font-extrabold text-white tracking-wide">Case #NX-2041</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-primary-500 animate-pulse" />
                                    <span className="text-[11px] font-semibold text-primary-500 tracking-wider uppercase">Live</span>
                                </div>
                            </div>

                            <div className="h-px bg-white/10 mb-7" />

                            <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2.5">Trace in Progress</div>
                            <div className="w-full h-2 bg-white/10 mb-2 overflow-hidden">
                                <div className="h-full w-[73%] bg-gradient-to-r from-primary-500 to-[#ff5f6d]" />
                            </div>
                            <div className="flex justify-between text-[10px] text-white/35 tracking-wider mb-8">
                                <span>Initiated: 14 Nov 2024</span>
                                <span className="text-primary-500 font-bold">73% Complete</span>
                            </div>

                            <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">Blockchain Node Trace</div>
                            <div className="flex items-center mb-9">
                                {blockchainNodes.map((node, i) => (
                                    <React.Fragment key={node.label}>
                                        <div className="flex flex-col items-center gap-1.5">
                                            <div
                                                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-[9px] font-bold tracking-wider
                                                    ${node.active ? 'border-primary-500 bg-primary-500/20 text-white' : ''}
                                                    ${node.flagged ? 'border-primary-500/60 bg-primary-500/10 text-white/70' : ''}
                                                    ${!node.active && !node.flagged ? 'border-secondary-500/90 bg-secondary-500/15 text-white/70' : ''}
                                                `}
                                            >
                                                {node.label}
                                            </div>
                                            <span className="text-[8px] text-white/30 uppercase tracking-wider whitespace-nowrap">{node.sub}</span>
                                        </div>
                                        {i < blockchainNodes.length - 1 && (
                                            <div
                                                className={`flex-1 h-px relative mb-5 ${i === 2 ? 'bg-gradient-to-r from-primary-500/40 to-primary-500/20' : 'bg-gradient-to-r from-secondary-500/50 to-secondary-500/20'}`}
                                            >
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary-500/50" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="h-px bg-white/10 mb-7" />

                            <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2">Recovery Probability</div>
                            <div className="flex items-baseline gap-4 mb-3">
                                <span className="text-6xl font-black text-white leading-none tracking-tight">87</span>
                                <span className="text-[28px] font-bold text-white/50">%</span>
                            </div>
                            <div className="text-xs text-white/35 tracking-wider mb-5">Based on jurisdictional analysis & fund traceability</div>

                            <div className="flex gap-8 pt-5 border-t border-white/10">
                                {[
                                    { val: '$243K', label: 'Amount Frozen' },
                                    { val: '4', label: 'Wallets Tagged' },
                                    { val: '2', label: 'Legal Holds Filed' },
                                ].map(stat => (
                                    <div key={stat.label} className="flex flex-col gap-1">
                                        <span className="text-lg font-extrabold text-white tracking-tight">{stat.val}</span>
                                        <span className="text-[9px] font-semibold tracking-widest text-white/30 uppercase">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 2: CATEGORIES ─── */}
                <section className="py-24 px-8 md:px-16 lg:px-20">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-7 h-0.5 bg-primary-500" />
                        <span className="text-sm font-bold tracking-widest text-primary-500 uppercase">Our Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-black tracking-tight mb-8">Eligible Recovery Categories</h2>
                    <div className="mb-10 max-w-4xl">
                        <div className="relative overflow-hidden flex items-center justify-center aspect-[21/6] bg-navy-800">
                            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                            <div className="relative z-10 text-center px-6">
                                <div className="w-10 h-0.5 bg-primary-500 mx-auto mb-4" />
                                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/50">Forensic Investigation Lab</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-muted-400">
                        {categories.map(cat => (
                            <div
                                key={cat.number}
                                className={`bg-white p-11 relative overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${cat.redBorder ? 'border-l-[6px] border-primary-500' : 'border-l-[6px] border-secondary-500'}`}
                            >
                                <span className="absolute top-5 right-8 text-[88px] font-black text-muted-400 leading-none tracking-tight pointer-events-none select-none">
                                    {cat.number}
                                </span>
                                <h3 className="text-[22px] font-extrabold text-black mb-3.5 tracking-tight relative z-10">{cat.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500 max-w-[360px] relative z-10">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── SECTION 3: TIMELINE ─── */}
                <section className="py-24 px-8 md:px-16 lg:px-20 border-t border-muted-400 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-[44px] font-['Playfair_Display'] font-black tracking-tight text-center mb-[72px]">How You Get Your Money Back</h2>
                        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 px-0 lg:px-5">
                            <div className="hidden lg:block absolute top-[22px] left-[60px] right-[60px] h-[3px] bg-primary-500 z-10" />
                            {timelineSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-4 w-full lg:w-1/6 relative z-20 transition-all hover:-translate-y-1"
                                >
                                    <div className="w-[46px] h-[46px] rounded-full bg-primary-500 flex items-center justify-center text-sm font-black text-white shrink-0 transition-all hover:shadow-[0_0_0_8px_rgba(238,39,55,0.15)]">
                                        {step.number}
                                    </div>
                                    <div className="text-left lg:text-center">
                                        <div className="text-[13px] font-extrabold text-black leading-tight">
                                            {step.title}<br />{step.subtitle}
                                        </div>
                                        <div className="text-xs text-gray-400 leading-relaxed mt-0.5">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 4: NO WIN NO FEE ─── */}
                <section className="flex flex-col lg:flex-row min-h-[600px]">
                    <div className="w-full lg:w-[60%] bg-white px-8 md:px-16 lg:px-20 py-20 flex flex-col justify-center relative overflow-hidden">
                        <div className="hidden lg:block absolute top-0 right-[-60px] w-[120px] h-full bg-white skew-x-[-6deg] z-10" />
                        <h2 className="text-6xl md:text-7xl xl:text-8xl font-['Playfair_Display'] font-black italic leading-none tracking-tight">
                            No Win.<br />No Fee.
                        </h2>
                        <div className="w-40 h-1 bg-primary-500 my-6" />
                        <p className="text-base leading-relaxed text-gray-600 max-w-[480px] mb-7 relative z-20">
                            Our engagement model is built entirely around your outcome. Nexus Banking assumes full operational cost — forensic analysis, legal filings, and international coordination — with zero upfront charges to you. We only collect a success-based fee when funds are confirmed recovered and returned to your account.
                        </p>
                        <p className="text-[11px] text-gray-400 leading-relaxed max-w-[460px] italic relative z-20">
                            *Success fees vary between 15–25% depending on case complexity, jurisdiction, and recovery amount. All fee structures are confirmed in writing prior to engagement commencement. Nexus Banking operates under Australian regulatory oversight.
                        </p>
                    </div>
                    <div className="w-full lg:w-[40%] bg-primary-500 flex flex-col justify-center items-start px-8 md:px-16 py-20 relative overflow-hidden">
                        <span className="absolute text-[340px] font-black text-white/5 leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none tracking-tight">$</span>
                        <blockquote className="text-2xl md:text-3xl xl:text-4xl font-['Playfair_Display'] italic font-bold text-white leading-tight mb-10 relative z-10">
                            <span className="text-7xl leading-none text-white/25 font-['Playfair_Display'] italic block -mb-2">"</span>
                            Your recovery<br />is our only<br />payment.
                        </blockquote>
                        <Link
                            href="/asset-recovery/report"
                            className="bg-transparent text-white text-xs font-bold tracking-widest uppercase px-7 py-3.5 border-2 border-white/70 relative z-10 transition-all hover:bg-white hover:text-primary-500 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                        >
                            Start Your Claim
                        </Link>
                    </div>
                </section>

                {/* ─── SECTION 5: URGENCY ─── */}
                <section className="flex flex-col lg:flex-row min-h-[480px] relative">
                    <div className="w-full lg:w-1/2 bg-black px-8 md:px-16 lg:px-20 py-20 flex flex-col justify-center relative overflow-hidden">
                        <Image
                            src={FraudInvestigationImg}
                            alt=""
                            fill
                            className="object-cover opacity-10 pointer-events-none"
                        />
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl xl:text-7xl font-['Playfair_Display'] font-black text-white leading-none tracking-tight">Time is<br />Critical.</h2>
                            <div className="w-30 h-1 bg-primary-500 my-5" />
                            <p className="text-base leading-relaxed text-white/55 max-w-[420px] mb-10">
                                According to the ACCC Scamwatch, Australians lost over $2.7 billion to scams in 2023. Scammers move funds across jurisdictions within hours. Once assets are layered, recovery becomes exponentially harder. Every minute counts.
                            </p>
                            <Link
                                href="/asset-recovery/report"
                                className="inline-block bg-primary-500 hover:bg-[#c01e2c] text-white text-[13px] font-bold tracking-wider uppercase px-9 py-[18px] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(238,39,55,0.45)]"
                            >
                                Launch Emergency Trace
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-secondary-500 px-8 md:px-16 lg:px-20 py-20 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute -top-[100px] -right-[100px] w-[350px] h-[350px] rounded-full border-[50px] border-white/5 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="text-7xl md:text-8xl xl:text-9xl font-black text-white leading-none tracking-tight">$1.2B+</div>
                            <div className="text-sm font-semibold text-white/65 tracking-wide uppercase mb-9">Total Illicit Funds Traced</div>
                            <div className="w-full max-w-[360px] border-t-2 border-dotted border-white/25 mb-7" />
                            <div className="text-lg font-bold text-white/85"><span className="text-white font-black">200+</span> Active Investigators Today</div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicRoute>
    );
}
