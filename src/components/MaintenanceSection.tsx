import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface MaintenanceSectionProps {
  onOpenContactModal: (tier?: string) => void;
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const freeInclusions = [
    'Bug fixes & unexpected code regression resolution',
    'Minor text, image & product content updates',
    'Direct founder technical support channel',
    'Continuous uptime & performance monitoring',
    'Small CSS/Tailwind design adjustments',
    'Security patches & third-party dependency updates',
  ];

  const paidTiers = [
    {
      name: 'Basic Care',
      tag: 'Tier 1 / Peace of Mind',
      desc: 'Essential infrastructure monitoring and vulnerability protection for small sites.',
      features: [
        '24/7 automated uptime monitoring',
        'Weekly cloud backups & rollback snapshots',
        'Critical security & dependency patching',
        'Monthly health report summary',
      ],
    },
    {
      name: 'Standard Care',
      tag: 'Tier 2 / Active Support',
      popular: true,
      desc: 'Comprehensive ongoing maintenance with a dedicated bucket of monthly change requests.',
      features: [
        'Everything in Basic Care',
        'Up to 5 hours of content & design updates/month',
        'Priority 4-hour response SLA on business days',
        'Form & checkout conversion audit',
      ],
    },
    {
      name: 'Growth Care',
      tag: 'Tier 3 / Performance & SEO',
      desc: 'Continuous Core Web Vitals tuning, technical SEO growth, and architectural optimization.',
      features: [
        'Everything in Standard Care',
        'Ongoing Core Web Vitals optimization (≤ 2.5s LCP)',
        'Technical SEO crawl auditing & index monitoring',
        'Monthly architectural advisory & roadmap review',
      ],
    },
  ];

  return (
    <section
      id="maintenance"
      ref={ref}
      className="bg-black py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Canonical Offer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="liquid-glass-elevated rounded-3xl p-8 sm:p-12 border border-sky-400/40 relative overflow-hidden mb-16 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/60 px-4 py-1.5 text-xs font-mono text-sky-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>06 / RISK-FREE LAUNCH ASSURANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight mb-4">
                1 Month of <span className="font-serif italic text-sky-300">Free Maintenance</span> with Selected Packages.
              </h2>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans">
                Every newly delivered platform deserves a worry-free launch window. We monitor your production deployment, patch bugs, and handle minor tweaks at zero additional cost for 30 days.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenContactModal('1-Month Free Maintenance Inquiry')}
              className="bg-white text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-2xl shrink-0"
            >
              <span>Claim Free Month with Project</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Free Period Scope Checklist */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {freeInclusions.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Post-Free Period Recurring Plans Header */}
        <div className="text-center sm:text-left mb-10">
          <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-2">
            POST-LAUNCH CONTINUITY
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
            Monthly Ongoing Care Plans
          </h3>
          <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-lg font-sans">
            Optional recurring maintenance subscriptions when your initial free month concludes. Available for all websites.
          </p>
        </div>

        {/* 3 Paid Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paidTiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`liquid-glass rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'border-sky-400/50 bg-sky-950/20 shadow-xl'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider block mb-1">
                  {tier.tag}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                <p className="text-xs text-white/60 leading-relaxed mb-6 font-sans">{tier.desc}</p>

                <div className="space-y-3 pb-6 border-b border-white/10">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-white/80 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onOpenContactModal(`${tier.name} Subscription`)}
                  className={`w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    tier.popular
                      ? 'bg-white text-black hover:scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
