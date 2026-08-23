import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/process';
import { Compass, Code2, ShieldCheck, Rocket, Check } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
};

export const ProcessPipeline: React.FC = () => {
  return (
    <section id="process" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3"
        >
          <span className="text-[#EEA22A] font-bold">05 / THE SPRINT PIPELINE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]"
        >
          From Concept to Production. <br />
          <span className="text-[#8C857B]">Four High-Velocity Sprints.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-base text-[#6B6862]"
        >
          Transparent milestone tracking with direct founder updates. Zero bureaucratic delays.
        </motion.p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {processSteps.map((step, idx) => {
          const Icon = iconMap[step.iconName] || Rocket;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="paper-card rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-lg font-bold text-[#948E83]">
                    [{step.number}]
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF8F3] text-[#EEA22A] border border-[#E6E2D8]">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="inline-block rounded bg-[#FEF3D6] px-2 py-0.5 font-mono text-[10px] font-bold text-[#121316] mb-2 border border-[#EEA22A]/30">
                  {step.timeline}
                </div>

                <h3 className="font-display text-base font-bold text-[#121316] mb-1.5">
                  {step.title}
                </h3>

                <p className="text-xs text-[#6B6862] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-1.5 pt-3 border-t border-[#E6E2D8]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#948E83] block mb-1">
                  Deliverables:
                </span>
                {step.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] text-[#6B6862]">
                    <Check className="h-3 w-3 text-[#EEA22A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
