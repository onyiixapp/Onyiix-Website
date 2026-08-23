import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SingooServicesProps {
  onOpenContactModal: (service?: string) => void;
}

export const SingooServices: React.FC<SingooServicesProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      num: '01',
      title: 'UX/UI & PRODUCT DESIGN',
      desc: 'Digital product experiences that engage, convert, and keep users coming back. Every interface is crafted to bridge user needs with business goals—clear, functional, and shaped to raise the bar in your space.',
      tags: ['Figma Prototyping', 'Design Systems', 'Micro-Animations', 'User Research'],
    },
    {
      num: '02',
      title: 'CMS & WORDPRESS WEBSITES',
      desc: 'Custom WordPress themes, bespoke plugin engineering, and headless CMS integrations designed for effortless non-technical content management and blazing speed.',
      tags: ['Custom Themes', 'WooCommerce', 'Headless Next.js', 'SEO Indexing'],
    },
    {
      num: '03',
      title: 'SAAS & CUSTOM WEB APPS',
      desc: 'Production-ready multi-tenant web platforms, secure customer portals, role-based access control (RBAC), and subscription infrastructure built with high availability.',
      tags: ['Multi-Tenant Schemas', 'RBAC Auth', 'Prisma ORM', 'Admin Dashboards'],
    },
    {
      num: '04',
      title: 'FULL-STACK WEB DEVELOPMENT',
      desc: 'End-to-end engineering using Next.js 15, React 19, TypeScript, PostgreSQL, and scalable cloud microservices tailored for sub-second latency and zero technical debt.',
      tags: ['Next.js 15', 'PostgreSQL', 'REST/GraphQL APIs', 'Edge CDN'],
    },
    {
      num: '05',
      title: 'ONGOING SUPPORT & MAINTENANCE',
      desc: 'Continuous Core Web Vitals maintenance (≤ 2.5s LCP), technical SEO audits, proactive security patching, and our bundled 1-Month Free Website Maintenance SLA.',
      tags: ['1-Month Free SLA', 'Uptime Audits', 'Bug Warranty', 'Content Edits'],
    },
    {
      num: '06',
      title: 'AI & TELEGRAM AUTOMATIONS',
      desc: 'Custom operational AI assistants, private vector RAG knowledge engines, and automated Telegram bot order dispatch systems integrated directly into your workflows.',
      tags: ['Telegram Bot Sync', 'Vector RAG', 'AI Workflows', 'Custom Webhooks'],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      aria-label="Services section"
      className="w-full min-h-screen py-20 sm:py-32 bg-black text-white flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Watermark Typography in Background */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="watermark-heading text-neutral-900 text-left"
          >
            Service
          </motion.h2>
        </div>

        {/* Section Header */}
        <div className="relative -mt-8 sm:-mt-16 lg:-mt-24 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2 font-sans">
              WHAT WE DO
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              End-to-End Digital Capabilities
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onOpenContactModal()}
            className="bg-white text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md self-start sm:self-auto flex items-center gap-1.5"
          >
            <span>Request Scoped Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Singoo-Style High-Impact Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-950/60 flex flex-col justify-between hover:border-blue-600/50 hover:bg-neutral-900/80 transition-all duration-300 group"
            >
              <div>
                <span className="text-neutral-500 text-base font-bold font-sans">
                  ({svc.num})
                </span>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-blue-500 mt-4 mb-4 leading-tight font-sans tracking-tight">
                  {svc.title}
                </h4>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContactModal(svc.title)}
                  className="text-xs font-bold text-white group-hover:text-blue-500 flex items-center gap-1 transition-colors"
                >
                  <span>Select</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
