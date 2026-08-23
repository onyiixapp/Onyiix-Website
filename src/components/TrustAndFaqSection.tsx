import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Lock, Code2, Users, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TrustAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trustPoints = [
    {
      icon: Code2,
      title: '100% Code Ownership',
      desc: 'Upon project completion, you receive full intellectual property ownership and repository access. Zero proprietary lock-in.',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Zero-Cost Bug Warranty',
      desc: 'If any functional defect arises within 30 days post-launch within the scoped deliverables, we patch it at zero cost.',
    },
    {
      icon: Users,
      title: 'Direct Founder Access',
      desc: 'You communicate directly with our principal architects—no bureaucratic middle layers or lost requirements.',
    },
    {
      icon: Lock,
      title: '1-Month Free Maintenance SLA',
      desc: 'Enjoy one month of complimentary technical oversight, security checks, and minor adjustments with every build.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in the 1–Month Free Website Maintenance SLA?',
      a: 'Our 1–Month Free Maintenance SLA includes continuous uptime monitoring, security updates, technical SEO verification, minor copy/image modifications, and Core Web Vitals checks to ensure your website operates flawlessly after launch.',
    },
    {
      q: 'Do I own 100% of the code and intellectual property after completion?',
      a: 'Yes. Upon final settlement, all source code, design assets, Figma files, database schemas, and documentation are transferred 100% to you. We do not retain proprietary locks or vendor traps.',
    },
    {
      q: 'How does your 30–Day Zero–Cost Bug Warranty work?',
      a: 'If any functional defect, responsive visual bug, or broken link arises within 30 days of launch that falls within the scoped agreement, we diagnose and deploy the fix immediately with no billing.',
    },
    {
      q: 'Can you build custom Telegram bot integrations for ordering and alerts?',
      a: 'Yes! As demonstrated in our live client delivery for primkart.app in Bengaluru, we build automated Telegram bots that dispatch instant order tickets, alerts, and customer notifications directly to your management chat groups.',
    },
    {
      q: 'What technologies do you use for SaaS and full-stack development?',
      a: 'We specialize in Next.js 15, React 19, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, Node.js microservices, Docker, Redis, and modern vector RAG AI workflows.',
    },
    {
      q: 'Where is ASME Studio located and what hours do you work?',
      a: 'ASME Studio is founded and headquartered in Bengaluru, Karnataka, India (with co-engineering in Delhi, India). We operate on IST and comfortably overlap with US, European (France, UK), and Asia-Pacific timezones.',
    },
  ];

  return (
    <section
      id="faqs"
      className="bg-white pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* CENTERED FAQ HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Centered Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-sm">
              7
            </div>
            <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 bg-gray-50 rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#F26522]" />
              <span>Trust Charter &amp; FAQs</span>
            </div>
          </motion.div>

          {/* Heading H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.03em] text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 mt-4 max-w-xl leading-relaxed"
          >
            Clear answers on our engineering process, warranties, maintenance SLA, and code ownership policies.
          </motion.p>
        </div>

        {/* CENTERED FAQ ACCORDION CONTAINER */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-gray-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                    : 'border-gray-200/90 bg-white/80 hover:border-gray-300 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-[15px] text-gray-900 cursor-pointer group"
                >
                  <span className="transition-colors group-hover:text-[#F26522] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-orange-50 text-[#F26522] rotate-180' : 'bg-gray-100 text-gray-400 group-hover:text-gray-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden px-6 sm:px-8 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed"
                    >
                      <div className="pt-2 border-t border-gray-100">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST CHARTER CARDS (4-Column Grid) */}
        <div className="pt-16 border-t border-gray-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold text-[#F26522] uppercase tracking-wider block mb-1">
              ENGINEERING GUARANTEES
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Our Non-Negotiable Commitments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((tp, idx) => {
              const Icon = tp.icon;
              return (
                <motion.div
                  key={tp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-gray-50/80 hover:bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                    {tp.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {tp.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
