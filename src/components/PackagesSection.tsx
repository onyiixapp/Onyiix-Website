import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PackagesSectionProps {
  onOpenContactModal: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<'cards' | 'table'>('cards');

  const packages = [
    {
      name: 'Starter',
      subtitle: 'First Business Presence',
      tag: 'Tier 1',
      desc: 'Ideal for small businesses and founders needing a clean, professional online presence built fast.',
      popular: false,
      attributes: {
        pages: 'Up to 5 Pages',
        responsive: '100% Mobile & Tablet Optimized',
        seo: 'Basic Meta Tags, Sitemap & Indexing',
        hosting: 'Cloudflare / Vercel Domain Setup',
        maintenance: '1-Month Free Maintenance Included',
        support: 'Email Support (24h Response SLA)',
        revisions: '2 Rounds Included',
        timeline: '7 - 10 Business Days',
      },
      features: [
        'High-converting landing page + 4 subpages',
        'Mobile responsive liquid-glass UI',
        'Contact inquiry form with validation',
        'Basic on-page SEO & Google indexing',
        '1-Month Free Website Maintenance Care',
      ],
    },
    {
      name: 'Business',
      subtitle: 'High-Converting Growth',
      tag: 'Tier 2 / Most Popular',
      desc: 'Engineered for established companies needing advanced lead-generation, bespoke CMS, and sub-second speed.',
      popular: true,
      attributes: {
        pages: 'Up to 15 Pages',
        responsive: '120fps Fluid Micro-Interactions',
        seo: 'Advanced Technical SEO & Schema Markup',
        hosting: 'High-Availability Edge Deployment',
        maintenance: '1-Month Free Maintenance Included',
        support: 'Priority Telegram & Email SLA',
        revisions: '3 Rounds Included',
        timeline: '2 - 3 Weeks Typical',
      },
      features: [
        'Custom CMS (WordPress or Headless Next.js)',
        'Core Web Vitals tuned (≤ 2.5s LCP)',
        'Interactive lead funnels & qualification forms',
        'Analytics, Google Tag Manager & Meta Pixel',
        '1-Month Free Website Maintenance Care',
      ],
    },
    {
      name: 'Professional',
      subtitle: 'E-Commerce & Portals',
      tag: 'Tier 3',
      desc: 'Designed for businesses requiring product catalogs, distributor ordering systems, and automated bot integrations.',
      popular: false,
      attributes: {
        pages: 'Bespoke Custom Scope',
        responsive: 'Sub-Second Optimistic State UI',
        seo: 'E-Commerce Schema & Rich Snippets',
        hosting: 'Multi-Region Edge CDN Routing',
        maintenance: '1-Month Free Maintenance Included',
        support: 'Direct Founder Engineering Channel',
        revisions: 'Iterative Sprint Reviews',
        timeline: '3 - 4 Weeks Typical',
      },
      features: [
        'Full product catalog & distributor ordering',
        'Automated Telegram Bot order dispatch sync',
        'Optimistic zero-lag shopping cart transitions',
        'Third-party ERP / Inventory API connectors',
        '1-Month Free Website Maintenance Care',
      ],
    },
    {
      name: 'SaaS / Custom',
      subtitle: 'Distributed Web Apps',
      tag: 'Tier 4 / Enterprise',
      desc: 'Full-scale cloud operating systems, multi-tenant portals, customer dashboards, and custom PostgreSQL database engines.',
      popular: false,
      attributes: {
        pages: 'Full Custom Application Scope',
        responsive: 'Tailored Web & Mobile Web App',
        seo: 'Dynamic SSR / SSG Metadata',
        hosting: 'Cloud Infrastructure & DB Clusters',
        maintenance: '1-Month Free Maintenance Included',
        support: 'Dedicated Architecture Channel',
        revisions: 'Agile Milestones',
        timeline: '4 - 8 Weeks Typical',
      },
      features: [
        'Multi-tenant PostgreSQL schema & Prisma ORM',
        'Role-Based Access Control (RBAC) & Auth.js',
        'Customer & Admin telemetry analytics dashboards',
        'Custom REST / GraphQL API webhooks',
        '1-Month Free Website Maintenance Care',
      ],
    },
  ];

  return (
    <section id="packages" ref={ref} className="bg-black py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header (Star icon removed) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/50 px-4 py-1.5 text-xs font-sans font-medium text-sky-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>05 / PACKAGES &amp; OFFERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight">
              Transparent, repeatable <br />
              <span className="font-serif italic text-sky-300">engineering tiers</span>.
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl font-sans">
              Every package comes bundled with our <strong>30-Day Zero-Cost Bug Warranty</strong> and <strong>1-Month Free Maintenance Care</strong>.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeTab === 'cards'
                  ? 'bg-sky-400 text-black font-semibold shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Cards View
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('table')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeTab === 'table'
                  ? 'bg-sky-400 text-black font-semibold shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Comparison Table
            </button>
          </div>
        </motion.div>

        {/* View 1: 4 Cards Grid (Fixed badge clipping on Tier 2) */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-3">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`liquid-glass rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'border-sky-400/60 bg-sky-950/25 shadow-2xl shadow-sky-950/50 ring-1 ring-sky-400/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Badge Row (Clean inside placement, never cut off) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-sans text-[11px] text-sky-400 font-semibold tracking-wider uppercase">
                      {pkg.tag}
                    </span>
                    {pkg.popular && (
                      <span className="bg-sky-400 text-black font-sans text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">{pkg.name}</h3>
                  <div className="text-xs text-white/50 mb-3 font-sans">{pkg.subtitle}</div>
                  <p className="text-white/70 text-xs leading-relaxed mb-6 font-sans">{pkg.desc}</p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pb-6 border-b border-white/10">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-white/80 font-sans">
                        <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Sans-Serif Attribute Line Items */}
                  <div className="py-4 space-y-2.5 text-xs font-sans text-white/70">
                    <div className="flex justify-between items-center">
                      <span className="text-white/50">Timeline:</span>
                      <span className="text-white font-medium">{pkg.attributes.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50">Pages:</span>
                      <span className="text-white font-medium">{pkg.attributes.pages}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50">Support SLA:</span>
                      <span className="text-sky-300 font-medium">{pkg.attributes.support}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => onOpenContactModal(`${pkg.name} Package`)}
                    className={`w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      pkg.popular
                        ? 'bg-white text-black hover:scale-105 shadow-xl'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    <span>Request {pkg.name} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View 2: Detailed Side-by-Side Comparison Table */}
        {activeTab === 'table' && (
          <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-8 border border-white/15 overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs font-sans min-w-[700px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="pb-4 font-sans text-white/50 uppercase tracking-wider text-[11px] font-semibold">
                    Attribute
                  </th>
                  {packages.map((p) => (
                    <th key={p.name} className="pb-4 font-bold text-white text-sm">
                      {p.name}
                      <span className="block font-sans text-[11px] text-sky-400 font-normal">
                        {p.subtitle}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">Number of Pages</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5">{p.attributes.pages}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">Responsive Standard</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5">{p.attributes.responsive}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">SEO Scope</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5">{p.attributes.seo}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">Hosting / Deployment</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5">{p.attributes.hosting}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">Maintenance SLA</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5 text-sky-300 font-semibold">{p.attributes.maintenance}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">Included Revisions</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5">{p.attributes.revisions}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 text-white/50 font-medium">Delivery Expectation</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-3.5">{p.attributes.timeline}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-white/50 font-medium">Action</td>
                  {packages.map((p) => (
                    <td key={p.name} className="py-4">
                      <button
                        type="button"
                        onClick={() => onOpenContactModal(`${p.name} Package`)}
                        className="px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:scale-105 transition-all"
                      >
                        Inquire
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Free Maintenance Offer Banner Link */}
        <div className="mt-12 liquid-glass rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 font-sans text-center sm:text-left">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              <strong>1-Month Free Website Maintenance SLA</strong> is bundled with all eligible package deliveries.
            </span>
          </div>

          <a
            href="#maintenance"
            className="text-xs font-sans text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors shrink-0"
          >
            <span>Read Free Period Scope Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
