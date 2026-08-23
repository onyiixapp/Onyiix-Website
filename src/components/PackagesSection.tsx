import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

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
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            6
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Packages &amp; Pricing
          </div>
        </div>

        {/* Heading H2 */}
        <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-4xl">
              Transparent engineering tiers.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Every package comes bundled with our <strong>1-Month Free Website Maintenance SLA</strong> and <strong>30-Day Zero-Cost Bug Warranty</strong>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3 shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#F26522]" />
            <div className="text-xs">
              <span className="font-bold text-gray-900 block">1-Month Free Maintenance</span>
              <span className="text-gray-500">Zero extra cost upon launch</span>
            </div>
          </div>
        </div>

        {/* 4-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-8 lg:px-12">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                t.highlight
                  ? 'bg-gray-900 text-white shadow-xl scale-[1.02] border border-gray-800'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-200/80 hover:border-gray-300'
              }`}
            >
              <div>
                {t.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F26522] text-white px-2.5 py-1 rounded-full inline-block mb-3">
                    {t.badge}
                  </span>
                )}

                <h3 className={`text-xl font-bold ${t.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {t.name}
                </h3>

                <p className={`text-xs mt-1 mb-4 leading-relaxed ${t.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t.tagline}
                </p>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-2xl font-black">Coming Soon / Best Price</span>
                </div>

                <div className={`text-xs font-semibold mb-6 flex items-center gap-1.5 ${t.highlight ? 'text-[#F26522]' : 'text-gray-700'}`}>
                  <Zap className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>Velocity: {t.delivery}</span>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-gray-100/20 text-xs">
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

              <div className="mt-8 pt-4 border-t border-gray-100/20">
                <button
                  type="button"
                  onClick={() => onSelectTier(t.name)}
                  className={`w-full text-xs font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    t.highlight
                      ? 'bg-[#F26522] hover:bg-[#e05a1a] text-white shadow-md'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <span>Inquire {t.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
