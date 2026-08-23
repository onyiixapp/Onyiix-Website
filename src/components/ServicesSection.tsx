import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onOpenServiceModal: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenServiceModal }) => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      num: '01',
      title: 'CMS & WordPress Websites',
      outcome: 'Get online fast with a professional, easy-to-manage website.',
      desc: 'Custom WordPress theme development, bespoke plugins, and headless CMS setups designed for effortless non-technical content management and blazing speed.',
      inclusions: [
        'Custom WordPress websites & theme engineering',
        'Custom plugin development & API connectors',
        'WooCommerce e-commerce store setups',
        'Headless WordPress with Next.js frontend',
        'Security hardening & automated daily backups',
      ],
    },
    {
      id: 2,
      num: '02',
      title: 'SaaS & Custom Web Applications',
      outcome: 'Build the platform your business idea depends on.',
      desc: 'Production-ready multi-tenant web platforms, secure customer portals, role-based access control (RBAC), and subscription infrastructure with high availability.',
      inclusions: [
        'Multi-tenant SaaS architectures & scalable schemas',
        'Customer & admin analytics dashboards',
        'Secure authentication & role-based access (RBAC)',
        'Automated billing & subscription lifecycles',
        'REST & GraphQL API engines with webhook triggers',
      ],
    },
    {
      id: 3,
      num: '03',
      title: 'Full-Stack Web Development',
      outcome: 'End-to-end engineering, from database to deployment.',
      desc: 'Complete architectural execution using Next.js 15, React 19, TypeScript, PostgreSQL, and scalable cloud microservices tailored for performance and zero technical debt.',
      inclusions: [
        'Modern React & Next.js frontend development',
        'High-throughput Node.js & Python backend services',
        'PostgreSQL & Prisma data modeling',
        'Cloud infrastructure setup (Vercel, AWS, Cloudflare)',
        'Fluid 120fps micro-interactions',
      ],
    },
    {
      id: 4,
      num: '04',
      title: 'Ongoing Support & Optimization',
      outcome: 'Keep your site fast, secure, and growing.',
      desc: 'Continuous Core Web Vitals maintenance (≤ 2.5s LCP), technical SEO audits, proactive security patching, and our bundled 1-Month Free Website Maintenance SLA.',
      inclusions: [
        'Website speed & Core Web Vitals optimization (≤ 2.5s LCP)',
        'Technical SEO indexing & structured data markup',
        'Continuous uptime monitoring & vulnerability patching',
        'Monthly routine maintenance & minor content edits',
        '1-Month Free Website Maintenance SLA inclusion',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-white pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-sm">
            3
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 bg-gray-50 rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#F26522]" />
            <span>Core Capabilities</span>
          </div>
        </motion.div>

        {/* Heading H2 */}
        <div className="mb-12 sm:mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-5xl">
              Four pillars of digital capability.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl leading-relaxed">
              Tailored engineering capabilities spanning from rapid CMS websites to high-availability multi-tenant cloud platforms.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedPillar === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50/80 hover:bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/80 hover:border-gray-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#F26522] bg-orange-50 px-3 py-1 rounded-full border border-orange-100/60">
                      Pillar {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#F26522] mb-3">
                    &ldquo;{pillar.outcome}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Expandable Technical Inclusions */}
                <div className="pt-4 border-t border-gray-200/80">
                  <button
                    type="button"
                    onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-gray-700 hover:text-black py-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Technical Scope' : 'View Technical Inclusions'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 stroke-[2.5] ${
                        isExpanded ? 'rotate-180 text-[#F26522]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden pt-3 space-y-2"
                      >
                        {pillar.inclusions.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F26522] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-gray-400">1-Month Free SLA Included</span>
                    <button
                      type="button"
                      onClick={() => onOpenServiceModal(pillar.title)}
                      className="text-xs font-bold text-gray-900 hover:text-[#F26522] flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
