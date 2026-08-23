import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Globe2, Layers, Cpu, Wrench, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContactModal: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      tag: '01 / CMS & WORDPRESS',
      title: 'CMS & WordPress Websites',
      outcome: 'Get online fast with a professional, easy-to-manage website.',
      icon: Globe2,
      summary: 'Custom WordPress theme development, bespoke plugins, and headless CMS integrations designed for effortless non-technical content management and blazing speed.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
      items: [
        'Custom WordPress websites & theme engineering',
        'Custom plugin development & API connectors',
        'WooCommerce e-commerce store setups',
        'Security hardening, backup automation & migration',
        'Headless WordPress with Next.js frontend',
      ],
      packageLink: 'Starter & Business Packages',
    },
    {
      id: 2,
      tag: '02 / SAAS & WEB APPS',
      title: 'SaaS & Custom Web Applications',
      outcome: 'Build the platform your business idea depends on.',
      icon: Layers,
      summary: 'Production-ready multi-tenant web platforms, secure customer portals, role-based access control (RBAC), and subscription infrastructure with high availability.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
      items: [
        'Multi-tenant SaaS architectures & scalable schemas',
        'Customer & admin analytics dashboards',
        'Secure authentication & role-based access (RBAC)',
        'Automated billing & subscription lifecycles',
        'REST & GraphQL API engines with webhook triggers',
      ],
      packageLink: 'SaaS / Custom Engineering Tier',
    },
    {
      id: 3,
      tag: '03 / FULL-STACK ENGINEERING',
      title: 'Full-Stack Web Development',
      outcome: 'End-to-end engineering, from database to deployment.',
      icon: Cpu,
      summary: 'Complete architectural execution using Next.js 15, React 19, TypeScript, PostgreSQL, and scalable cloud microservices tailored for performance and zero technical debt.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4',
      items: [
        'Modern React & Next.js frontend development',
        'High-throughput Node.js & Python backend services',
        'PostgreSQL & Prisma data modeling',
        'Cloud infrastructure setup (Vercel, AWS, Cloudflare)',
        'Fluid 120fps Framer Motion micro-interactions',
      ],
      packageLink: 'Business & Professional Packages',
    },
    {
      id: 4,
      tag: '04 / ONGOING CARE',
      title: 'Ongoing Support & Optimization',
      outcome: 'Keep your site fast, secure, and growing.',
      icon: Wrench,
      summary: 'Continuous Core Web Vitals maintenance (≤ 2.5s LCP), technical SEO audits, proactive security patching, and our bundled 1-Month Free Website Maintenance SLA.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
      items: [
        'Website speed & Core Web Vitals optimization (≤ 2.5s LCP)',
        'Technical SEO indexing & structured data markup',
        'Continuous uptime monitoring & vulnerability patching',
        'Monthly routine maintenance & minor content edits',
        '1-Month Free Website Maintenance SLA inclusion',
      ],
      packageLink: 'Maintenance Care Plans',
    },
  ];

  const togglePillar = (id: number) => {
    setExpandedPillar(expandedPillar === id ? null : id);
  };

  return (
    <section
      id="services"
      ref={ref}
      className="bg-black py-24 sm:py-32 px-4 sm:px-6 overflow-hidden max-w-6xl mx-auto relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4"
      >
        <div>
          <p className="text-sky-400 text-xs font-sans font-semibold tracking-wider uppercase mb-2">
            01 / SERVICES ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-sans font-normal">
            Four pillars of <span className="font-serif italic text-sky-300">digital capability</span>.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl font-sans">
            Framed in plain outcome language for decision-makers, with deep engineering rigor beneath.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenContactModal()}
          className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-sans font-medium text-white/70 hover:text-white transition-colors"
        >
          <span>Request Scoped Proposal</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* 4 Pillars Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          const isExpanded = expandedPillar === p.id;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="liquid-glass rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 shadow-2xl"
            >
              {/* Pillar Visual Preview */}
              <div className="aspect-[16/9] relative overflow-hidden bg-black/50">
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                >
                  <source src={p.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[11px] font-semibold text-white/90 uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Pillar Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                      {p.title}
                    </h3>
                  </div>

                  {/* Outcome statement */}
                  <p className="text-sky-300 font-sans font-medium text-xs sm:text-sm mb-3">
                    &ldquo;{p.outcome}&rdquo;
                  </p>

                  {/* Plain Language Summary */}
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {p.summary}
                  </p>
                </div>

                {/* Expandable Technical Scope */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => togglePillar(p.id)}
                    className="w-full flex items-center justify-between text-xs font-sans text-white/60 hover:text-white transition-colors py-1 font-medium"
                  >
                    <span>{isExpanded ? 'Hide Technical Inclusions' : 'View Technical Scope & Deliverables'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-sky-400' : ''
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
                        {p.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs text-white/80 font-sans"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Quick Action Button */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] font-sans text-white/40">
                      Mapped to {p.packageLink}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenContactModal(p.title)}
                      className="text-xs font-sans text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Pillar</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
