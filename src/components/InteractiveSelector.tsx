import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface InteractiveSelectorProps {
  onSelectPackage: (packageName: string, details: string) => void;
}

export const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ onSelectPackage }) => {
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState('website');
  const [focus, setFocus] = useState('lead-gen');
  const [timeline, setTimeline] = useState('normal');

  const handleReset = () => {
    setStep(1);
    setNeed('website');
    setFocus('lead-gen');
    setTimeline('normal');
  };

  // Determine Recommendation based on answers
  const getRecommendation = () => {
    if (need === 'saas' || focus === 'saas-engine') {
      return {
        title: 'SaaS / Custom Engineering Tier',
        badge: 'Recommended for SaaS & Platforms',
        rationale:
          'Based on your requirement for a multi-tenant platform with custom user dashboards and data architecture, the SaaS / Custom tier provides the required database schemas, authentication (RBAC), and scalable infrastructure.',
        timelineEst: '4 - 8 weeks typical delivery',
        freeMonth: true,
      };
    }

    if (need === 'ecommerce' || focus === 'catalog') {
      return {
        title: 'Professional Package (E-Commerce & Portals)',
        badge: 'Recommended for High-Converting Stores',
        rationale:
          'Based on your focus on product catalog management, distributor ordering, and workflow automation (e.g. Telegram bot order sync), the Professional Package delivers sub-second checkout and seamless inventory flows.',
        timelineEst: '2 - 4 weeks typical delivery',
        freeMonth: true,
      };
    }

    if (need === 'redesign' || focus === 'speed') {
      return {
        title: 'Business Package (Modernization & Speed)',
        badge: 'Recommended for Growth & Redesigns',
        rationale:
          'Based on your need to overhaul an existing site and maximize lead generation, the Business Package provides bespoke Next.js UI, Core Web Vitals optimization (≤ 2.5s LCP), and modern interactive aesthetics.',
        timelineEst: '2 - 3 weeks typical delivery',
        freeMonth: true,
      };
    }

    return {
      title: 'Starter / Business Package',
      badge: 'Recommended for Fast Online Presence',
      rationale:
        'A clean, high-performance website engineered for quick turnaround and straightforward non-technical content management, bundled with 1-Month Free Website Maintenance.',
      timelineEst: '1 - 2 weeks typical delivery',
      freeMonth: true,
    };
  };

  const rec = getRecommendation();

  return (
    <section id="selector" className="bg-black py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header (Star icon removed) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/50 px-4 py-1.5 text-xs font-sans font-medium text-sky-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>02 / INTERACTIVE DECISION TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight">
            Find the exact <span className="font-serif italic text-sky-300">package</span> for your build.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl mx-auto font-sans">
            Answer 3 quick questions to get an architectural recommendation and pre-fill your proposal brief.
          </p>
        </div>

        {/* Step Container Card */}
        <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
          {/* Progress Dots */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-sans text-white/70 font-medium">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Step {step} of 3</span>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    step >= s ? 'bg-sky-400 shadow-sm shadow-sky-400/50' : 'bg-white/15'
                  }`}
                />
              ))}
            </div>

            {step > 1 && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-sans text-white/50 hover:text-white flex items-center gap-1 transition-colors font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Question 1: What do you need? */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                What type of product do you need to build?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mb-6 font-sans">
                Select the primary scope of your digital initiative:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { id: 'website', label: 'Professional Business Website', desc: 'CMS, company site, lead-gen landing page' },
                  { id: 'ecommerce', label: 'E-Commerce / Online Store', desc: 'Product catalog, local shop, distributor orders' },
                  { id: 'saas', label: 'SaaS Platform / Custom Web App', desc: 'Multi-tenant portal, dashboards, subscription auth' },
                  { id: 'redesign', label: 'Redesign Existing Website', desc: 'Modernize visuals, speed up load time & mobile UX' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNeed(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      need === item.id
                        ? 'border-sky-400 bg-sky-950/40 text-white shadow-lg'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base text-white font-sans">{item.label}</div>
                    <div className="text-xs text-white/50 mt-1 font-sans">{item.desc}</div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full sm:w-auto bg-white text-black font-semibold text-sm px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </motion.div>
          )}

          {/* Question 2: Primary Focus / Key Requirement */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                What is your most critical feature requirement?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mb-6 font-sans">
                Help us understand the primary functional challenge:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { id: 'lead-gen', label: 'High Lead Conversion', desc: 'Interactive forms, rapid mobile load & SEO indexing' },
                  { id: 'catalog', label: 'Catalog & Order Management', desc: 'Inventory, bulk distributor pricing, Telegram dispatch' },
                  { id: 'saas-engine', label: 'Multi-Tenant RBAC & Billing', desc: 'PostgreSQL database, user accounts, API webhooks' },
                  { id: 'speed', label: 'Blazing Fast Speed (≤ 2.5s LCP)', desc: 'Core Web Vitals tuning & fluid 120fps motion design' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFocus(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      focus === item.id
                        ? 'border-sky-400 bg-sky-950/40 text-white shadow-lg'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base text-white font-sans">{item.label}</div>
                    <div className="text-xs text-white/50 mt-1 font-sans">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-full border border-white/15 text-xs font-sans font-medium text-white/70 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-white text-black font-semibold text-sm px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl"
                >
                  <span>Continue to Final Step</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Question 3: Target Timeline & Output */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                What is your target launch timeline?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mb-6 font-sans">
                Choose your target delivery window:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { id: 'urgent', label: 'Under 2 Weeks', note: 'Priority Build' },
                  { id: 'normal', label: '2 - 4 Weeks', note: 'Standard' },
                  { id: 'flexible', label: '1 - 2 Months', note: 'Phased Launch' },
                  { id: 'planning', label: 'Flexible', note: 'Discovery First' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimeline(item.id)}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      timeline === item.id
                        ? 'border-sky-400 bg-sky-950/40 text-white shadow-lg'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-white font-sans">{item.label}</div>
                    <div className="text-[11px] text-sky-400 mt-1 font-sans font-medium">{item.note}</div>
                  </button>
                ))}
              </div>

              {/* Dynamic Recommendation Result */}
              <div className="rounded-2xl bg-sky-950/30 border border-sky-400/30 p-6 mb-6 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-sky-300 uppercase tracking-wider">
                    {rec.badge}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 font-sans">
                  {rec.title}
                </h4>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                  {rec.rationale}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-white/70 font-medium">
                  <span>Estimated Delivery: {rec.timelineEst}</span>
                  <span className="text-sky-300">• Includes 1-Month Free Maintenance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onSelectPackage(
                      rec.title,
                      `Need: ${need}, Focus: ${focus}, Target Timeline: ${timeline}`
                    )
                  }
                  className="w-full sm:w-auto bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-2xl"
                >
                  <span>Request Scoped Proposal for {rec.title}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-full border border-white/15 text-xs font-sans font-medium text-white/70 hover:text-white"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
