'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is Nexus a Bank or a Law Firm?',
      answer: 'We are both. Nexus Banking operates an internal specialist legal department alongside regulated financial services. This unique structure allows us to hold your funds securely while having the legal authority to fight for your assets — all under Australian regulatory oversight.',
    },
    {
      question: 'How does the "No Win, No Fee" recovery service work?',
      answer: 'For asset recovery cases, we charge $0 upfront. We only take a percentage fee (typically 10-20%) from the funds we successfully recover for you. If we fail to get your money back, you owe us nothing.',
    },
    {
      question: 'Is my money safe with Nexus Banking?',
      answer: 'Absolutely. All client deposits are held with APRA-regulated Australian institutions and protected under the Financial Claims Scheme (FCS) up to AUD $250,000. Our infrastructure uses military-grade encryption with 24/7 fraud monitoring from our Sydney security operations centre.',
    },
    {
      question: 'What types of scams can you recover money from?',
      answer: 'We specialise in recovering funds from crypto investment scams, romance scams, unauthorised bank transfers, credit card fraud, and merchant disputes. Our legal team works closely with Australian authorities including the ACCC, ASIC, and the Australian Cyber Security Centre to pursue perpetrators.',
    },
    {
      question: 'How long does the recovery process take?',
      answer: 'Simple disputes (like credit card chargebacks via Australian ePayments Code) can be resolved in 7-14 days. Complex crypto fraud cases typically take 30-90 days as they require court orders and international cooperation across jurisdictions.',
    },
    {
      question: 'Can I open a normal bank account without being a scam victim?',
      answer: 'Yes. You can open a standard Australian transaction or high-yield savings account at any time. Every account comes with our fraud protection services included at no extra cost — designed to meet Australian banking standards.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-0.5 bg-primary-500" />
            <span className="text-primary-500 text-xs font-bold tracking-[0.22em] uppercase">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-navy-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-muted-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted-100 transition-colors"
              >
                <h3 className="text-base font-bold text-navy-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''} text-primary-500`}
                  >
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-muted-300">
                      <p className="text-gray-500 leading-relaxed pt-4 text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-secondary-500 px-8 py-8 text-white relative overflow-hidden">
            <h3 className="text-xl font-bold mb-3 relative z-10">Still have questions?</h3>
            <p className="text-sm text-white/70 mb-5 relative z-10">Our legal team is ready to review your case for free.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-secondary-500 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors relative z-10"
            >
              Contact Legal Support
            </a>
          </div>
        </div>
        <div className="mt-12">
          <svg
            viewBox="0 0 2100 420"
            className="w-full h-auto rounded-lg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2100" height="420" fill="#0d1b2e" />

            {/* Grid pattern */}
            <defs>
              <pattern id="legalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="60" stroke="#1b2d4a" strokeWidth="1" />
                <line x1="0" y1="60" x2="60" y2="60" stroke="#1b2d4a" strokeWidth="1" />
              </pattern>
              <pattern id="legalGridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="20" y1="0" x2="20" y2="20" stroke="#1b2d4a" strokeWidth="0.5" opacity="0.4" />
                <line x1="0" y1="20" x2="20" y2="20" stroke="#1b2d4a" strokeWidth="0.5" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="2100" height="420" fill="url(#legalGridSmall)" />
            <rect width="2100" height="420" fill="url(#legalGrid)" />

            {/* Abstract gavel - left */}
            <g transform="translate(300, 160)" opacity="0.3">
              <rect x="0" y="0" width="8" height="100" rx="2" fill="#ee2737" />
              <rect x="-40" y="100" width="88" height="12" rx="3" fill="#ee2737" />
              <rect x="-30" y="80" width="68" height="24" rx="4" fill="#ee2737" opacity="0.6" />
            </g>

            {/* Scale of justice - left center */}
            <g transform="translate(700, 110)">
              <line x1="0" y1="0" x2="160" y2="0" stroke="#ee2737" strokeWidth="3" opacity="0.5" />
              <line x1="80" y1="0" x2="80" y2="80" stroke="#ee2737" strokeWidth="3" opacity="0.5" />
              <path d="M-10,0 Q-5,-40 15,-45" stroke="#ee2737" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M170,0 Q165,-40 145,-45" stroke="#ee2737" strokeWidth="2" fill="none" opacity="0.4" />
              <circle cx="80" cy="80" r="6" fill="#ee2737" opacity="0.3" />
            </g>

            {/* Connected team nodes */}
            <g opacity="0.35">
              <circle cx="1050" cy="80" r="12" fill="none" stroke="#ee2737" strokeWidth="2" />
              <circle cx="1050" cy="80" r="4" fill="#ee2737" />
              <line x1="1050" y1="92" x2="1050" y2="140" stroke="#ee2737" strokeWidth="1.5" />
              <circle cx="1050" cy="150" r="8" fill="none" stroke="#ee2737" strokeWidth="1.5" />
              <line x1="1050" y1="158" x2="1050" y2="200" stroke="#ee2737" strokeWidth="1.5" />
              <circle cx="1050" cy="210" r="8" fill="none" stroke="#ee2737" strokeWidth="1.5" />

              <circle cx="1130" cy="120" r="8" fill="none" stroke="#ee2737" strokeWidth="1.5" />
              <line x1="1058" y1="108" x2="1122" y2="120" stroke="#ee2737" strokeWidth="1" opacity="0.5" />
              <circle cx="1140" cy="200" r="8" fill="none" stroke="#ee2737" strokeWidth="1.5" />
              <line x1="1058" y1="160" x2="1132" y2="198" stroke="#ee2737" strokeWidth="1" opacity="0.5" />

              <circle cx="970" cy="120" r="8" fill="none" stroke="#ee2737" strokeWidth="1.5" />
              <line x1="1042" y1="108" x2="978" y2="120" stroke="#ee2737" strokeWidth="1" opacity="0.5" />
              <circle cx="960" cy="200" r="8" fill="none" stroke="#ee2737" strokeWidth="1.5" />
              <line x1="1042" y1="160" x2="968" y2="198" stroke="#ee2737" strokeWidth="1" opacity="0.5" />
            </g>

            {/* Document outlines - right */}
            <g transform="translate(1560, 100)" opacity="0.3">
              <rect x="0" y="0" width="70" height="90" rx="4" fill="none" stroke="#ee2737" strokeWidth="2" />
              <line x1="15" y1="20" x2="55" y2="20" stroke="#ee2737" strokeWidth="2" />
              <line x1="15" y1="35" x2="55" y2="35" stroke="#ee2737" strokeWidth="1.5" opacity="0.6" />
              <line x1="15" y1="45" x2="45" y2="45" stroke="#ee2737" strokeWidth="1.5" opacity="0.6" />
              <line x1="15" y1="55" x2="55" y2="55" stroke="#ee2737" strokeWidth="1.5" opacity="0.6" />
              <line x1="15" y1="65" x2="40" y2="65" stroke="#ee2737" strokeWidth="1.5" opacity="0.6" />
              <rect x="85" y="10" width="50" height="60" rx="3" fill="none" stroke="#ee2737" strokeWidth="1.5" opacity="0.5" />
              <rect x="150" y="20" width="40" height="50" rx="3" fill="none" stroke="#ee2737" strokeWidth="1" opacity="0.3" />
            </g>

            {/* Decorative horizontal lines */}
            <line x1="100" y1="50" x2="450" y2="50" stroke="#ee2737" strokeWidth="1" opacity="0.15" />
            <line x1="1650" y1="370" x2="2000" y2="370" stroke="#ee2737" strokeWidth="1" opacity="0.15" />

            {/* Corner accents */}
            <rect x="30" y="30" width="40" height="3" fill="#ee2737" opacity="0.4" />
            <rect x="30" y="30" width="3" height="40" fill="#ee2737" opacity="0.4" />
            <rect x="2070" y="30" width="3" height="40" fill="#ee2737" opacity="0.4" />
            <rect x="2067" y="30" width="40" height="3" fill="#ee2737" opacity="0.4" />
            <rect x="30" y="387" width="40" height="3" fill="#ee2737" opacity="0.4" />
            <rect x="30" y="350" width="3" height="40" fill="#ee2737" opacity="0.4" />
            <rect x="2070" y="350" width="3" height="40" fill="#ee2737" opacity="0.4" />
            <rect x="2067" y="387" width="40" height="3" fill="#ee2737" opacity="0.4" />

            {/* Centered text */}
            <text
              x="1050"
              y="205"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ee2737"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="36"
              fontWeight="bold"
              letterSpacing="6"
            >
              LEGAL SUPPORT TEAM
            </text>

            {/* Decorative line under text */}
            <line x1="650" y1="235" x2="1450" y2="235" stroke="#ee2737" strokeWidth="1.5" opacity="0.5" />
            <circle cx="1050" cy="235" r="4" fill="#ee2737" opacity="0.6" />
            <circle cx="1050" cy="235" r="8" fill="none" stroke="#ee2737" strokeWidth="1" opacity="0.3" />

            {/* Subtitle decorative bars */}
            <rect x="780" y="255" width="60" height="2" fill="#ee2737" opacity="0.3" />
            <rect x="1160" y="255" width="60" height="2" fill="#ee2737" opacity="0.3" />

            {/* Bottom decorative element */}
            <g transform="translate(960, 320)" opacity="0.15">
              <path d="M0,0 L45,-30 L90,0 L45,30 Z" fill="none" stroke="#ee2737" strokeWidth="1.5" />
              <path d="M90,0 L135,-30 L180,0 L135,30 Z" fill="none" stroke="#ee2737" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
