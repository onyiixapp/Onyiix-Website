import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Code2, Lock, ShieldCheck, Users } from 'lucide-react';

const faqs = [
  { q: 'What happens after launch?', a: 'We include one month of technical oversight and minor agreed adjustments, plus a 30-day warranty for defects inside the delivered scope.' },
  { q: 'Do we own the code?', a: 'Yes. After final settlement, the agreed source code, design assets and documentation are transferred to you. There is no proprietary platform lock-in.' },
  { q: 'Can you work with teams outside India?', a: 'Yes. We work from Bengaluru and plan overlap for teams in India, the UK, Germany, France, the US, Canada and other global time zones.' },
  { q: 'Can you support digital marketing after launch?', a: 'Yes. We can support technical SEO, analytics, conversion-focused landing pages, content structure and campaign measurement. Paid-media management is scoped separately when required.' },
  { q: 'What technology do you use?', a: 'The stack follows the problem. Our common foundation is React and TypeScript with modern server, database, cloud and automation tools selected for maintainability.' },
];

const commitments = [
  { Icon: Code2, title: 'Code ownership' },
  { Icon: ShieldCheck, title: 'Scoped bug warranty' },
  { Icon: Users, title: 'Direct founder access' },
  { Icon: Lock, title: 'Private project handling' },
];

// Animated bracket component — corners slide in from outside
const AnimatedBracketHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    className="relative inline-flex items-center gap-3"
  >
    {/* Left bracket corner */}
    <motion.span
      variants={{
        hidden: { opacity: 0, x: 18, y: -18 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="select-none font-black text-[#2563EB] leading-none"
      aria-hidden="true"
      style={{ fontSize: 'clamp(2.4rem,5.5vw,4.4rem)', lineHeight: 1 }}
    >
      [
    </motion.span>

    {/* Heading text */}
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.span>

    {/* Right bracket corner */}
    <motion.span
      variants={{
        hidden: { opacity: 0, x: -18, y: 18 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="select-none font-black text-[#2563EB] leading-none"
      aria-hidden="true"
      style={{ fontSize: 'clamp(2.4rem,5.5vw,4.4rem)', lineHeight: 1 }}
    >
      ]
    </motion.span>
  </motion.div>
);

export const TrustAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faqs" className="overflow-hidden bg-[#F4F4F4] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#0B1020]">
            <AnimatedBracketHeading>Frequently Asked Questions</AnimatedBracketHeading>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mt-5 text-sm leading-7 text-slate-500 max-w-xl mx-auto"
          >
            A short trust charter so ownership, support and collaboration are clear before the first sprint.
          </motion.p>
        </div>


        {/* Commitments row */}
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {commitments.map(({ Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-xs font-bold text-slate-800">{title}</p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 text-sm font-black">
                    ?
                  </span>
                  <span className="flex-1 text-sm font-bold text-slate-900 sm:text-base">{faq.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 bg-white text-slate-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-[4.5rem] text-sm leading-7 text-slate-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

