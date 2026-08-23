import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { FormSimulator } from './bento/FormSimulator';
import { AiChatSimulator } from './bento/AiChatSimulator';
import { CartSimulator } from './bento/CartSimulator';
import { SaasDashboardSimulator } from './bento/SaasDashboardSimulator';
import { Check, ArrowUpRight, Cpu, Layers, ShoppingBag, Layout } from 'lucide-react';

interface BentoServicesProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onSelectServiceForQuote }) => {
  return (
    <section id="services" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3"
        >
          <span className="text-[#EEA22A] font-bold">02 / PRODUCTION CAPABILITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]"
        >
          Four Core Web Architectures. <br />
          <span className="text-[#8C857B]">Zero Generic Templates.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-base text-[#6B6862]"
        >
          Explore live, interactive simulations of our core web systems. Every platform is built with custom Next.js 15 code, sub-second latency, and protected by our 30-day bug warranty.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Lead Pages */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#121316] border border-[#E6E2D8]">
                <Layout className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold text-[#121316] bg-[#F3EFE7] px-2.5 py-0.5 rounded border border-[#E6E2D8]">
                {servicesData[0].badge}
              </span>
            </div>
            <span className="font-mono text-xs text-[#059669] font-semibold flex items-center gap-1">
              ● 100/100 Core Web Vitals
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#121316] mb-2">
            {servicesData[0].title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6862] mb-5 leading-relaxed">
            {servicesData[0].description}
          </p>

          {/* Interactive Widget */}
          <div className="mb-6">
            <FormSimulator />
          </div>

          {/* Deliverables */}
          <div className="space-y-2 mb-6">
            {servicesData[0].deliverables.slice(0, 3).map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-[#6B6862]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#EEA22A] border border-[#E6E2D8]">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6E2D8]">
            <div className="flex flex-wrap gap-1.5">
              {servicesData[0].techStack.map((tech) => (
                <span key={tech} className="font-mono text-[10px] text-[#6B6862] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E6E2D8]">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#calculator"
              onClick={() => onSelectServiceForQuote && onSelectServiceForQuote('landing')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#EEA22A] hover:underline"
            >
              Configure Scope <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 2: AI Web Apps */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#121316] border border-[#E6E2D8]">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold text-[#121316] bg-[#F3EFE7] px-2.5 py-0.5 rounded border border-[#E6E2D8]">
                {servicesData[1].badge}
              </span>
            </div>
            <span className="font-mono text-xs text-[#0284C7] font-semibold flex items-center gap-1">
              ● &lt; 150ms Vector Latency
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#121316] mb-2">
            {servicesData[1].title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6862] mb-5 leading-relaxed">
            {servicesData[1].description}
          </p>

          {/* Interactive Widget */}
          <div className="mb-6">
            <AiChatSimulator />
          </div>

          {/* Deliverables */}
          <div className="space-y-2 mb-6">
            {servicesData[1].deliverables.slice(0, 3).map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-[#6B6862]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#EEA22A] border border-[#E6E2D8]">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6E2D8]">
            <div className="flex flex-wrap gap-1.5">
              {servicesData[1].techStack.map((tech) => (
                <span key={tech} className="font-mono text-[10px] text-[#6B6862] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E6E2D8]">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#calculator"
              onClick={() => onSelectServiceForQuote && onSelectServiceForQuote('ai_app')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#EEA22A] hover:underline"
            >
              Configure Scope <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 3: E-Commerce */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#121316] border border-[#E6E2D8]">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold text-[#121316] bg-[#F3EFE7] px-2.5 py-0.5 rounded border border-[#E6E2D8]">
                {servicesData[2].badge}
              </span>
            </div>
            <span className="font-mono text-xs text-[#EEA22A] font-semibold flex items-center gap-1">
              ● 0ms Optimistic Cart
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#121316] mb-2">
            {servicesData[2].title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6862] mb-5 leading-relaxed">
            {servicesData[2].description}
          </p>

          {/* Interactive Widget */}
          <div className="mb-6">
            <CartSimulator />
          </div>

          {/* Deliverables */}
          <div className="space-y-2 mb-6">
            {servicesData[2].deliverables.slice(0, 3).map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-[#6B6862]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#EEA22A] border border-[#E6E2D8]">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6E2D8]">
            <div className="flex flex-wrap gap-1.5">
              {servicesData[2].techStack.map((tech) => (
                <span key={tech} className="font-mono text-[10px] text-[#6B6862] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E6E2D8]">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#calculator"
              onClick={() => onSelectServiceForQuote && onSelectServiceForQuote('ecommerce')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#EEA22A] hover:underline"
            >
              Configure Scope <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 4: SaaS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#121316] border border-[#E6E2D8]">
                <Layers className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold text-[#121316] bg-[#F3EFE7] px-2.5 py-0.5 rounded border border-[#E6E2D8]">
                {servicesData[3].badge}
              </span>
            </div>
            <span className="font-mono text-xs text-[#059669] font-semibold flex items-center gap-1">
              ● Multi-Tenant &amp; RBAC
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#121316] mb-2">
            {servicesData[3].title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6862] mb-5 leading-relaxed">
            {servicesData[3].description}
          </p>

          {/* Interactive Widget */}
          <div className="mb-6">
            <SaasDashboardSimulator />
          </div>

          {/* Deliverables */}
          <div className="space-y-2 mb-6">
            {servicesData[3].deliverables.slice(0, 3).map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-[#6B6862]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#EEA22A] border border-[#E6E2D8]">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6E2D8]">
            <div className="flex flex-wrap gap-1.5">
              {servicesData[3].techStack.map((tech) => (
                <span key={tech} className="font-mono text-[10px] text-[#6B6862] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E6E2D8]">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#calculator"
              onClick={() => onSelectServiceForQuote && onSelectServiceForQuote('saas')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#EEA22A] hover:underline"
            >
              Configure Scope <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
