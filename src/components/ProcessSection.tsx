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
      agencyHandles: 'Domain DNS configuration, SSL provisioning, CDN asset caching, and production telemetry launch.',
      clientHandles: 'Domain registrar access or DNS record delegation.',
    },
    {
      num: '08',
      title: 'Maintenance & Warranty',
      icon: ShieldCheck,
      duration: 'Ongoing / 30 Days Included',
      agencyHandles: '30-Day Zero-Cost Bug Warranty, 1-Month Free Maintenance care, security patching, and uptime monitoring.',
      clientHandles: 'Submitting any minor content updates or change requests.',
    },
  ];

  return (
    <section id="process" ref={ref} className="bg-black py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center sm:text-left mb-14"
        >
          <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-2">
            03 / HOW WE WORK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-sans font-normal">
            8-stage engineering <span className="font-serif italic text-sky-300">pipeline</span>.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl font-sans">
            Transparent breakdown of what we deliver at each milestone versus what we need from you.
          </p>
        </motion.div>

        {/* Desktop Interactive Stepper & Detail View */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="col-span-5 space-y-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isActive
                      ? 'border-sky-400 bg-sky-950/40 text-white shadow-lg'
                      : 'border-white/5 bg-white/5 text-white/70 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-sky-400">{step.num}</span>
                    <span className="text-sm font-semibold">{step.title}</span>
                  </div>
                  <Icon className="w-4 h-4 text-white/40" />
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Detail Card */}
          <div className="col-span-7 liquid-glass-elevated rounded-3xl p-8 border border-white/15 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-mono text-sm text-sky-400 font-bold">
                  {steps[activeStep].num}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  <span className="text-xs font-mono text-white/50">
                    Typical Duration: {steps[activeStep].duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* What Agency Handles */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold mb-1">
                  ✦ ASME Studio Engineering Delivers
                </div>
                <p className="text-sm text-white/80 leading-relaxed font-sans">
                  {steps[activeStep].agencyHandles}
                </p>
              </div>

              {/* What Client Handles */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-white/60 font-semibold mb-1">
                  ✦ Client Input &amp; Approval
                </div>
                <p className="text-sm text-white/80 leading-relaxed font-sans">
                  {steps[activeStep].clientHandles}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
                className="px-4 py-2 rounded-full border border-white/15 text-xs font-mono text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Stage</span>
              </button>

              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep(activeStep + 1)}
                className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1 shadow-lg hover:scale-105 transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Swipeable Stepper */}
        <div className="lg:hidden space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
            <span>Stage {activeStep + 1} of 8</span>
            <span>{steps[activeStep].duration}</span>
          </div>

          <div className="liquid-glass-elevated rounded-3xl p-6 border border-white/15 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-mono text-xs text-sky-400 font-bold">
                {steps[activeStep].num}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {steps[activeStep].title}
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-sky-300 block mb-1 font-semibold">ASME STUDIO DELIVERS:</span>
                <p className="text-white/80 font-sans leading-relaxed">{steps[activeStep].agencyHandles}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-white/60 block mb-1 font-semibold">CLIENT INPUT:</span>
                <p className="text-white/80 font-sans leading-relaxed">{steps[activeStep].clientHandles}</p>
              </div>
            </div>

            {/* Mobile Nav Controls */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
                className="px-3.5 py-2 rounded-full border border-white/15 text-xs font-mono text-white/70 disabled:opacity-30"
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeStep === i ? 'bg-sky-400' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep(activeStep + 1)}
                className="px-3.5 py-2 rounded-full bg-white text-black font-semibold text-xs disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
