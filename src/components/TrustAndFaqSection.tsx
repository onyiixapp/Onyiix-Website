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
  { Icon: Code2, title: 'Code ownership' }, { Icon: ShieldCheck, title: 'Scoped bug warranty' },
  { Icon: Users, title: 'Direct founder access' }, { Icon: Lock, title: 'Private project handling' },
];

export const TrustAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section id="faqs" className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700">Clear commitments</span>
          <h2 className="mt-3 text-[clamp(2.2rem,4.8vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">The useful answers, upfront.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">A short trust charter so ownership, support and collaboration are clear before the first sprint.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {commitments.map(({ Icon, title }) => <div key={title} className="rounded-2xl border border-slate-200 bg-[#F8FAFF] p-4"><span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-[0_8px_22px_rgba(37,99,235,0.12)]"><Icon className="h-4 w-4" /></span><p className="text-xs font-extrabold text-slate-800">{title}</p></div>)}
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className={`overflow-hidden rounded-2xl border transition ${isOpen ? 'border-blue-200 bg-blue-50/50 shadow-[0_12px_35px_rgba(37,99,235,0.08)]' : 'border-slate-200 bg-white'}`}>
                <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-extrabold text-slate-950 sm:px-6">
                  {faq.q}<span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${isOpen ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}><ChevronDown className="h-4 w-4" /></span>
                </button>
                <AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden"><p className="px-5 pb-6 text-sm leading-7 text-slate-600 sm:px-6">{faq.a}</p></motion.div>}</AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
