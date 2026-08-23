import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

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

  return (
    <section
      id="selector"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            4
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Interactive Decision Tool
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12 max-w-5xl">
          Find the exact package for your build.
        </h2>

        <div className="px-5 sm:px-8 lg:px-12 max-w-3xl">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-8 text-xs font-semibold text-gray-500">
              <span className={step >= 1 ? 'text-[#F26522]' : ''}>1. Project Nature</span>
              <span>&rarr;</span>
              <span className={step >= 2 ? 'text-[#F26522]' : ''}>2. Scope &amp; Scale</span>
              <span>&rarr;</span>
              <span className={step === 3 ? 'text-[#F26522]' : ''}>3. Recommendation</span>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What type of system are you building?
                </h3>
                <p className="text-xs text-gray-500 mb-6">Select the primary outcome for your project.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className="p-4 rounded-xl border border-gray-200 text-left hover:border-[#F26522] hover:bg-orange-50/40 transition-all group"
                    >
                      <span className="block text-sm font-semibold text-gray-900 group-hover:text-[#F26522]">
                        {opt.label}
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What is your timeline &amp; scale?
                </h3>
                <p className="text-xs text-gray-500 mb-6">Help us calibrate the delivery velocity.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'urgent', scale: 'small', label: 'Immediate Launch (1-2 Weeks)', desc: 'Pre-launch MVP or quick turnaround' },
                    { id: 'standard', scale: 'medium', label: 'Standard Build (3-4 Weeks)', desc: 'Full custom design and integrations' },
                    { id: 'comprehensive', scale: 'large', label: 'Comprehensive System (4-8 Weeks)', desc: 'Deep custom logic, database, and APIs' },
                    { id: 'continuous', scale: 'saas', label: 'Continuous SaaS Roadmap (8+ Weeks)', desc: 'Multi-tenant architecture & SLA' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setScale(opt.scale);
                        setStep(3);
                      }}
                      className="p-4 rounded-xl border border-gray-200 text-left hover:border-[#F26522] hover:bg-orange-50/40 transition-all group"
                    >
                      <span className="block text-sm font-semibold text-gray-900 group-hover:text-[#F26522]">
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
                  className="mt-6 text-xs text-gray-500 hover:text-black"
                >
                  &larr; Back to Step 1
                </button>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F26522] mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Recommended Architectural Package</span>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900">
                    {rec.pkg}
                  </h4>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {rec.desc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-orange-200/80 flex flex-wrap gap-4 text-xs font-medium text-gray-800">
                    <span>Estimated Velocity: <strong>{rec.timeline}</strong></span>
                    <span>•</span>
                    <span>Includes: <strong>1-Month Free Maintenance SLA</strong></span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(rec.pkg)}
                    className="w-full sm:w-auto bg-[#F26522] hover:bg-[#e05a1a] text-white text-sm font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Proceed with {rec.pkg}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-4 py-3 rounded-full flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recalculate</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
