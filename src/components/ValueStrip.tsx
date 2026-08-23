import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, Smartphone, Zap } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const values = [
    {
      num: '[01]',
      icon: DollarSign,
      title: 'Disruptive Pricing',
      metric: '60% Lower Than Agencies',
      description: 'Zero account managers or office overhead. You pay strictly for senior engineering hours.',
    },
    {
      num: '[02]',
      icon: ShieldCheck,
      title: '30-Day Bug Warranty',
      metric: '100% Free Defect Fixes',
      description: 'Complete post-launch peace of mind. Any UI glitch, API issue, or regression is fixed for $0.',
    },
    {
      num: '[03]',
      icon: Smartphone,
      title: '100% Screen Precision',
      metric: 'Mobile, iPad, 4K Displays',
      description: 'Tested on physical iPhone, Galaxy, iPad, and desktop viewports with fluid layout scaling.',
    },
    {
      num: '[04]',
      icon: Zap,
      title: 'High-Velocity Sprints',
      metric: '7 – 14 Days Turnaround',
      description: 'Rapid, iterative staging deployments so you can validate and launch ahead of competitors.',
    },
  ];

  return (
    <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((v, idx) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="paper-card rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="text-[#948E83]">{v.num}</span>
                <span className="font-semibold text-[#EEA22A]">{v.metric}</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FAF8F3] text-[#EEA22A] border border-[#E6E2D8]">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <h3 className="font-display text-sm font-bold text-[#121316]">
                  {v.title}
                </h3>
              </div>
              <p className="text-xs text-[#6B6862] leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
