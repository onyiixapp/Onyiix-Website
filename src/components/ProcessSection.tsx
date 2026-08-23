import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Compass, Palette, Code, CheckCircle, Rocket, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Alignment',
      icon: Search,
      duration: '1 - 2 Days',
      agencyHandles: 'Business model analysis, target audience personas, competitor research, and KPI definition.',
      clientHandles: 'Brand assets, initial brief, reference websites, and key stakeholder goals.',
    },
    {
      num: '02',
      title: 'Requirement Analysis',
      icon: Compass,
      duration: '2 - 3 Days',
      agencyHandles: 'Full architectural specification, database schemas, third-party API mapping, and tech stack choice.',
      clientHandles: 'Approval of technical scope, functional feature checklist, and third-party account access.',
    },
    {
      num: '03',
      title: 'UX Strategy & Architecture',
      icon: Compass,
      duration: '3 - 5 Days',
      agencyHandles: 'Information architecture, wireframing, conversion funnel design, and user journey optimization.',
      clientHandles: 'Feedback and sign-off on structural wireframes and content hierarchy.',
    },
    {
      num: '04',
      title: 'UI/UX & Motion Design',
      icon: Palette,
      duration: '4 - 7 Days',
      agencyHandles: 'High-fidelity visual design, liquid-glass aesthetic, interactive micro-animations, and mobile responsive frames.',
      clientHandles: 'Visual review and design sign-off before coding begins.',
    },
    {
      num: '05',
      title: 'Engineering & Development',
      icon: Code,
      duration: '1 - 3 Weeks',
      agencyHandles: 'Modular Next.js/React engineering, PostgreSQL schemas, Telegram/API integrations, and sub-second state routing.',
      clientHandles: 'Content copy finalization and periodic staging demo check-ins.',
    },
    {
      num: '06',
      title: 'Testing & QA Auditing',
      icon: CheckCircle,
      duration: '3 - 5 Days',
      agencyHandles: 'Cross-browser testing (Chrome, Safari, iOS, Android), load testing, accessibility checks, and Core Web Vitals tuning.',
      clientHandles: 'User acceptance testing (UAT) on private staging URL.',
    },
    {
      num: '07',
      title: 'Zero-Downtime Deployment',
      icon: Rocket,
      duration: '1 Day',
      agencyHandles: 'DNS propagation, SSL certificates, edge CDN configuration, production DB migration, and telemetry setup.',
      clientHandles: 'Final production sign-off and live domain record verification.',
    },
    {
      num: '08',
      title: 'Maintenance & Warranty',
      icon: ShieldCheck,
      duration: '30 Days Free',
      agencyHandles: 'Active uptime monitoring, zero-cost bug resolution under warranty, content tweaks, and post-launch optimization.',
      clientHandles: 'Reporting operational feedback and optional transition to recurring care tiers.',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="process" ref={ref} className="bg-black py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center sm:text-left mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/50 px-4 py-1.5 text-xs font-sans font-medium text-sky-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>03 / 8-STAGE DEVELOPMENT PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight">
            Predictable, transparent <br />
            <span className="font-serif italic text-sky-300">engineering pipeline</span>.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl font-sans">
            From initial discovery to continuous post-launch warranty, here is exactly how your platform comes to life.
          </p>
        </motion.div>

        {/* Stepper Timeline for Desktop / iPad */}
        <div className="hidden lg:grid grid-cols-8 gap-2 mb-8">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                  isActive
                    ? 'border-sky-400 bg-sky-950/50 text-white shadow-lg'
                    : 'border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="font-sans text-xs font-semibold text-sky-400 mb-1">{s.num}</div>
                <div className="font-medium text-xs text-white truncate font-sans">{s.title}</div>
                <div className="text-[10px] text-white/40 mt-1 font-sans">{s.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Mobile / Tablet Step Navigation Bar */}
        <div className="flex lg:hidden items-center justify-between gap-3 mb-6 bg-white/5 p-3 rounded-2xl border border-white/10">
          <button
            type="button"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="p-2 rounded-xl bg-white/5 text-white/80 disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-center">
            <span className="text-sky-400 font-sans text-xs font-semibold block">
              Stage {current.num} of 08
            </span>
            <span className="text-white font-bold text-sm font-sans">{current.title}</span>
          </div>

          <button
            type="button"
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            className="p-2 rounded-xl bg-white/5 text-white/80 disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Detailed Stage Interactive Card */}
        <motion.div
          key={current.num}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="liquid-glass-elevated rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                <current.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-xs text-sky-400 font-semibold tracking-wider uppercase block">
                  STAGE {current.num} • EXPECTED DURATION: {current.duration}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  {current.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="p-2.5 rounded-full border border-white/10 hover:bg-white/10 text-white/70 disabled:opacity-20 transition-colors"
                aria-label="Previous Step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="p-2.5 rounded-full border border-white/10 hover:bg-white/10 text-white/70 disabled:opacity-20 transition-colors"
                aria-label="Next Step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dual Column: What Agency Delivers vs What Client Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column: ASME Studio Deliverables */}
            <div className="p-6 rounded-2xl bg-sky-950/20 border border-sky-400/20">
              <div className="font-sans text-xs text-sky-300 uppercase tracking-wider font-semibold mb-2">
                WHAT ASME STUDIO DELIVERS
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                {current.agencyHandles}
              </p>
            </div>

            {/* Right Column: Client Inputs */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-sans text-xs text-white/50 uppercase tracking-wider font-semibold mb-2">
                WHAT CLIENT PROVIDES
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                {current.clientHandles}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
