import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

interface PackagesSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'Starter Tier',
      tagline: 'Rapid online launch for founders & local brands',
      price: 'Custom Scoped',
      delivery: '1–2 Weeks',
      highlight: false,
      features: [
        'Single-page or multi-page modern React website',
        'Mobile, tablet & desktop responsiveness',
        'Lead capture form & WhatsApp direct link',
        'Basic technical SEO setup & domain routing',
        '30-Day Zero-Cost Bug Warranty',
        '1-Month Free Maintenance SLA Included',
      ],
    },
    {
      name: 'Business Tier',
      tagline: 'Our most popular comprehensive company platform',
      price: 'Custom Scoped',
      delivery: '2–3 Weeks',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Up to 8 custom pages with modern design system',
        'Headless CMS or WordPress content integration',
        'Interactive micro-animations & high-converting layout',
        'Full Core Web Vitals speed optimization (≤ 2.5s LCP)',
        'Technical SEO & OpenGraph structured data',
        '30-Day Zero-Cost Bug Warranty',
        '1-Month Free Maintenance SLA Included',
      ],
    },
    {
      name: 'Professional Tier',
      tagline: 'Advanced commerce, catalogs, & custom integrations',
      price: 'Custom Scoped',
      delivery: '3–5 Weeks',
      highlight: false,
      features: [
        'Custom e-commerce store / distributor ordering platform',
        'Telegram bot order sync & real-time notifications',
        'Custom database models & customer accounts',
        'Sub-second page transitions & edge caching',
        '30-Day Zero-Cost Bug Warranty',
        '1-Month Free Maintenance SLA Included',
      ],
    },
    {
      name: 'SaaS Platform / Custom',
      tagline: 'Multi-tenant cloud systems & complex web apps',
      price: 'Custom Scoped',
      delivery: '6–12 Weeks',
      highlight: false,
      features: [
        'Multi-tenant cloud architecture & database schemas',
        'Role-based access control (RBAC) & admin panels',
        'Automated billing, Stripe/Razorpay webhooks',
        'Telemetry, analytics dashboards & background jobs',
        'Private AI/RAG token streaming workflow integration',
        '1-Month Free Maintenance SLA Included',
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="bg-[#F5F5F5] pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden relative"
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
            6
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 bg-white rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#F26522]" />
            <span>Packages &amp; Pricing</span>
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
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-4xl">
              Transparent engineering tiers.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl leading-relaxed">
              Every package comes bundled with our <strong>1-Month Free Website Maintenance SLA</strong> and <strong>30-Day Zero-Cost Bug Warranty</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shrink-0 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-gray-900 block text-sm">1-Month Free Maintenance</span>
              <span className="text-gray-500">Included on all launched builds</span>
            </div>
          </motion.div>
        </div>

        {/* 4-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                t.highlight
                  ? 'bg-gray-900 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] scale-[1.02] border border-gray-800 ring-1 ring-white/10'
                  : 'bg-white text-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-200/80 hover:border-gray-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]'
              }`}
            >
              <div>
                {t.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F26522] text-white px-3 py-1 rounded-full inline-block mb-3 shadow-sm">
                    {t.badge}
                  </span>
                )}

                <h3 className={`text-xl font-bold tracking-tight ${t.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {t.name}
                </h3>

                <p className={`text-xs mt-1.5 mb-4 leading-relaxed ${t.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t.tagline}
                </p>

                <div className="my-5 pb-4 border-b border-gray-100/10">
                  <span className="text-xs text-[#F26522] font-semibold block mb-1">Pricing Model</span>
                  <span className="text-xl font-bold tracking-tight">Best Affordable Price</span>
                </div>

                <div className={`text-xs font-semibold mb-6 flex items-center gap-1.5 ${t.highlight ? 'text-[#F26522]' : 'text-gray-700'}`}>
                  <Zap className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>Velocity: {t.delivery}</span>
                </div>

                <div className="space-y-2.5 pt-2 text-xs">
                  {t.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          t.highlight ? 'text-[#F26522]' : 'text-[#F26522]'
                        }`}
                      />
                      <span className={t.highlight ? 'text-gray-300' : 'text-gray-600'}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100/10">
                <button
                  type="button"
                  onClick={() => onSelectTier(t.name)}
                  className={`w-full text-xs font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    t.highlight
                      ? 'bg-[#F26522] hover:bg-[#e05a1a] text-white shadow-md'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <span>Inquire {t.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
