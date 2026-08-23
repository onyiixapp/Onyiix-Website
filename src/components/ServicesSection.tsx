import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            3
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Core Capabilities
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12 max-w-5xl">
          Four pillars of digital capability.
        </h2>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-5 sm:px-8 lg:px-12">
          {pillars.map((pillar) => {
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between hover:border-gray-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#F26522] bg-orange-50 px-3 py-1 rounded-full">
                      Pillar {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-medium text-[#F26522] mb-3">
                    &ldquo;{pillar.outcome}&rdquo;
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Expandable Technical Inclusions */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-gray-700 hover:text-black py-1"
                  >
                    <span>{isExpanded ? 'Hide Technical Scope' : 'View Technical Inclusions'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
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
                    <span className="text-xs text-gray-400">1-Month Free SLA Included</span>
                    <button
                      type="button"
                      onClick={() => onOpenServiceModal(pillar.title)}
                      className="text-xs font-semibold text-gray-900 hover:text-[#F26522] flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
