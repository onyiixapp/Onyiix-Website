import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Code2, Users, ChevronDown } from 'lucide-react';

export const TrustAndFaqSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trustPillars = [
    {
      icon: Code2,
      title: '100% Full Code Ownership',
      desc: 'You own 100% of your source code, Git repository, design tokens, and database schemas. Zero proprietary vendor lock-in.',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Zero-Cost Warranty',
      desc: 'Every delivered platform includes 30 days of complimentary bug resolution and direct engineering SLA guarantees.',
    },
    {
      icon: Users,
      title: 'Direct Senior Engineering',
      desc: 'Work directly with our core software architects. No junior handoffs, no middleman communication lag.',
    },
    {
      icon: Lock,
      title: 'Security & Web Vitals SLA',
      desc: 'Enterprise-grade SSL, database encryption, automated snapshot backups, and sub-2.5s Core Web Vitals performance.',
    },
  ];

  const faqs = [
    {
      q: 'Do I own 100% of the website code and assets?',
      a: 'Yes, absolutely. Upon final deployment and project sign-off, full ownership of the GitHub/GitLab repository, production build scripts, database schemas, and digital assets is permanently transferred to your team with complete commercial rights.',
    },
    {
      q: 'What happens after the 1-Month Free Maintenance period concludes?',
      a: 'After your complimentary 30 days of bug fixes, monitoring, and content tweaks, you have full freedom to manage the platform independently, or subscribe to one of our optional monthly Care Plans (Basic, Standard, or Growth) for ongoing proactive support.',
    },
    {
      q: 'How fast can ASME Studio launch our project?',
      a: 'Typical timelines: Starter websites launch in 7–10 business days; Business platforms & e-commerce stores take 2–4 weeks; full-scale SaaS platforms and custom web applications take 4–8 weeks depending on database complexity.',
    },
    {
      q: 'How do you handle custom requirements or third-party integrations?',
      a: 'We specialize in custom architectural integrations including Telegram bots, PostgreSQL multi-tenant databases, ERP connectors, and custom REST/GraphQL APIs. You can request a custom proposal via our Interactive Selector or contact form.',
    },
    {
      q: 'Where is ASME Studio based, and do you work with international clients?',
      a: 'ASME Studio is headquartered in Bengaluru, India, and actively delivers production software for clients worldwide (including live platforms delivered to Bengaluru, India and active SaaS developments for clients in France).',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="faq" ref={ref} className="bg-black py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Trust Badges Grid (Star icon removed) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center sm:text-left mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/50 px-4 py-1.5 text-xs font-sans font-medium text-sky-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>07 / TRUST &amp; CREDIBILITY CHARTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight">
              Built on engineering <br />
              <span className="font-serif italic text-sky-300">transparency &amp; ownership</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((tp) => {
              const Icon = tp.icon;
              return (
                <div
                  key={tp.title}
                  className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2 font-sans">{tp.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">{tp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-400 text-xs font-sans font-semibold tracking-wider uppercase mb-2">
              FREQUENTLY ANSWERED QUESTIONS
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Clarity on Engagement &amp; Delivery
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="liquid-glass rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-sky-300 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base font-sans">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/60 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-sky-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed font-sans border-t border-white/5"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
