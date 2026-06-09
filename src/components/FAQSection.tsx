'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

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
          <ImagePlaceholder label="Legal Support Team" aspectRatio="aspect-[21/5]" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
