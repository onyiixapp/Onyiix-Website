import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Lock, Code2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TrustAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trustPoints = [
    {
      icon: Code2,
      title: '100% Code Ownership',
      desc: 'Upon project completion, you receive full intellectual property ownership and full repository access. Zero vendor lock-in.',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Zero-Cost Bug Warranty',
      desc: 'If any bug arises within 30 days post-launch that was part of the scoped deliverables, we patch it immediately at zero cost.',
    },
    {
      icon: Users,
      title: 'Direct Founder Access',
      desc: 'You communicate directly with Mohammed Maaz A & Suman Kumar Singh—no bureaucratic account managers or lost requirements.',
    },
    {
      icon: Lock,
      title: '1-Month Free Maintenance SLA',
      desc: 'Enjoy one month of free technical oversight, security checks, uptime audits, and minor content adjustments included in all builds.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in the 1-Month Free Website Maintenance SLA?',
      a: 'Our 1-Month Free Maintenance SLA includes continuous uptime monitoring, security updates, technical SEO verification, minor copy/image modifications, and Core Web Vitals checks to ensure your website operates flawlessly after launch.',
    },
    {
      q: 'Do I own 100% of the code and intellectual property after completion?',
      a: 'Yes. Upon final settlement, all source code, design assets, Figma files, database schemas, and documentation are transferred 100% to you. We do not retain proprietary locks or vendor traps.',
    },
    {
      q: 'How does your 30-Day Zero-Cost Bug Warranty work?',
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
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            7
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Trust Charter &amp; FAQs
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12 max-w-5xl">
          Built on guarantees &amp; trust.
        </h2>

        {/* Trust Charter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-8 lg:px-12 mb-16">
          {trustPoints.map((tp) => {
            const Icon = tp.icon;
            return (
              <div
                key={tp.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 hover:border-gray-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {tp.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="px-5 sm:px-8 lg:px-12 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-gray-50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F26522]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100"
                      >
                        <p className="pt-3">{faq.a}</p>
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
