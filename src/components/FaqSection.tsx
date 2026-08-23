import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faq';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3"
        >
          <span className="text-[#EEA22A] font-bold">07 / FREQUENTLY ASKED QUESTIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]"
        >
          Direct Answers. <br />
          <span className="text-[#8C857B]">Zero Agency Ambiguity.</span>
        </motion.h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className={`rounded-xl border transition-all overflow-hidden ${
                isOpen
                  ? 'border-[#EEA22A] bg-white shadow-paper-card'
                  : 'border-[#E6E2D8] bg-[#FAF8F3] hover:border-[#D6D0C2]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#121316]"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#121316] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#EEA22A]' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B6862] leading-relaxed border-t border-[#E6E2D8]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
