import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../data/techStack';

export const TechStackSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'infra'>('all');

  const filteredTech =
    filter === 'all'
      ? techStackData
      : techStackData.filter((item) => item.category === filter);

  return (
    <section id="tech" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3"
        >
          <span className="text-[#EEA22A] font-bold">06 / PRODUCTION ARCHITECTURE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]"
        >
          Engineered With Modern <br />
          <span className="text-[#8C857B]">Production Standards.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-base text-[#6B6862]"
        >
          Zero legacy frameworks. We build exclusively with the modern React ecosystem, edge databases, and AI SDKs.
        </motion.p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', label: 'All Stack' },
            { id: 'frontend', label: 'Frontend & Motion' },
            { id: 'backend', label: 'Backend & DB' },
            { id: 'ai', label: 'AI & Vector RAG' },
            { id: 'infra', label: 'Edge Infrastructure' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as any)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === tab.id
                  ? 'bg-[#EEA22A] text-[#121316] font-bold shadow-sm'
                  : 'border border-[#E6E2D8] bg-white text-[#6B6862] hover:border-[#D6D0C2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTech.map((t, idx) => (
          <motion.div
            key={t.name}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: idx * 0.03 }}
            className="paper-card rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-[#121316] font-bold bg-[#F3EFE7] px-2 py-0.5 rounded border border-[#E6E2D8]">
                {t.badge}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            </div>

            <h3 className="font-display text-base font-bold text-[#121316] mb-1">
              {t.name}
            </h3>

            <p className="text-xs text-[#6B6862] leading-relaxed">
              {t.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
