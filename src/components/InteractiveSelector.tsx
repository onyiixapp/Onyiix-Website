import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw, Sliders, ShieldCheck, CheckCircle2, Zap, Lock, Code2, Globe2 } from 'lucide-react';

interface InteractiveSelectorProps {
  onSelectPackage: (packageName: string) => void;
}

export const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ onSelectPackage }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [scale, setScale] = useState<string | null>(null);

  const getRecommendation = () => {
    if (projectType === 'saas') {
      return {
        pkg: 'SaaS Platform / Custom Application',
        desc: 'Recommended for multi-tenant architectures, customer portals, and telemetry data models.',
        timeline: '6–12 Weeks',
      };
    }
    if (projectType === 'ecommerce' || scale === 'large') {
      return {
        pkg: 'Professional Tier',
        desc: 'Recommended for custom product catalogs, Telegram order bots, and high-conversion checkouts.',
        timeline: '3–5 Weeks',
      };
    }
    if (projectType === 'business') {
      return {
        pkg: 'Business Tier (Most Popular)',
        desc: 'Recommended for high-impact company websites with interactive animations and lead capture.',
        timeline: '2–3 Weeks',
      };
    }
    return {
      pkg: 'Starter Tier',
      desc: 'Recommended for fast-launch marketing single-page websites with sub-second speeds.',
      timeline: '1–2 Weeks',
    };
  };

  const handleReset = () => {
    setStep(1);
    setProjectType(null);
    setScale(null);
  };

  const rec = getRecommendation();

  const standardInclusions = [
    {
      icon: ShieldCheck,
      title: '1-Month Free Maintenance SLA',
      desc: 'Zero-cost technical oversight, security checks, and minor copy modifications post-launch.',
    },
    {
      icon: Lock,
      title: '30-Day Zero-Cost Bug Warranty',
      desc: 'Instant diagnostic and resolution of any scoped functional defect reported within 30 days.',
    },
    {
      icon: Code2,
      title: '100% Code & IP Ownership',
      desc: 'Full intellectual property and GitHub repository transfer upon project handover.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Performance SLA',
      desc: 'Targeting ≤ 2.5s Largest Contentful Paint (LCP) verified across real-world mobile 4G/5G.',
    },
    {
      icon: Globe2,
      title: 'Technical SEO & OpenGraph',
      desc: 'Schema.org JSON-LD structured data and social cards configured for indexation.',
    },
  ];

  return (
    <section
      id="selector"
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
            4
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 bg-white rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Interactive Decision Tool</span>
          </div>
        </motion.div>

        {/* Heading H2 */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-4xl">
              Find the exact package for your build.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl leading-relaxed">
              Answer 2 simple questions to receive an instant architectural scope and timeline recommendation.
            </p>
          </motion.div>
        </div>

        {/* 2-COLUMN DESKTOP GRID: Left = Decision Wizard, Right = What's Always Included */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT: 3-Step Interactive Wizard (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-gray-200/90"
            >
              {/* Step Indicators */}
              <div className="flex items-center gap-2 mb-8 text-xs font-semibold text-gray-400">
                <span className={step >= 1 ? 'text-[#2563EB] font-bold' : ''}>1. Project Nature</span>
                <span>&rarr;</span>
                <span className={step >= 2 ? 'text-[#2563EB] font-bold' : ''}>2. Scope &amp; Scale</span>
                <span>&rarr;</span>
                <span className={step === 3 ? 'text-[#2563EB] font-bold' : ''}>3. Recommendation</span>
              </div>

              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      What type of system are you building?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-6">Select the primary outcome for your project.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { id: 'marketing', label: 'Company / Marketing Website', desc: 'Fast single or multi-page site' },
                        { id: 'business', label: 'Custom Business Platform', desc: 'CMS, blog & lead workflows' },
                        { id: 'ecommerce', label: 'E-Commerce / Catalog Store', desc: 'Products, carts, Telegram bot' },
                        { id: 'saas', label: 'SaaS / Multi-Tenant Web App', desc: 'Auth, database, RBAC dashboard' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setProjectType(opt.id);
                            setStep(2);
                          }}
                          className="p-5 rounded-2xl border border-gray-200/90 text-left hover:border-[#2563EB] hover:bg-blue-50/40 hover:shadow-md transition-all group cursor-pointer"
                        >
                          <span className="block text-sm font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                            {opt.label}
                          </span>
                          <span className="block text-xs text-gray-500 mt-1">
                            {opt.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      What is your timeline &amp; scale?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-6">Help us calibrate the delivery velocity.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { id: 'urgent', scale: 'small', label: 'Immediate Launch (1-2 Weeks)', desc: 'Pre-launch MVP or quick turnaround' },
                        { id: 'standard', scale: 'medium', label: 'Standard Build (2-3 Weeks)', desc: 'Full custom design and integrations' },
                        { id: 'comprehensive', scale: 'large', label: 'Comprehensive System (3-5 Weeks)', desc: 'Deep custom logic, database, and APIs' },
                        { id: 'continuous', scale: 'saas', label: 'Continuous SaaS Roadmap (6-12 Weeks)', desc: 'Multi-tenant architecture & SLA' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setScale(opt.scale);
                            setStep(3);
                          }}
                          className="p-5 rounded-2xl border border-gray-200/90 text-left hover:border-[#2563EB] hover:bg-blue-50/40 hover:shadow-md transition-all group cursor-pointer"
                        >
                          <span className="block text-sm font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                            {opt.label}
                          </span>
                          <span className="block text-xs text-gray-500 mt-1">
                            {opt.desc}
                          </span>
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="mt-6 text-xs font-semibold text-gray-500 hover:text-black transition-colors"
                    >
                      &larr; Back to Step 1
                    </button>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/70 border border-blue-200/90 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Recommended Architectural Package</span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        {rec.pkg}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
                        {rec.desc}
                      </p>

                      <div className="mt-4 pt-4 border-t border-blue-200/80 flex flex-wrap gap-4 text-xs font-medium text-gray-800">
                        <span>Estimated Velocity: <strong>{rec.timeline}</strong></span>
                        <span>•</span>
                        <span>Includes: <strong>1-Month Free Maintenance SLA</strong></span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectPackage(rec.pkg)}
                        className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                      >
                        <span>Proceed with {rec.pkg}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold px-5 py-3.5 rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Recalculate</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT: What's Always Included in All ONYIIX Builds (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-950 text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-neutral-800"
            >
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-blue-500 uppercase tracking-widest block mb-1">
                    ONYIIX STANDARD
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    Included in All Builds
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold text-xs">
                  SLA
                </div>
              </div>

              <div className="space-y-4">
                {standardInclusions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Handcrafted in Bengaluru</span>
                <span className="font-semibold text-white">100% IP Handover</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
